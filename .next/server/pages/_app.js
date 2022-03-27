"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ fonts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./components/fonts.js


const Fonts = ()=>jsx_runtime_.jsx((style_default()), {
        id: "dc568394b5c44dd0",
        children: "@import url(\"https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap\");"
    })
;
/* harmony default export */ const fonts = (Fonts);


/***/ }),

/***/ 3123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/logo.js




const LogoBox = (styled_default()).span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;
const Logo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        scroll: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(LogoBox, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    color: (0,react_.useColorModeValue)('gray.800', 'whiteAlpha.900'),
                    fontFamily: "M PLUS Rounded 1c\", sans-serif",
                    fontWeight: "bold",
                    ml: 3,
                    children: "Nguyen Khoa"
                })
            })
        })
    });
};
/* harmony default export */ const logo = (Logo);

;// CONCATENATED MODULE: ./components/navbar.js



const Navbar = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        position: "fixed",
        as: "nav",
        w: "100%",
        bg: (0,react_.useColorModeValue)('#ffffff40', '#20202380'),
        css: {
            backdropFilter: 'blur(10px)'
        },
        zIndex: 1,
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
            display: "flex",
            p: 2,
            maxW: "container.md",
            wrap: "wrap",
            align: "center",
            justify: "space-between",
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                align: "center",
                mr: 5,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                    as: "h1",
                    size: "lg",
                    letterSpacing: 'tighter',
                    children: /*#__PURE__*/ jsx_runtime_.jsx(logo, {})
                })
            })
        })
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/footer.js


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        align: "center",
        opacity: 0.4,
        fontSize: "sm",
        children: "Template created by Takuya Matsuyama"
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ./components/work.js




const Title = ({ children  })=>/*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsx(NextLink, {
                href: "/works",
                children: /*#__PURE__*/ _jsx(Link, {
                    children: "Works"
                })
            }),
            /*#__PURE__*/ _jsxs("span", {
                children: [
                    ' ',
                    /*#__PURE__*/ _jsx(ChevronRightIcon, {}),
                    ' '
                ]
            }),
            /*#__PURE__*/ _jsx(Heading, {
                display: "inline-block",
                as: "h3",
                fontSize: 20,
                mb: 4,
                children: children
            })
        ]
    })
;
const WorkImage = ({ src , alt  })=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
        borderRadius: "lg",
        w: "full",
        src: src,
        alt: alt,
        mb: 4
    })
;
const Meta = ({ children  })=>/*#__PURE__*/ _jsx(Badge, {
        colorScheme: "green",
        mr: 2,
        children: children
    })
;

;// CONCATENATED MODULE: ./components/layouts/main.js






const Main = ({ children , router  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: "main",
        pb: 8,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Takuya's homepage"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Nguyen Khoa"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "craftzdog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicon.ico",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@craftzdog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:creator",
                        content: "@craftzdog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: "/card.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Nguyen Khoa's Homepage"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "/card.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Nguyen Khoa portfolio"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                path: router.asPath
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                maxW: "container.md",
                pt: 14,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(WorkImage, {
                        src: "/cover.jpg",
                        alt: "freeDBTagger"
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const main = (Main);


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3123);
/* harmony import */ var _components_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1925);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _components_chakra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7020);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






if (false) {}
function Website({ Component , pageProps , router  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_chakra__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        cookies: pageProps.cookies,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_fonts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_main__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                router: router,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                    exitBeforeEnter: true,
                    initial: true,
                    onExitComplete: ()=>{
                        if (false) {}
                    },
                    children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, {
                        ...pageProps,
                        key: router.route
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Website);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,655,20], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();