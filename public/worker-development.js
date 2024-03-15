/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./service-worker/index.js":
/*!*********************************!*\
  !*** ./service-worker/index.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("const button = document.getElementById(\"notifications\");\nbutton.addEventListener(\"click\", ()=>{\n    Notification.requestPermission().then((result)=>{\n        if (result === \"granted\") {\n            sendDailyNotification();\n        }\n    });\n});\nfunction sendDailyNotification() {\n    const currentDate = new Date();\n    // 12:00 PM\n    const notificationTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 12, 0, 0);\n    let timeUntilNotification = notificationTime - currentDate;\n    if (timeUntilNotification < 0) {\n        timeUntilNotification += 24 * 60 * 60 * 1000;\n    }\n    setInterval(()=>{\n        const notifTitle = \"Hello!\";\n        const notifBody = \"Have a great day!\";\n        const options = {\n            body: notifBody\n        };\n        new Notification(notifTitle, options);\n    }, timeUntilNotification);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                /* unsupported import.meta.webpackHot */ undefined.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlLXdvcmtlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxTQUFTQyxTQUFTQyxjQUFjLENBQUM7QUFDdkNGLE9BQU9HLGdCQUFnQixDQUFDLFNBQVM7SUFDL0JDLGFBQWFDLGlCQUFpQixHQUFHQyxJQUFJLENBQUMsQ0FBQ0M7UUFDckMsSUFBSUEsV0FBVyxXQUFXO1lBQ3hCQztRQUNGO0lBQ0Y7QUFDRjtBQUVBLFNBQVNBO0lBQ1AsTUFBTUMsY0FBYyxJQUFJQztJQUN4QixXQUFXO0lBQ1gsTUFBTUMsbUJBQW1CLElBQUlELEtBQzNCRCxZQUFZRyxXQUFXLElBQ3ZCSCxZQUFZSSxRQUFRLElBQ3BCSixZQUFZSyxPQUFPLElBQ25CLElBQ0EsR0FDQTtJQUVGLElBQUlDLHdCQUF3QkosbUJBQW1CRjtJQUMvQyxJQUFJTSx3QkFBd0IsR0FBRztRQUU3QkEseUJBQXlCLEtBQUssS0FBSyxLQUFLO0lBQzFDO0lBRUFDLFlBQVk7UUFDVixNQUFNQyxhQUFhO1FBQ25CLE1BQU1DLFlBQVk7UUFDbEIsTUFBTUMsVUFBVTtZQUNkQyxNQUFNRjtRQUNSO1FBRUEsSUFBSWQsYUFBYWEsWUFBWUU7SUFDL0IsR0FBR0o7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlLXdvcmtlci9pbmRleC5qcz8xMzAzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90aWZpY2F0aW9uc1wiKTtcclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0ID09PSBcImdyYW50ZWRcIikge1xyXG4gICAgICBzZW5kRGFpbHlOb3RpZmljYXRpb24oKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBzZW5kRGFpbHlOb3RpZmljYXRpb24oKSB7XHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIC8vIDEyOjAwIFBNXHJcbiAgY29uc3Qgbm90aWZpY2F0aW9uVGltZSA9IG5ldyBEYXRlKFxyXG4gICAgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgIGN1cnJlbnREYXRlLmdldE1vbnRoKCksXHJcbiAgICBjdXJyZW50RGF0ZS5nZXREYXRlKCksXHJcbiAgICAxMixcclxuICAgIDAsXHJcbiAgICAwXHJcbiAgKTtcclxuICBsZXQgdGltZVVudGlsTm90aWZpY2F0aW9uID0gbm90aWZpY2F0aW9uVGltZSAtIGN1cnJlbnREYXRlO1xyXG4gIGlmICh0aW1lVW50aWxOb3RpZmljYXRpb24gPCAwKSB7XHJcbiAgICBcclxuICAgIHRpbWVVbnRpbE5vdGlmaWNhdGlvbiArPSAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG4gIH1cclxuXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgY29uc3Qgbm90aWZUaXRsZSA9IFwiSGVsbG8hXCI7XHJcbiAgICBjb25zdCBub3RpZkJvZHkgPSBcIkhhdmUgYSBncmVhdCBkYXkhXCI7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBib2R5OiBub3RpZkJvZHksXHJcbiAgICB9O1xyXG5cclxuICAgIG5ldyBOb3RpZmljYXRpb24obm90aWZUaXRsZSwgb3B0aW9ucyk7XHJcbiAgfSwgdGltZVVudGlsTm90aWZpY2F0aW9uKTtcclxufVxyXG4iXSwibmFtZXMiOlsiYnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsInRoZW4iLCJyZXN1bHQiLCJzZW5kRGFpbHlOb3RpZmljYXRpb24iLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJub3RpZmljYXRpb25UaW1lIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJ0aW1lVW50aWxOb3RpZmljYXRpb24iLCJzZXRJbnRlcnZhbCIsIm5vdGlmVGl0bGUiLCJub3RpZkJvZHkiLCJvcHRpb25zIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./service-worker/index.js\n"));

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: function(script) { return script; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	!function() {
/******/ 		__webpack_require__.ts = function(script) { return __webpack_require__.tt().createScript(script); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./service-worker/index.js");
/******/ 	
/******/ })()
;