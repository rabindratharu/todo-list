/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, TabPanel } from '@wordpress/components';

import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const {
		fontSizeDesktop,
		fontSizeTablet,
		fontSizeMobile
	} = attributes;

	// Get current device type from the editor
	const { deviceType } = useSelect((select) => {
		const { __experimentalGetPreviewDeviceType } = select('core/edit-post');
		return {
			deviceType: __experimentalGetPreviewDeviceType() || 'Desktop', // Default to Desktop if undefined
		};
	}, []);

	// Dispatch action to change device preview
	const { __experimentalSetPreviewDeviceType } = useDispatch('core/edit-post');

	// Map device types to font size attributes
	const fontSizeByDevice = {
		Desktop: fontSizeDesktop,
		Tablet: fontSizeTablet,
		Mobile: fontSizeMobile,
	};

	// Update the correct attribute based on device type
	const updateFontSize = (value, device) => {
		const attributeMap = {
			Desktop: 'fontSizeDesktop',
			Tablet: 'fontSizeTablet',
			Mobile: 'fontSizeMobile',
		};
		setAttributes({ [attributeMap[device]]: value });
	};

	// Get the current active tab based on deviceType
	const getActiveTab = () => {
		return deviceType === 'Tablet' ? 'Tablet' :
			deviceType === 'Mobile' ? 'Mobile' : 'Desktop';
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Font Size Settings', 'my-gutenberg')}>
					<TabPanel
						className="device-tabs"
						activeClass="active-tab"
						initialTabName={getActiveTab()}
						tabs={[
							{
								name: 'Desktop',
								title: __('Desktop', 'my-gutenberg'),
								className: 'desktop-tab',
							},
							{
								name: 'Tablet',
								title: __('Tablet', 'my-gutenberg'),
								className: 'tablet-tab',
							},
							{
								name: 'Mobile',
								title: __('Mobile', 'my-gutenberg'),
								className: 'mobile-tab',
							},
						]}
						onSelect={(tabName) => {
							__experimentalSetPreviewDeviceType(tabName);
						}}
					>
						{(tab) => (
							<RangeControl
								label={__(`${tab.title} Font Size`, 'my-gutenberg')}
								value={fontSizeByDevice[tab.name]}
								onChange={(value) => updateFontSize(value, tab.name)}
								min={10}
								max={100}
								step={1}
							/>
						)}
					</TabPanel>
				</PanelBody>
			</InspectorControls>
			<p {...useBlockProps({
				style: {
					fontSize: fontSizeByDevice[deviceType] ? `${fontSizeByDevice[deviceType]}px` : undefined,
				}
			})}>
				{__('Todo List – hello from the editor!', 'todo-list')}
			</p>
		</>
	);
}