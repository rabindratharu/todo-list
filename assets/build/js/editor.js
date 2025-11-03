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
// editor.js - Option 1: Use relative path

 // Changed from @images

(function ($) {
  'use strict';

  const initTabs = ($scope, $jQuery) => {
    const widgetId = $scope.data('id');
    const widgetClass = `elementor-element-${widgetId}`;
    const $container = $jQuery(`.${widgetClass} .eae-tabs`);
    if (!$container.length) {
      return; // Exit if no matching elements are found
    }
    $container.each((idx, element) => {
      const $element = $jQuery(element);

      // Initialize tabs functionality
      try {
        const tabElements = $element.find('.eae-tab').get();
        function tabify(tab) {
          const $tab = $jQuery(tab);
          const $tabList = $tab.find('.eae-tab__list').first();
          if ($tabList.length) {
            const $tabItems = $tabList.children();
            const $tabContent = $tab.find('.eae-tab__content').first();
            const $tabContentItems = $tabContent.children();

            // Find active tab or default to first
            let activeTabIndex = $tabItems.filter('.is--active').index();
            if (activeTabIndex === -1) {
              activeTabIndex = 0;
            }
            function setTab(tabIndex) {
              // Validate index
              if (tabIndex < 0 || tabIndex >= $tabItems.length) {
                return;
              }
              $tabItems.removeClass('is--active');
              $tabContentItems.removeClass('is--active');
              $tabItems.eq(tabIndex).addClass('is--active');
              $tabContentItems.eq(tabIndex).addClass('is--active');
            }
            $tabItems.on('click', function () {
              setTab($jQuery(this).index());
            });
            setTab(activeTabIndex);

            // Handle nested tabs
            $tab.find('.eae-tab').each(function () {
              tabify(this);
            });
          }
        }
        tabElements.forEach(tabify);
      } catch (error) {}
    });
  };

  // Initialize on Elementor frontend
  $(window).on('elementor/frontend/init', () => {
    if (typeof elementorFrontend !== 'undefined') {
      elementorFrontend.hooks.addAction('frontend/element_ready/eae-tabs.default', initTabs);
    }
  });
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map