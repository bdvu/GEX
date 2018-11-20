(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-src';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_login_sellerLogin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/sellerLogin.component */ "./src/app/components/login/sellerLogin.component.ts");
/* harmony import */ var _components_BuyerRegister_BuyerRegister_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/BuyerRegister/BuyerRegister.component */ "./src/app/components/BuyerRegister/BuyerRegister.component.ts");
/* harmony import */ var _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/buyer/buyer.component */ "./src/app/components/buyer/buyer.component.ts");
/* harmony import */ var _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/seller/seller.component */ "./src/app/components/seller/seller.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_buyer_make_request_make_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/buyer/make-request/make-request.component */ "./src/app/components/buyer/make-request/make-request.component.ts");
/* harmony import */ var _components_buyer_buyer_account_buyer_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/buyer/buyer-account/buyer-account.component */ "./src/app/components/buyer/buyer-account/buyer-account.component.ts");
/* harmony import */ var _components_seller_submit_offer_submit_offer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/seller/submit-offer/submit-offer.component */ "./src/app/components/seller/submit-offer/submit-offer.component.ts");
/* harmony import */ var _components_seller_seller_account_seller_account_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/seller/seller-account/seller-account.component */ "./src/app/components/seller/seller-account/seller-account.component.ts");
/* harmony import */ var _components_SellerRegister_SellerRegister_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/SellerRegister/SellerRegister.component */ "./src/app/components/SellerRegister/SellerRegister.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_activation_preactivation_preactivation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/activation/preactivation/preactivation.component */ "./src/app/components/activation/preactivation/preactivation.component.ts");
/* harmony import */ var _components_activation_postactivation_postactivation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/activation/postactivation/postactivation.component */ "./src/app/components/activation/postactivation/postactivation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'BuyerRegister', component: _components_BuyerRegister_BuyerRegister_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'SellerRegister', component: _components_SellerRegister_SellerRegister_component__WEBPACK_IMPORTED_MODULE_15__["SellerRegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'sellerLogin', component: _components_login_sellerLogin_component__WEBPACK_IMPORTED_MODULE_6__["SellerLoginComponent"] },
    { path: 'buyer', component: _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_8__["BuyerComponent"] },
    { path: 'buyer/buyer-account', component: _components_buyer_buyer_account_buyer_account_component__WEBPACK_IMPORTED_MODULE_12__["BuyerAccountComponent"] },
    { path: 'buyer/make-request', component: _components_buyer_make_request_make_request_component__WEBPACK_IMPORTED_MODULE_11__["MakeRequestComponent"] },
    { path: 'seller', component: _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_9__["SellerComponent"] },
    { path: 'seller/seller-account', component: _components_seller_seller_account_seller_account_component__WEBPACK_IMPORTED_MODULE_14__["SellerAccountComponent"] },
    { path: 'seller/submit-offer', component: _components_seller_submit_offer_submit_offer_component__WEBPACK_IMPORTED_MODULE_13__["SubmitOfferComponent"] },
    { path: 'preactivation', component: _components_activation_preactivation_preactivation_component__WEBPACK_IMPORTED_MODULE_24__["PreactivationComponent"] },
    { path: 'postactivation/:token', component: _components_activation_postactivation_postactivation_component__WEBPACK_IMPORTED_MODULE_25__["PostactivationComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_BuyerRegister_BuyerRegister_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_8__["BuyerComponent"],
                _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_9__["SellerComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_buyer_make_request_make_request_component__WEBPACK_IMPORTED_MODULE_11__["MakeRequestComponent"],
                _components_buyer_buyer_account_buyer_account_component__WEBPACK_IMPORTED_MODULE_12__["BuyerAccountComponent"],
                _components_seller_submit_offer_submit_offer_component__WEBPACK_IMPORTED_MODULE_13__["SubmitOfferComponent"],
                _components_seller_seller_account_seller_account_component__WEBPACK_IMPORTED_MODULE_14__["SellerAccountComponent"],
                _components_SellerRegister_SellerRegister_component__WEBPACK_IMPORTED_MODULE_15__["SellerRegisterComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _components_login_sellerLogin_component__WEBPACK_IMPORTED_MODULE_6__["SellerLoginComponent"],
                _components_activation_preactivation_preactivation_component__WEBPACK_IMPORTED_MODULE_24__["PreactivationComponent"],
                _components_activation_postactivation_postactivation_component__WEBPACK_IMPORTED_MODULE_25__["PostactivationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__["FlashMessagesModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_19__["ValidateService"], _services_register_service__WEBPACK_IMPORTED_MODULE_20__["RegisterService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_22__["StoreFetchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/BuyerRegister/BuyerRegister.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/BuyerRegister/BuyerRegister.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box}\r\n\r\nform {\r\n  border: 3px solid #f1f1f1;\r\n  width: 650px;\r\n  height: 1240px;\r\n  position: absolute;\r\n  top: 85%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n}\r\n\r\n.header {\r\n  background-color: lightgray;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=tel] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit/register button */\r\n\r\n.registerbtn {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 16px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\n.registerbtn:hover {\r\n  opacity:1;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n  color: dodgerblue;\r\n}\r\n\r\n/* Set a grey background color and center the text of the \"sign in\" section */\r\n\r\n.signin {\r\n  background-color: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9CdXllclJlZ2lzdGVyL0J1eWVyUmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFHLHNCQUFzQixDQUFDOztBQUUxQjtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUFnQztVQUFoQyxnQ0FBZ0M7O0NBRWpDOztBQUNELCtCQUErQjs7QUFDL0I7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0I7O0FBRUQsNkJBQTZCOztBQUM3QjtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7Q0FDZjs7QUFFRCxvQ0FBb0M7O0FBQ3BDO0VBQ0UsMEJBQTBCO0VBQzFCLG9CQUFvQjtDQUNyQjs7QUFFRCxnREFBZ0Q7O0FBQ2hEO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFVBQVU7Q0FDWDs7QUFFRCxvQ0FBb0M7O0FBQ3BDO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVELDhFQUE4RTs7QUFDOUU7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9CdXllclJlZ2lzdGVyL0J1eWVyUmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XHJcblxyXG5mb3JtIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gIHdpZHRoOiA2NTBweDtcclxuICBoZWlnaHQ6IDEyNDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4NSU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcblxyXG59XHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSAsIGlucHV0W3R5cGU9dGVsXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIE92ZXJ3cml0ZSBkZWZhdWx0IHN0eWxlcyBvZiBociAqL1xyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdC9yZWdpc3RlciBidXR0b24gKi9cclxuLnJlZ2lzdGVyYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLnJlZ2lzdGVyYnRuOmhvdmVyIHtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJsdWUgdGV4dCBjb2xvciB0byBsaW5rcyAqL1xyXG5hIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxufVxyXG5cclxuLyogU2V0IGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBjZW50ZXIgdGhlIHRleHQgb2YgdGhlIFwic2lnbiBpblwiIHNlY3Rpb24gKi9cclxuLnNpZ25pbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/BuyerRegister/BuyerRegister.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/BuyerRegister/BuyerRegister.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"OnBuyerRegisterSubmit()\" class=\"col-md-8 col-md-offset-8\">\r\n  <div class=\"container\">\r\n    <div class =\"container header\">\r\n\r\n    <h1>Buyer's Register</h1>\r\n    <p>Please fill in this form to create an account.</p>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <label for=\"email\"><b>Email</b></label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Enter Email\"  required>\r\n\r\n    <label for=\"psw\"><b>Password</b></label>\r\n    <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password\" name=\"psw\" required>\r\n\r\n    <label for=\"psw-repeat\"><b>Repeat Password</b></label>\r\n    <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" required>\r\n    <hr>\r\n\r\n    <label for=\"firstName\"><b>First Name</b></label>\r\n    <input type=\"text\" placeholder=\"Enter First Name\" [(ngModel)]=\"first_name\" name=\"first_name\" required>\r\n\r\n    <label for=\"lastName\"><b>Last Name</b></label>\r\n    <input type=\"text\" placeholder=\"Enter Last Name\" [(ngModel)]=\"last_name\" name=\"last_name\" required>\r\n\r\n    <label for=\"organizationName\"><b>Organization Name</b></label>\r\n    <input type=\"text\" placeholder=\"Enter Organization Name\" name=\"organizationName\" required>\r\n\r\n    <label for=\"phoneNum\"><b>Phone </b></label><br>\r\n    <input type=\"tel\" placeholder=\"Enter phone number\" name=\"phoneNum\" required>\r\n\r\n    <hr>\r\n\r\n    <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\r\n    <button type=\"submit\" class=\"registerbtn\" routerLink=\"/BuyerRegister\" routerLinkActive=\"active\">Register</button>\r\n  </div>\r\n\r\n  <div class=\"container signin\">\r\n    <p>Already have an account? <a routerLink=\"/login\" routerLinkActive=\"active\">Sign in</a>.</p>\r\n    <br>\r\n    <p>Are you a seller? <a routerLink=\"/SellerRegister\" routerLinkActive=\"active\">Register here</a>.</p>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/BuyerRegister/BuyerRegister.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/BuyerRegister/BuyerRegister.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, router, registerService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.registerService = registerService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.OnBuyerRegisterSubmit = function () {
        var _this = this;
        var buyer = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password
        };
        // RequiredFields
        if (!this.validateService.ValidateBuyerRegister(buyer)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 10000 });
            return false;
        }
        // ValidateEmail
        if (!this.validateService.validateEmail(buyer.email)) {
            this.flashMessage.show('Invalid Email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register Buyer
        this.registerService.RegisterBuyer(buyer).subscribe(function (data) {
            if (data.success) {
                // this.flashMessage.show('You are now Register', {cssClass: 'alert-success', timeout: 3000});
                _this.router.navigate(['/preactivation']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/BuyerRegister']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./BuyerRegister.component.html */ "./src/app/components/BuyerRegister/BuyerRegister.component.html"),
            styles: [__webpack_require__(/*! ./BuyerRegister.component.css */ "./src/app/components/BuyerRegister/BuyerRegister.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/SellerRegister/SellerRegister.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/SellerRegister/SellerRegister.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box}\r\n\r\nform {\r\n  border: 3px solid #f1f1f1;\r\n  width: 650px;\r\n  height: 1240px;\r\n  position: absolute;\r\n  top: 85%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n}\r\n\r\n.header {\r\n  background-color: lightgray;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=tel] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit/register button */\r\n\r\n.registerbtn {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 16px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\n.registerbtn:hover {\r\n  opacity:1;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n  color: dodgerblue;\r\n}\r\n\r\n/* Set a grey background color and center the text of the \"sign in\" section */\r\n\r\n.signin {\r\n  background-color: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9TZWxsZXJSZWdpc3Rlci9TZWxsZXJSZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsc0JBQXNCLENBQUM7O0FBRTFCO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0NBQWdDO1VBQWhDLGdDQUFnQzs7Q0FFakM7O0FBQ0QsK0JBQStCOztBQUMvQjtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLDRCQUE0QjtDQUM3Qjs7QUFFRCw2QkFBNkI7O0FBQzdCO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztDQUNmOztBQUVELG9DQUFvQzs7QUFDcEM7RUFDRSwwQkFBMEI7RUFDMUIsb0JBQW9CO0NBQ3JCOztBQUVELGdEQUFnRDs7QUFDaEQ7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UsVUFBVTtDQUNYOztBQUVELG9DQUFvQzs7QUFDcEM7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQsOEVBQThFOztBQUM5RTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL1NlbGxlclJlZ2lzdGVyL1NlbGxlclJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxuZm9ybSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICB3aWR0aDogNjUwcHg7XHJcbiAgaGVpZ2h0OiAxMjQwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogODUlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5cclxufVxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0gLCBpbnB1dFt0eXBlPXRlbF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBPdmVyd3JpdGUgZGVmYXVsdCBzdHlsZXMgb2YgaHIgKi9cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvcmVnaXN0ZXIgYnV0dG9uICovXHJcbi5yZWdpc3RlcmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5yZWdpc3RlcmJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBBZGQgYSBibHVlIHRleHQgY29sb3IgdG8gbGlua3MgKi9cclxuYSB7XHJcbiAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbn1cclxuXHJcbi8qIFNldCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciBhbmQgY2VudGVyIHRoZSB0ZXh0IG9mIHRoZSBcInNpZ24gaW5cIiBzZWN0aW9uICovXHJcbi5zaWduaW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/SellerRegister/SellerRegister.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/SellerRegister/SellerRegister.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"OnSellerRegisterSubmit()\" class=\"col-md-8 col-md-offset-8\">\r\n    <div class=\"container\">\r\n      <div class =\"container header\">\r\n      <h1>Seller's Register</h1>\r\n      <p>Please fill in this form to create an account.</p>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <label for=\"email\"><b>Email</b></label>\r\n      <input type=\"text\" placeholder=\"Enter Email\" [(ngModel)]=\"email\" name=\"email\" required>\r\n\r\n      <label for=\"psw\"><b>Password</b></label>\r\n      <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password\" name=\"psw\" required>\r\n\r\n      <label for=\"psw-repeat\"><b>Repeat Password</b></label>\r\n      <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" required>\r\n      <hr>\r\n\r\n      <label for=\"firstName\"><b>First Name</b></label>\r\n      <input type=\"text\" placeholder=\"Enter First Name\" [(ngModel)]=\"first_name\" name=\"first_name\" required>\r\n\r\n      <label for=\"lastName\"><b>Last Name</b></label>\r\n      <input type=\"text\" placeholder=\"Enter Last Name\" [(ngModel)]=\"last_name\" name=\"last_name\" required>\r\n\r\n      <label for=\"organizationName\"><b>Organization Name</b></label>\r\n      <input type=\"text\" placeholder=\"Enter Organization Name\" name=\"organizationName\" required>\r\n\r\n      <label for=\"phoneNum\"><b>Phone </b></label><br>\r\n      <input type=\"tel\" placeholder=\"Enter phone number\" name=\"phoneNum\" required>\r\n\r\n      <hr>\r\n\r\n      <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\r\n      <button type=\"submit\" class=\"registerbtn\">Register</button>\r\n    </div>\r\n\r\n    <div class=\"container signin\">\r\n      <p>Already have an account? <a href=\"#\">Sign in</a>.</p>\r\n      <br>\r\n      <p>Are you a Buyer? <a href=\"#\">Register here</a>.</p>\r\n    </div>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/components/SellerRegister/SellerRegister.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/SellerRegister/SellerRegister.component.ts ***!
  \***********************************************************************/
/*! exports provided: SellerRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerRegisterComponent", function() { return SellerRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SellerRegisterComponent = /** @class */ (function () {
    function SellerRegisterComponent(validateService, flashMessage, router, registerService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.registerService = registerService;
    }
    SellerRegisterComponent.prototype.ngOnInit = function () {
    };
    SellerRegisterComponent.prototype.OnSellerRegisterSubmit = function () {
        var _this = this;
        var seller = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password
        };
        // RequiredFields
        if (!this.validateService.ValidateBuyerRegister(seller)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 10000 });
            return false;
        }
        // ValidateEmail
        if (!this.validateService.validateEmail(seller.email)) {
            this.flashMessage.show('Invalid Email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register Buyer
        this.registerService.RegisterSeller(seller).subscribe(function (data) {
            if (data) { // must know if its a successful register or not FIX THIS LATER
                _this.flashMessage.show('You are now Register', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/BuyerRegister']);
            }
        });
    };
    SellerRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./SellerRegister.component.html */ "./src/app/components/SellerRegister/SellerRegister.component.html"),
            styles: [__webpack_require__(/*! ./SellerRegister.component.css */ "./src/app/components/SellerRegister/SellerRegister.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]])
    ], SellerRegisterComponent);
    return SellerRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/activation/postactivation/postactivation.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/activation/postactivation/postactivation.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZhdGlvbi9wb3N0YWN0aXZhdGlvbi9wb3N0YWN0aXZhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/activation/postactivation/postactivation.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/activation/postactivation/postactivation.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" role=\"alert\">\r\n  <h4 class=\"alert-heading\">Well done!</h4>\r\n  <p>Your account is now activated!</p>\r\n  <hr>\r\n  Redirecting to login... <a href=\"#\" class=\"alert-link\">Redirect</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/activation/postactivation/postactivation.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/activation/postactivation/postactivation.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PostactivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostactivationComponent", function() { return PostactivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostactivationComponent = /** @class */ (function () {
    function PostactivationComponent(route, registerService, flashMessage, router) {
        this.route = route;
        this.registerService = registerService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    PostactivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get URL parameters
        this.route.params.subscribe(function (params) {
            _this.token = params.token; // --> Name must match wanted parameter
            _this.registerService.activateAccount(_this.token).subscribe(function (data) {
                if (data.success) {
                    setTimeout(function () {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                        _this.router.navigate(['/login']);
                    }, 3000); // 5s
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        });
    };
    PostactivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postactivation',
            template: __webpack_require__(/*! ./postactivation.component.html */ "./src/app/components/activation/postactivation/postactivation.component.html"),
            styles: [__webpack_require__(/*! ./postactivation.component.css */ "./src/app/components/activation/postactivation/postactivation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PostactivationComponent);
    return PostactivationComponent;
}());



/***/ }),

/***/ "./src/app/components/activation/preactivation/preactivation.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/activation/preactivation/preactivation.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZhdGlvbi9wcmVhY3RpdmF0aW9uL3ByZWFjdGl2YXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/activation/preactivation/preactivation.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/activation/preactivation/preactivation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-primary\" role=\"alert\">\r\n  <h4 class=\"alert-heading\">Almost There!</h4>\r\n  <p>Please check you email to validate your account</p>\r\n  <hr>\r\n  Didn't recieve an email? <a href=\"#\" class=\"alert-link\">Resend Email</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/activation/preactivation/preactivation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/activation/preactivation/preactivation.component.ts ***!
  \********************************************************************************/
/*! exports provided: PreactivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreactivationComponent", function() { return PreactivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreactivationComponent = /** @class */ (function () {
    function PreactivationComponent() {
    }
    PreactivationComponent.prototype.ngOnInit = function () {
    };
    PreactivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preactivation',
            template: __webpack_require__(/*! ./preactivation.component.html */ "./src/app/components/activation/preactivation/preactivation.component.html"),
            styles: [__webpack_require__(/*! ./preactivation.component.css */ "./src/app/components/activation/preactivation/preactivation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreactivationComponent);
    return PreactivationComponent;
}());



/***/ }),

/***/ "./src/app/components/buyer/buyer-account/buyer-account.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-account/buyer-account.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV5ZXIvYnV5ZXItYWNjb3VudC9idXllci1hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/buyer/buyer-account/buyer-account.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-account/buyer-account.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n&nbsp;\r\n<h1>My Account</h1>\r\n&nbsp;\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <h4>Personal Information</h4>\r\n    &nbsp;\r\n    <form *ngIf=\"buyer\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label\">First Name:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input class=\"form-control\" type=\"text\" name=\"first_name\" value={{buyer.first_name}}>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label\">Last Name:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input class=\"form-control\" type=\"text\" name=\"last_name\" value={{buyer.last_name}}>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label\">Email Address:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input class=\"form-control\" type=\"text\" name=\"email\" value={{buyer.email}}>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label\">Password:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input class=\"form-control\" type=\"password\" name=\"password\" value={{buyer.password}}>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-sm-10\">\r\n          <button type=\"submit\" class=\"btn btn-primary\">Save Info</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/buyer/buyer-account/buyer-account.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-account/buyer-account.component.ts ***!
  \***************************************************************************/
/*! exports provided: BuyerAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerAccountComponent", function() { return BuyerAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_buyer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/buyer.service */ "./src/app/services/buyer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyerAccountComponent = /** @class */ (function () {
    function BuyerAccountComponent(buyerService, router) {
        this.buyerService = buyerService;
        this.router = router;
    }
    BuyerAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buyerService.getBuyerProfile().subscribe(function (profile) {
            _this.buyer = profile["buyer"];
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    BuyerAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buyer-account',
            template: __webpack_require__(/*! ./buyer-account.component.html */ "./src/app/components/buyer/buyer-account/buyer-account.component.html"),
            styles: [__webpack_require__(/*! ./buyer-account.component.css */ "./src/app/components/buyer/buyer-account/buyer-account.component.css")]
        }),
        __metadata("design:paramtypes", [_services_buyer_service__WEBPACK_IMPORTED_MODULE_1__["BuyerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BuyerAccountComponent);
    return BuyerAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/buyer/buyer.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/buyer/buyer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV5ZXIvYnV5ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/buyer/buyer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/buyer/buyer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\r\n&nbsp;\r\n<div *ngIf=\"buyer\">\r\n    <h1 class=\"page-header\">Welcome {{buyer.first_name}}!</h1>\r\n    <div class=\"tabbable\">\r\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" data-toggle=\"tab\" [ngClass]=\"{'active':currentTab === 'requests'}\" data-target=\"#requests\" role=\"tab\" aria-controls=\"requests\" aria-selected=\"true\" (click)=\"requests('requests')\">Requests</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"tab\" [ngClass]=\"{'active':currentTab === 'history'}\" data-target=\"#history\" role=\"tab\" aria-controls=\"history\" aria-selected=\"false\" (click)=\"history('history')\">History</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"tab-content\" id=\"myTabContent\">\r\n      <div class=\"tab-pane fade show active\" id=\"requests\" [ngClass]=\"{'active':currentTab === 'requests'}\" role=\"tabpanel\" aria-labelledby=\"requests-tab\">Requests go here</div>\r\n      <div class=\"tab-pane fade show\" id=\"history\" [ngClass]=\"{'active':currentTab === 'history'}\" role=\"tabpanel\" aria-labelledby=\"history-tab\">History goes here</div>\r\n    </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/buyer/buyer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/buyer/buyer.component.ts ***!
  \*****************************************************/
/*! exports provided: BuyerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerComponent", function() { return BuyerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuyerComponent = /** @class */ (function () {
    function BuyerComponent(registerService, storeFetchService, router) {
        this.registerService = registerService;
        this.storeFetchService = storeFetchService;
        this.router = router;
        this.currentTab = 'requests';
    }
    BuyerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeFetchService.getBuyerProfile().subscribe(function (profile) {
            _this.buyer = profile.data;
            console.log(profile.data.account_type);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    BuyerComponent.prototype.requests = function (currentTab) {
        this.currentTab = currentTab;
    };
    BuyerComponent.prototype.history = function (currentTab) {
        this.currentTab = currentTab;
    };
    BuyerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buyer',
            template: __webpack_require__(/*! ./buyer.component.html */ "./src/app/components/buyer/buyer.component.html"),
            styles: [__webpack_require__(/*! ./buyer.component.css */ "./src/app/components/buyer/buyer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BuyerComponent);
    return BuyerComponent;
}());



/***/ }),

/***/ "./src/app/components/buyer/make-request/make-request.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/buyer/make-request/make-request.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV5ZXIvbWFrZS1yZXF1ZXN0L21ha2UtcmVxdWVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/buyer/make-request/make-request.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/buyer/make-request/make-request.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<h1>Submit Product Request</h1>\r\n&nbsp;\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <form (submit)=\"onRequestSubmit()\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label\">Request Title:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input class=\"form-control mr-sm-2\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" value=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label\">Request Category:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input class=\"form-control mr-sm-2\" type=\"text\" name=\"category\" value=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label\">Enter description of desired product:</label>\r\n        <div class=\"col-sm-10\">\r\n          <textarea class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" rows=\"8\" cols=\"80\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label\">Set offer deadline:</label>\r\n        <div class=\"row col-sm-10\">\r\n            <input class=\"form-control col-sm-3\" type=\"date\" [(ngModel)]=\"deadline\" name=\"deadline\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-sm-10\">\r\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n</div>\r\n<!--\r\n<html>\r\n <head>\r\n  <title>Webslesson Tutorial | Search HTML Table Data by using JQuery</title>\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js\"></script>\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" />\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n  <style>\r\n  #result {\r\n   position: absolute;\r\n   width: 100%;\r\n   max-width:870px;\r\n   cursor: pointer;\r\n   overflow-y: auto;\r\n   max-height: 400px;\r\n   box-sizing: border-box;\r\n   z-index: 1001;\r\n  }\r\n  .link-class:hover{\r\n   background-color:#f1f1f1;\r\n  }\r\n  </style>\r\n </head>\r\n <body>\r\n  <br /><br />\r\n  <div class=\"container\" style=\"width:900px;\">\r\n   <h2 align=\"center\">JSON Live Data Search using Ajax JQuery</h2>\r\n   <h3 align=\"center\">Employee Data</h3>\r\n   <br /><br />\r\n   <div align=\"center\">\r\n    <input type=\"text\" name=\"search\" id=\"search\" placeholder=\"Search Employee Details\" class=\"form-control\" />\r\n   </div>\r\n   <ul class=\"list-group\" id=\"result\"></ul>\r\n   <br />\r\n  </div>\r\n </body>\r\n</html>\r\n<script>\r\n\r\n$(document).ready(function(){\r\n  const Http = new XMLHttpRequest();\r\n  const url='http://localhost:3000/codes/getCodes';\r\n  Http.open(\"GET\", url);\r\n  Http.send();\r\n  Http.onreadystatechange=(e)=>{\r\n    console.log(Http.responseText)\r\n $.ajaxSetup({ cache: false });\r\n $('#search').keyup(function(){\r\n  $('#result').html('');\r\n  $('#state').val('');\r\n  var searchField = $('#search').val();\r\n  var expression = new RegExp(searchField, \"i\");\r\n  var file = Http.responseText;\r\n  $.getJSON('file', function(data) {\r\n   $.each(data, function(key, value){\r\n    if (value.code_description.search(expression) != -1)\r\n    {\r\n     $('#result').append('<li class=\"list-group-item link-class\">'+value.code_description+' | <span class=\"text-muted\">'+value.code_number+'</span></li>');\r\n    }\r\n   });\r\n  });\r\n });\r\n}\r\n $('#result').on('click', 'li', function() {\r\n  var click_text = $(this).text().split('|');\r\n  $('#search').val($.trim(click_text[0]));\r\n  $(\"#result\").html('');\r\n });\r\n});\r\n</script>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/components/buyer/make-request/make-request.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/buyer/make-request/make-request.component.ts ***!
  \*************************************************************************/
/*! exports provided: MakeRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeRequestComponent", function() { return MakeRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MakeRequestComponent = /** @class */ (function () {
    function MakeRequestComponent() {
    }
    MakeRequestComponent.prototype.ngOnInit = function () {
    };
    MakeRequestComponent.prototype.onRequestSubmit = function () {
        var request = {
            title: this.title,
            description: this.description,
            deadline: this.deadline
        };
    };
    MakeRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-make-request',
            template: __webpack_require__(/*! ./make-request.component.html */ "./src/app/components/buyer/make-request/make-request.component.html"),
            styles: [__webpack_require__(/*! ./make-request.component.css */ "./src/app/components/buyer/make-request/make-request.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MakeRequestComponent);
    return MakeRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.page-wrap {\r\n  min-height: 100%;\r\n  /* equal to footer height */\r\n  margin-bottom: -142px;\r\n}\r\n.page-wrap:after {\r\n  content: \"\";\r\n  display: block;\r\n}\r\n.footer, .page-wrap:after {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 80px;\r\n  width: 100%;\r\n  background-color: rgb(70, 67, 67);\r\n  color: white;\r\n  text-align: center;\r\n\r\n}\r\na {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0NBQ2hCO0FBSUQ7RUFDRSxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsbUJBQW1COztDQUVwQjtBQUNEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZ2Utd3JhcCB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICAvKiBlcXVhbCB0byBmb290ZXIgaGVpZ2h0ICovXHJcbiAgbWFyZ2luLWJvdHRvbTogLTE0MnB4O1xyXG59XHJcbi5wYWdlLXdyYXA6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvb3RlciwgLnBhZ2Utd3JhcDphZnRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY3LCA2Nyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"page-wrap\">\r\n\r\n\r\n\r\n  </div>\r\n<footer class=\"footer\">\r\n        <div class=\"container\">\r\n\r\n        <div class=\"footer-copyright py-3\">© 2018 Copyright:\r\n            <a href=\"https://gex.com/about/\"> gex.com</a>\r\n          </div>\r\n        </div>\r\n</footer>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\nheader.masthead {\r\n  position: relative;\r\n\r\n  content: url(/angular-src/src/assets/gexGrand.jpg) no-repeat center center;\r\n  background-size: cover;\r\n  padding-top: 8rem;\r\n  padding-bottom: 8rem;\r\n}\r\n\r\nheader.masthead .overlay {\r\n  position: absolute;\r\n  background-color: #0a2846;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n\r\n\r\n}\r\n\r\nheader.masthead h1 {\r\n  font-size: 2rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  header.masthead {\r\n    padding-top: 12rem;\r\n    padding-bottom: 12rem;\r\n  }\r\n  header.masthead h1 {\r\n    font-size: 3rem;\r\n  }\r\n}\r\n\r\n.showcase .showcase-text {\r\n  padding: 3rem;\r\n}\r\n\r\n.showcase .showcase-img {\r\n  min-height: 30rem;\r\n  background-size: cover;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .showcase .showcase-text {\r\n    padding: 7rem;\r\n  }\r\n}\r\n\r\n.features-icons {\r\n  padding-top: 7rem;\r\n  padding-bottom: 7rem;\r\n}\r\n\r\n.features-icons .features-icons-item {\r\n  max-width: 20rem;\r\n}\r\n\r\n.features-icons .features-icons-item .features-icons-icon {\r\n  height: 7rem;\r\n}\r\n\r\n.features-icons .features-icons-item .features-icons-icon i {\r\n  font-size: 4.5rem;\r\n}\r\n\r\n.features-icons .features-icons-item:hover .features-icons-icon i {\r\n  font-size: 5rem;\r\n}\r\n\r\n.testimonials {\r\n  padding-top: 7rem;\r\n  padding-bottom: 7rem;\r\n}\r\n\r\n.testimonials .testimonial-item {\r\n  max-width: 18rem;\r\n}\r\n\r\n.testimonials .testimonial-item img {\r\n  max-width: 12rem;\r\n  box-shadow: 0px 5px 5px 0px #adb5bd;\r\n}\r\n\r\n.call-to-action {\r\n  position: relative;\r\n  background-color: #343a40;\r\n\r\n  background-size: cover;\r\n  padding-top: 7rem;\r\n  padding-bottom: 7rem;\r\n}\r\n\r\n.call-to-action .overlay {\r\n  position: absolute;\r\n  background-color: #212529;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0.3;\r\n}\r\n\r\nfooter.footer {\r\n  padding-top: 4rem;\r\n  padding-bottom: 4rem;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9FQUFvRTtDQUNyRTs7QUFFRDs7Ozs7O0VBTUUsb0VBQW9FO0VBQ3BFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLG1CQUFtQjs7RUFFbkIsMkVBQTJFO0VBQzNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFROzs7Q0FHVDs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjtHQUN2QjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0NBQ0Y7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0U7SUFDRSxjQUFjO0dBQ2Y7Q0FDRjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsaUJBQWlCO0VBRWpCLG9DQUFvQztDQUNyQzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7O0VBRTFCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtDQUNkOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBjb250ZW50OiB1cmwoL2FuZ3VsYXItc3JjL3NyYy9hc3NldHMvZ2V4R3JhbmQuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmctdG9wOiA4cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cmVtO1xyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQgLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEyODQ2O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcblxyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQgaDEge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaGVhZGVyLm1hc3RoZWFkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnJlbTtcclxuICB9XHJcbiAgaGVhZGVyLm1hc3RoZWFkIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zaG93Y2FzZSAuc2hvd2Nhc2UtdGV4dCB7XHJcbiAgcGFkZGluZzogM3JlbTtcclxufVxyXG5cclxuLnNob3djYXNlIC5zaG93Y2FzZS1pbWcge1xyXG4gIG1pbi1oZWlnaHQ6IDMwcmVtO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5zaG93Y2FzZSAuc2hvd2Nhc2UtdGV4dCB7XHJcbiAgICBwYWRkaW5nOiA3cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmZlYXR1cmVzLWljb25zIHtcclxuICBwYWRkaW5nLXRvcDogN3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogN3JlbTtcclxufVxyXG5cclxuLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlcy1pY29ucy1pdGVtIHtcclxuICBtYXgtd2lkdGg6IDIwcmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZXMtaWNvbnMgLmZlYXR1cmVzLWljb25zLWl0ZW0gLmZlYXR1cmVzLWljb25zLWljb24ge1xyXG4gIGhlaWdodDogN3JlbTtcclxufVxyXG5cclxuLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlcy1pY29ucy1pdGVtIC5mZWF0dXJlcy1pY29ucy1pY29uIGkge1xyXG4gIGZvbnQtc2l6ZTogNC41cmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZXMtaWNvbnMgLmZlYXR1cmVzLWljb25zLWl0ZW06aG92ZXIgLmZlYXR1cmVzLWljb25zLWljb24gaSB7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG59XHJcblxyXG4udGVzdGltb25pYWxzIHtcclxuICBwYWRkaW5nLXRvcDogN3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogN3JlbTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWwtaXRlbSB7XHJcbiAgbWF4LXdpZHRoOiAxOHJlbTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWwtaXRlbSBpbWcge1xyXG4gIG1heC13aWR0aDogMTJyZW07XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggI2FkYjViZDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggI2FkYjViZDtcclxufVxyXG5cclxuLmNhbGwtdG8tYWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxuXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwYWRkaW5nLXRvcDogN3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogN3JlbTtcclxufVxyXG5cclxuLmNhbGwtdG8tYWN0aW9uIC5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG5mb290ZXIuZm9vdGVyIHtcclxuICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <body>\r\n\r\n      <!-- Masthead -->\r\n      <header class=\"masthead text-white text-center\">\r\n        <div class=\"overlay\"></div>\r\n         <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-9 mx-auto\">\r\n\r\n              <h1 class=\"mb-5\">Grand Exchange: finding lower price never been easier</h1>\r\n\r\n           </div>\r\n           <div class=\"col-8 col-md-4\"></div>\r\n\r\n              <div class=\"col-8 col-md-4\">\r\n                  <button type=\"submit\" class=\"btn btn-block btn-lg btn-primary\" routerLink=\"/BuyerRegister\" routerLinkActive=\"active\">Register!</button>\r\n              </div>\r\n\r\n          </div>\r\n        </div>\r\n      </header>\r\n\r\n      <!-- Icons Grid -->\r\n      <section class=\"features-icons bg-light text-center\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\r\n                <div class=\"features-icons-icon d-flex\">\r\n                  <i class=\"icon-screen-desktop m-auto text-primary\"></i>\r\n                </div>\r\n                <h3>Some information here</h3>\r\n                <p class=\"lead mb-0\">here we can add more information about some topic</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\r\n                <div class=\"features-icons-icon d-flex\">\r\n                  <i class=\"icon-layers m-auto text-primary\"></i>\r\n                </div>\r\n                <h3>Some information here</h3>\r\n                <p class=\"lead mb-0\">here we can add more information about some topic</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"features-icons-item mx-auto mb-0 mb-lg-3\">\r\n                <div class=\"features-icons-icon d-flex\">\r\n                  <i class=\"icon-check m-auto text-primary\"></i>\r\n                </div>\r\n                <h3>Some information here</h3>\r\n                <p class=\"lead mb-0\">here we can add more information about some topic</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- Image Showcases -->\r\n      <section class=\"showcase\">\r\n        <div class=\"container-fluid p-0\">\r\n          <div class=\"row no-gutters\">\r\n\r\n            <div class=\"col-lg-6 order-lg-2 text-white showcase-img\" style=\"background-color: rgb(53, 110, 31);\"></div>\r\n            <div class=\"col-lg-6 order-lg-1 my-auto showcase-text\">\r\n              <h2>How It Works?</h2>\r\n              <p class=\"lead mb-0\">We will do the work on your behalf and will connect you with the best seller and lowest prices.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-lg-6 text-white showcase-img\" style=\"background-color: rgb(192, 152, 42);\"></div>\r\n            <div class=\"col-lg-6 my-auto showcase-text\">\r\n              <h2>A Better Way To Do Business</h2>\r\n              <p class=\"lead mb-0\">Our mission is to integrate the human element to business. Get started with GEX and start experiencing the most effecient way to buy online</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-lg-6 order-lg-2 text-white showcase-img\" style=\"background-color: rgb(139, 50, 8);\"></div>\r\n            <div class=\"col-lg-6 order-lg-1 my-auto showcase-text\">\r\n              <h2>Ready To Buy</h2>\r\n              <p class=\"lead mb-0\">Submit your request and get match with thousands of sellers waiting to make you offers</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-gutters\">\r\n              <div class=\"col-lg-6 text-white showcase-img\" style=\"background-color: rgb(37, 99, 96);\"></div>\r\n              <div class=\"col-lg-6 my-auto showcase-text\">\r\n                <h2>Ready to Sell?</h2>\r\n                <p class=\"lead mb-0\">List your produce or service and start getting match with thousands of buyers ready to receive your offers</p>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- Testimonials\r\n      <section class=\"testimonials text-center bg-light\">\r\n        <div class=\"container\">\r\n          <h2 class=\"mb-5\">What people are saying...</h2>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\r\n                <img class=\"img-fluid rounded-circle mb-3\" src=\"/angular-src/src/assets/testimonials-1.jpg\" alt=\"\">\r\n                <h5>Margaret E.</h5>\r\n                <p class=\"font-weight-light mb-0\">\"I don't have search for lower prices anymore!\"</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\r\n                <img class=\"img-fluid rounded-circle mb-3\" src=\"/angular-src/src/assets/testimonials-2.jpg\" alt=\"\">\r\n                <h5>Fred S.</h5>\r\n                <p class=\"font-weight-light mb-0\">\"I save so much time which allows me to do other things instead of shopping.\"</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\r\n                <img class=\"img-fluid rounded-circle mb-3\" src=\"/angular-src/src/assets/testimonials-3.jpg\" alt=\"\">\r\n                <h5>Sarah\tW.</h5>\r\n                <p class=\"font-weight-light mb-0\">\"all I had to do was request what I wanted!\"</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      -->\r\n      <!-- Call to Action -->\r\n      <section class=\"call-to-action text-white text-center\">\r\n        <div class=\"overlay\"></div>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-9 mx-auto\">\r\n              <h2 class=\"mb-4\">Ready to get started? Register now!</h2>\r\n            </div>\r\n            <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\r\n              <form>\r\n                <div class=\"form-row\">\r\n                    <div class=\"col-12 col-md-4\"></div>\r\n                  <div class=\"col-12 col-md-4\">\r\n                    <button type=\"submit\" class=\"btn btn-block btn-lg btn-primary\">Register!</button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- Footer -->\r\n      <footer class=\"footer bg-light\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6 h-100 text-center text-lg-left my-auto\">\r\n              <ul class=\"list-inline mb-2\">\r\n                <li class=\"list-inline-item\">\r\n                  <a href=\"#\">About</a>\r\n                </li>\r\n                <li class=\"list-inline-item\">&sdot;</li>\r\n                <li class=\"list-inline-item\">\r\n                  <a href=\"#\">Contact</a>\r\n                </li>\r\n                <li class=\"list-inline-item\">&sdot;</li>\r\n                <li class=\"list-inline-item\">\r\n                  <a href=\"#\">Terms of Use</a>\r\n                </li>\r\n                <li class=\"list-inline-item\">&sdot;</li>\r\n                <li class=\"list-inline-item\">\r\n                  <a href=\"#\">Privacy Policy</a>\r\n                </li>\r\n              </ul>\r\n\r\n            </div>\r\n            <div class=\"col-lg-6 h-100 text-center text-lg-right my-auto\">\r\n              <ul class=\"list-inline mb-0\">\r\n                <li class=\"list-inline-item mr-3\">\r\n                  <a href=\"#\">\r\n                    <i class=\"fab fa-facebook fa-2x fa-fw\"></i>\r\n                  </a>\r\n                </li>\r\n                <li class=\"list-inline-item mr-3\">\r\n                  <a href=\"#\">\r\n                    <i class=\"fab fa-twitter-square fa-2x fa-fw\"></i>\r\n                  </a>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <a href=\"#\">\r\n                    <i class=\"fab fa-instagram fa-2x fa-fw\"></i>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n\r\n  </body>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/SellerLogin.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/login/SellerLogin.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nform {\r\n    border: 3px solid #f1f1f1;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    height: 550px;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n  \r\n  }\r\n  \r\n  /* Full-width inputs */\r\n  \r\n  input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  /* Set a style for all buttons */\r\n  \r\n  button {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\n  \r\n  /* Add a hover effect for buttons */\r\n  \r\n  button:hover {\r\n    opacity: 0.8;\r\n  }\r\n  \r\n  /* Extra style for the cancel button (red) */\r\n  \r\n  .cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n  }\r\n  \r\n  /* Center the avatar image inside this container */\r\n  \r\n  .imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n  }\r\n  \r\n  /* Avatar image */\r\n  \r\n  img.avatar {\r\n    width: 40%;\r\n    margin: 34px;\r\n  }\r\n  \r\n  /* Add padding to containers */\r\n  \r\n  .container {\r\n    padding: 16px;\r\n  \r\n  }\r\n  \r\n  /* The \"Forgot password\" text */\r\n  \r\n  span.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n  }\r\n  \r\n  /* Change styles for span and cancel button on extra small screens */\r\n  \r\n  @media screen and (max-width: 300px) {\r\n    span.psw {\r\n        display: block;\r\n        float: none;\r\n    }\r\n    .cancelbtn {\r\n        width: 100%;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9TZWxsZXJMb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YsY0FBYztJQUNkLHdDQUFnQztZQUFoQyxnQ0FBZ0M7O0dBRWpDOztFQUVELHVCQUF1Qjs7RUFDdkI7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtHQUN4Qjs7RUFFRCxpQ0FBaUM7O0VBQ2pDO0lBQ0UsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtHQUNiOztFQUVELG9DQUFvQzs7RUFDcEM7SUFDRSxhQUFhO0dBQ2Q7O0VBRUQsNkNBQTZDOztFQUM3QztJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsMEJBQTBCO0dBQzNCOztFQUVELG1EQUFtRDs7RUFDbkQ7SUFDRSxtQkFBbUI7SUFDbkIsc0JBQXNCO0dBQ3ZCOztFQUVELGtCQUFrQjs7RUFDbEI7SUFDRSxXQUFXO0lBQ1gsYUFBYTtHQUNkOztFQUVELCtCQUErQjs7RUFDL0I7SUFDRSxjQUFjOztHQUVmOztFQUVELGdDQUFnQzs7RUFDaEM7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0dBQ25COztFQUVELHFFQUFxRTs7RUFDckU7SUFDRTtRQUNJLGVBQWU7UUFDZixZQUFZO0tBQ2Y7SUFDRDtRQUNJLFlBQVk7S0FDZjtHQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9TZWxsZXJMb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5mb3JtIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAvKiBGdWxsLXdpZHRoIGlucHV0cyAqL1xyXG4gIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgaG92ZXIgZWZmZWN0IGZvciBidXR0b25zICovXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbiAgXHJcbiAgLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXHJcbiAgLmNhbmNlbGJ0biB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENlbnRlciB0aGUgYXZhdGFyIGltYWdlIGluc2lkZSB0aGlzIGNvbnRhaW5lciAqL1xyXG4gIC5pbWdjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xyXG4gIH1cclxuICBcclxuICAvKiBBdmF0YXIgaW1hZ2UgKi9cclxuICBpbWcuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBcIkZvcmdvdCBwYXNzd29yZFwiIHRleHQgKi9cclxuICBzcGFuLnBzdyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAgIHNwYW4ucHN3IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5jYW5jZWxidG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/login/SellerLogin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/login/SellerLogin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <form (submit)=\"onLoginSubmit()\" class=\"col-md-4 col-md-offset-4\">\r\n        <div class=\"imgcontainer\">\r\n          <img src=\"assets\\gexLogo.png\" alt=\"Avatar\" class=\"avatar\">\r\n          <label><b>Seller</b></label>\r\n        </div>\r\n    \r\n        <div class=\"container\">\r\n          <label for=\"email\"><b>Email</b></label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\r\n    \r\n          <label for=\"password\"><b>Password</b></label>\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\r\n    \r\n          <button type=\"submit\">Login</button>\r\n          <label>\r\n            <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n          </label>\r\n        </div>\r\n    \r\n        <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n          <button type=\"button\" class=\"cancelbtn\">Cancel</button>\r\n          <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\r\n        </div>\r\n    \r\n        <div class=\"container signin\">\r\n            <p>Are you a Buyer? <a href=\"/login\">Sign in here</a>.</p>\r\n          </div>\r\n      </form>\r\n    \r\n    "

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nform {\r\n  border: 3px solid #f1f1f1;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  height: 550px;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n\r\n}\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Center the avatar image inside this container */\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n}\r\n\r\n/* Avatar image */\r\n\r\nimg.avatar {\r\n  width: 40%;\r\n  margin: 34px;\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n      display: block;\r\n      float: none;\r\n  }\r\n  .cancelbtn {\r\n      width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLHdDQUFnQztVQUFoQyxnQ0FBZ0M7O0NBRWpDOztBQUVELHVCQUF1Qjs7QUFDdkI7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtDQUN4Qjs7QUFFRCxpQ0FBaUM7O0FBQ2pDO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOztBQUVELG9DQUFvQzs7QUFDcEM7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQsNkNBQTZDOztBQUM3QztFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQTBCO0NBQzNCOztBQUVELG1EQUFtRDs7QUFDbkQ7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0NBQ3ZCOztBQUVELGtCQUFrQjs7QUFDbEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtDQUNkOztBQUVELCtCQUErQjs7QUFDL0I7RUFDRSxjQUFjOztDQUVmOztBQUVELGdDQUFnQzs7QUFDaEM7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0NBQ25COztBQUVELHFFQUFxRTs7QUFDckU7RUFDRTtNQUNJLGVBQWU7TUFDZixZQUFZO0dBQ2Y7RUFDRDtNQUNJLFlBQVk7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5mb3JtIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgaGVpZ2h0OiA1NTBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5cclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXHJcbi5jYW5jZWxidG4ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBDZW50ZXIgdGhlIGF2YXRhciBpbWFnZSBpbnNpZGUgdGhpcyBjb250YWluZXIgKi9cclxuLmltZ2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjRweCAwIDEycHggMDtcclxufVxyXG5cclxuLyogQXZhdGFyIGltYWdlICovXHJcbmltZy5hdmF0YXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luOiAzNHB4O1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcblxyXG59XHJcblxyXG4vKiBUaGUgXCJGb3Jnb3QgcGFzc3dvcmRcIiB0ZXh0ICovXHJcbnNwYW4ucHN3IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIHNwYW4ucHN3IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuICAuY2FuY2VsYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <form (submit)=\"onLoginSubmit()\" class=\"col-md-4 col-md-offset-4\">\r\n    <div class=\"imgcontainer\">\r\n      <img src=\"assets\\gexLogo.png\" alt=\"Avatar\" class=\"avatar\">\r\n      <label><b>Buyer</b></label>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <label for=\"email\"><b>Email</b></label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\r\n\r\n      <label for=\"password\"><b>Password</b></label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\r\n\r\n      <button type=\"submit\">Login</button>\r\n      <label>\r\n        <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n      <button type=\"button\" class=\"cancelbtn\" routerLink=\"\" routerLinkActive=\"active\">Cancel</button>\r\n      <span class=\"psw\"><a href=\"#\">Forgot password?</a></span>\r\n    </div>\r\n\r\n    <div class=\"container signin\">\r\n        <p>Are you a seller? <a routerLink=\"/sellerLogin\" routerLinkActive=\"active\">Sign in here</a>.</p>\r\n      </div>\r\n  </form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(registerService, authService, storeFetchService, router, flashMessage) {
        this.registerService = registerService;
        this.authService = authService;
        this.storeFetchService = storeFetchService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var buyer = {
            email: this.email,
            password: this.password
        };
        this.storeFetchService.user = 0;
        this.authService.AuthenticateBuyer(buyer).subscribe(function (data) {
            if (data.success) {
                _this.storeFetchService.storeBuyerData(data.token, data.buyer);
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigateByUrl('./navbar.component.html', { skipLocationChange: true }).then(function () {
                    return _this.router.navigate(["/buyer"]);
                });
                //this.router.navigate(['/buyer']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_3__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/login/sellerLogin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/login/sellerLogin.component.ts ***!
  \***********************************************************/
/*! exports provided: SellerLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerLoginComponent", function() { return SellerLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SellerLoginComponent = /** @class */ (function () {
    function SellerLoginComponent(registerService, authService, storeFetchService, router, flashMessage) {
        this.registerService = registerService;
        this.authService = authService;
        this.storeFetchService = storeFetchService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    SellerLoginComponent.prototype.ngOnInit = function () {
    };
    SellerLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var seller = {
            email: this.email,
            password: this.password
        };
        var userType = "Seller";
        this.authService.AuthenticateSeller(seller).subscribe(function (data) {
            if (data.success) {
                _this.storeFetchService.storeSellerData(data.token, data.seller);
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/seller']);
                document.getElementById("userType").innerHTML = userType;
            }
            else {
                _this.flashMessage.show('User not found', { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    SellerLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./SellerLogin.component.html */ "./src/app/components/login/SellerLogin.component.html"),
            styles: [__webpack_require__(/*! ./SellerLogin.component.css */ "./src/app/components/login/SellerLogin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_3__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], SellerLoginComponent);
    return SellerLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand{\r\n  max-height: 30px;\r\n  max-width: 30%;\r\n  overflow: visible;\r\n  padding: 0;\r\n\r\n}\r\n\r\n.logForm {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.nav-item2{\r\n\r\n  float: left;\r\n  list-style-type: none;\r\n  font-size: 18px;\r\n  padding-top: 0;\r\n\r\n}\r\n\r\n.nav-item2 a:hover {\r\n  background-color: lightgray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXOztDQUVaOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0NBQ2xCOztBQUdEOztFQUVFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7O0NBRWhCOztBQUVEO0VBQ0UsNEJBQTRCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5ke1xyXG4gIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuXHJcbi5sb2dGb3JtIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi5uYXYtaXRlbTJ7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcblxyXG59XHJcblxyXG4ubmF2LWl0ZW0yIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"assets\\gexLogo.png\" style=\"max-width: 150px; margin-top: -14px;\" class=\"img-responsive\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <!--<ng-container *ngIf=\"user == 0; else second\">-->\r\n\r\n  <label id=\"userType\">Buyer</label>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n      </li>\r\n      <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\r\n        </li>\r\n    </ul>\r\n    <ul class = \"logForm\">\r\n        <li class=\"nav-item2\">\r\n            <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Sign In</a>\r\n          </li>\r\n          <li class=\"nav-item2\">\r\n            <a class=\"nav-link\" routerLink=\"/BuyerRegister\" routerLinkActive=\"active\">Register</a>\r\n          </li>\r\n        </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(registerService, storeFetchService, router, flashMessage) {
        this.registerService = registerService;
        this.storeFetchService = storeFetchService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.user = this.storeFetchService.user;
        console.log(this.user);
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.storeFetchService.userLogout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/seller/seller-account/seller-account.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/seller/seller-account/seller-account.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n  margin: auto;\r\n  width: 60%;\r\n  padding: 10px;\r\n}\r\n.ex1 {\r\n  margin-top: 1.5%;\r\n}\r\n.editBtn{\r\n  background-color: darkorange;\r\n}\r\n.saveBtn{\r\n  background-color: #e60000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc2VsbGVyLWFjY291bnQvc2VsbGVyLWFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztDQUNmO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc2VsbGVyLWFjY291bnQvc2VsbGVyLWFjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNjAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmV4MSB7XHJcbiAgbWFyZ2luLXRvcDogMS41JTtcclxufVxyXG4uZWRpdEJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlO1xyXG59XHJcbi5zYXZlQnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjAwMDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/seller/seller-account/seller-account.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/seller/seller-account/seller-account.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BOOTSTRAP via CDN -->\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"></script>\r\n\r\n&nbsp;\r\n<h1>My Account</h1>\r\n&nbsp;\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <h4>Personal Information</h4>\r\n    &nbsp;\r\n    <form action=\"/action_page.php\">\r\n      <div class=\"form-group\">\r\n        <label for=\"fName\">First Name:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"fName\" name=\"firstName\" disabled required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"lName\">Last Name:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"lName\" name=\"lastName\" disabled required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"eAddress\">Email Address:</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"eAddress\" name=\"emailAddress\" disabled required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"pwd\">Password:</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"password\" disabled required>\r\n      </div>\r\n      <div class=\"form-group\" id=\"newPass\" hidden>\r\n          <label for=\"newPwd\">New Password:</label>\r\n          <input type=\"password\" placeholder=\"New Password\" class=\"form-control\" id=\"newPwd\" name=\"newPassword\" required>\r\n      </div>\r\n      <div class=\"form-group\" id=\"verify\" hidden>\r\n          <label for=\"verifyPwd\">Confirm Password:</label>\r\n          <input type=\"password\" placeholder=\"Confirm Password\" class=\"form-control\" id=\"verifyPwd\" name=\"verifyPassword\" required>\r\n      </div>\r\n      <p class=\"text-danger\" id=\"errorMessage\" hidden>Password did not match!</p>\r\n      <button type=\"button\" class=\"btn editBtn btn-lg\" id=\"editBtn\" onClick=\"editFunction()\">Edit</button>\r\n      <button type=\"button\" class=\"btn saveBtn btn-lg\" id=\"saveBtn\" onClick=\"saveFunction()\" disabled=true>Save</button>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n\r\n<script>\r\n    function editFunction() {\r\n        document.getElementById(\"fName\").disabled = false;\r\n        document.getElementById(\"lName\").disabled = false;\r\n        document.getElementById(\"eAddress\").disabled = false;\r\n        document.getElementById(\"saveBtn\").disabled = false;\r\n        document.getElementById(\"editBtn\").disabled = true;\r\n        document.getElementById(\"verify\").hidden = false;\r\n        document.getElementById(\"newPass\").hidden = false;\r\n    }\r\n</script>\r\n\r\n<script>\r\n    function saveFunction() {\r\n      if((document.getElementById(\"newPwd\").value === document.getElementById(\"verifyPwd\").value) && (document.getElementById(\"verifyPwd\").value != \"\"))\r\n      {\r\n        document.getElementById(\"pwd\").value = document.getElementById(\"newPwd\").value;\r\n        document.getElementById(\"fName\").disabled = true;\r\n        document.getElementById(\"lName\").disabled = true;\r\n        document.getElementById(\"eAddress\").disabled = true;\r\n        document.getElementById(\"pwd\").disabled = true;\r\n        document.getElementById(\"saveBtn\").disabled = true;\r\n        document.getElementById(\"editBtn\").disabled = false;\r\n        document.getElementById(\"verify\").hidden = true;\r\n        document.getElementById(\"newPass\").hidden = true;\r\n        document.getElementById(\"newPwd\").value = \"\";\r\n        document.getElementById(\"verifyPwd\").value = \"\";\r\n        document.getElementById(\"errorMessage\").hidden = true;\r\n        document.getElementById(\"verifyPwd\").style.backgroundColor = \"White\";\r\n        document.getElementById(\"newPwd\").style.backgroundColor = \"White\";\r\n      }\r\n      else{\r\n        document.getElementById(\"errorMessage\").hidden = false;\r\n        document.getElementById(\"verifyPwd\").style.backgroundColor = \"Red\";\r\n        document.getElementById(\"newPwd\").style.backgroundColor = \"Red\";\r\n      }\r\n    }\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/components/seller/seller-account/seller-account.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/seller/seller-account/seller-account.component.ts ***!
  \******************************************************************************/
/*! exports provided: SellerAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerAccountComponent", function() { return SellerAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SellerAccountComponent = /** @class */ (function () {
    function SellerAccountComponent() {
    }
    SellerAccountComponent.prototype.ngOnInit = function () {
    };
    SellerAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-account',
            template: __webpack_require__(/*! ./seller-account.component.html */ "./src/app/components/seller/seller-account/seller-account.component.html"),
            styles: [__webpack_require__(/*! ./seller-account.component.css */ "./src/app/components/seller/seller-account/seller-account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SellerAccountComponent);
    return SellerAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/seller/seller.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/seller/seller.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submitBtn{\r\n  margin-top: 0px;\r\n  margin-left: 923px;\r\n  position: absolute;\r\n  background-color: #e60000;\r\n  border-color: black;\r\n  border-width: 0.5px;\r\n}\r\n.dropDownBtn{\r\n  position: absolute;\r\n  margin-top: 0px;\r\n  margin-left: 982px;\r\n}\r\n.dDownBtn{\r\n  background-color: #0066ff;\r\n  border-color: black;\r\n  border-width: 0.5px;\r\n}\r\n.submitSearchBtn{\r\n  background-color: #e60000;\r\n  border-color: black;\r\n  border-width: 0.5px;\r\n}\r\n.searchBox{\r\n  position: absolute;\r\n  margin-top: 60px;\r\n  width: 1080px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc2VsbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbGxlci9zZWxsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJtaXRCdG57XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA5MjNweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2MDAwMDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDogMC41cHg7XHJcbn1cclxuLmRyb3BEb3duQnRue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDk4MnB4O1xyXG59XHJcbi5kRG93bkJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NmZmO1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcclxufVxyXG4uc3VibWl0U2VhcmNoQnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjAwMDA7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG59XHJcbi5zZWFyY2hCb3h7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgd2lkdGg6IDEwODBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/seller/seller.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/seller/seller.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BOOTSTRAP via CDN -->\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"></script>\r\n\r\n<div class=\"center\">\r\n  <div class=\"w3-container\">\r\n    <div class=\"container\" style=\"margin-top:70px; height:750px; width: 1500px;\">\r\n      <button type=\"button\" class=\"btn submitBtn text-white\">Submit New Request</button>\r\n\r\n      <div class=\"tabbable\">\r\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" data-toggle=\"tab\" [ngClass]=\"{'active':currentTab === 'requests'}\" data-target=\"#requests\" role=\"tab\" aria-controls=\"requests\" aria-selected=\"true\" (click)=\"requests('requests')\">My Requests</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" data-toggle=\"tab\" [ngClass]=\"{'active':currentTab === 'history'}\" data-target=\"#history\" role=\"tab\" aria-controls=\"history\" aria-selected=\"false\" (click)=\"history('history')\">History</a>\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"tab-content\" id=\"myTabContent\">\r\n          <div class=\"tab-pane fade show active\" id=\"requests\" [ngClass]=\"{'active':currentTab === 'requests'}\" role=\"tabpanel\" aria-labelledby=\"requests-tab\">\r\n            <br>\r\n            <h3>My Requests</h3>\r\n            <div class=\"dropdown dropDownBtn\">\r\n              <button type=\"button\" class=\"btn dDownBtn dropdown-toggle text-white\" data-toggle=\"dropdown\">\r\n                Sort By:\r\n              </button>\r\n              <div class=\"dropdown-menu\">\r\n                <a class=\"dropdown-item\" href=\"#\">Alphabetical</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Earliest to Latest</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Number of Requests</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"input-group mb-3 searchBox\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn submitSearchBtn text-white\" type=\"submit\">Submit</button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"tab-pane fade show\" id=\"history\" [ngClass]=\"{'active':currentTab === 'history'}\" role=\"tabpanel\" aria-labelledby=\"history-tab\">\r\n              <br>\r\n              <h3>History</h3>\r\n              <div class=\"dropdown dropDownBtn\">\r\n                <button type=\"button\" class=\"btn dDownBtn dropdown-toggle text-white\" data-toggle=\"dropdown\">\r\n                  Sort By:\r\n                </button>\r\n                <div class=\"dropdown-menu\">\r\n                  <a class=\"dropdown-item\" href=\"#\">Alphabetical</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Earliest to Latest</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Number of Requests</a>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/seller/seller.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/seller/seller.component.ts ***!
  \*******************************************************/
/*! exports provided: SellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerComponent", function() { return SellerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SellerComponent = /** @class */ (function () {
    function SellerComponent() {
        this.currentTab = 'requests';
    }
    SellerComponent.prototype.ngOnInit = function () {
    };
    SellerComponent.prototype.requests = function (currentTab) {
        this.currentTab = currentTab;
    };
    SellerComponent.prototype.history = function (currentTab) {
        this.currentTab = currentTab;
    };
    SellerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller',
            template: __webpack_require__(/*! ./seller.component.html */ "./src/app/components/seller/seller.component.html"),
            styles: [__webpack_require__(/*! ./seller.component.css */ "./src/app/components/seller/seller.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SellerComponent);
    return SellerComponent;
}());



/***/ }),

/***/ "./src/app/components/seller/submit-offer/submit-offer.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/seller/submit-offer/submit-offer.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsbGVyL3N1Ym1pdC1vZmZlci9zdWJtaXQtb2ZmZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/seller/submit-offer/submit-offer.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/seller/submit-offer/submit-offer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Submit Product Offer</h1>\r\n&nbsp;\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <form>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label\">Request Title:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input class=\"form-control mr-sm-2\" type=\"text\" name=\"request-title\" value=\"\" disabled>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label\">Buyer's description of desired product:</label>\r\n        <div class=\"col-sm-10\">\r\n          <textarea class=\"form-control\" name=\"desc\" rows=\"8\" cols=\"80\" disabled></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label\">Buyer's Deadline:</label>\r\n        <div class=\"row col-sm-10\">\r\n            <input class=\"form-control col-sm-3\" type=\"date\" name=\"deadline-date\" disabled>\r\n            <input class=\"form-control col-sm-3\" type=\"time\" name=\"deadline-time\" disabled>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label\">Enter description of desired product:</label>\r\n        <div class=\"col-sm-10\">\r\n          <textarea class=\"form-control\" name=\"desc\" rows=\"8\" cols=\"80\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Enter Price:</label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" name=\"price\" value=\"\">\r\n          </div>\r\n        </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-sm-10\">\r\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/seller/submit-offer/submit-offer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/seller/submit-offer/submit-offer.component.ts ***!
  \**************************************************************************/
/*! exports provided: SubmitOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitOfferComponent", function() { return SubmitOfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmitOfferComponent = /** @class */ (function () {
    function SubmitOfferComponent() {
    }
    SubmitOfferComponent.prototype.ngOnInit = function () {
    };
    SubmitOfferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit-offer',
            template: __webpack_require__(/*! ./submit-offer.component.html */ "./src/app/components/seller/submit-offer/submit-offer.component.html"),
            styles: [__webpack_require__(/*! ./submit-offer.component.css */ "./src/app/components/seller/submit-offer/submit-offer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubmitOfferComponent);
    return SubmitOfferComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    // Buyer Authenticate Service
    AuthService.prototype.AuthenticateBuyer = function (buyer) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/buyers/login', buyer, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Seller Authenticate Service
    AuthService.prototype.AuthenticateSeller = function (seller) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/sellers/login', seller, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/buyer.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/buyer.service.ts ***!
  \*******************************************/
/*! exports provided: BuyerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerService", function() { return BuyerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyerService = /** @class */ (function () {
    function BuyerService(http) {
        this.http = http;
    }
    // Get Buyer Profile Service
    BuyerService.prototype.getBuyerProfile = function () {
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.buyerToken,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get('http://localhost:3000/buyers/profile', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    BuyerService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.buyerToken = token;
    };
    BuyerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BuyerService);
    return BuyerService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    // Buyer Register Service
    RegisterService.prototype.RegisterBuyer = function (buyer) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/buyers/register', buyer, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Seller Register Service
    RegisterService.prototype.RegisterSeller = function (seller) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/sellers/register', seller, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    RegisterService.prototype.activateAccount = function (token) {
        return this.http.post('http://localhost:3000/buyers/confirmEmail/' + token, token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/storeFetch.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/storeFetch.service.ts ***!
  \************************************************/
/*! exports provided: StoreFetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFetchService", function() { return StoreFetchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreFetchService = /** @class */ (function () {
    function StoreFetchService(http) {
        this.http = http;
        this.user = -1;
    }
    // User Logout Service
    StoreFetchService.prototype.userLogout = function () {
        this.RegisterToken = null;
        this.buyer = null;
        this.seller = null;
        this.user = null;
        localStorage.clear();
    };
    // Store Buyer Data Locally Service
    StoreFetchService.prototype.storeBuyerData = function (token, buyer) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('buyer', JSON.stringify(buyer)); // can only store stings not objects
        this.RegisterToken = token;
        this.buyer = buyer;
    };
    StoreFetchService.prototype.getBuyerProfile = function () {
        this.loadUserToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.RegisterToken
            })
        };
        return this.http.get('http://localhost:3000/buyers/profile', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Fetches the Buyer token from local storage to use with getBuyerToken()
    StoreFetchService.prototype.loadUserToken = function () {
        var token = localStorage.getItem('id_token');
        this.RegisterToken = token;
    };
    // Store Seller Data Locally Service
    StoreFetchService.prototype.storeSellerData = function (token, seller) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('buyer', JSON.stringify(seller)); // can only store stings not objects
        this.RegisterToken = token;
        this.seller = seller;
    };
    StoreFetchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StoreFetchService);
    return StoreFetchService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.ValidateBuyerRegister = function (buyer) {
        // tslint:disable-next-line:triple-equals
        if (buyer.first_name == undefined || buyer.last_name == undefined || buyer.email == undefined || buyer.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chloe\Documents\GEX\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map