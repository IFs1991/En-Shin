"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"7adf141d64ef\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzPzk5MmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI3YWRmMTQxZDY0ZWZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/language-switcher.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/language-switcher.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"(app-pages-browser)/./node_modules/react-i18next/dist/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst LanguageSwitcher = ()=>{\n    _s();\n    // Next.jsのルーティング関連のフック\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    // i18nの初期化と現在の言語の取得\n    const { i18n } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();\n    // 現在の言語状態を管理（デフォルトは日本語）\n    const [currentLanguage, setCurrentLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        // 初期値として有効な言語のみを設定\n        const initialLang = i18n.language;\n        return initialLang === \"en\" ? \"en\" : \"ja\";\n    });\n    // 言語変更を監視するエフェクト\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // 言語変更ハンドラーを定義（型安全性を確保）\n        const handleLanguageChange = (lng)=>{\n            // 受け取った言語が有効な値かチェック\n            if (lng === \"ja\" || lng === \"en\") {\n                setCurrentLanguage(lng);\n                // HTML要素の言語属性も更新\n                document.documentElement.lang = lng;\n            }\n        };\n        // 直接i18nオブジェクトのイベントリスナーを使用\n        i18n.on(\"languageChanged\", handleLanguageChange);\n        // クリーンアップ関数でイベントリスナーを解除\n        return ()=>{\n            i18n.off(\"languageChanged\", handleLanguageChange);\n        };\n    }, [\n        i18n\n    ]);\n    // 言語切り替え関数（エラーハンドリングを追加）\n    const switchLanguage = async (language)=>{\n        try {\n            // 現在の言語と異なる場合のみ処理を実行\n            if (currentLanguage !== language) {\n                // パスの変更ロジック（正規表現を使用して安全に置換）\n                const newPath = language === \"en\" ? pathname.replace(/^\\/ja(?=\\/|$)/, \"/en\") : pathname.replace(/^\\/en(?=\\/|$)/, \"/ja\");\n                // i18nの言語を変更（非同期処理を適切に待機）\n                await i18n.changeLanguage(language);\n                // 新しいパスへ遷移\n                router.push(newPath);\n            }\n        } catch (error) {\n            console.error(\"Failed to switch language:\", error);\n        // エラーが発生した場合、ユーザーに通知することも検討\n        }\n    };\n    // 言語切り替えボタンのレンダリング（アクセシビリティを考慮したマークアップ）\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"language-switcher flex space-x-2\",\n        role: \"group\",\n        \"aria-label\": \"Language selection\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>switchLanguage(\"ja\"),\n                className: \"language-btn px-4 py-2 rounded transition-colors\\n          \".concat(currentLanguage === \"ja\" ? \"bg-blue-600 text-white\" : \"bg-gray-200 hover:bg-gray-300 text-gray-700\"),\n                \"aria-label\": \"Switch to Japanese\",\n                \"aria-pressed\": currentLanguage === \"ja\",\n                children: \"日本語\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seekf\\\\Desktop\\\\えん鍼\\\\src\\\\app\\\\components\\\\language-switcher.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>switchLanguage(\"en\"),\n                className: \"language-btn px-4 py-2 rounded transition-colors\\n          \".concat(currentLanguage === \"en\" ? \"bg-blue-600 text-white\" : \"bg-gray-200 hover:bg-gray-300 text-gray-700\"),\n                \"aria-label\": \"Switch to English\",\n                \"aria-pressed\": currentLanguage === \"en\",\n                children: \"English\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seekf\\\\Desktop\\\\えん鍼\\\\src\\\\app\\\\components\\\\language-switcher.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\seekf\\\\Desktop\\\\えん鍼\\\\src\\\\app\\\\components\\\\language-switcher.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LanguageSwitcher, \"Wu9Kq5EcfAAeUReyzkhySCsfQts=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation\n    ];\n});\n_c = LanguageSwitcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageSwitcher);\nvar _c;\n$RefreshReg$(_c, \"LanguageSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9sYW5ndWFnZS1zd2l0Y2hlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDTTtBQUNWO0FBSy9DLE1BQU1NLG1CQUE2Qjs7SUFDakMsdUJBQXVCO0lBQ3ZCLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNSyxXQUFXSiw0REFBV0E7SUFFNUIsb0JBQW9CO0lBQ3BCLE1BQU0sRUFBRUssSUFBSSxFQUFFLEdBQUdKLDZEQUFjQTtJQUUvQix3QkFBd0I7SUFDeEIsTUFBTSxDQUFDSyxpQkFBaUJDLG1CQUFtQixHQUFHViwrQ0FBUUEsQ0FBVztRQUMvRCxtQkFBbUI7UUFDbkIsTUFBTVcsY0FBY0gsS0FBS0ksUUFBUTtRQUNqQyxPQUFPRCxnQkFBZ0IsT0FBTyxPQUFPO0lBQ3ZDO0lBRUEsaUJBQWlCO0lBQ2pCVixnREFBU0EsQ0FBQztRQUNSLHdCQUF3QjtRQUN4QixNQUFNWSx1QkFBdUIsQ0FBQ0M7WUFDNUIsb0JBQW9CO1lBQ3BCLElBQUlBLFFBQVEsUUFBUUEsUUFBUSxNQUFNO2dCQUNoQ0osbUJBQW1CSTtnQkFDbkIsaUJBQWlCO2dCQUNqQkMsU0FBU0MsZUFBZSxDQUFDQyxJQUFJLEdBQUdIO1lBQ2xDO1FBQ0Y7UUFFQSwyQkFBMkI7UUFDM0JOLEtBQUtVLEVBQUUsQ0FBQyxtQkFBbUJMO1FBRTNCLHdCQUF3QjtRQUN4QixPQUFPO1lBQ0xMLEtBQUtXLEdBQUcsQ0FBQyxtQkFBbUJOO1FBQzlCO0lBQ0YsR0FBRztRQUFDTDtLQUFLO0lBRVQseUJBQXlCO0lBQ3pCLE1BQU1ZLGlCQUFpQixPQUFPUjtRQUM1QixJQUFJO1lBQ0YscUJBQXFCO1lBQ3JCLElBQUlILG9CQUFvQkcsVUFBVTtnQkFDaEMsNEJBQTRCO2dCQUM1QixNQUFNUyxVQUFVVCxhQUFhLE9BQ3pCTCxTQUFTZSxPQUFPLENBQUMsaUJBQWlCLFNBQ2xDZixTQUFTZSxPQUFPLENBQUMsaUJBQWlCO2dCQUV0QywwQkFBMEI7Z0JBQzFCLE1BQU1kLEtBQUtlLGNBQWMsQ0FBQ1g7Z0JBRTFCLFdBQVc7Z0JBQ1hOLE9BQU9rQixJQUFJLENBQUNIO1lBQ2Q7UUFDRixFQUFFLE9BQU9JLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsNEJBQTRCO1FBQzlCO0lBQ0Y7SUFFQSx3Q0FBd0M7SUFDeEMscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7UUFBbUNDLE1BQUs7UUFBUUMsY0FBVzs7MEJBQ3hFLDhEQUFDQztnQkFDQ0MsU0FBUyxJQUFNWixlQUFlO2dCQUM5QlEsV0FBVywrREFHeUMsT0FGaERuQixvQkFBb0IsT0FDbEIsMkJBQ0E7Z0JBQ05xQixjQUFXO2dCQUNYRyxnQkFBY3hCLG9CQUFvQjswQkFDbkM7Ozs7OzswQkFHRCw4REFBQ3NCO2dCQUNDQyxTQUFTLElBQU1aLGVBQWU7Z0JBQzlCUSxXQUFXLCtEQUd5QyxPQUZoRG5CLG9CQUFvQixPQUNsQiwyQkFDQTtnQkFDTnFCLGNBQVc7Z0JBQ1hHLGdCQUFjeEIsb0JBQW9COzBCQUNuQzs7Ozs7Ozs7Ozs7O0FBS1A7R0FyRk1KOztRQUVXSCxzREFBU0E7UUFDUEMsd0RBQVdBO1FBR1hDLHlEQUFjQTs7O0tBTjNCQztBQXVGTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9sYW5ndWFnZS1zd2l0Y2hlci50c3g/MDE3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuLy8g6KiA6Kqe44Gu5Z6L44KS5a6a576p44GX44Gm5Z6L5a6J5YWo5oCn44KS5ZCR5LiKXG50eXBlIExhbmd1YWdlID0gJ2phJyB8ICdlbic7XG5cbmNvbnN0IExhbmd1YWdlU3dpdGNoZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAvLyBOZXh0Lmpz44Gu44Or44O844OG44Kj44Oz44Kw6Zai6YCj44Gu44OV44OD44KvXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG5cbiAgLy8gaTE4buOBruWIneacn+WMluOBqOePvuWcqOOBruiogOiqnuOBruWPluW+l1xuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgLy8g54++5Zyo44Gu6KiA6Kqe54q25oWL44KS566h55CG77yI44OH44OV44Kp44Or44OI44Gv5pel5pys6Kqe77yJXG4gIGNvbnN0IFtjdXJyZW50TGFuZ3VhZ2UsIHNldEN1cnJlbnRMYW5ndWFnZV0gPSB1c2VTdGF0ZTxMYW5ndWFnZT4oKCkgPT4ge1xuICAgIC8vIOWIneacn+WApOOBqOOBl+OBpuacieWKueOBquiogOiqnuOBruOBv+OCkuioreWumlxuICAgIGNvbnN0IGluaXRpYWxMYW5nID0gaTE4bi5sYW5ndWFnZSBhcyBzdHJpbmc7XG4gICAgcmV0dXJuIGluaXRpYWxMYW5nID09PSAnZW4nID8gJ2VuJyA6ICdqYSc7XG4gIH0pO1xuXG4gIC8vIOiogOiqnuWkieabtOOCkuebo+imluOBmeOCi+OCqOODleOCp+OCr+ODiFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIOiogOiqnuWkieabtOODj+ODs+ODieODqeODvOOCkuWumue+qe+8iOWei+WuieWFqOaAp+OCkueiuuS/ne+8iVxuICAgIGNvbnN0IGhhbmRsZUxhbmd1YWdlQ2hhbmdlID0gKGxuZzogc3RyaW5nKSA9PiB7XG4gICAgICAvLyDlj5fjgZHlj5bjgaPjgZ/oqIDoqp7jgYzmnInlirnjgarlgKTjgYvjg4Hjgqfjg4Pjgq9cbiAgICAgIGlmIChsbmcgPT09ICdqYScgfHwgbG5nID09PSAnZW4nKSB7XG4gICAgICAgIHNldEN1cnJlbnRMYW5ndWFnZShsbmcpO1xuICAgICAgICAvLyBIVE1M6KaB57Sg44Gu6KiA6Kqe5bGe5oCn44KC5pu05pawXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gbG5nO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDnm7TmjqVpMThu44Kq44OW44K444Kn44Kv44OI44Gu44Kk44OZ44Oz44OI44Oq44K544OK44O844KS5L2/55SoXG4gICAgaTE4bi5vbignbGFuZ3VhZ2VDaGFuZ2VkJywgaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UpO1xuXG4gICAgLy8g44Kv44Oq44O844Oz44Ki44OD44OX6Zai5pWw44Gn44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6Kej6ZmkXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGkxOG4ub2ZmKCdsYW5ndWFnZUNoYW5nZWQnLCBoYW5kbGVMYW5ndWFnZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW2kxOG5dKTtcblxuICAvLyDoqIDoqp7liIfjgormm7/jgYjplqLmlbDvvIjjgqjjg6njg7zjg4/jg7Pjg4njg6rjg7PjgrDjgpLov73liqDvvIlcbiAgY29uc3Qgc3dpdGNoTGFuZ3VhZ2UgPSBhc3luYyAobGFuZ3VhZ2U6IExhbmd1YWdlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIOePvuWcqOOBruiogOiqnuOBqOeVsOOBquOCi+WgtOWQiOOBruOBv+WHpueQhuOCkuWun+ihjFxuICAgICAgaWYgKGN1cnJlbnRMYW5ndWFnZSAhPT0gbGFuZ3VhZ2UpIHtcbiAgICAgICAgLy8g44OR44K544Gu5aSJ5pu044Ot44K444OD44Kv77yI5q2j6KaP6KGo54++44KS5L2/55So44GX44Gm5a6J5YWo44Gr572u5o+b77yJXG4gICAgICAgIGNvbnN0IG5ld1BhdGggPSBsYW5ndWFnZSA9PT0gJ2VuJ1xuICAgICAgICAgID8gcGF0aG5hbWUucmVwbGFjZSgvXlxcL2phKD89XFwvfCQpLywgJy9lbicpXG4gICAgICAgICAgOiBwYXRobmFtZS5yZXBsYWNlKC9eXFwvZW4oPz1cXC98JCkvLCAnL2phJyk7XG5cbiAgICAgICAgLy8gaTE4buOBruiogOiqnuOCkuWkieabtO+8iOmdnuWQjOacn+WHpueQhuOCkumBqeWIh+OBq+W+heapn++8iVxuICAgICAgICBhd2FpdCBpMThuLmNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgICAgICAvLyDmlrDjgZfjgYTjg5Hjgrnjgbjpgbfnp7tcbiAgICAgICAgcm91dGVyLnB1c2gobmV3UGF0aCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzd2l0Y2ggbGFuZ3VhZ2U6JywgZXJyb3IpO1xuICAgICAgLy8g44Ko44Op44O844GM55m655Sf44GX44Gf5aC05ZCI44CB44Om44O844K244O844Gr6YCa55+l44GZ44KL44GT44Go44KC5qSc6KiOXG4gICAgfVxuICB9O1xuXG4gIC8vIOiogOiqnuWIh+OCiuabv+OBiOODnOOCv+ODs+OBruODrOODs+ODgOODquODs+OCsO+8iOOCouOCr+OCu+OCt+ODk+ODquODhuOCo+OCkuiAg+aFruOBl+OBn+ODnuODvOOCr+OCouODg+ODl++8iVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2Utc3dpdGNoZXIgZmxleCBzcGFjZS14LTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiTGFuZ3VhZ2Ugc2VsZWN0aW9uXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHN3aXRjaExhbmd1YWdlKCdqYScpfVxuICAgICAgICBjbGFzc05hbWU9e2BsYW5ndWFnZS1idG4gcHgtNCBweS0yIHJvdW5kZWQgdHJhbnNpdGlvbi1jb2xvcnNcbiAgICAgICAgICAke2N1cnJlbnRMYW5ndWFnZSA9PT0gJ2phJ1xuICAgICAgICAgICAgPyAnYmctYmx1ZS02MDAgdGV4dC13aGl0ZSdcbiAgICAgICAgICAgIDogJ2JnLWdyYXktMjAwIGhvdmVyOmJnLWdyYXktMzAwIHRleHQtZ3JheS03MDAnfWB9XG4gICAgICAgIGFyaWEtbGFiZWw9XCJTd2l0Y2ggdG8gSmFwYW5lc2VcIlxuICAgICAgICBhcmlhLXByZXNzZWQ9e2N1cnJlbnRMYW5ndWFnZSA9PT0gJ2phJ31cbiAgICAgID5cbiAgICAgICAg5pel5pys6KqeXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gc3dpdGNoTGFuZ3VhZ2UoJ2VuJyl9XG4gICAgICAgIGNsYXNzTmFtZT17YGxhbmd1YWdlLWJ0biBweC00IHB5LTIgcm91bmRlZCB0cmFuc2l0aW9uLWNvbG9yc1xuICAgICAgICAgICR7Y3VycmVudExhbmd1YWdlID09PSAnZW4nXG4gICAgICAgICAgICA/ICdiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgOiAnYmctZ3JheS0yMDAgaG92ZXI6YmctZ3JheS0zMDAgdGV4dC1ncmF5LTcwMCd9YH1cbiAgICAgICAgYXJpYS1sYWJlbD1cIlN3aXRjaCB0byBFbmdsaXNoXCJcbiAgICAgICAgYXJpYS1wcmVzc2VkPXtjdXJyZW50TGFuZ3VhZ2UgPT09ICdlbid9XG4gICAgICA+XG4gICAgICAgIEVuZ2xpc2hcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VTd2l0Y2hlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZVBhdGhuYW1lIiwidXNlVHJhbnNsYXRpb24iLCJMYW5ndWFnZVN3aXRjaGVyIiwicm91dGVyIiwicGF0aG5hbWUiLCJpMThuIiwiY3VycmVudExhbmd1YWdlIiwic2V0Q3VycmVudExhbmd1YWdlIiwiaW5pdGlhbExhbmciLCJsYW5ndWFnZSIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwibG5nIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwib24iLCJvZmYiLCJzd2l0Y2hMYW5ndWFnZSIsIm5ld1BhdGgiLCJyZXBsYWNlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9sZSIsImFyaWEtbGFiZWwiLCJidXR0b24iLCJvbkNsaWNrIiwiYXJpYS1wcmVzc2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/language-switcher.tsx\n"));

/***/ })

});