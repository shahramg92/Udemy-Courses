webpackHotUpdate(3,{

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
var _jsxFileName = '/Users/shahram/Repositories/Udemy-Courses/React16/code-along/section23-nextjs/pages/index.js';

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();





var indexPage = function indexPage() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            'The Main Page'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            'Go to ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                { href: '/auth', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    'Auth'
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                    return __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/auth');
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            'Go to Auth'
        )
    );
};

var _default = indexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(indexPage, 'indexPage', '/Users/shahram/Repositories/Udemy-Courses/React16/code-along/section23-nextjs/pages/index.js');
    reactHotLoader.register(_default, 'default', '/Users/shahram/Repositories/Udemy-Courses/React16/code-along/section23-nextjs/pages/index.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.f884730f5c55763f948a.hot-update.js.map