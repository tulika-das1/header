/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-space {\n  display: none;\n}\n\n@media (min-width: 992px) {\n  .header-space {\n    display: block;\n  }\n}\nbody {\n  margin: 0;\n  background-color: #F1F1F1;\n}\n\n.granite-header {\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: sticky-animation;\n  animation-name: sticky-animation;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n  background: #fff;\n  border: none;\n  left: 0;\n  margin: 0 auto;\n  padding: 0;\n  right: 0;\n  top: 0;\n  width: 100%;\n  z-index: 999;\n}\n\n@media (min-width: 992px) {\n  .granite-header {\n    -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);\n            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);\n    position: -webkit-sticky;\n    position: sticky;\n  }\n}\n.granite-header .header-row {\n  margin-bottom: 1rem;\n  margin-top: 0.5rem;\n}\n\n@media (min-width: 992px) {\n  .granite-header .header-row {\n    margin-bottom: 1rem;\n    margin-top: 0.5rem;\n  }\n}\n.granite-header .header-row .header-icon {\n  gap: 6px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0;\n  padding: 0 0 12px;\n}\n\n@media (min-width: 768px) {\n  .granite-header .header-row .header-icon {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n}\n.granite-header .header-row .header-icon li {\n  list-style-type: none;\n}\n\n.granite-header .header-row .header-icon li a {\n  border-radius: 100%;\n  display: inline-block;\n  height: 30px;\n  position: relative;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  width: 30px;\n}\n\n.granite-header .header-row .header-icon li a:hover {\n  background-color: #000 !important;\n}\n\n.granite-header .header-row .header-icon li a svg {\n  height: 15px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 15px;\n}\n\n.granite-header .header-row .header-icon li:first-child a {\n  fill: #fff;\n  background-color: #3c5b9b;\n}\n\n.granite-header .header-row .header-icon li:nth-child(2) a {\n  fill: #fff;\n  background-color: #27a9e1;\n}\n\n.granite-header .header-row .header-icon li:nth-child(3) a {\n  fill: #fff;\n  background-color: #bc2a8d;\n}\n\n.granite-header .header-row .header-icon li:last-child a {\n  fill: #fff;\n  background-color: #0173b2;\n}\n\n.granite-header .header-row .f-text {\n  color: #354f5c;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  text-align: center;\n}\n\n@media (min-width: 992px) {\n  .granite-header .header-row .f-text {\n    text-align: left;\n  }\n}\n.granite-header .header-row .f-text svg {\n  fill: #2d328f;\n  height: 22px;\n  width: 22px;\n}\n\n.granite-header .header-row .f-text a {\n  color: #2d3193;\n  font-weight: 500;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\n.granite-header .header-row .f-text a:hover {\n  color: #0094de;\n  text-decoration: none;\n}\n\n.granite-header .logo-side {\n  width: 188px;\n}\n\n.granite-header .logo-side img {\n  display: none;\n}\n\n@media (min-width: 992px) {\n  .granite-header .logo-side img {\n    display: block;\n    margin: 0 auto;\n    width: 100%;\n  }\n}\n.granite-header .granite-header-bottom {\n  display: none;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-bottom {\n    border-top: 1px solid #b7b4b4;\n  }\n}\n.granite-header .granite-header-bottom > ul {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-column-gap: 38px;\n  -moz-column-gap: 38px;\n  column-gap: 38px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-justify-content: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.granite-header .granite-header-bottom > ul > li {\n  letter-spacing: 2.2px;\n  list-style-type: none;\n  padding: 15px 0;\n  position: relative;\n}\n\n.granite-header .granite-header-bottom > ul > li > a {\n  color: #354f5c;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  text-decoration: none;\n  text-transform: capitalize;\n  -webkit-transition: color 0.3s ease-in-out;\n  transition: color 0.3s ease-in-out;\n}\n\n.granite-header .granite-header-bottom > ul > li > a:hover {\n  color: #c6c6c6;\n}\n\n.granite-header .granite-header-bottom > ul > li svg {\n  fill: #354f5c;\n  height: 15px;\n  width: 15px;\n}\n\n.granite-header .granite-header-bottom > ul > li ul {\n  background-color: #fff;\n  -webkit-box-shadow: 0 1px 3px 0 #efefef;\n  box-shadow: 0 1px 3px 0 #efefef;\n  left: 0;\n  list-style-type: none;\n  margin: 0;\n  opacity: 0;\n  padding: 0;\n  position: absolute;\n  top: 100%;\n  -webkit-transform: translateY(-10px);\n  transform: translateY(-10px);\n  -webkit-transition: opacity 0.5s ease-in-out, -webkit-transform 0.3s ease-in-out;\n  transition: opacity 0.5s ease-in-out, -webkit-transform 0.3s ease-in-out;\n  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;\n  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n  visibility: hidden;\n  z-index: 10;\n}\n\n.granite-header .granite-header-bottom > ul > li ul > li {\n  position: relative;\n}\n\n.granite-header .granite-header-bottom > ul > li ul > li a {\n  color: #354f5c;\n  display: block;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  outline: none;\n  padding: 7px 25px;\n  text-decoration: none;\n  text-transform: capitalize;\n  white-space: nowrap;\n}\n\n.granite-header .granite-header-bottom > ul > li ul > li > ul {\n  left: 100%;\n  top: 0;\n}\n\n.granite-header .granite-header-bottom > ul > li ul > li:hover > ul {\n  cursor: pointer;\n  opacity: 1;\n  visibility: visible;\n}\n\n.granite-header .granite-header-bottom > ul > li:hover > ul {\n  opacity: 1;\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  visibility: visible;\n}\n\n.granite-header .granite-header-bottom > ul > li .header-btn {\n  background-color: #266d81;\n  font-family: Roboto, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  padding: 10px 20px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  white-space: nowrap;\n}\n\n.granite-header .granite-header-bottom > ul > li .header-btn .request-btn {\n  color: #fff;\n  text-decoration: none;\n}\n\n.granite-header .granite-header-bottom > ul > li .header-btn:hover {\n  opacity: 0.9;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-bottom {\n    display: block;\n  }\n}\n.granite-header .blank-colum {\n  display: none;\n}\n\n@media (min-width: 1200px) {\n  .granite-header .blank-colum {\n    display: block;\n  }\n}\n.granite-header .granite-header-main {\n  display: none;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0 auto;\n  max-width: 540px;\n}\n\n@media (min-width: 768px) {\n  .granite-header .granite-header-main {\n    max-width: 1120px;\n  }\n}\n@media (min-width: 992px) {\n  .granite-header .granite-header-main {\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    max-width: 100%;\n    padding: 0 15px;\n    margin-left: auto;\n    margin-right: 0;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n@media (min-width: 1200px) {\n  .granite-header .granite-header-main {\n    max-width: 1320px;\n    padding: 0;\n  }\n}\n@media (min-width: 1400px) {\n  .granite-header .granite-header-main {\n    max-width: 1570px;\n  }\n}\n.granite-header .granite-header-main .action-menu {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 10px 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-main .action-menu {\n    padding: 0;\n    row-gap: 20px;\n  }\n}\n.granite-header .granite-header-main .action-menu .action-button {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #324f61;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-family: Roboto, sans-serif;\n  font-size: 1em;\n  text-decoration: none;\n  font-weight: 600;\n}\n\n.granite-header .granite-header-main .action-menu .action-button svg {\n  fill: #266d81;\n  height: 15px;\n  width: 15px;\n  display: none;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-main .action-menu .action-button svg {\n    margin-right: 10px;\n    display: block;\n  }\n}\n.granite-header .granite-header-main .action-menu .action-button span {\n  display: none;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-main .action-menu .action-button span {\n    display: block;\n  }\n}\n.granite-header .granite-header-main .action-menu .get-quote-btn {\n  background-color: #266d81;\n  border-radius: 10em;\n  display: block;\n  font-family: Roboto, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  padding: 10px 20px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  white-space: nowrap;\n}\n\n.granite-header .granite-header-main .action-menu .get-quote-btn .quote-btn {\n  color: #fff;\n  text-decoration: none;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-main .action-menu .get-quote-btn {\n    display: none;\n  }\n}\n.granite-header .granite-header-main .logo {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: none;\n  width: 18%;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-main .logo {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n.granite-header .granite-header-main .logo .logo-img {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.granite-header .granite-header-main .granite-menu {\n  display: none;\n}\n\n.granite-header .granite-header-main .granite-menu ul {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  height: 100%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0;\n  padding: 0;\n}\n\n.granite-header .granite-header-main .granite-menu ul li {\n  background: #eae8e8;\n  letter-spacing: 2.2px;\n  list-style-type: none;\n  padding: 2px 10px;\n  position: relative;\n  border-right: 1px solid #266d81;\n}\n.granite-header .granite-header-main .granite-menu ul li:nth-child(5) {\n  border-right: none;\n}\n\n.granite-header .granite-header-main .granite-menu ul li a {\n  color: #000000;\n  font-family: Roboto, sans-serif;\n  font-weight: 600;\n  text-decoration: none;\n  text-transform: capitalize;\n  -webkit-transition: color 0.3s ease-in-out;\n  transition: color 0.3s ease-in-out;\n  font-size: 15px;\n}\n\n.granite-header .granite-header-main .granite-menu ul li a:hover {\n  color: #266d81;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-main .granite-menu {\n    display: block;\n  }\n}\n.responsive-header {\n  background-color: #fff;\n  padding: 5px 15px;\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  right: 0;\n  top: 0;\n  width: 100%;\n  z-index: 9999;\n}\n.responsive-header .mobile-header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n.responsive-header .mobile-header .responsive-menu-btn svg {\n  width: 30px;\n  height: 30px;\n  fill: #266D81;\n}\n.responsive-header .mobile-header .logo {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 50%;\n}\n.responsive-header .mobile-header .logo img {\n  display: block;\n  width: 100%;\n  margin: 0 auto;\n}\n@media (min-width: 576px) {\n  .responsive-header .mobile-header .logo {\n    width: 30%;\n  }\n}\n@media (min-width: 768px) {\n  .responsive-header .mobile-header .logo {\n    width: 30%;\n  }\n}\n.responsive-header .mobile-header .get-quote-btn {\n  background-color: #266D81;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  padding: 10px 20px;\n  white-space: nowrap;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  display: block;\n}\n.responsive-header .mobile-header .get-quote-btn .quote-btn {\n  text-decoration: none;\n  color: #fff;\n}\n@media (min-width: 992px) {\n  .responsive-header .mobile-header .get-quote-btn {\n    display: none;\n  }\n}\n@media (min-width: 992px) {\n  .responsive-header {\n    display: none;\n  }\n}\n\n.responsive-menu {\n  background-color: #E8E8E8;\n  height: 100vh;\n  width: 100vw;\n  overflow: auto;\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 30px 20px;\n  z-index: 100000;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: -webkit-transform 0.2s ease-out;\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n}\n.responsive-menu.hide {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n.responsive-menu .header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 5px 20px 5px 0;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.responsive-menu .header #close {\n  background: transparent;\n  border: none;\n}\n.responsive-menu .header #close svg {\n  height: 30px;\n  width: 30px;\n  color: #266D81;\n}\n.responsive-menu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.responsive-menu ul li {\n  padding: 10px 0;\n}\n.responsive-menu ul li a {\n  text-decoration: none;\n  font-size: 1.3em;\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.responsive-menu ul li .header-btn .request-btn {\n  background-color: #266d81;\n  font-family: Roboto, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  padding: 10px 20px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  white-space: nowrap;\n  color: #fff;\n  text-decoration: none;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.quoatation {\n  background-color: #EDEDED;\n  padding-bottom: 50px;\n}\n.quoatation .quote-heading {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n  font-size: 1.6em;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 100px;\n  margin-top: 0;\n  padding-top: 10px;\n}\n.quoatation .process-container-main {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  max-width: 540px;\n  margin: 0 auto;\n}\n@media (min-width: 768px) {\n  .quoatation .process-container-main {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .quoatation .process-container-main {\n    max-width: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  .quoatation .process-container-main {\n    max-width: 1140px;\n    padding: 0;\n  }\n}\n@media (min-width: 1400px) {\n  .quoatation .process-container-main {\n    max-width: 1320px;\n  }\n}\n.quoatation .process-container-main .process-quote {\n  width: 100%;\n}\n.quoatation .process-container-main .process-quote .process-quote-img-container .process-quote-img {\n  width: 25%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n}\n.quoatation .process-container-main .process-quote .process-quote-content .process-quote-heading {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n  font-size: 1.4em;\n  font-weight: 600;\n}\n.quoatation .process-container-main .process-quote .process-quote-content .process-quote-text {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  color: #808080;\n  font-size: 1em;\n  font-weight: 500;\n  line-height: 1.44;\n}\n\n.quartz-granite-part {\n  background-color: #ffffff;\n  margin: auto;\n  max-width: 1320px;\n  padding: 20px 10px;\n  margin-bottom: 50px;\n  margin-top: 50px;\n  -webkit-box-shadow: 0px 1px 5px 1px rgba(209, 207, 207, 0.8509803922);\n          box-shadow: 0px 1px 5px 1px rgba(209, 207, 207, 0.8509803922);\n}\n.quartz-granite-part .quartz-heading-main {\n  background-color: #F1F1F1;\n  max-width: 1320px;\n  margin: auto;\n}\n.quartz-granite-part .quartz-heading-main .quartz-heading {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  color: #000;\n  font-size: 1.7em;\n  text-transform: uppercase;\n  padding: 5px 0;\n  margin-top: 0;\n}\n.quartz-granite-part .quartz-img-main {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  max-width: 1320px;\n  margin: 0 auto;\n}\n.quartz-granite-part .quartz-img-main .quartz-main .quartz-img-container {\n  margin: 0 10px;\n}\n.quartz-granite-part .quartz-img-main .quartz-main .quartz-img-container .quartz-img {\n  width: 100%;\n}\n.quartz-granite-part .quartz-img-main .quartz-main .quartz-img-container .quartz-name {\n  background-color: #91BFD8;\n  width: 100%;\n  margin: 0;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  color: #000;\n  font-size: 1em;\n  text-transform: capitalize;\n  margin-top: -10px;\n  padding-top: 11px;\n  padding-bottom: 7px;\n}\n.quartz-granite-part .granite-heading-main {\n  background-color: #F1F1F1;\n  max-width: 1320px;\n  margin: auto;\n}\n.quartz-granite-part .granite-heading-main .granite-heading {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  color: #000;\n  font-size: 1.7em;\n  text-transform: uppercase;\n  margin-top: 27px;\n  padding: 5px 0;\n}\n.quartz-granite-part .granite-img-main {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  max-width: 1320px;\n  margin: 0 auto;\n}\n.quartz-granite-part .granite-img-main .granite-main .granite-img-container {\n  margin: 0 10px;\n}\n.quartz-granite-part .granite-img-main .granite-main .granite-img-container .granite-img {\n  width: 100%;\n}\n.quartz-granite-part .granite-img-main .granite-main .granite-img-container .granite-name {\n  background-color: #91BFD8;\n  width: 100%;\n  margin: 0;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  color: #000;\n  font-size: 1em;\n  text-transform: capitalize;\n  margin-top: -10px;\n  padding-top: 11px;\n  padding-bottom: 7px;\n}\n.quartz-granite-part .row-flex {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin-right: -15px;\n  margin-left: -15px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 1 auto;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}", "",{"version":3,"sources":["webpack://./src/scss/_header.scss","webpack://./src/scss/app.scss","webpack://./src/scss/_variable.scss","webpack://./src/scss/_home.scss"],"names":[],"mappings":"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","sourcesContent":[".header-space {\r\n    display: none;\r\n}\r\n@media (min-width: 992px) {\r\n    .header-space {\r\n        display: block;\r\n    }\r\n}\r\nbody{\r\n    margin: 0;\r\n    background-color: #F1F1F1;\r\n}\r\n.granite-header {\r\n    -webkit-animation-duration: 0.5s;\r\n    animation-duration: 0.5s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n    -webkit-animation-name: sticky-animation;\r\n    animation-name: sticky-animation;\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n    background: #fff;\r\n    border: none;\r\n    left: 0;\r\n    margin:0 auto;\r\n    padding: 0;\r\n    right: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 999;\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header {\r\n        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);\r\n        position: sticky;\r\n    }\r\n}\r\n.granite-header .header-row {\r\n    margin-bottom: 1rem;\r\n    margin-top: 0.5rem;\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header .header-row {\r\n        margin-bottom: 1rem;\r\n        margin-top: 0.5rem;\r\n    }\r\n}\r\n.granite-header .header-row .header-icon {\r\n    gap: 6px;\r\n    justify-content: center;\r\n    margin: 0;\r\n    padding: 0 0 12px;\r\n}\r\n@media (min-width: 768px) {\r\n    .granite-header .header-row .header-icon {\r\n        justify-content: flex-start;\r\n    }\r\n}\r\n.granite-header .header-row .header-icon li {\r\n    list-style-type: none;\r\n}\r\n.granite-header .header-row .header-icon li a {\r\n    border-radius: 100%;\r\n    display: inline-block;\r\n    height: 30px;\r\n    position: relative;\r\n    transition: all 0.3s ease-in-out;\r\n    width: 30px;\r\n}\r\n.granite-header .header-row .header-icon li a:hover {\r\n    background-color: #000 !important;\r\n}\r\n.granite-header .header-row .header-icon li a svg {\r\n    height: 15px;\r\n    left: 50%;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 15px;\r\n}\r\n.granite-header .header-row .header-icon li:first-child a {\r\n    fill: #fff;\r\n    background-color: #3c5b9b;\r\n}\r\n.granite-header .header-row .header-icon li:nth-child(2) a {\r\n    fill: #fff;\r\n    background-color: #27a9e1;\r\n}\r\n.granite-header .header-row .header-icon li:nth-child(3) a {\r\n    fill: #fff;\r\n    background-color: #bc2a8d;\r\n}\r\n.granite-header .header-row .header-icon li:last-child a {\r\n    fill: #fff;\r\n    background-color: #0173b2;\r\n}\r\n.granite-header .header-row .f-text {\r\n    color: #354f5c;\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 400;\r\n    text-align: center;\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header .header-row .f-text {\r\n        text-align: left;\r\n    }\r\n}\r\n.granite-header .header-row .f-text svg {\r\n    fill: #2d328f;\r\n    height: 22px;\r\n    width: 22px;\r\n}\r\n.granite-header .header-row .f-text a {\r\n    color: #2d3193;\r\n    font-weight: 500;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n.granite-header .header-row .f-text a:hover {\r\n    color: #0094de;\r\n    text-decoration: none;\r\n}\r\n.granite-header .logo-side {\r\n    width: 188px;\r\n}\r\n.granite-header .logo-side img {\r\n    display: none;\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header .logo-side img {\r\n        display: block;\r\n        margin: 0 auto;\r\n        width: 100%;\r\n    }\r\n}\r\n.granite-header .granite-header-bottom {\r\n    display: none;\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header .granite-header-bottom  {\r\n        border-top: 1px solid #b7b4b4;\r\n    }\r\n}\r\n.granite-header .granite-header-bottom > ul {\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    -webkit-align-items: center;\r\n    align-items: center;\r\n    -webkit-column-gap: 38px;\r\n    -moz-column-gap: 38px;\r\n    column-gap: 38px;\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-justify-content: center;\r\n    justify-content: center;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n.granite-header .granite-header-bottom > ul > li {\r\n    letter-spacing: 2.2px;\r\n    list-style-type: none;\r\n    padding: 15px 0;\r\n    position: relative;\r\n}\r\n.granite-header .granite-header-bottom > ul > li > a {\r\n    color: #354f5c;\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 400;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n    -webkit-transition: color 0.3s ease-in-out;\r\n    transition: color 0.3s ease-in-out;\r\n}\r\n.granite-header .granite-header-bottom > ul > li > a:hover {\r\n    color: #c6c6c6;\r\n}\r\n.granite-header .granite-header-bottom > ul > li svg {\r\n    fill: #354f5c;\r\n    height: 15px;\r\n    width: 15px;\r\n}\r\n.granite-header .granite-header-bottom > ul > li ul {\r\n    background-color: #fff;\r\n    -webkit-box-shadow: 0 1px 3px 0 #efefef;\r\n    box-shadow: 0 1px 3px 0 #efefef;\r\n    left: 0;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    opacity: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    top: 100%;\r\n    -webkit-transform: translateY(-10px);\r\n    transform: translateY(-10px);\r\n    -webkit-transition: opacity 0.5s ease-in-out,\r\n        -webkit-transform 0.3s ease-in-out;\r\n    transition: opacity 0.5s ease-in-out, -webkit-transform 0.3s ease-in-out;\r\n    transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;\r\n    transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out,\r\n        -webkit-transform 0.3s ease-in-out;\r\n    visibility: hidden;\r\n    z-index: 10;\r\n}\r\n.granite-header .granite-header-bottom > ul > li ul > li {\r\n    position: relative;\r\n}\r\n.granite-header .granite-header-bottom > ul > li ul > li a {\r\n    color: #354f5c;\r\n    display: block;\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 400;\r\n    outline: none;\r\n    padding: 7px 25px;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n    white-space: nowrap;\r\n}\r\n.granite-header .granite-header-bottom > ul > li ul > li > ul {\r\n    left: 100%;\r\n    top: 0;\r\n}\r\n.granite-header .granite-header-bottom > ul > li ul > li:hover > ul {\r\n    cursor: pointer;\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n.granite-header .granite-header-bottom > ul > li:hover > ul {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    visibility: visible;\r\n}\r\n.granite-header .granite-header-bottom > ul > li .header-btn {\r\n    background-color: #266d81;\r\n    // border-radius: 10em;\r\n    font-family: Roboto, sans-serif;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    padding: 10px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n    white-space: nowrap;\r\n}\r\n.granite-header .granite-header-bottom > ul > li .header-btn .request-btn {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n.granite-header .granite-header-bottom > ul > li .header-btn:hover {\r\n    opacity: 0.9;\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header .granite-header-bottom {\r\n        display: block;\r\n    }\r\n}\r\n.granite-header .blank-colum {\r\n    display: none;\r\n}\r\n@media (min-width: 1200px) {\r\n    .granite-header .blank-colum {\r\n        display: block;\r\n    }\r\n}\r\n.granite-header .granite-header-main {\r\n    display: none;\r\n    justify-content: center;\r\n    margin:0 auto;\r\n    max-width: 540px;\r\n}\r\n@media (min-width: 768px) {\r\n    .granite-header .granite-header-main {\r\n        max-width: 1120px;\r\n    }\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header .granite-header-main {\r\n        justify-content: space-between;\r\n        max-width: 100%;\r\n        padding: 0 15px;\r\n        margin-left:auto;\r\n        margin-right: 0;\r\n        display: flex;\r\n    }\r\n}\r\n@media (min-width: 1200px) {\r\n    .granite-header .granite-header-main {\r\n        max-width: 1320px;\r\n        padding: 0;\r\n    }\r\n}\r\n@media (min-width: 1400px) {\r\n    .granite-header .granite-header-main {\r\n        max-width: 1570px;\r\n    }\r\n}\r\n.granite-header .granite-header-main .action-menu {\r\n    align-items: flex-start;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding: 10px 0;\r\n    flex-direction: column;\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header .granite-header-main .action-menu {\r\n        padding: 0;\r\n        row-gap: 20px;\r\n        \r\n    }\r\n}\r\n.granite-header .granite-header-main .action-menu .action-button {\r\n    align-items: center;\r\n    color: #324f61;\r\n    display: inline-flex;\r\n    font-family: Roboto, sans-serif;\r\n    font-size: 1em;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n}\r\n.granite-header .granite-header-main .action-menu .action-button svg {\r\n    fill: #266d81;\r\n    height: 15px;\r\n    width: 15px;\r\n    // width: 30px;\r\n    display: none;\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header .granite-header-main .action-menu .action-button svg {\r\n        margin-right: 10px;\r\n        display: block;\r\n    }\r\n}\r\n.granite-header .granite-header-main .action-menu .action-button span {\r\n    display: none;\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header .granite-header-main .action-menu .action-button span {\r\n        display: block;\r\n    }\r\n}\r\n.granite-header .granite-header-main .action-menu .get-quote-btn {\r\n    background-color: #266d81;\r\n    border-radius: 10em;\r\n    display: block;\r\n    font-family: Roboto, sans-serif;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    padding: 10px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n    white-space: nowrap;\r\n}\r\n.granite-header .granite-header-main .action-menu .get-quote-btn .quote-btn {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header .granite-header-main .action-menu .get-quote-btn {\r\n        display: none;\r\n    }\r\n}\r\n.granite-header .granite-header-main .logo {\r\n    align-items: center;\r\n    display: none;\r\n    width: 18%;\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header .granite-header-main .logo {\r\n        display: -webkit-box;\r\n        display: -webkit-flex;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n    }\r\n}\r\n.granite-header .granite-header-main .logo .logo-img {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n}\r\n.granite-header .granite-header-main .granite-menu {\r\n    display: none;\r\n}\r\n.granite-header .granite-header-main .granite-menu ul {\r\n    align-items: flex-start;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    height: 100%;\r\n    justify-content: center;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.granite-header .granite-header-main .granite-menu ul li {\r\n    background: #eae8e8;\r\n    letter-spacing: 2.2px;\r\n    list-style-type: none;\r\n    padding: 2px 10px;\r\n    position: relative;\r\n    border-right: 1px solid #266d81;\r\n    &:nth-child(5){\r\n        border-right: none;\r\n    }\r\n\r\n}\r\n.granite-header .granite-header-main .granite-menu ul li a {\r\n    color: #000000;\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n    transition: color 0.3s ease-in-out;\r\n    font-size: 15px;\r\n}\r\n.granite-header .granite-header-main .granite-menu ul li a:hover {\r\n    color: #266d81;\r\n}\r\n@media (min-width: 992px) {\r\n    .granite-header .granite-header-main .granite-menu {\r\n        display: block;\r\n    }\r\n}\r\n\r\n.responsive-header {\r\n    background-color: #fff;\r\n    padding: 5px 15px;\r\n    position: sticky;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 9999;\r\n    .mobile-header{\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        width: 100%;\r\n        .responsive-menu-btn {\r\n            svg {\r\n                width: 30px;\r\n                height: 30px;\r\n                fill: #266D81;\r\n            }\r\n        }\r\n        .logo{\r\n            display: flex;\r\n            width: 50%;\r\n            img{\r\n                display: block;\r\n                width: 100%;\r\n                margin: 0 auto;\r\n            }\r\n            @media (min-width: 576px){\r\n                width: 30%;\r\n            }\r\n            @media (min-width: 768px){\r\n                width: 30%;\r\n            }\r\n        }\r\n        .get-quote-btn{\r\n            background-color: #266D81;\r\n            font-family: $primary-font;\r\n            font-size: 1em;\r\n            font-weight: 400;\r\n            padding: 10px 20px;\r\n            white-space: nowrap;\r\n            transition: all 0.3s ease-in-out;\r\n            display: block;\r\n            .quote-btn{\r\n                text-decoration: none;\r\n                color: #fff;\r\n            }\r\n            @media (min-width: 992px)\r\n            {\r\n                display: none;\r\n            }\r\n        }\r\n    }\r\n\r\n   @media (min-width: 992px)\r\n    {\r\n        display: none;\r\n    } \r\n}\r\n\r\n.responsive-menu {\r\n    background-color: #E8E8E8;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    overflow: auto;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 30px 20px;\r\n    z-index: 100000;\r\n    transform: translateY(0);\r\n    transition: transform 0.2s ease-out;\r\n\r\n    &.hide {\r\n        transform: translateX(-100%);\r\n    }\r\n\r\n    .header {\r\n        display: flex;\r\n        padding: 5px 20px 5px 0;\r\n        justify-content: flex-end;\r\n\r\n        #close {\r\n            background: transparent;\r\n            border: none;\r\n            svg{\r\n                height: 30px;\r\n                width: 30px;\r\n                color: #266D81;\r\n            }\r\n        }\r\n    }\r\n\r\n    ul {\r\n        margin: 0;\r\n        padding: 0;\r\n        list-style: none;\r\n\r\n        li {\r\n            padding: 10px 0;\r\n\r\n            a {\r\n                text-decoration: none;\r\n                font-size: 1.3em;\r\n                color: #000;\r\n                font-family:$primary-font;\r\n            }\r\n            .header-btn{\r\n                .request-btn{\r\n                    background-color: #266d81;\r\n                    font-family: Roboto, sans-serif;\r\n                    font-size: 1rem;\r\n                    font-weight: 400;\r\n                    padding: 10px 20px;\r\n                    transition: all 0.3s ease-in-out;\r\n                    white-space: nowrap;\r\n                    color: #fff;\r\n                    text-decoration: none;\r\n                    font-family: $primary-font;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}",".header-space {\n  display: none;\n}\n\n@media (min-width: 992px) {\n  .header-space {\n    display: block;\n  }\n}\nbody {\n  margin: 0;\n  background-color: #F1F1F1;\n}\n\n.granite-header {\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: sticky-animation;\n  animation-name: sticky-animation;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n  background: #fff;\n  border: none;\n  left: 0;\n  margin: 0 auto;\n  padding: 0;\n  right: 0;\n  top: 0;\n  width: 100%;\n  z-index: 999;\n}\n\n@media (min-width: 992px) {\n  .granite-header {\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);\n    position: sticky;\n  }\n}\n.granite-header .header-row {\n  margin-bottom: 1rem;\n  margin-top: 0.5rem;\n}\n\n@media (min-width: 992px) {\n  .granite-header .header-row {\n    margin-bottom: 1rem;\n    margin-top: 0.5rem;\n  }\n}\n.granite-header .header-row .header-icon {\n  gap: 6px;\n  justify-content: center;\n  margin: 0;\n  padding: 0 0 12px;\n}\n\n@media (min-width: 768px) {\n  .granite-header .header-row .header-icon {\n    justify-content: flex-start;\n  }\n}\n.granite-header .header-row .header-icon li {\n  list-style-type: none;\n}\n\n.granite-header .header-row .header-icon li a {\n  border-radius: 100%;\n  display: inline-block;\n  height: 30px;\n  position: relative;\n  transition: all 0.3s ease-in-out;\n  width: 30px;\n}\n\n.granite-header .header-row .header-icon li a:hover {\n  background-color: #000 !important;\n}\n\n.granite-header .header-row .header-icon li a svg {\n  height: 15px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 15px;\n}\n\n.granite-header .header-row .header-icon li:first-child a {\n  fill: #fff;\n  background-color: #3c5b9b;\n}\n\n.granite-header .header-row .header-icon li:nth-child(2) a {\n  fill: #fff;\n  background-color: #27a9e1;\n}\n\n.granite-header .header-row .header-icon li:nth-child(3) a {\n  fill: #fff;\n  background-color: #bc2a8d;\n}\n\n.granite-header .header-row .header-icon li:last-child a {\n  fill: #fff;\n  background-color: #0173b2;\n}\n\n.granite-header .header-row .f-text {\n  color: #354f5c;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  text-align: center;\n}\n\n@media (min-width: 992px) {\n  .granite-header .header-row .f-text {\n    text-align: left;\n  }\n}\n.granite-header .header-row .f-text svg {\n  fill: #2d328f;\n  height: 22px;\n  width: 22px;\n}\n\n.granite-header .header-row .f-text a {\n  color: #2d3193;\n  font-weight: 500;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\n.granite-header .header-row .f-text a:hover {\n  color: #0094de;\n  text-decoration: none;\n}\n\n.granite-header .logo-side {\n  width: 188px;\n}\n\n.granite-header .logo-side img {\n  display: none;\n}\n\n@media (min-width: 992px) {\n  .granite-header .logo-side img {\n    display: block;\n    margin: 0 auto;\n    width: 100%;\n  }\n}\n.granite-header .granite-header-bottom {\n  display: none;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-bottom {\n    border-top: 1px solid #b7b4b4;\n  }\n}\n.granite-header .granite-header-bottom > ul {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-column-gap: 38px;\n  -moz-column-gap: 38px;\n  column-gap: 38px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-justify-content: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.granite-header .granite-header-bottom > ul > li {\n  letter-spacing: 2.2px;\n  list-style-type: none;\n  padding: 15px 0;\n  position: relative;\n}\n\n.granite-header .granite-header-bottom > ul > li > a {\n  color: #354f5c;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  text-decoration: none;\n  text-transform: capitalize;\n  -webkit-transition: color 0.3s ease-in-out;\n  transition: color 0.3s ease-in-out;\n}\n\n.granite-header .granite-header-bottom > ul > li > a:hover {\n  color: #c6c6c6;\n}\n\n.granite-header .granite-header-bottom > ul > li svg {\n  fill: #354f5c;\n  height: 15px;\n  width: 15px;\n}\n\n.granite-header .granite-header-bottom > ul > li ul {\n  background-color: #fff;\n  -webkit-box-shadow: 0 1px 3px 0 #efefef;\n  box-shadow: 0 1px 3px 0 #efefef;\n  left: 0;\n  list-style-type: none;\n  margin: 0;\n  opacity: 0;\n  padding: 0;\n  position: absolute;\n  top: 100%;\n  -webkit-transform: translateY(-10px);\n  transform: translateY(-10px);\n  -webkit-transition: opacity 0.5s ease-in-out, -webkit-transform 0.3s ease-in-out;\n  transition: opacity 0.5s ease-in-out, -webkit-transform 0.3s ease-in-out;\n  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;\n  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n  visibility: hidden;\n  z-index: 10;\n}\n\n.granite-header .granite-header-bottom > ul > li ul > li {\n  position: relative;\n}\n\n.granite-header .granite-header-bottom > ul > li ul > li a {\n  color: #354f5c;\n  display: block;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  outline: none;\n  padding: 7px 25px;\n  text-decoration: none;\n  text-transform: capitalize;\n  white-space: nowrap;\n}\n\n.granite-header .granite-header-bottom > ul > li ul > li > ul {\n  left: 100%;\n  top: 0;\n}\n\n.granite-header .granite-header-bottom > ul > li ul > li:hover > ul {\n  cursor: pointer;\n  opacity: 1;\n  visibility: visible;\n}\n\n.granite-header .granite-header-bottom > ul > li:hover > ul {\n  opacity: 1;\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  visibility: visible;\n}\n\n.granite-header .granite-header-bottom > ul > li .header-btn {\n  background-color: #266d81;\n  font-family: Roboto, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  padding: 10px 20px;\n  transition: all 0.3s ease-in-out;\n  white-space: nowrap;\n}\n\n.granite-header .granite-header-bottom > ul > li .header-btn .request-btn {\n  color: #fff;\n  text-decoration: none;\n}\n\n.granite-header .granite-header-bottom > ul > li .header-btn:hover {\n  opacity: 0.9;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-bottom {\n    display: block;\n  }\n}\n.granite-header .blank-colum {\n  display: none;\n}\n\n@media (min-width: 1200px) {\n  .granite-header .blank-colum {\n    display: block;\n  }\n}\n.granite-header .granite-header-main {\n  display: none;\n  justify-content: center;\n  margin: 0 auto;\n  max-width: 540px;\n}\n\n@media (min-width: 768px) {\n  .granite-header .granite-header-main {\n    max-width: 1120px;\n  }\n}\n@media (min-width: 992px) {\n  .granite-header .granite-header-main {\n    justify-content: space-between;\n    max-width: 100%;\n    padding: 0 15px;\n    margin-left: auto;\n    margin-right: 0;\n    display: flex;\n  }\n}\n@media (min-width: 1200px) {\n  .granite-header .granite-header-main {\n    max-width: 1320px;\n    padding: 0;\n  }\n}\n@media (min-width: 1400px) {\n  .granite-header .granite-header-main {\n    max-width: 1570px;\n  }\n}\n.granite-header .granite-header-main .action-menu {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 10px 0;\n  flex-direction: column;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-main .action-menu {\n    padding: 0;\n    row-gap: 20px;\n  }\n}\n.granite-header .granite-header-main .action-menu .action-button {\n  align-items: center;\n  color: #324f61;\n  display: inline-flex;\n  font-family: Roboto, sans-serif;\n  font-size: 1em;\n  text-decoration: none;\n  font-weight: 600;\n}\n\n.granite-header .granite-header-main .action-menu .action-button svg {\n  fill: #266d81;\n  height: 15px;\n  width: 15px;\n  display: none;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-main .action-menu .action-button svg {\n    margin-right: 10px;\n    display: block;\n  }\n}\n.granite-header .granite-header-main .action-menu .action-button span {\n  display: none;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-main .action-menu .action-button span {\n    display: block;\n  }\n}\n.granite-header .granite-header-main .action-menu .get-quote-btn {\n  background-color: #266d81;\n  border-radius: 10em;\n  display: block;\n  font-family: Roboto, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  padding: 10px 20px;\n  transition: all 0.3s ease-in-out;\n  white-space: nowrap;\n}\n\n.granite-header .granite-header-main .action-menu .get-quote-btn .quote-btn {\n  color: #fff;\n  text-decoration: none;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-main .action-menu .get-quote-btn {\n    display: none;\n  }\n}\n.granite-header .granite-header-main .logo {\n  align-items: center;\n  display: none;\n  width: 18%;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-main .logo {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n.granite-header .granite-header-main .logo .logo-img {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.granite-header .granite-header-main .granite-menu {\n  display: none;\n}\n\n.granite-header .granite-header-main .granite-menu ul {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n}\n\n.granite-header .granite-header-main .granite-menu ul li {\n  background: #eae8e8;\n  letter-spacing: 2.2px;\n  list-style-type: none;\n  padding: 2px 10px;\n  position: relative;\n  border-right: 1px solid #266d81;\n}\n.granite-header .granite-header-main .granite-menu ul li:nth-child(5) {\n  border-right: none;\n}\n\n.granite-header .granite-header-main .granite-menu ul li a {\n  color: #000000;\n  font-family: Roboto, sans-serif;\n  font-weight: 600;\n  text-decoration: none;\n  text-transform: capitalize;\n  transition: color 0.3s ease-in-out;\n  font-size: 15px;\n}\n\n.granite-header .granite-header-main .granite-menu ul li a:hover {\n  color: #266d81;\n}\n\n@media (min-width: 992px) {\n  .granite-header .granite-header-main .granite-menu {\n    display: block;\n  }\n}\n.responsive-header {\n  background-color: #fff;\n  padding: 5px 15px;\n  position: sticky;\n  left: 0;\n  right: 0;\n  top: 0;\n  width: 100%;\n  z-index: 9999;\n}\n.responsive-header .mobile-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.responsive-header .mobile-header .responsive-menu-btn svg {\n  width: 30px;\n  height: 30px;\n  fill: #266D81;\n}\n.responsive-header .mobile-header .logo {\n  display: flex;\n  width: 50%;\n}\n.responsive-header .mobile-header .logo img {\n  display: block;\n  width: 100%;\n  margin: 0 auto;\n}\n@media (min-width: 576px) {\n  .responsive-header .mobile-header .logo {\n    width: 30%;\n  }\n}\n@media (min-width: 768px) {\n  .responsive-header .mobile-header .logo {\n    width: 30%;\n  }\n}\n.responsive-header .mobile-header .get-quote-btn {\n  background-color: #266D81;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  padding: 10px 20px;\n  white-space: nowrap;\n  transition: all 0.3s ease-in-out;\n  display: block;\n}\n.responsive-header .mobile-header .get-quote-btn .quote-btn {\n  text-decoration: none;\n  color: #fff;\n}\n@media (min-width: 992px) {\n  .responsive-header .mobile-header .get-quote-btn {\n    display: none;\n  }\n}\n@media (min-width: 992px) {\n  .responsive-header {\n    display: none;\n  }\n}\n\n.responsive-menu {\n  background-color: #E8E8E8;\n  height: 100vh;\n  width: 100vw;\n  overflow: auto;\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 30px 20px;\n  z-index: 100000;\n  transform: translateY(0);\n  transition: transform 0.2s ease-out;\n}\n.responsive-menu.hide {\n  transform: translateX(-100%);\n}\n.responsive-menu .header {\n  display: flex;\n  padding: 5px 20px 5px 0;\n  justify-content: flex-end;\n}\n.responsive-menu .header #close {\n  background: transparent;\n  border: none;\n}\n.responsive-menu .header #close svg {\n  height: 30px;\n  width: 30px;\n  color: #266D81;\n}\n.responsive-menu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.responsive-menu ul li {\n  padding: 10px 0;\n}\n.responsive-menu ul li a {\n  text-decoration: none;\n  font-size: 1.3em;\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.responsive-menu ul li .header-btn .request-btn {\n  background-color: #266d81;\n  font-family: Roboto, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  padding: 10px 20px;\n  transition: all 0.3s ease-in-out;\n  white-space: nowrap;\n  color: #fff;\n  text-decoration: none;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.quoatation {\n  background-color: #EDEDED;\n  padding-bottom: 50px;\n}\n.quoatation .quote-heading {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n  font-size: 1.6em;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 100px;\n  margin-top: 0;\n  padding-top: 10px;\n}\n.quoatation .process-container-main {\n  display: flex;\n  justify-content: space-between;\n  max-width: 540px;\n  margin: 0 auto;\n}\n@media (min-width: 768px) {\n  .quoatation .process-container-main {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .quoatation .process-container-main {\n    max-width: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  .quoatation .process-container-main {\n    max-width: 1140px;\n    padding: 0;\n  }\n}\n@media (min-width: 1400px) {\n  .quoatation .process-container-main {\n    max-width: 1320px;\n  }\n}\n.quoatation .process-container-main .process-quote {\n  width: 100%;\n}\n.quoatation .process-container-main .process-quote .process-quote-img-container .process-quote-img {\n  width: 25%;\n  display: flex;\n  margin: 0 auto;\n}\n.quoatation .process-container-main .process-quote .process-quote-content .process-quote-heading {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n  font-size: 1.4em;\n  font-weight: 600;\n}\n.quoatation .process-container-main .process-quote .process-quote-content .process-quote-text {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  color: #808080;\n  font-size: 1em;\n  font-weight: 500;\n  line-height: 1.44;\n}\n\n.quartz-granite-part {\n  background-color: #ffffff;\n  margin: auto;\n  max-width: 1320px;\n  padding: 20px 10px;\n  margin-bottom: 50px;\n  margin-top: 50px;\n  box-shadow: 0px 1px 5px 1px rgba(209, 207, 207, 0.8509803922);\n}\n.quartz-granite-part .quartz-heading-main {\n  background-color: #F1F1F1;\n  max-width: 1320px;\n  margin: auto;\n}\n.quartz-granite-part .quartz-heading-main .quartz-heading {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  color: #000;\n  font-size: 1.7em;\n  text-transform: uppercase;\n  padding: 5px 0;\n  margin-top: 0;\n}\n.quartz-granite-part .quartz-img-main {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1320px;\n  margin: 0 auto;\n}\n.quartz-granite-part .quartz-img-main .quartz-main .quartz-img-container {\n  margin: 0 10px;\n}\n.quartz-granite-part .quartz-img-main .quartz-main .quartz-img-container .quartz-img {\n  width: 100%;\n}\n.quartz-granite-part .quartz-img-main .quartz-main .quartz-img-container .quartz-name {\n  background-color: #91BFD8;\n  width: 100%;\n  margin: 0;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  color: #000;\n  font-size: 1em;\n  text-transform: capitalize;\n  margin-top: -10px;\n  padding-top: 11px;\n  padding-bottom: 7px;\n}\n.quartz-granite-part .granite-heading-main {\n  background-color: #F1F1F1;\n  max-width: 1320px;\n  margin: auto;\n}\n.quartz-granite-part .granite-heading-main .granite-heading {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  color: #000;\n  font-size: 1.7em;\n  text-transform: uppercase;\n  margin-top: 27px;\n  padding: 5px 0;\n}\n.quartz-granite-part .granite-img-main {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1320px;\n  margin: 0 auto;\n}\n.quartz-granite-part .granite-img-main .granite-main .granite-img-container {\n  margin: 0 10px;\n}\n.quartz-granite-part .granite-img-main .granite-main .granite-img-container .granite-img {\n  width: 100%;\n}\n.quartz-granite-part .granite-img-main .granite-main .granite-img-container .granite-name {\n  background-color: #91BFD8;\n  width: 100%;\n  margin: 0;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  color: #000;\n  font-size: 1em;\n  text-transform: capitalize;\n  margin-top: -10px;\n  padding-top: 11px;\n  padding-bottom: 7px;\n}\n.quartz-granite-part .row-flex {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin-right: -15px;\n  margin-left: -15px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 1 auto;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}","$primary-font: 'Roboto', sans-serif;",".quoatation{\r\n    background-color: #EDEDED;\r\n    padding-bottom: 50px;\r\n    .quote-heading{\r\n        text-align: center;\r\n        font-family: $primary-font;\r\n        color: #000;\r\n        font-size: 1.6em;\r\n        font-weight: 500;\r\n        text-transform: uppercase;\r\n        margin-bottom: 100px;\r\n        margin-top: 0;\r\n        padding-top: 10px;\r\n    }\r\n    .process-container-main{\r\n        display: flex;\r\n        justify-content: space-between;\r\n        max-width: 540px;\r\n        margin: 0 auto;\r\n        @media (min-width: 768px)\r\n        {\r\n            max-width: 720px;\r\n        }\r\n        @media (min-width: 992px)\r\n        {\r\n            max-width: 100%;\r\n            \r\n        }\r\n        @media (min-width: 1200px)\r\n        {\r\n            max-width: 1140px;\r\n            padding: 0;\r\n        }\r\n        @media (min-width: 1400px)\r\n        {\r\n            max-width: 1320px;\r\n        }\r\n        .process-quote{\r\n            width: 100%;\r\n            .process-quote-img-container{\r\n                .process-quote-img{\r\n                    width: 25%;\r\n                    display: flex;\r\n                    margin: 0 auto;\r\n                }\r\n            }\r\n            .process-quote-content{\r\n                .process-quote-heading{\r\n                    text-align: center;\r\n                    font-family: $primary-font;\r\n                    color: #000;\r\n                    font-size: 1.4em;\r\n                    font-weight: 600;\r\n                }\r\n                .process-quote-text{\r\n                    text-align: center;\r\n                    font-family: $primary-font;\r\n                    color: #808080;\r\n                    font-size: 1em;\r\n                    font-weight: 500;\r\n                    line-height: 1.44;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n}\r\n\r\n.quartz-granite-part{\r\n    background-color: #ffffff;\r\n    margin: auto;\r\n    max-width: 1320px;\r\n    padding: 20px 10px;\r\n    margin-bottom: 50px;\r\n    margin-top: 50px;\r\n    box-shadow: 0px 1px 5px 1px #d1cfcfd9;\r\n    .quartz-heading-main{\r\n        background-color: #F1F1F1;\r\n        max-width: 1320px;\r\n        margin: auto;\r\n        .quartz-heading{\r\n            text-align: center;\r\n            font-family: $primary-font;\r\n            font-weight: 500;\r\n            color: #000;\r\n            font-size: 1.7em;\r\n            text-transform: uppercase;\r\n            padding: 5px 0;\r\n            margin-top: 0;\r\n        }\r\n    }\r\n    .quartz-img-main{\r\n        display: flex;\r\n        justify-content: space-between;\r\n        max-width: 1320px;\r\n        margin: 0 auto;\r\n        .quartz-main{\r\n            .quartz-img-container{\r\n                margin: 0 10px;\r\n                .quartz-img{\r\n                    width: 100%;\r\n                }\r\n                .quartz-name{\r\n                    background-color: #91BFD8;\r\n                    width: 100%;\r\n                    margin: 0;\r\n                    text-align: center;\r\n                    font-family: $primary-font;\r\n                    font-weight: 500;\r\n                    color: #000;\r\n                    font-size: 1em;\r\n                    text-transform: capitalize;\r\n                    margin-top: -10px;\r\n                    padding-top: 11px;\r\n                    padding-bottom: 7px;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    .granite-heading-main{\r\n        background-color: #F1F1F1;\r\n        max-width: 1320px;\r\n        margin: auto;\r\n        .granite-heading{\r\n            text-align: center;\r\n            font-family: $primary-font;\r\n            font-weight: 500;\r\n            color: #000;\r\n            font-size: 1.7em;\r\n            text-transform: uppercase;\r\n            margin-top: 27px;\r\n            padding: 5px 0;\r\n        }\r\n    }\r\n    \r\n    .granite-img-main{\r\n        display: flex;\r\n        justify-content: space-between;\r\n        max-width: 1320px;\r\n        margin: 0 auto;\r\n        .granite-main{\r\n            .granite-img-container{\r\n                margin: 0 10px;\r\n                .granite-img{\r\n                    width: 100%;\r\n                }\r\n                .granite-name{\r\n                    background-color: #91BFD8;\r\n                    width: 100%;\r\n                    margin: 0;\r\n                    text-align: center;\r\n                    font-family: $primary-font;\r\n                    font-weight: 500;\r\n                    color: #000;\r\n                    font-size: 1em;\r\n                    text-transform: capitalize;\r\n                    margin-top: -10px;\r\n                    padding-top: 11px;\r\n                    padding-bottom: 7px;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    .row-flex{\r\n        display: -webkit-box;\r\n        display: -webkit-flex;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-sizing: border-box;\r\n        -moz-box-sizing: border-box;\r\n        box-sizing: border-box;\r\n        margin-right: -15px;\r\n        margin-left: -15px;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n        -webkit-flex-direction: row;\r\n        -ms-flex-direction: row;\r\n        flex-direction: row;\r\n        -webkit-box-flex: 0;\r\n        -webkit-flex: 0 1 auto;\r\n        -ms-flex: 0 1 auto;\r\n        flex: 0 1 auto;\r\n        -webkit-flex-wrap: wrap;\r\n        -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/***/ (function(module) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ (function(module) {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ (function(module) {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/_homepage.js":
/***/ (function() {

window.addEventListener("load", function() {
    var responsiveMenuBtn = document.querySelector(".responsive-menu-btn");
    var responsiveMenu = document.querySelector(".responsive-menu");
    responsiveMenuBtn.addEventListener("click", function(event) {
        event.preventDefault();
        responsiveMenu.classList.remove("hide");
    });
    var responsiveMenuCloseBtn = document.querySelector(".responsive-menu .header #close");
    responsiveMenuCloseBtn.addEventListener("click", function() {
        responsiveMenu.classList.add("hide");
    });
});


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
__webpack_require__("./src/js/_homepage.js");

}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

}();
/******/ })()
;
//# sourceMappingURL=app.js.map