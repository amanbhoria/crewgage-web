"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Signup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_ComingSoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ComingSoon */ \"(app-pages-browser)/./src/app/components/ComingSoon.tsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Navbar */ \"(app-pages-browser)/./src/app/components/Navbar.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Footer */ \"(app-pages-browser)/./src/app/components/Footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Signup() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/api/subscribe\", {\n                email\n            });\n            if (response.status === 200) {\n                // Email sent successfully, redirect to success page\n                router.push(\"/success\");\n                setEmail(\"\");\n            } else {\n                console.error(\"Error sending email:\", response.data);\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return(// <div className=\"container mx-auto px-4 py-16\">\n    //   <h1 className=\"text-3xl font-bold text-center mb-8\">Subscribe to My Newsletter</h1>\n    //   <form onSubmit={handleSubmit} className=\"flex flex-col space-y-4 max-w-md mx-auto\">\n    //     <input\n    //       type=\"email\"\n    //       placeholder=\"Enter your email address\"\n    //       value={email}\n    //       onChange={(e) => setEmail(e.target.value)}\n    //       className=\"rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500\"\n    //       required\n    //     />\n    //     <button\n    //       type=\"submit\"\n    //       className=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-sm\"\n    //     >\n    //       Subscribe\n    //     </button>\n    //   </form>\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen p-8 gradient-background\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/amanxo/Downloads/projects/CrewgageWeb/src/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ComingSoon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/amanxo/Downloads/projects/CrewgageWeb/src/app/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/amanxo/Downloads/projects/CrewgageWeb/src/app/page.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amanxo/Downloads/projects/CrewgageWeb/src/app/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this));\n}\n_s(Signup, \"U2CpRW5nOZtNZ0P312YM4XLFMYU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Signup;\nvar _c;\n$RefreshReg$(_c, \"Signup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDZ0M7QUFDUDtBQUNrQjtBQUNLO0FBQ1I7QUFFQTtBQUV6QixTQUFTTTs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1TLFNBQVNQLDBEQUFTQTtJQUV4QixNQUFNUSxlQUFlLE9BQU9DO1FBQ3hCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1aLDZDQUFLQSxDQUFDYSxJQUFJLENBQUMsa0JBQWtCO2dCQUFFUDtZQUFNO1lBQzVELElBQUlNLFNBQVNFLE1BQU0sS0FBSyxLQUFLO2dCQUN6QixvREFBb0Q7Z0JBQ3BETixPQUFPTyxJQUFJLENBQUM7Z0JBQ1pSLFNBQVM7WUFDYixPQUFPO2dCQUNIUyxRQUFRQyxLQUFLLENBQUMsd0JBQXdCTCxTQUFTTSxJQUFJO1lBQ3ZEO1FBQ0osRUFBRSxPQUFPRCxPQUFPO1lBQ1pELFFBQVFDLEtBQUssQ0FBQyxVQUFVQTtRQUM1QjtJQUNKO0lBRUEsT0FDSSxpREFBaUQ7SUFDakQsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4RixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLCtDQUErQztJQUMvQyxzQkFBc0I7SUFDdEIsbURBQW1EO0lBQ25ELG9IQUFvSDtJQUNwSCxpQkFBaUI7SUFDakIsU0FBUztJQUNULGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsc0dBQXNHO0lBQ3RHLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixTQUFTO2tCQUNULDhEQUFDRTtRQUFLQyxXQUFVOzswQkFDWiw4REFBQ2pCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNELDhEQUFVQTs7Ozs7MEJBQ1gsOERBQUNFLDBEQUFNQTs7Ozs7Ozs7Ozs7QUFHbkI7R0EvQ3dCQzs7UUFFTEosc0RBQVNBOzs7S0FGSkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBDb21pbmdTb29uIGZyb20gJy4vY29tcG9uZW50cy9Db21pbmdTb29uJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IHsgV3JlbmNoU2NyZXdkcml2ZXJJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3RlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbnVwKCkge1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9zdWJzY3JpYmUnLCB7IGVtYWlsIH0pXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAvLyBFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseSwgcmVkaXJlY3QgdG8gc3VjY2VzcyBwYWdlXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9zdWNjZXNzJylcbiAgICAgICAgICAgICAgICBzZXRFbWFpbCgnJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBlbWFpbDonLCByZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktMTZcIj5cbiAgICAgICAgLy8gICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLThcIj5TdWJzY3JpYmUgdG8gTXkgTmV3c2xldHRlcjwvaDE+XG4gICAgICAgIC8vICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQgbWF4LXctbWQgbXgtYXV0b1wiPlxuICAgICAgICAvLyAgICAgPGlucHV0XG4gICAgICAgIC8vICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIC8vICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgLy8gICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAvLyAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLy8gICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBweC00IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxuICAgICAgICAvLyAgICAgICByZXF1aXJlZFxuICAgICAgICAvLyAgICAgLz5cbiAgICAgICAgLy8gICAgIDxidXR0b25cbiAgICAgICAgLy8gICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIC8vICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLW1kIHNoYWRvdy1zbVwiXG4gICAgICAgIC8vICAgICA+XG4gICAgICAgIC8vICAgICAgIFN1YnNjcmliZVxuICAgICAgICAvLyAgICAgPC9idXR0b24+XG4gICAgICAgIC8vICAgPC9mb3JtPlxuICAgICAgICAvLyA8L2Rpdj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHAtOCBncmFkaWVudC1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8Q29taW5nU29vbiAvPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L21haW4+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJDb21pbmdTb29uIiwiTmF2YmFyIiwiRm9vdGVyIiwiU2lnbnVwIiwiZW1haWwiLCJzZXRFbWFpbCIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInBvc3QiLCJzdGF0dXMiLCJwdXNoIiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});