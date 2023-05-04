"use strict";
exports.id = 458;
exports.ids = [458];
exports.modules = {

/***/ 2536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* reexport */ container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./UI/container/index.tsx



const Index = ({ children , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,external_clsx_.clsx)("container px-[15px] md:px-8 lg:px-10 xl:px-12 2xl:px-15", className),
        children: children
    });
};
/* harmony default export */ const container = (Index);

;// CONCATENATED MODULE: ./UI/index.ts




/***/ }),

/***/ 8621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Hf": () => (/* reexport */ ru),
  "b7": () => (/* reexport */ us),
  "Gi": () => (/* reexport */ uz),
  "ox": () => (/* reexport */ main_logo),
  "I0": () => (/* reexport */ services_logo)
});

// UNUSED EXPORTS: ShopCart

;// CONCATENATED MODULE: ./layout/images/main-logo.svg
/* harmony default export */ const main_logo = ({"src":"/_next/static/media/main-logo.712a548d.svg","height":31,"width":195});
;// CONCATENATED MODULE: ./layout/images/services-logo.svg
/* harmony default export */ const services_logo = ({"src":"/_next/static/media/services-logo.65eca587.svg","height":31,"width":195});
;// CONCATENATED MODULE: ./layout/images/shop-cart.svg
/* harmony default export */ const shop_cart = ({"src":"/_next/static/media/shop-cart.ea6c2492.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./layout/images/us.svg
/* harmony default export */ const us = ({"src":"/_next/static/media/us.7824dce8.svg","height":480,"width":640});
;// CONCATENATED MODULE: ./layout/images/ru.svg
/* harmony default export */ const ru = ({"src":"/_next/static/media/ru.e5f5a5a2.svg","height":480,"width":640});
;// CONCATENATED MODULE: ./layout/images/uz.svg
/* harmony default export */ const uz = ({"src":"/_next/static/media/uz.fc6ecf09.svg","height":480,"width":640});
;// CONCATENATED MODULE: ./layout/images/index.ts









/***/ }),

/***/ 6793:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)()((set)=>({
        initialLoading: true,
        initialLoadingFalse: (state)=>set((state)=>({
                    initialLoading: state.initialLoading = false
                })),
        totalSum: 0,
        weight: 0,
        seat: 0,
        setWeigt: (newState)=>set((state)=>({
                    weight: state.weight + newState
                })),
        setSeat: (newState)=>set((state)=>({
                    seat: newState
                })),
        resetWeigt: ()=>set((state)=>({
                    weight: 0
                })),
        lang: "uz",
        findTotal: ()=>set((state)=>({
                    totalSum: state.weight * 13000
                })),
        setLang: (lang)=>set((state)=>({
                    ...state,
                    lang
                }))
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;