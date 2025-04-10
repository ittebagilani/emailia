"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/verified-emails/route";
exports.ids = ["app/api/verified-emails/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fverified-emails%2Froute&page=%2Fapi%2Fverified-emails%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverified-emails%2Froute.ts&appDir=%2Fhome%2Fitteba%2FDocuments%2Fideas%2Femailia%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fitteba%2FDocuments%2Fideas%2Femailia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fverified-emails%2Froute&page=%2Fapi%2Fverified-emails%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverified-emails%2Froute.ts&appDir=%2Fhome%2Fitteba%2FDocuments%2Fideas%2Femailia%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fitteba%2FDocuments%2Fideas%2Femailia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_itteba_Documents_ideas_emailia_app_api_verified_emails_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/verified-emails/route.ts */ \"(rsc)/./app/api/verified-emails/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/verified-emails/route\",\n        pathname: \"/api/verified-emails\",\n        filename: \"route\",\n        bundlePath: \"app/api/verified-emails/route\"\n    },\n    resolvedPagePath: \"/home/itteba/Documents/ideas/emailia/app/api/verified-emails/route.ts\",\n    nextConfigOutput,\n    userland: _home_itteba_Documents_ideas_emailia_app_api_verified_emails_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/verified-emails/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ2ZXJpZmllZC1lbWFpbHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnZlcmlmaWVkLWVtYWlscyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnZlcmlmaWVkLWVtYWlscyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGaXR0ZWJhJTJGRG9jdW1lbnRzJTJGaWRlYXMlMkZlbWFpbGlhJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGaXR0ZWJhJTJGRG9jdW1lbnRzJTJGaWRlYXMlMkZlbWFpbGlhJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNxQjtBQUNsRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8/NTY2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9pdHRlYmEvRG9jdW1lbnRzL2lkZWFzL2VtYWlsaWEvYXBwL2FwaS92ZXJpZmllZC1lbWFpbHMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3ZlcmlmaWVkLWVtYWlscy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ZlcmlmaWVkLWVtYWlsc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdmVyaWZpZWQtZW1haWxzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvaXR0ZWJhL0RvY3VtZW50cy9pZGVhcy9lbWFpbGlhL2FwcC9hcGkvdmVyaWZpZWQtZW1haWxzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS92ZXJpZmllZC1lbWFpbHMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fverified-emails%2Froute&page=%2Fapi%2Fverified-emails%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverified-emails%2Froute.ts&appDir=%2Fhome%2Fitteba%2FDocuments%2Fideas%2Femailia%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fitteba%2FDocuments%2Fideas%2Femailia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/verified-emails/route.ts":
/*!******************************************!*\
  !*** ./app/api/verified-emails/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/server/createGetAuth.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n// app/api/verified-emails/route.ts\n\n\n\n // Ensure you have nodemailer installed\nasync function POST(request) {\n    const { userId } = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_3__.getAuth)(request);\n    if (!userId) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    const { email } = await request.json();\n    // Generate OTP\n    const otp = Math.floor(100000 + Math.random() * 900000).toString();\n    // Save email and OTP to the database\n    const verifiedEmail = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].verifiedEmail.create({\n        data: {\n            userId,\n            email,\n            verified: false\n        }\n    });\n    // Send OTP via email\n    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_2__.createTransport({\n        service: \"gmail\",\n        auth: {\n            user: process.env.EMAIL_USER,\n            pass: process.env.EMAIL_PASS\n        }\n    });\n    const mailOptions = {\n        from: process.env.EMAIL_USER,\n        to: email,\n        subject: \"Your OTP for Email Verification\",\n        text: `Your OTP is ${otp}. Please verify your email.`\n    };\n    await transporter.sendMail(mailOptions);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"Verification email sent\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ZlcmlmaWVkLWVtYWlscy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1DQUFtQztBQUNxQjtBQUNUO0FBQ2I7QUFDRSxDQUFDLHVDQUF1QztBQUVyRSxlQUFlSSxLQUFLQyxPQUFvQjtJQUM3QyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHTCw2REFBT0EsQ0FBQ0k7SUFDM0IsSUFBSSxDQUFDQyxRQUFRO1FBQ1gsT0FBTyxJQUFJTixxREFBWUEsQ0FBQyxnQkFBZ0I7WUFBRU8sUUFBUTtRQUFJO0lBQ3hEO0lBRUEsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNSCxRQUFRSSxJQUFJO0lBRXBDLGVBQWU7SUFDZixNQUFNQyxNQUFNQyxLQUFLQyxLQUFLLENBQUMsU0FBU0QsS0FBS0UsTUFBTSxLQUFLLFFBQVFDLFFBQVE7SUFFaEUscUNBQXFDO0lBQ3JDLE1BQU1DLGdCQUFnQixNQUFNYixtREFBTUEsQ0FBQ2EsYUFBYSxDQUFDQyxNQUFNLENBQUM7UUFDdERDLE1BQU07WUFDSlg7WUFDQUU7WUFDQVUsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxxQkFBcUI7SUFDckIsTUFBTUMsY0FBY2hCLHVEQUEwQixDQUFDO1FBQzdDa0IsU0FBUztRQUNUQyxNQUFNO1lBQ0pDLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtZQUM1QkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxVQUFVO1FBQzlCO0lBQ0Y7SUFFQSxNQUFNQyxjQUFjO1FBQ2xCQyxNQUFNTixRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDNUJLLElBQUl2QjtRQUNKd0IsU0FBUztRQUNUQyxNQUFNLENBQUMsWUFBWSxFQUFFdkIsSUFBSSwyQkFBMkIsQ0FBQztJQUN2RDtJQUVBLE1BQU1TLFlBQVllLFFBQVEsQ0FBQ0w7SUFFM0IsT0FBTzdCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7UUFBRTBCLFNBQVM7SUFBMEI7QUFDaEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9hcHAvYXBpL3ZlcmlmaWVkLWVtYWlscy9yb3V0ZS50cz8yZGI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvdmVyaWZpZWQtZW1haWxzL3JvdXRlLnRzXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ0BjbGVyay9uZXh0anMvc2VydmVyJztcbmltcG9ydCBwcmlzbWEgZnJvbSAnQC9saWIvcHJpc21hJztcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInOyAvLyBFbnN1cmUgeW91IGhhdmUgbm9kZW1haWxlciBpbnN0YWxsZWRcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IGdldEF1dGgocmVxdWVzdCk7XG4gIGlmICghdXNlcklkKSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ1VuYXV0aG9yaXplZCcsIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICBjb25zdCB7IGVtYWlsIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAvLyBHZW5lcmF0ZSBPVFBcbiAgY29uc3Qgb3RwID0gTWF0aC5mbG9vcigxMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDAwKS50b1N0cmluZygpO1xuXG4gIC8vIFNhdmUgZW1haWwgYW5kIE9UUCB0byB0aGUgZGF0YWJhc2VcbiAgY29uc3QgdmVyaWZpZWRFbWFpbCA9IGF3YWl0IHByaXNtYS52ZXJpZmllZEVtYWlsLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgdXNlcklkLFxuICAgICAgZW1haWwsXG4gICAgICB2ZXJpZmllZDogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gU2VuZCBPVFAgdmlhIGVtYWlsXG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIHNlcnZpY2U6ICdnbWFpbCcsIC8vIFVzZSB5b3VyIGVtYWlsIHNlcnZpY2VcbiAgICBhdXRoOiB7XG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLCAvLyBZb3VyIGVtYWlsXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9QQVNTLCAvLyBZb3VyIGVtYWlsIHBhc3N3b3JkXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XG4gICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfVVNFUixcbiAgICB0bzogZW1haWwsXG4gICAgc3ViamVjdDogJ1lvdXIgT1RQIGZvciBFbWFpbCBWZXJpZmljYXRpb24nLFxuICAgIHRleHQ6IGBZb3VyIE9UUCBpcyAke290cH0uIFBsZWFzZSB2ZXJpZnkgeW91ciBlbWFpbC5gLFxuICB9O1xuXG4gIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnVmVyaWZpY2F0aW9uIGVtYWlsIHNlbnQnIH0pO1xufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRBdXRoIiwicHJpc21hIiwibm9kZW1haWxlciIsIlBPU1QiLCJyZXF1ZXN0IiwidXNlcklkIiwic3RhdHVzIiwiZW1haWwiLCJqc29uIiwib3RwIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJ2ZXJpZmllZEVtYWlsIiwiY3JlYXRlIiwiZGF0YSIsInZlcmlmaWVkIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfVVNFUiIsInBhc3MiLCJFTUFJTF9QQVNTIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwidGV4dCIsInNlbmRNYWlsIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/verified-emails/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUUvQixpRUFBZUMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@clerk","vendor-chunks/crypto-js","vendor-chunks/tslib","vendor-chunks/cookie","vendor-chunks/map-obj","vendor-chunks/no-case","vendor-chunks/lower-case","vendor-chunks/snakecase-keys","vendor-chunks/snake-case","vendor-chunks/dot-case","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fverified-emails%2Froute&page=%2Fapi%2Fverified-emails%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverified-emails%2Froute.ts&appDir=%2Fhome%2Fitteba%2FDocuments%2Fideas%2Femailia%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fitteba%2FDocuments%2Fideas%2Femailia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();