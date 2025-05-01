const { __ } = wp.i18n;
const { RangeControl, TabPanel } = wp.components;
const { useState, useEffect } = wp.element;


import './editor.scss';

const ResponsiveRangeControl = (props) => {
    const { label, value, onChange, min = 0, max = 100, step = 1 } = props;

    // State for device type and values
    const [deviceType, setDeviceType] = useState('desktop');
    const [values, setValues] = useState({
        desktop: value,
        tablet: value,
        mobile: value
    });

    // Update internal state when external value changes
    useEffect(() => {
        setValues(prev => ({
            ...prev,
            [deviceType]: value
        }));
    }, [value]);

    // Handle value change
    const handleChange = (newValue) => {
        const newValues = {
            ...values,
            [deviceType]: newValue
        };
        setValues(newValues);
        onChange(newValues[deviceType]);
    };

    // Device type change handler
    const onDeviceTypeChange = (newDevice) => {
        setDeviceType(newDevice);
        onChange(values[newDevice]);
    };

    return (
        <div className="responsive-range-control">
            <div className="responsive-range-control__header">
                <label className="components-base-control__label">{label}</label>
                <DevicePreviewTabs
                    deviceType={deviceType}
                    onDeviceTypeChange={onDeviceTypeChange}
                />
            </div>
            <RangeControl
                value={values[deviceType]}
                onChange={handleChange}
                min={min}
                max={max}
                step={step}
                withInputField={true}
            />
        </div>
    );
};

// Device preview tabs component
const DevicePreviewTabs = ({ deviceType, onDeviceTypeChange }) => {
    return (
        <TabPanel
            className="responsive-range-control__tabs"
            activeClass="is-active"
            initialTabName={deviceType}
            onSelect={onDeviceTypeChange}
            tabs={[
                {
                    name: 'desktop',
                    title: (
                        <button
                            type="button"
                            className="components-button editor-post-preview__dropdown-toggle"
                            aria-label={__('Desktop')}
                        >
                            <span className="dashicons dashicons-desktop"></span>
                        </button>
                    ),
                },
                {
                    name: 'tablet',
                    title: (
                        <button
                            type="button"
                            className="components-button editor-post-preview__dropdown-toggle"
                            aria-label={__('Tablet')}
                        >
                            <span className="dashicons dashicons-tablet"></span>
                        </button>
                    ),
                },
                {
                    name: 'mobile',
                    title: (
                        <button
                            type="button"
                            className="components-button editor-post-preview__dropdown-toggle"
                            aria-label={__('Mobile')}
                        >
                            <span className="dashicons dashicons-smartphone"></span>
                        </button>
                    ),
                },
            ]}
        >
            {() => null}
        </TabPanel>
    );
};