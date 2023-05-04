(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9869:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const reactQueryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reactQueryClient);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ languages)
/* harmony export */ });
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8621);

const languages = [
    {
        id: 3213123,
        title: "O'z",
        code: "uz",
        icon: _images__WEBPACK_IMPORTED_MODULE_0__/* .FlagUzb */ .Gi
    },
    {
        id: 3123142,
        title: "EN",
        code: "en",
        icon: _images__WEBPACK_IMPORTED_MODULE_0__/* .FlagUsa */ .b7
    },
    {
        id: 1234123,
        title: "RU",
        code: "ru",
        icon: _images__WEBPACK_IMPORTED_MODULE_0__/* .FlagRus */ .Hf
    }
];


/***/ }),

/***/ 2951:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5057);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2396);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5007);
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_main__WEBPACK_IMPORTED_MODULE_5__, _services__WEBPACK_IMPORTED_MODULE_6__, _payment__WEBPACK_IMPORTED_MODULE_7__]);
([_main__WEBPACK_IMPORTED_MODULE_5__, _services__WEBPACK_IMPORTED_MODULE_6__, _payment__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Index = ({ children  })=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    console.log(pathname);
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)((0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getLayoutName */ .j)(pathname), "main")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: children
        });
    } else if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)((0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getLayoutName */ .j)(pathname), "services")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_services__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: children
        });
    } else if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)((0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getLayoutName */ .j)(pathname), "payment")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_payment__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[#F1F3F6]",
                children: children
            })
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: children
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8621);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mock_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6970);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2536);










const Index = ()=>{
    const currentYear = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().year();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI__WEBPACK_IMPORTED_MODULE_9__/* .Container */ .W, {
        className: "pb-8",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            className: "grid grid-cols-12 gap-4 lg:gap-6 ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-span-12 lg:col-span-5 xl:col-span-4 bg-primary-gray xl:px-14 pt-14 pb-7 text-white rounded-2xl flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            className: "w-1/2 xl:w-2/3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _images__WEBPACK_IMPORTED_MODULE_6__/* .MainPageLogo */ .ox,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-3 mt-6 md:mt-14 text-center",
                            children: "Mijozlarga xizmat ko‘rsatish bo‘limi"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "px-6 py-3 bg-[#31393E] rounded-[10px] font-semibold text-base md:text-lg lg:text-2xl mb-4 md:mb-10 cursor-pointer",
                            href: "tel:+998997275098",
                            children: "(+998 78) 100-00-00"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "inline-flex gap-7 mb-5 md:mb-14",
                            children: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)(_mock_footer__WEBPACK_IMPORTED_MODULE_8__/* .footerLinks */ .d, (link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(link, "image"),
                                        alt: "social icon"
                                    })
                                }, (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(link, "id")))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            className: "text-[#979797] text-sm",
                            children: [
                                "\xa9 aviahelp.uz, ",
                                currentYear
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-span-12 lg:col-span-7 xl:col-span-8 bg-[#F9F9F9] rounded-2xl px-5 md:px-14 pt-8 md:pt-14 pb-7 text-[#202020] flex flex-col h-full justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col md:flex-row md:justify-between flex-wrap gap-4",
                            children: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)(_mock_footer__WEBPACK_IMPORTED_MODULE_8__/* .footer */ .M, (item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full lg:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()("text-2xl font-bold lg:mb-7 flex items-center justify-between", open === index ? "mb-3" : "mb-0"),
                                            onClick: ()=>{
                                                if (open !== index) {
                                                    setOpen(index);
                                                } else {
                                                    setOpen(null);
                                                }
                                            },
                                            children: [
                                                (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(item, "title"),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "lg:hidden",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                                                "clip-path": "url(#clip0_577_9700)",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M12.0002 13.1727L16.9502 8.22266L18.3642 9.63666L12.0002 16.0007L5.63623 9.63666L7.05023 8.22266L12.0002 13.1727Z",
                                                                    fill: "black"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                                                    id: "clip0_577_9700",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        width: "24",
                                                                        height: "24",
                                                                        fill: "white"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()("flex flex-col", index !== open && "hidden lg:block"),
                                            children: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)((0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(item, "children"), (child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "mb-2 max-w-[250px] text-[#202020] text-lg cursor-pointer",
                                                    children: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(child, "title")
                                                }, (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(child, "title")))
                                        })
                                    ]
                                }, (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(item, "title")))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "flex justify-between md:justify-start md:gap-[30px] text-[#979797] text-sm leading-4 font-inter font-normal mt-5 lg:mt-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: "Maxfiylik siyosati"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: "Shartnoma taklifi "
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: "To'lov"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ }),

/***/ 9994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8621);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2536);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3048);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_language__WEBPACK_IMPORTED_MODULE_8__]);
_language__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Index = ({ main , payment  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("bg-primary-blue"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI__WEBPACK_IMPORTED_MODULE_6__/* .Container */ .W, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full relative py-[35px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("flex justify-start md:justify-center"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "z-10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: _images__WEBPACK_IMPORTED_MODULE_1__/* .MainPageLogo */ .ox,
                                    alt: "Logo Image",
                                    className: "z-[9999]",
                                    quality: 100
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-full items-center flex absolute right-0 bottom-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: `tel:+998781000000`,
                                    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("md:text-xl font-montserrat  tracking-tighter text-white"),
                                    children: "+998 (78)-100-00-00"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_language__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    main: main
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3048:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3891);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6793);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(514);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_5__]);
_store__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Language = ({ main  })=>{
    const [isOpenLanguage, setOpenLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const language = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .o)((state)=>(0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(state, "lang"));
    const setLanguage = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .o)((state)=>(0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(state, "setLang", ()=>{}));
    const [activeLanguage, setActiveLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: 123213,
        title: "O'z",
        code: "uz",
        icon: _images__WEBPACK_IMPORTED_MODULE_8__/* .FlagUzb */ .Gi
    });
    const changeLang = (code)=>{
        setLanguage(code);
        _services_storage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].set */ .Z.set(language, code);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        changeLang((0,lodash__WEBPACK_IMPORTED_MODULE_2__.toLower)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(activeLanguage, "title")));
    }, [
        activeLanguage
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("flex items-center gap-1.5 px-2 md:px-3  border rounded-3xl cursor-pointer order-3 py-2 relative border-gray-200  border-opacity-40 "),
        onClick: ()=>setOpenLanguage((prevState)=>!prevState),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                src: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(activeLanguage, "icon"),
                alt: "Image Flag",
                className: "rounded-md w-6 h-6 block"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("hidden md:block md:w-6 text-white"),
                children: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(activeLanguage, "title", "")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("absolute top-full translate-y-1 bg-white w-full left-0 z-40  shadow-2xl rounded-2xl transition-all duration-500", isOpenLanguage ? "visible opacity-100" : "invisible opacity-0"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "flex flex-col items-center",
                    children: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.filter)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .languages */ .M, (lang)=>!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(lang, "title"), (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(activeLanguage, "title"))), (value)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "flex gap-2 w-full hover:bg-green-100 justify-center p-2 md:py-1 first:rounded-t-2xl last:rounded-b-2xl",
                            onClick: (e)=>{
                                e.preventDefault();
                                setActiveLanguage(value);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    src: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(value, "icon"),
                                    alt: "Image Flag",
                                    className: "rounded-md w-6 h-6"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hidden md:block",
                                    children: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(value, "title")
                                })
                            ]
                        }))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Language);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3269:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "h": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9994);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header__WEBPACK_IMPORTED_MODULE_0__]);
_header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Index = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8621);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mock_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6970);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2536);










const Index = ()=>{
    const currentYear = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().year();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI__WEBPACK_IMPORTED_MODULE_9__/* .Container */ .W, {
        className: "pb-8",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            className: "grid grid-cols-12 gap-4 lg:gap-6 ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-span-12 lg:col-span-5 xl:col-span-4 bg-primary-gray xl:px-14 pt-14 pb-7 text-white rounded-2xl flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            className: "w-1/2 xl:w-2/3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _images__WEBPACK_IMPORTED_MODULE_6__/* .MainPageLogo */ .ox,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-3 mt-6 md:mt-14 text-center",
                            children: "Mijozlarga xizmat ko‘rsatish bo‘limi"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "px-6 py-3 bg-[#31393E] rounded-[10px] font-semibold text-base md:text-lg lg:text-2xl mb-4 md:mb-10 cursor-pointer",
                            href: "tel:+998997275098",
                            children: "(+998 78) 100-00-00"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "inline-flex gap-7 mb-5 md:mb-14",
                            children: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)(_mock_footer__WEBPACK_IMPORTED_MODULE_8__/* .footerLinks */ .d, (link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(link, "image"),
                                        alt: "social icon"
                                    })
                                }, (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(link, "id")))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            className: "text-[#979797] text-sm",
                            children: [
                                "\xa9 aviahelp.uz, ",
                                currentYear
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-span-12 lg:col-span-7 xl:col-span-8 bg-[#F9F9F9] rounded-2xl px-5 md:px-14 pt-8 md:pt-14 pb-7 text-[#202020] flex flex-col h-full justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col md:flex-row md:justify-between flex-wrap gap-4",
                            children: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)(_mock_footer__WEBPACK_IMPORTED_MODULE_8__/* .footer */ .M, (item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full lg:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()("text-2xl font-bold lg:mb-7 flex items-center justify-between", open === index ? "mb-3" : "mb-0"),
                                            onClick: ()=>{
                                                if (open !== index) {
                                                    setOpen(index);
                                                } else {
                                                    setOpen(null);
                                                }
                                            },
                                            children: [
                                                (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(item, "title"),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "lg:hidden",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                                                "clip-path": "url(#clip0_577_9700)",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M12.0002 13.1727L16.9502 8.22266L18.3642 9.63666L12.0002 16.0007L5.63623 9.63666L7.05023 8.22266L12.0002 13.1727Z",
                                                                    fill: "black"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                                                    id: "clip0_577_9700",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        width: "24",
                                                                        height: "24",
                                                                        fill: "white"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()("flex flex-col", index !== open && "hidden lg:block"),
                                            children: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)((0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(item, "children"), (child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "mb-2 max-w-[250px] text-[#202020] text-lg cursor-pointer",
                                                    children: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(child, "title")
                                                }, (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(child, "title")))
                                        })
                                    ]
                                }, (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(item, "title")))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "flex justify-between md:justify-start md:gap-[30px] text-[#979797] text-sm leading-4 font-inter font-normal mt-5 lg:mt-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: "Maxfiylik siyosati"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: "Shartnoma taklifi "
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: "To'lov"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ }),

/***/ 8414:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8621);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2536);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8717);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_language__WEBPACK_IMPORTED_MODULE_6__]);
_language__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Index = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-[#F1F3F6]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full relative py-[35px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_7___default()("flex justify-start lg:justify-center"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "z-10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: _images__WEBPACK_IMPORTED_MODULE_1__/* .ServicesPageLogo */ .I0,
                                    alt: "Logo Image",
                                    className: "z-[9999] w-2/3 md:w-auto",
                                    quality: 100
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-full items-center flex absolute right-0 bottom-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: `tel:+998781000000`,
                                    className: clsx__WEBPACK_IMPORTED_MODULE_7___default()("md:text-xl font-montserrat font-semibold tracking-tighter"),
                                    children: "+998 (78)-100-00-00"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_language__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8717:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3891);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6793);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(514);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_5__]);
_store__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Language = ()=>{
    const [isOpenLanguage, setOpenLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const language = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .o)((state)=>(0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(state, "lang"));
    const setLanguage = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .o)((state)=>(0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(state, "setLang", ()=>{}));
    const [activeLanguage, setActiveLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: 123213,
        title: "O'z",
        code: "uz",
        icon: _images__WEBPACK_IMPORTED_MODULE_8__/* .FlagUzb */ .Gi
    });
    const changeLang = (code)=>{
        setLanguage();
        _services_storage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].set */ .Z.set(language, code);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        changeLang((0,lodash__WEBPACK_IMPORTED_MODULE_2__.toLower)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(activeLanguage, "title")));
    }, [
        activeLanguage
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-1.5 px-2 md:px-3  border rounded-3xl cursor-pointer order-3 py-2 relative border border-black",
        onClick: ()=>setOpenLanguage((prevState)=>!prevState),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                src: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(activeLanguage, "icon"),
                alt: "Image Flag",
                className: "rounded-md w-6 h-6 block"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "hidden md:block md:w-6",
                children: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(activeLanguage, "title", "")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("absolute top-full translate-y-1 bg-white w-full left-0 z-40  shadow-2xl rounded-2xl transition-all duration-500", isOpenLanguage ? "visible opacity-100" : "invisible opacity-0"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "flex flex-col items-center",
                    children: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.filter)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .languages */ .M, (lang)=>!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(lang, "title"), (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(activeLanguage, "title"))), (value)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "flex gap-2 w-full hover:bg-green-100 justify-center p-2 md:py-1 first:rounded-t-2xl last:rounded-b-2xl",
                            onClick: (e)=>{
                                e.preventDefault();
                                setActiveLanguage(value);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    src: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(value, "icon"),
                                    alt: "Image Flag",
                                    className: "rounded-md w-6 h-6"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hidden md:block",
                                    children: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(value, "title")
                                })
                            ]
                        }))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Language);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7621:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "h": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8414);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5685);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header__WEBPACK_IMPORTED_MODULE_0__]);
_header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9803:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Index = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8621);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mock_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6970);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2536);










const Index = ()=>{
    const currentYear = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().year();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI__WEBPACK_IMPORTED_MODULE_9__/* .Container */ .W, {
        className: "pb-8",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            className: "grid grid-cols-12 gap-4 lg:gap-6 ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-span-12 lg:col-span-5 xl:col-span-4 bg-primary-gray xl:px-14 pt-14 pb-7 text-white rounded-2xl flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            className: "w-1/2 xl:w-2/3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _images__WEBPACK_IMPORTED_MODULE_6__/* .MainPageLogo */ .ox,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-3 mt-6 md:mt-14 text-center",
                            children: "Mijozlarga xizmat ko‘rsatish bo‘limi"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "px-6 py-3 bg-[#31393E] rounded-[10px] font-semibold text-base md:text-lg lg:text-2xl mb-4 md:mb-10 cursor-pointer",
                            href: "tel:+998997275098",
                            children: "(+998 78) 100-00-00"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "inline-flex gap-7 mb-5 md:mb-14",
                            children: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)(_mock_footer__WEBPACK_IMPORTED_MODULE_8__/* .footerLinks */ .d, (link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(link, "image"),
                                        alt: "social icon"
                                    })
                                }, (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(link, "id")))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            className: "text-[#979797] text-sm",
                            children: [
                                "\xa9 aviahelp.uz, ",
                                currentYear
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-span-12 lg:col-span-7 xl:col-span-8 bg-[#F9F9F9] rounded-2xl px-5 md:px-14 pt-8 md:pt-14 pb-7 text-[#202020] flex flex-col h-full justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col md:flex-row md:justify-between flex-wrap gap-4",
                            children: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)(_mock_footer__WEBPACK_IMPORTED_MODULE_8__/* .footer */ .M, (item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full lg:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()("text-2xl font-bold lg:mb-7 flex items-center justify-between", open === index ? "mb-3" : "mb-0"),
                                            onClick: ()=>{
                                                if (open !== index) {
                                                    setOpen(index);
                                                } else {
                                                    setOpen(null);
                                                }
                                            },
                                            children: [
                                                (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(item, "title"),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "lg:hidden",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                                                "clip-path": "url(#clip0_577_9700)",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M12.0002 13.1727L16.9502 8.22266L18.3642 9.63666L12.0002 16.0007L5.63623 9.63666L7.05023 8.22266L12.0002 13.1727Z",
                                                                    fill: "black"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                                                    id: "clip0_577_9700",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        width: "24",
                                                                        height: "24",
                                                                        fill: "white"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()("flex flex-col", index !== open && "hidden lg:block"),
                                            children: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.map)((0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(item, "children"), (child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "mb-2 max-w-[250px] text-[#202020] text-lg cursor-pointer",
                                                    children: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(child, "title")
                                                }, (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(child, "title")))
                                        })
                                    ]
                                }, (0,lodash__WEBPACK_IMPORTED_MODULE_7__.get)(item, "title")))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "flex justify-between md:justify-start md:gap-[30px] text-[#979797] text-sm leading-4 font-inter font-normal mt-5 lg:mt-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: "Maxfiylik siyosati"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: "Shartnoma taklifi "
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: "To'lov"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ }),

/***/ 6103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8621);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2536);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1750);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_language__WEBPACK_IMPORTED_MODULE_6__]);
_language__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Index = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-primary-blue",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full relative py-[35px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        className: "flex justify-start lg:justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "z-10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: _images__WEBPACK_IMPORTED_MODULE_1__/* .ServicesPageLogo */ .I0,
                                    alt: "Logo Image",
                                    className: "z-[9999] w-2/3 md:w-auto",
                                    quality: 100
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-full items-center flex absolute right-0 bottom-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: `tel:+998781000000`,
                                    className: "text-sm md:text-xl font-montserrat font-semibold tracking-tighter text-white",
                                    children: "+998 (78)-100-00-00"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_language__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1750:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3891);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6793);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(514);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_5__]);
_store__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Language = ()=>{
    const [isOpenLanguage, setOpenLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const language = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .o)((state)=>(0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(state, "lang"));
    const setLanguage = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .o)((state)=>(0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(state, "setLang", ()=>{}));
    const [activeLanguage, setActiveLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: 123213,
        title: "O'z",
        code: "uz",
        icon: _images__WEBPACK_IMPORTED_MODULE_8__/* .FlagUzb */ .Gi
    });
    const changeLang = (code)=>{
        setLanguage();
        _services_storage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].set */ .Z.set(language, code);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        changeLang((0,lodash__WEBPACK_IMPORTED_MODULE_2__.toLower)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(activeLanguage, "title")));
    }, [
        activeLanguage
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-1.5 px-2 md:px-3  border rounded-3xl cursor-pointer order-3 py-2 relative border-gray-200  border-opacity-40 ",
        onClick: ()=>setOpenLanguage((prevState)=>!prevState),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                src: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(activeLanguage, "icon"),
                alt: "Image Flag",
                className: "rounded-md  w-4 h-4  md:w-6 md:h-6 block"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("hidden md:block md:w-6 text-white"),
                children: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(activeLanguage, "title", "")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("absolute top-full translate-y-1 bg-white w-full left-0 z-40  shadow-2xl rounded-2xl transition-all duration-500", isOpenLanguage ? "visible opacity-100" : "invisible opacity-0"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "flex flex-col items-center",
                    children: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.filter)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .languages */ .M, (lang)=>!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(lang, "title"), (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(activeLanguage, "title"))), (value)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "flex gap-2 w-full hover:bg-green-100 justify-center p-2 md:py-1 first:rounded-t-2xl last:rounded-b-2xl",
                            onClick: (e)=>{
                                e.preventDefault();
                                setActiveLanguage(value);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    src: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(value, "icon"),
                                    alt: "Image Flag",
                                    className: "rounded-md w-4 h-4  md:w-6 md:h-6"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hidden md:block",
                                    children: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(value, "title")
                                })
                            ]
                        }))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Language);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5180:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "h": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6103);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2753);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header__WEBPACK_IMPORTED_MODULE_0__]);
_header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5007:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5180);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Index = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ getLayoutName)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const getLayoutName = (pathname)=>{
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(pathname, "/")) {
        return "main";
    }
    if (/^\/services(?=\/|$)/i.test(pathname)) {
        return "services";
    }
    if (/^\/payment(?=\/|$)/i.test(pathname)) {
        return "payment";
    }
};


/***/ }),

/***/ 6970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ footer),
  "d": () => (/* binding */ footerLinks)
});

;// CONCATENATED MODULE: ./assets/images/icons/menu-bar.svg
/* harmony default export */ const menu_bar = ({"src":"/_next/static/media/menu-bar.522549cb.svg","height":12,"width":35});
;// CONCATENATED MODULE: ./assets/images/icons/arrow-right.svg
/* harmony default export */ const arrow_right = ({"src":"/_next/static/media/arrow-right.050cb11a.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./assets/images/icons/cabin.svg
/* harmony default export */ const cabin = ({"src":"/_next/static/media/cabin.8bffd853.svg","height":46,"width":46});
;// CONCATENATED MODULE: ./assets/images/icons/facebook.svg
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.dc54f9db.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./assets/images/icons/instagramm.svg
/* harmony default export */ const instagramm = ({"src":"/_next/static/media/instagramm.876ccd8d.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./assets/images/icons/youtube.svg
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.b620d89b.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./assets/images/icons/play.svg
/* harmony default export */ const play = ({"src":"/_next/static/media/play.77fc61ed.svg","height":60,"width":60});
;// CONCATENATED MODULE: ./assets/images/icons/tab-cabin.svg
/* harmony default export */ const tab_cabin = ({"src":"/_next/static/media/tab-cabin.313ea377.svg","height":18,"width":18});
;// CONCATENATED MODULE: ./assets/images/icons/tab-restaraunt.svg
/* harmony default export */ const tab_restaraunt = ({"src":"/_next/static/media/tab-restaraunt.8ff53a02.svg","height":18,"width":18});
;// CONCATENATED MODULE: ./assets/images/icons/tab-portfolio.svg
/* harmony default export */ const tab_portfolio = ({"src":"/_next/static/media/tab-portfolio.4c6a8a9e.svg","height":18,"width":18});
;// CONCATENATED MODULE: ./assets/images/icons/tab-plane.svg
/* harmony default export */ const tab_plane = ({"src":"/_next/static/media/tab-plane.24ebcfa4.svg","height":18,"width":18});
;// CONCATENATED MODULE: ./assets/images/icons/index.ts













;// CONCATENATED MODULE: ./mock/footer.ts

const footerLinks = [
    {
        id: 1,
        image: facebook,
        href: "/facebook"
    },
    {
        id: 2,
        image: instagramm,
        href: "/instagramm"
    },
    {
        id: 3,
        image: youtube,
        href: "/youtube"
    }
];
const footer = [
    {
        id: 1,
        title: "Ofis",
        children: [
            {
                id: 1.1,
                title: "Saint-Petersburg 9th Krasno, house 8, office 88"
            },
            {
                id: 1.2,
                title: "Uzbekistan Kichik xalqa yo’li, house 11, office 2"
            }
        ]
    },
    {
        id: 2,
        title: "Xizmatlar",
        children: [
            {
                id: 2.1,
                title: "Joy band qilish"
            },
            {
                id: 2.2,
                title: "Ovqat tanlash"
            },
            {
                id: 2.3,
                title: "CIP va VIP"
            },
            {
                id: 2.4,
                title: "Yuklarni joylashtirish"
            }
        ]
    },
    {
        id: 3,
        title: "Biz haqimizda",
        children: [
            {
                id: 3.1,
                title: "Biz bilan bog’lanish"
            },
            {
                id: 3.2,
                title: "Biz haqimizda"
            }
        ]
    }
];


/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6251);
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2951);
/* harmony import */ var _config_react_query_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9869);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9752);
/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9063);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_3__, _config_react_query_config__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_6__]);
([_layout__WEBPACK_IMPORTED_MODULE_3__, _config_react_query_config__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function App({ Component , pageProps  }) {
    const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>_config_react_query_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.Hydrate, {
            state: pageProps.dehydratedState,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_6__.ReactQueryDevtools, {
                        initialIsOpen: false
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const storage = {
    get: (key)=>{
        return window.localStorage && window.localStorage.getItem(key) || null;
    },
    set: (key, value)=>{
        if (!value || value.length <= 0) {
            return;
        }
        if (window.localStorage) {
            window.localStorage.setItem(key, value);
        }
    },
    remove: (key)=>{
        if (window.localStorage && window.localStorage[key]) {
            window.localStorage.removeItem(key);
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);


/***/ }),

/***/ 6251:
/***/ (() => {



/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9063:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query-devtools");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,676,664,458], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();