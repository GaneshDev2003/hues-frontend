/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./service-worker/index.ts":
/*!*********************************!*\
  !*** ./service-worker/index.ts ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nself.addEventListener(\"install\", function(event) {\n    console.log(\"[Service Worker] Installing Service Worker ...\", event);\n    if (Notification.permission == \"granted\") {}\n});\nself.addEventListener(\"activate\", function(event) {\n    console.log(\"[Service Worker] Activating Service Worker ...\", event);\n});\nself.addEventListener(\"fetch\", function(event) {\n    console.log(\"[Service Worker] Fetching something ...\", event);\n});\nconsole.log(\"Custom Service Worker\");\nconst reminderNotification = ()=>{\n    registration.showNotification(\"Reminder\", {\n        body: \"Hey there! How are you feeling today? Time to be expressive about it !\",\n        icon: \"icons/icons.png\"\n    });\n    setTimeout(reminderNotification, 10000);\n};\n// declare var registration: any;\n// console.log('Custom Service Worker');\n// const reminderNotification = () => {\n//   if (Notification.permission == 'granted') {\n//     console.log(navigator);\n//     var options = {\n//       body: 'Welcome!',\n//       icon: 'Hey there! How are you feeling today? Time to be creative about it!',\n//       vibrate: [100, 50, 100],\n//       data: {\n//         dateOfArrival: Date.now(),\n//         primaryKey: 1,\n//       },\n//     };\n//     registration.showNotification('Reminder', options);\n//   }\n// };\nnavigator.permissions.query({\n    name: \"notifications\"\n}).then((status)=>{\n    if (status.state === \"prompt\") {\n        status.onchange = ()=>{\n            if (status.state === \"granted\") {\n                reminderNotification();\n            }\n        };\n        // @ts-ignore\n        document.querySelector(\"#notification\").addEventListener(\"click\", ()=>Notification.requestPermission());\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                /* unsupported import.meta.webpackHot */ undefined.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlLXdvcmtlci9pbmRleC50cyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxLQUFLQyxnQkFBZ0IsQ0FBQyxXQUFXLFNBQVVDLEtBQUs7SUFDOUNDLFFBQVFDLEdBQUcsQ0FBQyxrREFBa0RGO0lBQzlELElBQUlHLGFBQWFDLFVBQVUsSUFBSSxXQUFXLENBQzFDO0FBQ0Y7QUFFQU4sS0FBS0MsZ0JBQWdCLENBQUMsWUFBWSxTQUFVQyxLQUFLO0lBQy9DQyxRQUFRQyxHQUFHLENBQUMsa0RBQWtERjtBQUNoRTtBQUVBRixLQUFLQyxnQkFBZ0IsQ0FBQyxTQUFTLFNBQVVDLEtBQUs7SUFDNUNDLFFBQVFDLEdBQUcsQ0FBQywyQ0FBMkNGO0FBQ3pEO0FBR0FDLFFBQVFDLEdBQUcsQ0FBQztBQUNaLE1BQU1HLHVCQUF1QjtJQUMzQkMsYUFBYUMsZ0JBQWdCLENBQUMsWUFBWTtRQUN4Q0MsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQUMsV0FBV0wsc0JBQXNCO0FBQ25DO0FBRUEsaUNBQWlDO0FBQ2pDLHdDQUF3QztBQUN4Qyx1Q0FBdUM7QUFDdkMsZ0RBQWdEO0FBQ2hELDhCQUE4QjtBQUM5QixzQkFBc0I7QUFDdEIsMEJBQTBCO0FBQzFCLHFGQUFxRjtBQUNyRixpQ0FBaUM7QUFDakMsZ0JBQWdCO0FBQ2hCLHFDQUFxQztBQUNyQyx5QkFBeUI7QUFDekIsV0FBVztBQUNYLFNBQVM7QUFDVCwwREFBMEQ7QUFDMUQsTUFBTTtBQUNOLEtBQUs7QUFFTE0sVUFBVUMsV0FBVyxDQUFDQyxLQUFLLENBQUM7SUFBRUMsTUFBTTtBQUFnQixHQUFHQyxJQUFJLENBQUMsQ0FBQ0M7SUFDM0QsSUFBSUEsT0FBT0MsS0FBSyxLQUFLLFVBQVU7UUFDN0JELE9BQU9FLFFBQVEsR0FBRztZQUNoQixJQUFJRixPQUFPQyxLQUFLLEtBQUssV0FBVztnQkFDOUJaO1lBQ0Y7UUFDRjtRQUNBLGFBQWE7UUFDYmMsU0FDR0MsYUFBYSxDQUFDLGlCQUNkckIsZ0JBQWdCLENBQUMsU0FBUyxJQUFNSSxhQUFha0IsaUJBQWlCO0lBQ25FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZS13b3JrZXIvaW5kZXgudHM/YTM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBjb25zb2xlLmxvZygnW1NlcnZpY2UgV29ya2VyXSBJbnN0YWxsaW5nIFNlcnZpY2UgV29ya2VyIC4uLicsIGV2ZW50KTtcclxuICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT0gJ2dyYW50ZWQnKSB7XHJcbiAgfVxyXG59KTtcclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBjb25zb2xlLmxvZygnW1NlcnZpY2UgV29ya2VyXSBBY3RpdmF0aW5nIFNlcnZpY2UgV29ya2VyIC4uLicsIGV2ZW50KTtcclxufSk7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgY29uc29sZS5sb2coJ1tTZXJ2aWNlIFdvcmtlcl0gRmV0Y2hpbmcgc29tZXRoaW5nIC4uLicsIGV2ZW50KTtcclxufSk7XHJcblxyXG5kZWNsYXJlIHZhciByZWdpc3RyYXRpb246IGFueTtcclxuY29uc29sZS5sb2coJ0N1c3RvbSBTZXJ2aWNlIFdvcmtlcicpO1xyXG5jb25zdCByZW1pbmRlck5vdGlmaWNhdGlvbiA9ICgpID0+IHtcclxuICByZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbignUmVtaW5kZXInLCB7XHJcbiAgICBib2R5OiAnSGV5IHRoZXJlISBIb3cgYXJlIHlvdSBmZWVsaW5nIHRvZGF5PyBUaW1lIHRvIGJlIGV4cHJlc3NpdmUgYWJvdXQgaXQgIScsXHJcbiAgICBpY29uOiAnaWNvbnMvaWNvbnMucG5nJyxcclxuICB9KTtcclxuICBzZXRUaW1lb3V0KHJlbWluZGVyTm90aWZpY2F0aW9uLCAxMDAwMCk7XHJcbn07XHJcblxyXG4vLyBkZWNsYXJlIHZhciByZWdpc3RyYXRpb246IGFueTtcclxuLy8gY29uc29sZS5sb2coJ0N1c3RvbSBTZXJ2aWNlIFdvcmtlcicpO1xyXG4vLyBjb25zdCByZW1pbmRlck5vdGlmaWNhdGlvbiA9ICgpID0+IHtcclxuLy8gICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT0gJ2dyYW50ZWQnKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhuYXZpZ2F0b3IpO1xyXG4vLyAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbi8vICAgICAgIGJvZHk6ICdXZWxjb21lIScsXHJcbi8vICAgICAgIGljb246ICdIZXkgdGhlcmUhIEhvdyBhcmUgeW91IGZlZWxpbmcgdG9kYXk/IFRpbWUgdG8gYmUgY3JlYXRpdmUgYWJvdXQgaXQhJyxcclxuLy8gICAgICAgdmlicmF0ZTogWzEwMCwgNTAsIDEwMF0sXHJcbi8vICAgICAgIGRhdGE6IHtcclxuLy8gICAgICAgICBkYXRlT2ZBcnJpdmFsOiBEYXRlLm5vdygpLFxyXG4vLyAgICAgICAgIHByaW1hcnlLZXk6IDEsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9O1xyXG4vLyAgICAgcmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24oJ1JlbWluZGVyJywgb3B0aW9ucyk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxubmF2aWdhdG9yLnBlcm1pc3Npb25zLnF1ZXJ5KHsgbmFtZTogJ25vdGlmaWNhdGlvbnMnIH0pLnRoZW4oKHN0YXR1cykgPT4ge1xyXG4gIGlmIChzdGF0dXMuc3RhdGUgPT09ICdwcm9tcHQnKSB7XHJcbiAgICBzdGF0dXMub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChzdGF0dXMuc3RhdGUgPT09ICdncmFudGVkJykge1xyXG4gICAgICAgIHJlbWluZGVyTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignI25vdGlmaWNhdGlvbicpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpKTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsic2VsZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJOb3RpZmljYXRpb24iLCJwZXJtaXNzaW9uIiwicmVtaW5kZXJOb3RpZmljYXRpb24iLCJyZWdpc3RyYXRpb24iLCJzaG93Tm90aWZpY2F0aW9uIiwiYm9keSIsImljb24iLCJzZXRUaW1lb3V0IiwibmF2aWdhdG9yIiwicGVybWlzc2lvbnMiLCJxdWVyeSIsIm5hbWUiLCJ0aGVuIiwic3RhdHVzIiwic3RhdGUiLCJvbmNoYW5nZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlcXVlc3RQZXJtaXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./service-worker/index.ts\n"));

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
/******/ 	var __webpack_exports__ = __webpack_require__("./service-worker/index.ts");
/******/ 	
/******/ })()
;