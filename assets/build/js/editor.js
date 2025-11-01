/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/images/banner-icon-128x128.png":
/*!***************************************************!*\
  !*** ./assets/src/images/banner-icon-128x128.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/banner-icon-128x128.png";

/***/ }),

/***/ "./assets/src/images/screenshot-1.png":
/*!********************************************!*\
  !*** ./assets/src/images/screenshot-1.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/screenshot-1.png";

/***/ }),

/***/ "./assets/src/sass/editor.scss":
/*!*************************************!*\
  !*** ./assets/src/sass/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./assets/src/js/editor.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_screenshot_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/screenshot-1.png */ "./assets/src/images/screenshot-1.png");
/* harmony import */ var _images_banner_icon_128x128_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/banner-icon-128x128.png */ "./assets/src/images/banner-icon-128x128.png");
/* harmony import */ var _sass_editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/editor.scss */ "./assets/src/sass/editor.scss");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
// editor.js - Option 1: Use relative path

 // Changed from @images





const PostsMaintenance = () => {
  const [postTypes, setPostTypes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [selectedPostTypes, setSelectedPostTypes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(['post', 'page']);
  const [isScanning, setIsScanning] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [progress, setProgress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [snackbar, setSnackbar] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    // Filter out media (attachment) post type from the options
    const filteredPostTypes = wpmudevPostsMaintenance.postTypes.filter(postType => 'attachment' !== postType.value);
    setPostTypes(filteredPostTypes);
    checkExistingScan();
  }, []);

  /**
   * Shows a snackbar with the given message and optional error status.
   * @param {string}  message         The message to be displayed in the snackbar.
   *
   * @param {boolean} [isError=false] Whether the snackbar should be displayed with an error theme.
   */
  const showSnackbar = (message, isError = false) => {
    setSnackbar({
      message,
      isError
    });

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      setSnackbar(null);
    }, 3000);
  };

  /**
   * Checks if a previous scan is still in progress.
   * If a scan is in progress, it sets the component's state to reflect that.
   * If the scan is not in progress, it does nothing.
   * @return {Promise<void>} A promise that resolves when the check is complete.
   */
  const checkExistingScan = async () => {
    try {
      const formData = new FormData();
      formData.append('action', 'wpmudev_check_scan_status');
      formData.append('nonce', wpmudevPostsMaintenance.ajax_nonce);
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        url: wpmudevPostsMaintenance.ajaxurl,
        method: 'POST',
        body: formData
      });
      if (response.success && 'processing' === response.data.status) {
        setIsScanning(true);
        setProgress(response.data);
        showSnackbar((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Resuming previous scan...', 'wpmudev-plugin-test'), false);
        monitorScanProgress();
      }
    } catch (error) {
      console.error('Error checking scan status:', error);
    }
  };

  /**
   * Starts a new scan.
   *
   * This function sets the component's state to reflect that a scan is in progress,
   * and shows a snackbar to the user indicating that the scan has started.
   *
   * If the scan starts successfully, it sets the component's state to reflect the
   * total number of posts to be processed and shows another snackbar to the user
   * indicating that the scan is in progress.
   *
   * If the scan fails to start, it sets the component's state back to normal and shows
   * an error snackbar to the user.
   * @return {Promise<void>} A promise that resolves when the scan has started or failed.
   */
  const startScan = async () => {
    setIsScanning(true);
    setProgress({
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Starting scan...', 'wpmudev-plugin-test'),
      percentage: 0
    });
    showSnackbar((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Starting scan...', 'wpmudev-plugin-test'), false);
    try {
      const formData = new FormData();
      formData.append('action', 'wpmudev_start_maintenance_scan');
      formData.append('nonce', wpmudevPostsMaintenance.ajax_nonce);

      // Append each post type individually
      selectedPostTypes.forEach(postType => {
        formData.append('post_types[]', postType);
      });
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        url: wpmudevPostsMaintenance.ajaxurl,
        method: 'POST',
        body: formData
      });
      if (response.success) {
        setProgress({
          message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Scan in progress...', 'wpmudev-plugin-test'),
          total: response.data.total,
          processed: 0,
          percentage: 0
        });
        showSnackbar((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Scan in progress...', 'wpmudev-plugin-test'), false);
        monitorScanProgress();
      } else {
        throw new Error(response.data || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Scan failed to start', 'wpmudev-plugin-test'));
      }
    } catch (error) {
      setIsScanning(false);
      setProgress(null);
      showSnackbar((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Error starting scan: ', 'wpmudev-plugin-test') + error.message, true);
    }
  };

  /**
   * Monitor the progress of a scan.
   *
   * Periodically checks the status of the scan and updates the component's state
   * accordingly.
   * @return {Promise<void>} A promise that resolves when the scan is complete.
   */
  const monitorScanProgress = async () => {
    const checkProgress = async () => {
      try {
        const formData = new FormData();
        formData.append('action', 'wpmudev_check_scan_status');
        formData.append('nonce', wpmudevPostsMaintenance.ajax_nonce);
        const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
          url: wpmudevPostsMaintenance.ajaxurl,
          method: 'POST',
          body: formData
        });
        if (response.success) {
          setProgress(response.data);
          if (response.data.status === 'completed') {
            setIsScanning(false);
            showSnackbar((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Scan completed successfully!', 'wpmudev-plugin-test'), false);
          } else if (response.data.status === 'processing') {
            setTimeout(checkProgress, 2000);
          } else {
            setIsScanning(false);
          }
        }
      } catch (error) {
        console.error('Error checking progress:', error);
        setIsScanning(false);
        setProgress(null);
        showSnackbar((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Error checking scan progress:', 'wpmudev-plugin-test') + error.message, true);
      }
    };
    checkProgress();
  };

  /**
   * Handles the change event of the post types select element.
   *
   * Updates the state with the new selected post types.
   * @param {Event} e The change event.
   */
  const handlePostTypeChange = e => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedPostTypes(selectedOptions);
  };

  /**
   * Stops the current scan if it is in progress.
   *
   * If the scan is in progress, it sets the component's state to reflect that.
   * If the scan is not in progress, it does nothing.
   * @return {Promise<void>} A promise that resolves when the scan has stopped or failed.
   */
  const stopScan = async () => {
    try {
      setIsScanning(false);
      setProgress(null);
      showSnackbar((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Scan stopped by user', 'wpmudev-plugin-test'), false);
    } catch (error) {
      console.error('Error stopping scan:', error);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "sui-box",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "sui-box-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          className: "sui-box-title",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Posts Maintenance', 'wpmudev-plugin-test')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "sui-box-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "sui-box-settings-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "sui-label",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select Post Types:', 'wpmudev-plugin-test')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("select", {
            multiple: true,
            value: selectedPostTypes,
            onChange: handlePostTypeChange,
            disabled: isScanning,
            className: "sui-select",
            style: {
              height: '120px'
            },
            children: postTypes.map(postType => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
              value: postType.value,
              children: postType.label
            }, postType.value))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "sui-description",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Hold Ctrl/Cmd to select multiple post types', 'wpmudev-plugin-test')
          })]
        }), progress && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "sui-notice sui-notice-info",
          style: {
            marginTop: '20px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "sui-notice-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "sui-notice-message",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "sui-notice-icon sui-icon-info sui-md",
                "aria-hidden": "true"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                children: progress.message
              }), 0 < progress.total && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "sui-progress-block",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "sui-progress",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                    className: "sui-progress-text",
                    children: [progress.percentage, "%"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "sui-progress-bar",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      className: "sui-progress-bar-value",
                      style: {
                        width: `${progress.percentage}%`
                      }
                    })
                  })]
                }), progress.total && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                  children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Processed:', 'wpmudev-plugin-test'), progress.processed, " /", ' ', progress.total]
                })]
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "sui-box-footer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "sui-actions-right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "sui-form-field",
            style: {
              marginTop: '20px'
            },
            children: !isScanning ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              className: "sui-button sui-button-primary",
              onClick: startScan,
              disabled: 0 === selectedPostTypes.length,
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Scan Posts', 'wpmudev-plugin-test')
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              className: "sui-button sui-button-ghost",
              onClick: stopScan,
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Stop Scan', 'wpmudev-plugin-test')
            })
          })
        })
      })]
    }), snackbar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: `sui-notice sui-notice-top ${snackbar.isError ? 'sui-notice-error' : 'sui-notice-success'}`,
      style: {
        position: 'fixed',
        top: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        minWidth: '300px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "sui-notice-content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "sui-notice-message",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: `sui-notice-icon sui-icon-${snackbar.isError ? 'warning-alert' : 'check-tick'} sui-md`,
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: snackbar.message
          })]
        })
      })
    })]
  });
};
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById(wpmudevPostsMaintenance.dom_element_id);
  if (rootElement) {
    const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createRoot)(rootElement);
    root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.StrictMode, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PostsMaintenance, {})
    }));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map