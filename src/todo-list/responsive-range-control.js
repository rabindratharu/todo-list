const { __ } = wp.i18n;
const { RangeControl, TabPanel } = wp.components;
const { useState, useEffect } = wp.element;
const { useSelect, useDispatch } = wp.data;

const ResponsiveRangeControl = (props) => {
    const {
        label,
        value,
        onChange,
        min = 0,
        max = 100,
        step = 1,
        showDeviceControls = true,
        resizeViewport = true
    } = props;

    // Get current device type from the editor
    const { deviceType } = useSelect((select) => {
        const { __experimentalGetPreviewDeviceType } = select('core/edit-post');
        return {
            deviceType: (__experimentalGetPreviewDeviceType() || 'Desktop').toLowerCase()
        };
    }, []);

    const isResponsive = typeof value === 'object' && value !== null;
    const [values, setValues] = useState(
        isResponsive ? value : {
            desktop: value,
            tablet: value,
            mobile: value
        }
    );

    useEffect(() => {
        if (isResponsive) {
            setValues(value);
        } else {
            setValues({
                desktop: value,
                tablet: value,
                mobile: value
            });
        }
    }, [value, isResponsive]);

    const handleChange = (newValue) => {
        const newValues = {
            ...values,
            [deviceType]: newValue
        };
        setValues(newValues);

        if (isResponsive) {
            onChange(newValues);
        } else {
            onChange(newValue);
        }
    };

    return (
        <div className="responsive-range-control">
            <div className="responsive-range-control__header">
                <label className="components-base-control__label">{label}</label>
                {showDeviceControls && (
                    <DevicePreviewTabs
                        currentDevice={deviceType}
                        resizeViewport={resizeViewport}
                    />
                )}
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

const DevicePreviewTabs = ({ currentDevice, resizeViewport = true }) => {
    const { __experimentalSetPreviewDeviceType } = useDispatch('core/edit-post');

    const handleDeviceChange = (device) => {
        if (resizeViewport && __experimentalSetPreviewDeviceType) {
            try {
                // Convert to capitalized device name (Desktop, Tablet, Mobile)
                const deviceName = device.charAt(0).toUpperCase() + device.slice(1);
                __experimentalSetPreviewDeviceType(deviceName);
            } catch (error) {
                console.warn('Error setting preview device type:', error);
            }
        }
    };

    return (
        <TabPanel
            className="responsive-range-control__tabs"
            activeClass="is-active"
            initialTabName={currentDevice}
            onSelect={handleDeviceChange}
            tabs={[
                {
                    name: 'desktop',
                    title: (
                        <button
                            type="button"
                            className="components-button editor-post-preview__dropdown-toggle"
                            aria-label={__('Desktop')}
                            title={__('Desktop')}
                        >
                            <span className="dashicons dashicons-desktop" />
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
                            title={__('Tablet')}
                        >
                            <span className="dashicons dashicons-tablet" />
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
                            title={__('Mobile')}
                        >
                            <span className="dashicons dashicons-smartphone" />
                        </button>
                    ),
                },
            ]}
        >
            {() => null}
        </TabPanel>
    );
};

// Add CSS styles
const styles = `
    .responsive-range-control {
        margin-bottom: 1.5em;
    }
    
    .responsive-range-control__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }
    
    .responsive-range-control__tabs .components-tab-panel__tabs {
        display: flex;
        gap: 4px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 2px;
    }
    
    .responsive-range-control__tabs .components-button {
        height: 30px;
        width: 30px;
        padding: 0;
        min-width: auto;
        border: none;
        box-shadow: none;
        border-radius: 2px;
    }
    
    .responsive-range-control__tabs .components-button.is-active {
        background: #ddd;
    }
    
    .responsive-range-control__tabs .dashicons {
        font-size: 16px;
        width: 16px;
        height: 16px;
    }
`;

// Inject styles
if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
}

export default ResponsiveRangeControl;