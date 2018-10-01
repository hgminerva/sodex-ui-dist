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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_router_activate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.router.activate */ "./src/app/app.router.activate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ===============
// Angular Modules
// ===============



// ==========
// Components
// ==========


// ==============
// Custom Classes
// ==============

// ======
// Routes
// ======
var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_app_router_activate__WEBPACK_IMPORTED_MODULE_5__["AppRouterActivate"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'sodex';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_router_activate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.router.activate */ "./src/app/app.router.activate.ts");
/* harmony import */ var _software_software_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./software/software.module */ "./src/app/software/software.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ===============
// Angular Modules
// ===============





// ==========
// Components
// ==========


// ========
// Services
// ========

// =======
// Routing
// =======


// ===============
// Software Module
// ===============


// ===============
// Material Design
// ===============




// ======
// Toastr
// ======

// ==============
// Custom Classes
// ==============

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _software_software_module__WEBPACK_IMPORTED_MODULE_10__["SoftwareModule"]
            ],
            providers: [
                _app_settings__WEBPACK_IMPORTED_MODULE_17__["AppSettings"],
                _app_router_activate__WEBPACK_IMPORTED_MODULE_9__["AppRouterActivate"],
                _login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.activate.ts":
/*!****************************************!*\
  !*** ./src/app/app.router.activate.ts ***!
  \****************************************/
/*! exports provided: AppRouterActivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterActivate", function() { return AppRouterActivate; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppRouterActivate = /** @class */ (function () {
    function AppRouterActivate(router) {
        this.router = router;
    }
    AppRouterActivate.prototype.canActivate = function () {
        if (localStorage.getItem("access_token") != null) {
            this.router.navigate(["/software"]);
            return false;
        }
        else {
            return true;
        }
    };
    AppRouterActivate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AppRouterActivate);
    return AppRouterActivate;
}());



/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
        // public defaultAPIURLHost: string = "http://localhost:2650";
        this.defaultAPIURLHost = "http://api.sodex.io";
    }
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " header.masthead {\r\n    position: relative;\r\n    background-color: #343a40;\r\n    background: url('bg.jpg') no-repeat center center;\r\n    background-size: cover;\r\n    padding-top: 12rem;\r\n    padding-bottom: 8rem;\r\n    height: calc(100vh);\r\n  }\r\n  \r\n  header.masthead .overlay {\r\n    position: absolute;\r\n    background-color: #000000;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0.6;\r\n  }\r\n  \r\n  .problem-section {\r\n    padding-top: 5rem;\r\n    padding-bottom: 5rem;\r\n    background-color: white;\r\n  }\r\n  \r\n  .what-is-sodex-section {\r\n    padding-top: 5rem;\r\n    padding-bottom: 5rem;\r\n    background-color: rgb(243, 243, 243);\r\n    text-align: justify;\r\n  }\r\n  \r\n  .sodex-steps {\r\n    padding-top: 5rem;\r\n    padding-bottom: 5rem;\r\n    background-color: white;\r\n    text-align: justify;\r\n  }\r\n  \r\n  .footer-section {\r\n    padding-top: 3rem;\r\n    padding-bottom: 3rem;\r\n    background-color: rgb(243, 243, 243);\r\n    text-align: center;\r\n  }\r\n  \r\n  .home-navbar-brand-style {\r\n    height: 35px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark home-navbar-custom-size\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\">\r\n      <img src=\"../../assets/images/logo/sodex.png\" class=\"home-navbar-brand-style\" />\r\n    </a>\r\n    <button class=\"navbar-toggler \" type=\"button \" data-toggle=\"collapse \" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent \"\r\n      aria-expanded=\"false \" aria-label=\"Toggle navigation \">\r\n      <span class=\"navbar-toggler-icon \"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent \">\r\n      <ul class=\"navbar-nav mr-auto \">\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-home\" href=\"#\">About</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-home\" href=\"#\">Contact</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-home\" href=\"#\">Support</a>\r\n        </li> -->\r\n      </ul>\r\n      <form class=\"form-inline my-2 my-lg-0 \">\r\n        <ul class=\"navbar-nav mr-auto \">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-home\" routerLink=\"/login\">{{ currentUser }}</a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"isUserLoggedIn\">\r\n            <a class=\"nav-link nav-link-home\" routerLink=\"#\" (click)=\"logoutUser()\">\r\n              <i class=\"fa fa-power-off \"></i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<header class=\"masthead text-white text-center \">\r\n  <div class=\"overlay \"></div>\r\n  <div class=\"container \">\r\n    <div class=\"row \">\r\n      <div class=\"col-xl-9 mx-auto \">\r\n        <br />\r\n        <br />\r\n        <img src=\"../../assets/images/logo/sodex.png\" style=\"height: 100px;\" />\r\n        <br />\r\n        <p class=\"lead \" style=\"font-size: 30px; margin-top: 15px;\">\r\n          Simplified payment using Blockchain.\r\n        </p>\r\n      </div>\r\n      <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto \">\r\n        <br />\r\n        <br />\r\n        <button type=\"submit \" class=\"btn btn-lg btn-primary \" routerLink=\"/software\">Get Started</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<section class=\"problem-section\">\r\n  <div class=\"container \">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7\">\r\n        <p class=\"lead\" style=\"font-size: 30px;\">\r\n          Problems using paper money.\r\n        </p>\r\n        <br />\r\n        <p class=\"lead\">Lack of change. Coins and lower denomination is hard to get nowadays.</p>\r\n        <p class=\"lead\">Small denomination spoilage. Inflation devaluates coins, that is why we do not carry them anymore.</p>\r\n        <p class=\"lead\">Slower transactions. Counting paper money and coins takes up time.</p>\r\n        <p class=\"lead\">Bulky to carry. Since the value of paper money is getting lower we tend to carry more.</p>\r\n        <br />\r\n        <button type=\"button\" class=\"btn btn-warning btn-lg\">\r\n          <i class=\"fa fa-download fa-fw\"></i> Download Whitepaper\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-5\" style=\"padding: 50px;\">\r\n        <img src=\"../../assets/images/section/moneypaper.jpg\" class=\"img-thumbnail\" style=\"border: none;\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"what-is-sodex-section\">\r\n  <div class=\"container\">\r\n    <p class=\"lead\" style=\"font-size: 30px;\">\r\n      What is SODE\r\n      <span style=\"color: rgb(184, 0, 0)\">X</span>?\r\n    </p>\r\n    <br />\r\n    <p class=\"lead\">\r\n      SODE\r\n      <span style=\"color: rgb(184, 0, 0)\">X</span> is a simplified online payment using Blockchain.\r\n    </p>\r\n    <p class=\"lead\">\r\n      Greater transparency. Transaction histories are becoming more transparent through the use of blockchain technology. Because\r\n      blockchain is a type of distributed ledger, all network participants share the same documentation as opposed to individual\r\n      copies. That shared version can only be updated through consensus, which means everyone must agree on it.\r\n    </p>\r\n    <p class=\"lead\">\r\n      Enhanced security. There are several ways blockchain is more secure than other record-keeping systems. Transactions must\r\n      be agreed upon before they are recorded. After a transaction is approved, it is encrypted and linked to the previous\r\n      transaction. This, along with the fact that information is stored across a network of computers instead of on a single\r\n      server, makes it very difficult for hackers to compromise the transaction data.\r\n    </p>\r\n    <p class=\"lead\">\r\n      Improved traceability. If your company deals with products that are traded through a complex supply chain, you’re familiar\r\n      with how hard it can be to trace an item back to its origin. When exchanges of goods are recorded on a blockchain,\r\n      you end up with an audit trail that shows where an asset came from and every stop it made on its journey.\r\n    </p>\r\n    <p class=\"lead\">\r\n      Increased efficiency and speed. When you use traditional, paper-heavy processes, trading anything is a time-consuming process\r\n      that is prone to human error and often requires third-party mediation. By streamlining and automating these processes\r\n      with blockchain, transactions can be completed faster and more efficiently.\r\n    </p>\r\n    <p class=\"lead\">\r\n      Reduced costs. For most businesses, reducing costs is a priority. With blockchain, you don’t need as many third parties or\r\n      middlemen to make guarantees because it doesn’t matter if you can trust your trading partner. Instead, you just have\r\n      to trust the data on the blockchain.\r\n    </p>\r\n    <br />\r\n    <button type=\"button\" class=\"btn btn-danger btn-lg\">\r\n      <i class=\"fa fa-download fa-fw\"></i> Download Whitepaper\r\n    </button>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"sodex-steps\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <p class=\"lead\" style=\"font-size: 30px;\">\r\n          <i class=\"fa fa-credit-card fa-fw\"></i> SODE\r\n          <span style=\"color: rgb(184, 0, 0)\">X</span> Card\r\n        </p>\r\n        <br />\r\n        <p class=\"lead\">\r\n          SODE\r\n          <span style=\"color: rgb(184, 0, 0)\">X</span> Cards are plastic cards linked to the user's wallet address, which enable the cardholder to use the sodex\r\n          available on his/her address. This is used to exchange to peso from his/her sodex balance as well as to make non-cash\r\n          or online payment for products/services.\r\n        </p>\r\n        <br />\r\n        <p class=\"lead\">\r\n          <i class=\"fa fa-check fa-fw\" style=\"color: rgb(0, 184, 61)\"></i> &nbsp; STEP 1: Get a card.\r\n        </p>\r\n        <p class=\"lead\">\r\n          <i class=\"fa fa-check fa-fw\" style=\"color: rgb(0, 184, 61)\"></i> &nbsp; STEP 2: Buy SODE\r\n          <span style=\"color: rgb(184, 0, 0)\">X</span>.\r\n        </p>\r\n        <p class=\"lead\">\r\n          <i class=\"fa fa-check fa-fw\" style=\"color: rgb(0, 184, 61)\"></i> &nbsp; STEP 3: Start buying using SODE\r\n          <span style=\"color: rgb(184, 0, 0)\">X</span>.\r\n        </p>\r\n        <p class=\"lead\">\r\n          <i class=\"fa fa-check fa-fw\" style=\"color: rgb(0, 184, 61)\"></i> &nbsp; STEP 4: Register your card.\r\n        </p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <p class=\"lead\" style=\"font-size: 30px;\">\r\n          <i class=\"fa fa-mobile fa-fw\"></i> SODE\r\n          <span style=\"color: rgb(184, 0, 0)\">X</span> Mobile\r\n        </p>\r\n        <br />\r\n        <p class=\"lead\">\r\n          SODE X Mobile is a virtual wallet that stores user's wallet address on a mobile device. It is a convenient way for a user\r\n          to make in-store payments and can be used at merchants listed with the mobile service provider.\r\n        </p>\r\n        <br />\r\n        <p class=\"lead\">\r\n          <i class=\"fa fa-check fa-fw\" style=\"color: rgb(0, 184, 61)\"></i> &nbsp; STEP 1: Install SODE\r\n          <span style=\"color: rgb(184, 0, 0)\">X</span> app into your mobile device.\r\n        </p>\r\n        <p class=\"lead\">\r\n          <i class=\"fa fa-check fa-fw\" style=\"color: rgb(0, 184, 61)\"></i> &nbsp; STEP 2: Buy SODE\r\n          <span style=\"color: rgb(184, 0, 0)\">X</span>.\r\n        </p>\r\n        <p class=\"lead\">\r\n          <i class=\"fa fa-check fa-fw\" style=\"color: rgb(0, 184, 61)\"></i> &nbsp; STEP 3: Start buying using SODE\r\n          <span style=\"color: rgb(184, 0, 0)\">X</span>.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<footer class=\"footer-section\">\r\n  <div class=\"container\">\r\n    © 2018, SODE\r\n    <span style=\"color: rgb(184, 0, 0)\">X</span>.IO VERSION 1.1\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HomeComponent(router) {
        this.router = router;
        this.currentUser = "Login";
        this.isUserLoggedIn = false;
    }
    HomeComponent.prototype.logoutUser = function () {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('username');
        this.currentUser = "Login";
        ;
        this.isUserLoggedIn = false;
        location.reload();
    };
    HomeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("access_token") != null) {
            this.currentUser = localStorage.getItem("username");
            this.isUserLoggedIn = true;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n  <div class=\"container-fluid\">\r\n    <br />\r\n    <br />\r\n    <br />\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\"></div>\r\n      <div class=\"col-md-4\">\r\n        <mat-card class=\"login-container\">\r\n          <mat-card-header class=\"login-header\">\r\n            <a routerLink=\"/home\">\r\n              <img src=\"../../assets/images/logo/sodex.png\" style=\"height: 30px;\" />\r\n            </a>\r\n          </mat-card-header>\r\n          <mat-card-content class=\"login-content\">\r\n            <h3>\r\n              Sign in\r\n            </h3>\r\n            <h6 style=\"margin-left: 1px;\">to continue to application</h6>\r\n            <br />\r\n            <form (ngSubmit)=\"btnLoginClick()\" class=\"form-container\">\r\n              <mat-form-field class=\"input-100-percent\">\r\n                <mat-label>Username</mat-label>\r\n                <input required matInput type=\"text\" id=\"inpUsername\" [(ngModel)]=\"loginModel.UserName\" [ngModelOptions]=\"{standalone: true}\"\r\n                />\r\n              </mat-form-field>\r\n              <mat-form-field class=\"input-100-percent\">\r\n                <mat-label>Password</mat-label>\r\n                <input required matInput type=\"password\" id=\"inpPassword\" [(ngModel)]=\"loginModel.Password\" [ngModelOptions]=\"{standalone: true}\"\r\n                  placeholder=\"Enter your password\" />\r\n              </mat-form-field>\r\n\r\n              <input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"btnLogin\" value=\"Sign in\" />\r\n            </form>\r\n            <br />\r\n            <br />\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <br />\r\n        <p class=\"text-center\" style=\"color: gray; font-size: 12px;\">\r\n          Copyright © 2018, SODE X.IO\r\n          <br /> VERSION 1.1\r\n        </p>\r\n      </div>\r\n      <div class=\"col-md-4\"></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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
    function LoginComponent(loginService, toastr, router) {
        this.loginService = loginService;
        this.toastr = toastr;
        this.router = router;
        this.loginModel = {
            UserName: "",
            Password: ""
        };
    }
    LoginComponent.prototype.btnLoginClick = function () {
        var _this = this;
        var btnLogin = document.getElementById("btnLogin");
        btnLogin.setAttribute("disabled", "disabled");
        btnLogin.setAttribute("value", "Signing in...");
        var inpUsername = document.getElementById("inpUsername");
        inpUsername.setAttribute("disabled", "disabled");
        var inpPassword = document.getElementById("inpPassword");
        inpPassword.setAttribute("disabled", "disabled");
        this.loginService.login(this.loginModel.UserName, this.loginModel.Password);
        this.loginSubscription = this.loginService.loginObservable.subscribe(function (data) {
            if (data) {
                _this.toastr.success('Login Successful!', 'Login');
                setTimeout(function () {
                    _this.router.navigate(['/software']);
                    if (_this.loginSubscription != null)
                        _this.loginSubscription.unsubscribe();
                }, 500);
            }
            else {
                _this.toastr.error('Login Failed!', 'Login');
                btnLogin.removeAttribute("disabled");
                btnLogin.setAttribute("value", "Sign in");
                inpUsername.removeAttribute("disabled");
                inpPassword.removeAttribute("disabled");
                if (_this.loginSubscription != null)
                    _this.loginSubscription.unsubscribe();
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.loginSubscription != null)
            this.loginSubscription.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(appSettings, http) {
        this.appSettings = appSettings;
        this.http = http;
        this.defaultAPIHostURL = this.appSettings.defaultAPIURLHost;
        this.loginSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loginObservable = this.loginSource.asObservable();
    }
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var url = this.defaultAPIHostURL + '/token';
        var body = "username=" + username + "&password=" + password + "&grant_type=password";
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        this.http.post(url, body, options).subscribe(function (response) {
            localStorage.setItem('access_token', response.json().access_token);
            localStorage.setItem('expires_in', response.json().expires_in);
            localStorage.setItem('token_type', response.json().token_type);
            localStorage.setItem('username', response.json().userName);
            _this.loginSource.next(true);
        }, function (error) {
            _this.loginSource.next(false);
        });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/software/cards/cards.component.css":
/*!****************************************************!*\
  !*** ./src/app/software/cards/cards.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/software/cards/cards.component.html":
/*!*****************************************************!*\
  !*** ./src/app/software/cards/cards.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"isLoadingSpinnerHidden\">\r\n  <br /><br /><br />\r\n  <mat-spinner style=\"margin: auto;\"></mat-spinner>\r\n</div>\r\n<div [hidden]=\"isContentHidden\">\r\n  <div class=\"container-fluid\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software\">Dashboard</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item active\">Cards</li>\r\n    </ol>\r\n    <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"selectedTab.value\" (selectedIndexChange)=\"selectedTab.setValue($event)\"\r\n      (selectedTabChange)=\"onCardTabClick($event)\">\r\n      <mat-tab [label]=\"'Card List'\">\r\n        <br />\r\n\r\n        <div class=\"card card-default\">\r\n          <div class=\"card-header\" align=\"right\">\r\n            <table border=\"0\" style=\"width: 100%; border: none;\">\r\n              <tr>\r\n                <td style=\"width: 80%;\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <b>Show</b>\r\n                      </div>\r\n                    </div>\r\n                    <wj-combo-box #cboNumberOfRows [itemsSource]=\"cboShowNumberOfRows\" [isEditable]=\"false\" [isRequired]=\"true\" [displayMemberPath]=\"'rowString'\"\r\n                      [selectedValuePath]=\"'rowNumber'\" (selectedIndexChanged)=\"cboShowNumberOfRowsOnSelectedIndexChanged(cboNumberOfRows.selectedValue)\"\r\n                      style=\"width: 180px;\">\r\n                    </wj-combo-box>\r\n                  </div>\r\n                </td>\r\n                <td style=\"width: 20%;\" align=\"right\">\r\n                  <button type=\"button\" class=\"btn btn-primary\" [hidden]=\"isAddButtonHide\" style=\"margin-right: 5px;\" (click)=\"btnNewCardOnclick(newCardModalTemplate)\">\r\n                    <i class=\"fa fa-plus fa-fw\"></i>Add\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/software\">\r\n                    <i class=\"fa fa-close fa-fw\"></i>Close\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <mat-progress-bar [hidden]=\"isProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n            <wj-flex-grid #cardsFlexGrid [itemsSource]=\"cardsCollectionView\" [selectionMode]=\"3\" [frozenColumns]=\"2\">\r\n              <wj-flex-grid-filter></wj-flex-grid-filter>\r\n              <wj-flex-grid-column *ngIf=\"isShowEditColumn\" [header]=\"Edit\" [isReadOnly]=\"true\" [width]=\"isEditButtonHide ? 0 : 95\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\">\r\n                  <button [hidden]=\"isEditButtonHide\" type=\"button\" class=\"btn btn-primary btn-block btn-xs\" (click)=\"btnOpenCard()\">\r\n                    <i class=\"fa fa-edit fa-fw\"></i> Edit\r\n                  </button>\r\n                </ng-template>\r\n              </wj-flex-grid-column>\r\n              <wj-flex-grid-column *ngIf=\"isShowDeleteColumn\" [header]=\"Delete\" [isReadOnly]=\"true\" [width]=\"95\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\">\r\n                  <button [hidden]=\"isDeleteButtonHide\" type=\"button\" class=\"btn btn-danger btn-block btn-xs\" (click)=\"btnDeleteCardOnclick(deleteCardModalTemplate)\">\r\n                    <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                  </button>\r\n                </ng-template>\r\n              </wj-flex-grid-column>\r\n              <wj-flex-grid-column [header]=\"'Card No.'\" [binding]=\"'CardNumber'\" [isReadOnly]=\"true\" [width]=\"'1.5*'\"></wj-flex-grid-column>\r\n              <wj-flex-grid-column [header]=\"'Name'\" [binding]=\"'FullName'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n              <wj-flex-grid-column [header]=\"'Balance'\" [binding]=\"'BalanceDisplay'\" [isReadOnly]=\"true\" [width]=\"'2*'\" [align]=\"'right'\"></wj-flex-grid-column>\r\n              <wj-flex-grid-column [header]=\"'Particulars'\" [binding]=\"'Particulars'\" [isReadOnly]=\"true\" [width]=\"'3*'\"></wj-flex-grid-column>\r\n              <wj-flex-grid-column [header]=\"'Status'\" [binding]=\"'Status'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n            </wj-flex-grid>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cardsCollectionView.moveToFirstPage()\">\r\n                <i class=\"fa fa-fast-backward\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cardsCollectionView.moveToPreviousPage()\">\r\n                <i class=\"fa fa-step-backward\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                {{ cardsCollectionView.pageIndex + 1 }} / {{ cardsCollectionView.pageCount }}\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cardsCollectionView.moveToNextPage()\">\r\n                <i class=\"fa fa-step-forward\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cardsCollectionView.moveToLastPage()\">\r\n                <i class=\"fa fa-fast-forward\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <br />\r\n\r\n        <div class=\"card card-default\">\r\n          <div class=\"card-body\">\r\n            <br />\r\n            <div class=\"row\">\r\n              <div class=\"col-md-7\">\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <div class=\"form-container\">\r\n                  <mat-form-field>\r\n                    <input matInput currencyMask placeholder=\"Total Balance\" [(ngModel)]=\"totalBalanceAmount\" disabled autocomplete=\"off\" autocorrect=\"off\"\r\n                      autocapitalize=\"off\" spellcheck=\"false\" value=\"0.00\" style=\"text-align: right;\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <br />\r\n      </mat-tab>\r\n\r\n      <mat-tab *ngFor=\"let detailTab of detailTabs; let index = index\" [label]=\"detailTab\">\r\n        <br />\r\n\r\n        <div class=\"card card-default\">\r\n          <div class=\"card-header\" align=\"right\">\r\n            <button type=\"button\" class=\"btn btn-primary\" [hidden]=\"isUpdateButtonHide\" id=\"btnUpdateCard\" style=\"margin-right: 5px;\"\r\n              (click)=\"btnUpdateCard()\">\r\n              <i class=\"fa fa-check fa-fw\"></i>Update\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary\" [hidden]=\"isEditButtonHide\" id=\"btnEditCard\" style=\"margin-right: 5px;\" (click)=\"btnEditCard()\">\r\n              <i class=\"fa fa-edit fa-fw\"></i>Edit\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-danger\" id=\"btnCloseCard\" (click)=\"removeCardTab(index)\">\r\n              <i class=\"fa fa-close fa-fw\"></i>Close\r\n            </button>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"form-container\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Card Number\" disabled [(ngModel)]=\"listCards[cardIndex].CardNumber\" autocomplete=\"off\" autocorrect=\"off\"\r\n                      autocapitalize=\"off\" spellcheck=\"false\">\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Name\" [disabled]=\"isCardFieldDisabled\" [(ngModel)]=\"listCards[cardIndex].FullName\" autocomplete=\"off\"\r\n                      autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <textarea matInput placeholder=\"Address\" [disabled]=\"isCardFieldDisabled\" rows=\"5\" style=\"height: 87px; resize: none;\" [(ngModel)]=\"listCards[cardIndex].Address\"\r\n                      autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\"></textarea>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" [disabled]=\"isCardFieldDisabled\" [(ngModel)]=\"listCards[cardIndex].Email\" autocomplete=\"off\"\r\n                      autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Contact Number\" [disabled]=\"isCardFieldDisabled\" autocomplete=\"off\" autocorrect=\"off\" [(ngModel)]=\"listCards[cardIndex].ContactNumber\"\r\n                      autocapitalize=\"off\" spellcheck=\"false\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div class=\"form-container\">\r\n                  <mat-form-field>\r\n                    <input matInput currencyMask placeholder=\"Balance\" disabled [(ngModel)]=\"listCards[cardIndex].Balance\" autocomplete=\"off\"\r\n                      autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" style=\"font-size: 60px; height: 86.5px;\" value=\"0.00\">\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Status\" [disabled]=\"isCardFieldDisabled\" [(ngModel)]=\"listCards[cardIndex].Status\">\r\n                      <mat-option [value]=\"'Enable'\">Enable</mat-option>\r\n                      <mat-option [value]=\"'Disable'\">Disable</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <br />\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n  <ng-template #newCardModalTemplate>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">\r\n        <i class=\"fa fa-credit-card fa-fw\"></i> New Card</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"form-container\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Card Number\" [(ngModel)]=\"card.CardNumber\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\r\n            spellcheck=\"false\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Name\" [(ngModel)]=\"card.FullName\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\r\n            spellcheck=\"false\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Address\" rows=\"5\" style=\"height: 87px; resize: none;\" [(ngModel)]=\"card.Address\" autocomplete=\"off\"\r\n            autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\"></textarea>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Email Address\" [(ngModel)]=\"card.Email\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\r\n            spellcheck=\"false\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Contact Number\" [(ngModel)]=\"card.ContactNumber\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\r\n            spellcheck=\"false\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Status\" [(ngModel)]=\"card.Status\">\r\n            <mat-option [value]=\"'Enable'\">Enable</mat-option>\r\n            <mat-option [value]=\"'Disable'\">Disable</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" [hidden]=\"isAddButtonHide\" class=\"btn btn-primary\" style=\"margin-right: 5px;\" id=\"btnSaveCard\" (click)=\"btnSaveCardOnclick()\">\r\n        <i class=\"fa fa-save fa-fw\"></i>Save\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger\" id=\"btnCloseNewCardModal\" (click)=\"newCardModalRef.hide()\">\r\n        <i class=\"fa fa-close fa-fw\"></i>Cancel\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #deleteCardModalTemplate>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">\r\n        <i class=\"fa fa-trash fa-fw\"></i> Delete</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      Are you sure you want to delete this card?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" [hidden]=\"isDeleteButtonHide\" class=\"btn btn-danger\" style=\"margin-right: 5px;\" id=\"btnConfirmDeleteCard\"\r\n        (click)=\"btnConfirmDeleteCardOnclick()\">\r\n        <i class=\"fa fa-trash fa-fw\"></i>Delete\r\n      </button>\r\n      <button type=\"button\" class=\"btn\" id=\"btnConfirmDeleteCardCloseModal\" (click)=\"deleteCardModalRef.hide()\">\r\n        <i class=\"fa fa-close fa-fw\"></i>Cancel\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/software/cards/cards.component.ts":
/*!***************************************************!*\
  !*** ./src/app/software/cards/cards.component.ts ***!
  \***************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards.service */ "./src/app/software/cards/cards.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _software_user_forms_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../software.user.forms.service */ "./src/app/software/software.user.forms.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CardsComponent = /** @class */ (function () {
    function CardsComponent(cardsService, modalService, toastr, softwareUserFormsService, router) {
        this.cardsService = cardsService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.softwareUserFormsService = softwareUserFormsService;
        this.router = router;
        this.detailTabs = [];
        this.selectedTab = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.card = {
            Id: 0,
            CardNumber: "",
            FullName: "",
            Address: "",
            Email: "",
            ContactNumber: "",
            UserId: 0,
            Balance: 0,
            Particulars: "",
            Status: ""
        };
        this.cardIndex = 0;
        this.listCards = [{
                TabNumber: 0,
                Id: 0,
                CardNumber: "",
                FullName: "",
                Address: "",
                Email: "",
                ContactNumber: "",
                UserId: 0,
                Balance: 0,
                Particulars: "",
                Status: ""
            }];
        this.isCardFieldDisabled = false;
        this.cardsData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.cardsCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["CollectionView"](this.cardsData);
        this.cardsNumberOfPageIndex = 15;
        this.isProgressBarHidden = false;
        this.cboShowNumberOfRows = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.isLoadingSpinnerHidden = false;
        this.isContentHidden = true;
        this.totalBalanceAmount = 0;
        this.isAddButtonHide = true;
        this.isEditButtonHide = true;
        this.isUpdateButtonHide = true;
        this.isDeleteButtonHide = true;
        this.isShowEditColumn = false;
        this.isShowDeleteColumn = false;
    }
    CardsComponent.prototype.createCboShowNumberOfRows = function () {
        for (var i = 0; i <= 4; i++) {
            var rows = 0;
            var rowsString = "";
            if (i == 0) {
                rows = 15;
                rowsString = "15 Rows";
            }
            else if (i == 1) {
                rows = 50;
                rowsString = "50 Rows";
            }
            else if (i == 2) {
                rows = 100;
                rowsString = "100 Rows";
            }
            else if (i == 3) {
                rows = 150;
                rowsString = "150 Rows";
            }
            else {
                rows = 200;
                rowsString = "200 Rows";
            }
            this.cboShowNumberOfRows.push({
                rowNumber: rows,
                rowString: rowsString
            });
        }
    };
    CardsComponent.prototype.cboShowNumberOfRowsOnSelectedIndexChanged = function (selectedValue) {
        this.cardsNumberOfPageIndex = selectedValue;
        this.cardsCollectionView.pageSize = this.cardsNumberOfPageIndex;
        this.cardsCollectionView.refresh();
        this.cardsFlexGrid.refresh();
    };
    CardsComponent.prototype.getCardsData = function () {
        var _this = this;
        this.cardsData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.cardsCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["CollectionView"](this.cardsData);
        this.cardsCollectionView.pageSize = 15;
        this.cardsCollectionView.trackChanges = true;
        this.cardsCollectionView.refresh();
        this.cardsFlexGrid.refresh();
        this.isProgressBarHidden = false;
        this.cardsService.getCards();
        this.getCardsSubscription = this.cardsService.getCardsObservable.subscribe(function (data) {
            if (data.length > 0) {
                _this.cardsData = data;
                _this.cardsCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["CollectionView"](_this.cardsData);
                _this.cardsCollectionView.pageSize = _this.cardsNumberOfPageIndex;
                _this.cardsCollectionView.trackChanges = true;
                _this.cardsCollectionView.refresh();
                _this.cardsFlexGrid.refresh();
                for (var p = 1; p <= _this.cardsCollectionView.pageCount; p++) {
                    for (var i = 0; i < _this.cardsCollectionView.items.length; i++) {
                        _this.totalBalanceAmount += _this.cardsCollectionView.items[i].Balance;
                    }
                    if (p == _this.cardsCollectionView.pageCount) {
                        _this.cardsCollectionView.moveToFirstPage();
                    }
                    else {
                        _this.cardsCollectionView.moveToNextPage();
                    }
                }
            }
            _this.isProgressBarHidden = true;
        });
    };
    CardsComponent.prototype.btnNewCardOnclick = function (template) {
        this.card.CardNumber = "";
        this.card.FullName = "";
        this.card.Address = "";
        this.card.Email = "";
        this.card.ContactNumber = "";
        this.card.Balance = 0;
        this.card.Status = "Enable";
        this.newCardModalRef = this.modalService.show(template, { class: "" });
    };
    CardsComponent.prototype.btnSaveCardOnclick = function () {
        var _this = this;
        var btnSaveCard = document.getElementById("btnSaveCard");
        btnSaveCard.innerHTML = "<i class='fa fa-save fa-fw'></i> Saving...";
        btnSaveCard.setAttribute("disabled", "disabled");
        var btnCloseNewCardModal = document.getElementById("btnCloseNewCardModal");
        btnCloseNewCardModal.setAttribute("disabled", "disabled");
        var objCard = {
            Id: this.card.Id,
            CardNumber: this.card.CardNumber,
            FullName: this.card.FullName,
            Address: this.card.Address,
            Email: this.card.Email,
            ContactNumber: this.card.ContactNumber,
            UserId: this.card.UserId,
            Balance: this.card.Balance,
            Particulars: this.card.Particulars,
            Status: this.card.Status
        };
        this.cardsService.saveCard(objCard);
        this.saveCardSubscription = this.cardsService.saveCardObservable.subscribe(function (data) {
            if (data[0] == "success") {
                _this.toastr.success('Save Successful!');
                setTimeout(function () {
                    btnSaveCard.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                    btnSaveCard.removeAttribute("disabled");
                    btnCloseNewCardModal.removeAttribute("disabled");
                }, 500);
                _this.getCardsData();
                _this.newCardModalRef.hide();
            }
            else if (data[0] == "failed") {
                _this.toastr.error(data[1]);
                btnSaveCard.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnSaveCard.removeAttribute("disabled");
                btnCloseNewCardModal.removeAttribute("disabled");
            }
            if (_this.saveCardSubscription != null)
                _this.saveCardSubscription.unsubscribe();
        });
    };
    CardsComponent.prototype.btnOpenCard = function () {
        var _this = this;
        var currentCard = this.cardsCollectionView.currentItem;
        this.detailTabs.push(currentCard.FullName);
        this.selectedTab.setValue(this.detailTabs.length);
        this.listCards.push({
            TabNumber: this.selectedTab.value,
            Id: currentCard.Id,
            CardNumber: currentCard.CardNumber,
            FullName: currentCard.FullName,
            Address: currentCard.Address,
            Email: currentCard.Email,
            ContactNumber: currentCard.ContactNumber,
            UserId: currentCard.UserId,
            Balance: currentCard.Balance,
            Particulars: currentCard.Particulars,
            Status: currentCard.Status
        });
        this.cardIndex = this.listCards.length - 1;
        setTimeout(function () {
            _this.isCardFieldDisabled = true;
            var btnUpdateCard = document.getElementById("btnUpdateCard");
            btnUpdateCard.setAttribute("disabled", "disabled");
        }, 100);
    };
    CardsComponent.prototype.btnEditCard = function () {
        this.isCardFieldDisabled = false;
        var btnUpdateCard = document.getElementById("btnUpdateCard");
        btnUpdateCard.removeAttribute("disabled");
        var btnEditCard = document.getElementById("btnEditCard");
        btnEditCard.setAttribute("disabled", "disabled");
    };
    CardsComponent.prototype.btnUpdateCard = function () {
        var _this = this;
        if (this.listCards.length > 0) {
            this.isCardFieldDisabled = true;
            var objCard = {
                TabNumber: this.listCards[this.cardIndex].TabNumber,
                Id: this.listCards[this.cardIndex].Id,
                CardNumber: this.listCards[this.cardIndex].CardNumber,
                FullName: this.listCards[this.cardIndex].FullName,
                Address: this.listCards[this.cardIndex].Address,
                Email: this.listCards[this.cardIndex].Email,
                ContactNumber: this.listCards[this.cardIndex].ContactNumber,
                UserId: this.listCards[this.cardIndex].UserId,
                Balance: this.listCards[this.cardIndex].Balance,
                Particulars: this.listCards[this.cardIndex].Particulars,
                Status: this.listCards[this.cardIndex].Status
            };
            var btnUpdateCard_1 = document.getElementById("btnUpdateCard");
            btnUpdateCard_1.innerHTML = "<i class='fa fa-check fa-fw'></i> Updating...";
            btnUpdateCard_1.setAttribute("disabled", "disabled");
            var btnEditCard_1 = document.getElementById("btnEditCard");
            btnEditCard_1.setAttribute("disabled", "disabled");
            var btnCloseCard_1 = document.getElementById("btnCloseCard");
            btnCloseCard_1.setAttribute("disabled", "disabled");
            this.cardsService.updateCard(objCard);
            this.updateCardSubscription = this.cardsService.updateCardObservable.subscribe(function (data) {
                if (data[0] == "success") {
                    _this.toastr.success('Update Successful!');
                    _this.isCardFieldDisabled = true;
                    btnUpdateCard_1.innerHTML = "<i class='fa fa-check fa-fw'></i> Update";
                    btnUpdateCard_1.setAttribute("disabled", "disabled");
                    btnEditCard_1.removeAttribute("disabled");
                    btnCloseCard_1.removeAttribute("disabled");
                    _this.getCardsData();
                }
                else if (data[0] == "failed") {
                    _this.toastr.error(data[1]);
                    _this.isCardFieldDisabled = false;
                    btnUpdateCard_1.innerHTML = "<i class='fa fa-check fa-fw'></i> Update";
                    btnUpdateCard_1.removeAttribute("disabled");
                    btnCloseCard_1.removeAttribute("disabled");
                }
                if (_this.updateCardSubscription != null)
                    _this.updateCardSubscription.unsubscribe();
            });
        }
    };
    CardsComponent.prototype.removeCardTab = function (index) {
        var _this = this;
        if ((this.detailTabs.length - 1) == index) {
            var currentCardIndex = this.listCards.indexOf(this.listCards.filter(function (card) { return card.TabNumber === _this.selectedTab.value; })[0]);
            this.listCards.splice(currentCardIndex, 1);
            currentCardIndex--;
            this.cardIndex = currentCardIndex;
        }
        else {
            var currentCardIndex = this.listCards.indexOf(this.listCards.filter(function (card) { return card.TabNumber === _this.selectedTab.value; })[0]);
            this.listCards.splice(currentCardIndex, 1);
            var tabNumber = this.selectedTab.value;
            for (var i = currentCardIndex; i < this.listCards.length; i++) {
                this.listCards[i].TabNumber = tabNumber;
                tabNumber++;
            }
            this.cardIndex = this.listCards.indexOf(this.listCards[currentCardIndex]);
        }
        this.detailTabs.splice(index, 1);
    };
    CardsComponent.prototype.onCardTabClick = function (event) {
        var _this = this;
        if (event.index > 0) {
            var currentCardIndex = this.listCards.indexOf(this.listCards.filter(function (card) { return card.TabNumber === _this.selectedTab.value; })[0]);
            this.cardIndex = currentCardIndex;
        }
        else {
            if (event.index == 0) {
                this.cardsCollectionView.refresh();
                this.cardsFlexGrid.refresh();
            }
        }
    };
    CardsComponent.prototype.btnDeleteCardOnclick = function (template) {
        this.deleteCardModalRef = this.modalService.show(template, { class: "modal-sm" });
    };
    CardsComponent.prototype.btnConfirmDeleteCardOnclick = function () {
        var _this = this;
        var btnConfirmDeleteCard = document.getElementById("btnConfirmDeleteCard");
        btnConfirmDeleteCard.innerHTML = "<i class='fa fa-trash fa-fw'></i> Deleting...";
        btnConfirmDeleteCard.setAttribute("disabled", "disabled");
        var btnConfirmDeleteCardCloseModal = document.getElementById("btnConfirmDeleteCardCloseModal");
        btnConfirmDeleteCardCloseModal.setAttribute("disabled", "disabled");
        var currentCard = this.cardsCollectionView.currentItem;
        var listCards = this.listCards.filter(function (card) { return card.Id === currentCard.Id; });
        if (listCards.length > 0) {
            this.toastr.error('This card cannot be deleted because it is currently open in a tab. Please close it before proceeding.');
            btnConfirmDeleteCard.removeAttribute("disabled");
            btnConfirmDeleteCard.innerHTML = "<i class='fa fa-trash fa-fw'></i> Delete";
            btnConfirmDeleteCardCloseModal.removeAttribute("disabled");
        }
        else {
            this.cardsService.deleteCard(currentCard.Id);
            this.deleteCardSubscription = this.cardsService.deleteCardObservable.subscribe(function (data) {
                if (data[0] == "success") {
                    _this.toastr.success('Delete Successful!');
                    setTimeout(function () {
                        btnConfirmDeleteCard.innerHTML = "<i class='fa fa-trash fa-fw'></i> Delete";
                        btnConfirmDeleteCard.removeAttribute("disabled");
                        btnConfirmDeleteCardCloseModal.removeAttribute("disabled");
                    }, 500);
                    _this.getCardsData();
                    _this.deleteCardModalRef.hide();
                }
                else if (data[0] == "failed") {
                    _this.toastr.error(data[1]);
                    btnConfirmDeleteCard.innerHTML = "<i class='fa fa-trash fa-fw'></i> Delete";
                    btnConfirmDeleteCard.removeAttribute("disabled");
                    btnConfirmDeleteCardCloseModal.removeAttribute("disabled");
                }
                if (_this.deleteCardSubscription != null)
                    _this.deleteCardSubscription.unsubscribe();
            });
        }
    };
    CardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createCboShowNumberOfRows();
        setTimeout(function () {
            _this.softwareUserFormsService.getCurrentForm("SetupCard");
            _this.getUserFormsSubscription = _this.softwareUserFormsService.getCurrentUserFormsObservable.subscribe(function (data) {
                if (data != null) {
                    _this.isLoadingSpinnerHidden = true;
                    _this.isContentHidden = false;
                    if (data.CanAdd) {
                        _this.isAddButtonHide = false;
                    }
                    if (data.CanEdit) {
                        _this.isEditButtonHide = false;
                        _this.isShowEditColumn = true;
                    }
                    if (data.CanUpdate) {
                        _this.isUpdateButtonHide = false;
                    }
                    if (data.CanDelete) {
                        _this.isDeleteButtonHide = false;
                        _this.isShowDeleteColumn = true;
                    }
                    _this.getCardsData();
                }
                else {
                    _this.router.navigateByUrl("/software/forbidden", { skipLocationChange: true });
                }
                if (_this.getUserFormsSubscription != null)
                    _this.getUserFormsSubscription.unsubscribe();
            });
        }, 1000);
    };
    CardsComponent.prototype.ngOnDestroy = function () {
        if (this.getCardsSubscription != null)
            this.getCardsSubscription.unsubscribe();
        if (this.saveCardSubscription != null)
            this.saveCardSubscription.unsubscribe();
        if (this.updateCardSubscription != null)
            this.updateCardSubscription.unsubscribe();
        if (this.deleteCardSubscription != null)
            this.deleteCardSubscription.unsubscribe();
        if (this.getUserFormsSubscription != null)
            this.getUserFormsSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cardsFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__["WjFlexGrid"])
    ], CardsComponent.prototype, "cardsFlexGrid", void 0);
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/software/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.css */ "./src/app/software/cards/cards.component.css")]
        }),
        __metadata("design:paramtypes", [_cards_service__WEBPACK_IMPORTED_MODULE_3__["CardsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _software_user_forms_service__WEBPACK_IMPORTED_MODULE_7__["SoftwareUserFormsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/software/cards/cards.service.ts":
/*!*************************************************!*\
  !*** ./src/app/software/cards/cards.service.ts ***!
  \*************************************************/
/*! exports provided: CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardsService = /** @class */ (function () {
    function CardsService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIURLHost = this.appSettings.defaultAPIURLHost;
        this.getCardsSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getCardsObservable = this.getCardsSource.asObservable();
        this.saveCardSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.saveCardObservable = this.saveCardSource.asObservable();
        this.updateCardSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.updateCardObservable = this.updateCardSource.asObservable();
        this.deleteCardSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.deleteCardObservable = this.deleteCardSource.asObservable();
    }
    CardsService.prototype.getCards = function () {
        var _this = this;
        var cardsObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"]();
        this.getCardsSource.next(cardsObservableArray);
        this.http.get(this.defaultAPIURLHost + "/api/cards/list", this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    cardsObservableArray.push({
                        Id: results[i].Id,
                        CardNumber: results[i].CardNumber,
                        FullName: results[i].FullName,
                        Address: results[i].Address,
                        Email: results[i].Email,
                        ContactNumber: results[i].ContactNumber,
                        UserId: results[i].UserId,
                        Balance: results[i].Balance,
                        BalanceDisplay: results[i].Balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        Particulars: results[i].Particulars,
                        Status: results[i].Status
                    });
                }
            }
            _this.getCardsSource.next(cardsObservableArray);
        });
    };
    CardsService.prototype.saveCard = function (objCard) {
        var _this = this;
        this.http.post(this.defaultAPIURLHost + "/api/cards/add", JSON.stringify(objCard), this.options).subscribe(function (response) {
            var responseResults = ["success", ""];
            _this.saveCardSource.next(responseResults);
        }, function (error) {
            var errorResults = ["failed", error.json()];
            _this.saveCardSource.next(errorResults);
        });
    };
    CardsService.prototype.updateCard = function (objCard) {
        var _this = this;
        var id = objCard.Id;
        this.http.put(this.defaultAPIURLHost + "/api/cards/update/" + id, JSON.stringify(objCard), this.options).subscribe(function (response) {
            var responseResults = ["success", ""];
            _this.updateCardSource.next(responseResults);
        }, function (error) {
            var errorResults = ["failed", error.json()];
            _this.updateCardSource.next(errorResults);
        });
    };
    CardsService.prototype.deleteCard = function (id) {
        var _this = this;
        this.http.delete(this.defaultAPIURLHost + "/api/cards/delete/" + id, this.options).subscribe(function (response) {
            var responseResults = ["success", ""];
            _this.deleteCardSource.next(responseResults);
        }, function (error) {
            var errorResults = ["failed", error.json()];
            _this.deleteCardSource.next(errorResults);
        });
    };
    CardsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], CardsService);
    return CardsService;
}());



/***/ }),

/***/ "./src/app/software/check-balance/check-balance.component.css":
/*!********************************************************************!*\
  !*** ./src/app/software/check-balance/check-balance.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/software/check-balance/check-balance.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/software/check-balance/check-balance.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"isLoadingSpinnerHidden\">\r\n  <br /><br /><br />\r\n  <mat-spinner style=\"margin: auto;\"></mat-spinner>\r\n</div>\r\n<div [hidden]=\"isContentHidden\">\r\n  <div class=\"container-fluid\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software\">Dashboard</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item active\">Check Balance</li>\r\n    </ol>\r\n\r\n    <div class=\"card card-default\">\r\n      <div class=\"card-header\" align=\"right\">\r\n        <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/software\">\r\n          <i class=\"fa fa-close fa-fw\"></i>Close\r\n        </button>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                <mat-form-field style=\"width: 100%;\">\r\n                  <input matInput placeholder=\"Card Number\" type=\"password\" (keyup)=\"onCardNumberKeyPress($event)\" [(ngModel)]=\"card.CardNumber\" autocomplete=\"off\"\r\n                    autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-2\" align=\"right\">\r\n                <button class=\"btn btn-info btn-block\" style=\"margin-top: 8px;\" type=\"button\" tooltip=\"Check Card Balance and Details\" placement=\"top\"\r\n                  (click)=\"btnLoadCardDetailsOnclick()\">\r\n                  <i class=\"fa fa-credit-card\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-container\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Name\" [disabled]=\"true\" [(ngModel)]=\"card.FullName\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\r\n                  spellcheck=\"false\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <textarea matInput placeholder=\"Address\" [disabled]=\"true\" [(ngModel)]=\"card.Address\" rows=\"5\" style=\"height: 87px; resize: none;\"\r\n                  autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\"></textarea>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Email\" [disabled]=\"true\" [(ngModel)]=\"card.Email\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\r\n                  spellcheck=\"false\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Contact Number\" [disabled]=\"true\" [(ngModel)]=\"card.ContactNumber\" autocomplete=\"off\" autocorrect=\"off\"\r\n                  autocapitalize=\"off\" spellcheck=\"false\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"form-container\">\r\n              <mat-form-field>\r\n                <input matInput currencyMask placeholder=\"Balance\" [disabled]=\"true\" [(ngModel)]=\"card.Balance\" autocomplete=\"off\" autocorrect=\"off\"\r\n                  autocapitalize=\"off\" spellcheck=\"false\" style=\"text-align: right; font-size: 60px; height: 86.5px;\" value=\"0.00\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Status\" [disabled]=\"true\" [(ngModel)]=\"card.Status\">\r\n                  <mat-option [value]=\"'Enable'\">Enable</mat-option>\r\n                  <mat-option [value]=\"'Disable'\">Disable</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/software/check-balance/check-balance.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/software/check-balance/check-balance.component.ts ***!
  \*******************************************************************/
/*! exports provided: CheckBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBalanceComponent", function() { return CheckBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _check_balance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-balance.service */ "./src/app/software/check-balance/check-balance.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _software_user_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../software.user.forms.service */ "./src/app/software/software.user.forms.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckBalanceComponent = /** @class */ (function () {
    function CheckBalanceComponent(checkBalanceService, toastr, softwareUserFormsService, router) {
        this.checkBalanceService = checkBalanceService;
        this.toastr = toastr;
        this.softwareUserFormsService = softwareUserFormsService;
        this.router = router;
        this.card = {
            Id: 0,
            CardNumber: "",
            FullName: "",
            Address: "",
            Email: "",
            ContactNumber: "",
            UserId: 0,
            Balance: 0,
            Particulars: "",
            Status: ""
        };
        this.isLoadingSpinnerHidden = false;
        this.isContentHidden = true;
        this.isAddButtonHide = true;
        this.isEditButtonHide = true;
        this.isUpdateButtonHide = true;
        this.isDeleteButtonHide = true;
    }
    CheckBalanceComponent.prototype.btnLoadCardDetailsOnclick = function () {
        var _this = this;
        if (this.card.CardNumber != "") {
            this.checkBalanceService.getCardDetails(this.card.CardNumber);
            this.getCardSubscription = this.checkBalanceService.getCardObservable.subscribe(function (data) {
                if (data != null) {
                    _this.card.FullName = data.FullName;
                    _this.card.Address = data.Address;
                    _this.card.Email = data.Email;
                    _this.card.ContactNumber = data.ContactNumber;
                    _this.card.UserId = data.UserId;
                    _this.card.Balance = data.Balance;
                    _this.card.Particulars = data.Particulars;
                    _this.card.Status = data.Status;
                    _this.toastr.success("Card details successfully loaded.");
                }
                else {
                    _this.toastr.error("No card details for this card number.");
                    _this.card.FullName = "";
                    _this.card.Address = "";
                    _this.card.Email = "";
                    _this.card.ContactNumber = "";
                    _this.card.UserId = 0;
                    _this.card.Balance = 0;
                    _this.card.Particulars = "";
                    _this.card.Status = "";
                }
                if (_this.getCardSubscription != null)
                    _this.getCardSubscription.unsubscribe();
            });
        }
        else {
            this.toastr.error("Please provide a card number.");
        }
    };
    CheckBalanceComponent.prototype.onCardNumberKeyPress = function (event) {
        if (event.key == "Enter") {
            this.btnLoadCardDetailsOnclick();
        }
    };
    CheckBalanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.softwareUserFormsService.getCurrentForm("TransactionCheckBalance");
            _this.getUserFormsSubscription = _this.softwareUserFormsService.getCurrentUserFormsObservable.subscribe(function (data) {
                if (data != null) {
                    _this.isLoadingSpinnerHidden = true;
                    _this.isContentHidden = false;
                    if (data.CanAdd) {
                        _this.isAddButtonHide = false;
                    }
                    if (data.CanEdit) {
                        _this.isEditButtonHide = false;
                    }
                    if (data.CanUpdate) {
                        _this.isUpdateButtonHide = false;
                    }
                    if (data.CanDelete) {
                        _this.isDeleteButtonHide = false;
                    }
                }
                else {
                    _this.router.navigateByUrl("/software/forbidden", { skipLocationChange: true });
                }
                if (_this.getUserFormsSubscription != null)
                    _this.getUserFormsSubscription.unsubscribe();
            });
        }, 1000);
    };
    CheckBalanceComponent.prototype.ngOnDestroy = function () {
        if (this.getCardSubscription != null)
            this.getCardSubscription.unsubscribe();
        if (this.getUserFormsSubscription != null)
            this.getUserFormsSubscription.unsubscribe();
    };
    CheckBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-balance',
            template: __webpack_require__(/*! ./check-balance.component.html */ "./src/app/software/check-balance/check-balance.component.html"),
            styles: [__webpack_require__(/*! ./check-balance.component.css */ "./src/app/software/check-balance/check-balance.component.css")]
        }),
        __metadata("design:paramtypes", [_check_balance_service__WEBPACK_IMPORTED_MODULE_1__["CheckBalanceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _software_user_forms_service__WEBPACK_IMPORTED_MODULE_3__["SoftwareUserFormsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CheckBalanceComponent);
    return CheckBalanceComponent;
}());



/***/ }),

/***/ "./src/app/software/check-balance/check-balance.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/software/check-balance/check-balance.service.ts ***!
  \*****************************************************************/
/*! exports provided: CheckBalanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBalanceService", function() { return CheckBalanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckBalanceService = /** @class */ (function () {
    function CheckBalanceService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIURLHost = this.appSettings.defaultAPIURLHost;
        this.getCardSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getCardObservable = this.getCardSource.asObservable();
    }
    CheckBalanceService.prototype.getCardDetails = function (cardNumber) {
        var _this = this;
        var cardDetail = {
            Id: 0,
            FullName: "",
            Address: "",
            Email: "",
            ContactNumber: "",
            UserId: 0,
            Balance: 0,
            Particulars: "",
            Status: ""
        };
        this.getCardSource.next(cardDetail);
        this.http.get(this.defaultAPIURLHost + "/api/cards/detail/" + cardNumber, this.options).subscribe(function (response) {
            var results = response.json();
            if (results != null) {
                cardDetail.FullName = results.FullName;
                cardDetail.Address = results.Address;
                cardDetail.Email = results.Email;
                cardDetail.ContactNumber = results.ContactNumber;
                cardDetail.UserId = results.UserId;
                cardDetail.Balance = results.Balance;
                cardDetail.Particulars = results.Particulars;
                cardDetail.Status = results.Status;
                _this.getCardSource.next(cardDetail);
            }
            else {
                _this.getCardSource.next(null);
            }
        });
    };
    CheckBalanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], CheckBalanceService);
    return CheckBalanceService;
}());



/***/ }),

/***/ "./src/app/software/dashboard/dashboard.component.css":
/*!************************************************************!*\
  !*** ./src/app/software/dashboard/dashboard.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/software/dashboard/dashboard.component.html":
/*!*************************************************************!*\
  !*** ./src/app/software/dashboard/dashboard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item active\">Dashboard</li>\r\n    </ol>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <button type=\"button\" class=\"btn btn-light btn-lg btn-block\" routerLink=\"/software/profile\" style=\"border: 1px solid rgb(199, 199, 199)\">\r\n                <br />\r\n                <img src=\"../../../assets/images/icons/store.png\" class=\"img-icon-styles\">\r\n                <br />\r\n                <br />\r\n                <h3>Profile</h3>\r\n                <br />\r\n            </button>\r\n            <br />\r\n        </div>\r\n        <div class=\"col\">\r\n            <button type=\"button\" class=\"btn btn-light btn-lg btn-block\" routerLink=\"/software/transfer\" style=\"border: 1px solid rgb(199, 199, 199)\">\r\n                <br />\r\n                <img src=\"../../../assets/images/icons/transfer.png\" class=\"img-icon-styles\">\r\n                <br />\r\n                <br />\r\n                <h3>Transfer</h3>\r\n                <br />\r\n            </button>\r\n            <br />\r\n        </div>\r\n        <div class=\"col\">\r\n            <button type=\"button\" class=\"btn btn-light btn-lg btn-block\" routerLink=\"/software/reports\" style=\"border: 1px solid rgb(199, 199, 199)\">\r\n                <br />\r\n                <img src=\"../../../assets/images/icons/reports.png\" class=\"img-icon-styles\">\r\n                <br />\r\n                <br />\r\n                <h3>Reports</h3>\r\n                <br />\r\n            </button>\r\n            <br />\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <button type=\"button\" class=\"btn btn-light btn-lg btn-block\" routerLink=\"/software/cards\" style=\"border: 1px solid rgb(199, 199, 199)\">\r\n                <br />\r\n                <img src=\"../../../assets/images/icons/cards.png\" class=\"img-icon-styles\">\r\n                <br />\r\n                <br />\r\n                <h3>Cards</h3>\r\n                <br />\r\n            </button>\r\n            <br />\r\n        </div>\r\n        <div class=\"col\">\r\n            <button type=\"button\" class=\"btn btn-light btn-lg btn-block\" routerLink=\"/software/checkbalance\" style=\"border: 1px solid rgb(199, 199, 199)\">\r\n                <br />\r\n                <img src=\"../../../assets/images/icons/check-balance.png\" class=\"img-icon-styles\">\r\n                <br />\r\n                <br />\r\n                <h3>Check Balance</h3>\r\n                <br />\r\n            </button>\r\n            <br />\r\n        </div>\r\n        <div class=\"col\">\r\n            <button type=\"button\" class=\"btn btn-light btn-lg btn-block\" routerLink=\"/software/users\" style=\"border: 1px solid rgb(199, 199, 199)\">\r\n                <br />\r\n                <img src=\"../../../assets/images/icons/users.png\" class=\"img-icon-styles\">\r\n                <br />\r\n                <br />\r\n                <h3>Users</h3>\r\n                <br />\r\n            </button>\r\n            <br />\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/software/dashboard/dashboard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/software/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/software/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/software/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/software/forbidden/forbidden.component.css":
/*!************************************************************!*\
  !*** ./src/app/software/forbidden/forbidden.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/software/forbidden/forbidden.component.html":
/*!*************************************************************!*\
  !*** ./src/app/software/forbidden/forbidden.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a routerLink=\"/software\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">Forbidden</li>\r\n  </ol>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" align=\"right\">\r\n      <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/software\">\r\n        <i class=\"fa fa-close fa-fw\"></i>Close\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body text-center\">\r\n      <br />\r\n      <img src=\"../../../assets/images/icons/forbidden.png\" height=\"220\" />\r\n      <br /><br /><br />\r\n      <h1>Page Forbidden</h1>\r\n      <h4>\r\n        Sorry, but you have no rights to access this page.\r\n      </h4>\r\n      <br />\r\n    </div>\r\n  </div>\r\n  <br />\r\n</div>"

/***/ }),

/***/ "./src/app/software/forbidden/forbidden.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/software/forbidden/forbidden.component.ts ***!
  \***********************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
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

var ForbiddenComponent = /** @class */ (function () {
    function ForbiddenComponent() {
    }
    ForbiddenComponent.prototype.ngOnInit = function () {
    };
    ForbiddenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forbidden',
            template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/software/forbidden/forbidden.component.html"),
            styles: [__webpack_require__(/*! ./forbidden.component.css */ "./src/app/software/forbidden/forbidden.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForbiddenComponent);
    return ForbiddenComponent;
}());



/***/ }),

/***/ "./src/app/software/profile/profile.component.css":
/*!********************************************************!*\
  !*** ./src/app/software/profile/profile.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/software/profile/profile.component.html":
/*!*********************************************************!*\
  !*** ./src/app/software/profile/profile.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"isLoadingSpinnerHidden\">\r\n  <br /><br /><br />\r\n  <mat-spinner style=\"margin: auto;\"></mat-spinner>\r\n</div>\r\n<div [hidden]=\"isContentHidden\">\r\n  <div class=\"container-fluid\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software\">Dashboard</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item active\">Profile</li>\r\n    </ol>\r\n    <div class=\"card card-default\">\r\n      <div class=\"card-header\" align=\"right\">\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right: 5px;\" [hidden]=\"isUpdateButtonHide\" id=\"btnUpdateProfile\"\r\n          (click)=\"btnUpdateProfileOnclick()\">\r\n          <i class=\"fa fa-save fa-fw\"></i>Save\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right: 5px;\" [hidden]=\"isEditButtonHide\" id=\"btnEditProfile\"\r\n          (click)=\"btnEditProfileOnclick()\">\r\n          <i class=\"fa fa-edit fa-fw\"></i>Edit\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-danger\" id=\"btnCloseProfile\" routerLink=\"/software\">\r\n          <i class=\"fa fa-close fa-fw\"></i>Close\r\n        </button>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"form-container\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"profile.FullName\" [disabled]=\"isProfileDisabled\" autocomplete=\"off\" autocorrect=\"off\"\r\n                  autocapitalize=\"off\" spellcheck=\"false\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <textarea matInput placeholder=\"Address\" [(ngModel)]=\"profile.Address\" [disabled]=\"isProfileDisabled\" rows=\"5\" style=\"height: 87px; resize: none;\"\r\n                  autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\"></textarea>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Email\" [(ngModel)]=\"profile.Email\" [disabled]=\"isProfileDisabled\" autocomplete=\"off\" autocorrect=\"off\"\r\n                  autocapitalize=\"off\" spellcheck=\"false\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Contact Number\" [(ngModel)]=\"profile.ContactNumber\" [disabled]=\"isProfileDisabled\" autocomplete=\"off\"\r\n                  autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"form-container\">\r\n              <mat-form-field>\r\n                <input matInput type=\"password\" disabled placeholder=\"Mother Card Number\" [(ngModel)]=\"profile.MotherCardNumber\" [disabled]=\"isProfileDisabled\"\r\n                  autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input currencyMask matInput placeholder=\"Balance\" [(ngModel)]=\"profile.MotherCardBalance\" [disabled]=\"isProfileDisabled\"\r\n                  autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" value=\"0.00\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br />\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/software/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/software/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.service */ "./src/app/software/profile/profile.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _software_user_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../software.user.forms.service */ "./src/app/software/software.user.forms.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, toastr, softwareUserFormsService, router) {
        this.profileService = profileService;
        this.toastr = toastr;
        this.softwareUserFormsService = softwareUserFormsService;
        this.router = router;
        this.profile = {
            Id: 0,
            FullName: "",
            Address: "",
            Email: "",
            ContactNumber: "",
            MotherCardNumber: "",
            MotherCardBalance: 0
        };
        this.isProfileDisabled = true;
        this.isLoadingSpinnerHidden = false;
        this.isContentHidden = true;
        this.isAddButtonHide = true;
        this.isEditButtonHide = true;
        this.isUpdateButtonHide = true;
        this.isDeleteButtonHide = true;
    }
    ProfileComponent.prototype.getProfileData = function () {
        var _this = this;
        var btnUpdateProfile = document.getElementById("btnUpdateProfile");
        btnUpdateProfile.setAttribute("disabled", "disabled");
        this.profileService.getProfile();
        this.getProfileSubscription = this.profileService.getProfileObservable.subscribe(function (data) {
            _this.profile.FullName = data.FullName;
            _this.profile.Address = data.Address;
            _this.profile.Email = data.Email;
            _this.profile.ContactNumber = data.ContactNumber;
            _this.profile.MotherCardNumber = data.MotherCardNumber;
            _this.profile.MotherCardBalance = data.MotherCardBalance;
        });
    };
    ProfileComponent.prototype.btnUpdateProfileOnclick = function () {
        var _this = this;
        var btnUpdateProfile = document.getElementById("btnUpdateProfile");
        btnUpdateProfile.innerHTML = "<i class='fa fa-check fa-fw'></i> Updating...";
        btnUpdateProfile.setAttribute("disabled", "disabled");
        var btnEditProfile = document.getElementById("btnEditProfile");
        btnEditProfile.setAttribute("disabled", "disabled");
        var btnCloseProfile = document.getElementById("btnCloseProfile");
        btnCloseProfile.setAttribute("disabled", "disabled");
        this.profileService.updateProfile(this.profile);
        this.updateProfileSubscription = this.profileService.updateProfileObservable.subscribe(function (data) {
            if (data[0] == "success") {
                _this.toastr.success('Update Successful!');
                _this.isProfileDisabled = true;
                btnUpdateProfile.innerHTML = "<i class='fa fa-check fa-fw'></i> Update";
                btnUpdateProfile.setAttribute("disabled", "disabled");
                btnEditProfile.removeAttribute("disabled");
                btnCloseProfile.removeAttribute("disabled");
            }
            else if (data[0] == "failed") {
                _this.toastr.error(data[1]);
                _this.isProfileDisabled = false;
                btnUpdateProfile.innerHTML = "<i class='fa fa-check fa-fw'></i> Update";
                btnUpdateProfile.removeAttribute("disabled");
                btnCloseProfile.removeAttribute("disabled");
            }
            if (_this.updateProfileSubscription != null)
                _this.updateProfileSubscription.unsubscribe();
        });
    };
    ProfileComponent.prototype.btnEditProfileOnclick = function () {
        this.isProfileDisabled = false;
        var btnEditProfile = document.getElementById("btnEditProfile");
        btnEditProfile.setAttribute("disabled", "disabled");
        var btnUpdateProfile = document.getElementById("btnUpdateProfile");
        btnUpdateProfile.removeAttribute("disabled");
        var btnCloseProfile = document.getElementById("btnCloseProfile");
        btnCloseProfile.removeAttribute("disabled");
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.softwareUserFormsService.getCurrentForm("SetupProfile");
            _this.getUserFormsSubscription = _this.softwareUserFormsService.getCurrentUserFormsObservable.subscribe(function (data) {
                if (data != null) {
                    _this.isLoadingSpinnerHidden = true;
                    _this.isContentHidden = false;
                    if (data.CanAdd) {
                        _this.isAddButtonHide = false;
                    }
                    if (data.CanEdit) {
                        _this.isEditButtonHide = false;
                    }
                    if (data.CanUpdate) {
                        _this.isUpdateButtonHide = false;
                    }
                    if (data.CanDelete) {
                        _this.isDeleteButtonHide = false;
                    }
                    _this.getProfileData();
                }
                else {
                    _this.router.navigateByUrl("/software/forbidden", { skipLocationChange: true });
                }
                if (_this.getUserFormsSubscription != null)
                    _this.getUserFormsSubscription.unsubscribe();
            });
        }, 1000);
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        if (this.getProfileSubscription != null)
            this.getProfileSubscription.unsubscribe();
        if (this.updateProfileSubscription != null)
            this.updateProfileSubscription.unsubscribe();
        if (this.getUserFormsSubscription != null)
            this.getUserFormsSubscription.unsubscribe();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/software/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/software/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _software_user_forms_service__WEBPACK_IMPORTED_MODULE_3__["SoftwareUserFormsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/software/profile/profile.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/software/profile/profile.service.ts ***!
  \*****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = /** @class */ (function () {
    function ProfileService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIURLHost = this.appSettings.defaultAPIURLHost;
        this.getProfileSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getProfileObservable = this.getProfileSource.asObservable();
        this.updateProfileSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.updateProfileObservable = this.updateProfileSource.asObservable();
    }
    ProfileService.prototype.getProfile = function () {
        var _this = this;
        var profile = {
            Id: 0,
            FullName: "",
            Address: "",
            Email: "",
            ContactNumber: "",
            MotherCardNumber: "",
            MotherCardBalance: 0
        };
        this.getProfileSource.next(profile);
        this.http.get(this.defaultAPIURLHost + "/api/profile/detail", this.options).subscribe(function (response) {
            var results = response.json();
            if (results != null) {
                profile.FullName = results.FullName;
                profile.Address = results.Address;
                profile.Email = results.Email;
                profile.ContactNumber = results.ContactNumber;
                profile.MotherCardNumber = results.MotherCardNumber;
                profile.MotherCardBalance = results.MotherCardBalance;
            }
            _this.getProfileSource.next(profile);
        });
    };
    ProfileService.prototype.updateProfile = function (objProfile) {
        var _this = this;
        this.http.put(this.defaultAPIURLHost + "/api/profile/update", JSON.stringify(objProfile), this.options).subscribe(function (response) {
            var responseResults = ["success", ""];
            _this.updateProfileSource.next(responseResults);
        }, function (error) {
            var errorResults = ["failed", error.json()];
            _this.updateProfileSource.next(errorResults);
        });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/software/reports/reports.component.css":
/*!********************************************************!*\
  !*** ./src/app/software/reports/reports.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/software/reports/reports.component.html":
/*!*********************************************************!*\
  !*** ./src/app/software/reports/reports.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"isLoadingSpinnerHidden\">\r\n  <br /><br /><br />\r\n  <mat-spinner style=\"margin: auto;\"></mat-spinner>\r\n</div>\r\n<div [hidden]=\"isContentHidden\">\r\n  <div class=\"container-fluid\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software\">Dashboard</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item active\">Reports</li>\r\n    </ol>\r\n\r\n    <div class=\"card card-default\">\r\n      <div class=\"card-header\" align=\"right\">\r\n        <button type=\"button\" class=\"btn btn-info\" style=\"margin-right: 5px;\" id=\"btnGenerate\" [disabled]=\"isBtnGenerateDisabled\"\r\n          (click)=\"btnGenerateLedgerOnclick()\">\r\n          <i class=\"fa fa-refresh fa-fw\"></i>Generate\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/software\">\r\n          <i class=\"fa fa-close fa-fw\"></i>Close\r\n        </button>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-container\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Card Number\" type=\"password\" (keyup)=\"onCardNumberKeyPress($event)\" [(ngModel)]=\"cardNumber\" autocomplete=\"off\"\r\n                  autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-container\">\r\n              <mat-form-field>\r\n                <input matInput [disabled]=\"true\" [matDatepicker]=\"dateStartPicker\" [(ngModel)]=\"dateStartValue\" [value]=\"dateStartValue\"\r\n                  placeholder=\"Date Start\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"dateStartPicker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #dateStartPicker disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-container\">\r\n              <mat-form-field>\r\n                <input matInput [disabled]=\"true\" [matDatepicker]=\"dateEndPicker\" [(ngModel)]=\"dateEndValue\" [value]=\"dateEndValue\" placeholder=\"Date End\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"dateEndPicker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #dateEndPicker disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <br />\r\n\r\n    <div class=\"card card-default\">\r\n      <div class=\"card-header\" align=\"right\">\r\n        <table border=\"0\" style=\"width: 100%; border: none;\">\r\n          <tr>\r\n            <td style=\"width: 80%;\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\">\r\n                    <b>Show</b>\r\n                  </div>\r\n                </div>\r\n                <wj-combo-box #cboNumberOfRows [itemsSource]=\"cboShowNumberOfRows\" [isEditable]=\"false\" [isRequired]=\"true\" [displayMemberPath]=\"'rowString'\"\r\n                  [selectedValuePath]=\"'rowNumber'\" (selectedIndexChanged)=\"cboShowNumberOfRowsOnSelectedIndexChanged(cboNumberOfRows.selectedValue)\"\r\n                  style=\"width: 180px;\">\r\n                </wj-combo-box>\r\n              </div>\r\n            </td>\r\n            <td style=\"width: 20%;\" align=\"right\">\r\n              <button type=\"button\" class=\"btn btn-success\" style=\"margin-right: 5px;\" [disabled]=\"isBtnGenerateDisabled\" id=\"btnExport\"\r\n                (click)=\"btnExportLedgerOnclick()\">\r\n                <i class=\"fa fa-table fa-fw\"></i>Export\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <mat-progress-bar [hidden]=\"isProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n        <wj-flex-grid #ledgersFlexGrid [itemsSource]=\"ledgersCollectionView\" [selectionMode]=\"3\" [frozenColumns]=\"2\">\r\n          <wj-flex-grid-filter></wj-flex-grid-filter>\r\n          <wj-flex-grid-column [header]=\"'Date'\" [binding]=\"'LedgerDateTime'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n          <wj-flex-grid-column [header]=\"'Particulars'\" [binding]=\"'Particulars'\" [isReadOnly]=\"true\" [width]=\"'3*'\"></wj-flex-grid-column>\r\n          <wj-flex-grid-column [header]=\"'Debit'\" [binding]=\"'DebitAmountDisplay'\" [isReadOnly]=\"true\" [width]=\"'2*'\" [align]=\"'right'\"></wj-flex-grid-column>\r\n          <wj-flex-grid-column [header]=\"'Credit'\" [binding]=\"'CreditAmountDisplay'\" [isReadOnly]=\"true\" [width]=\"'2*'\" [align]=\"'right'\"></wj-flex-grid-column>\r\n          <wj-flex-grid-column [header]=\"'Balance'\" [binding]=\"'BalanceAmountDisplay'\" [isReadOnly]=\"true\" [width]=\"'2*'\" [align]=\"'right'\"></wj-flex-grid-column>\r\n        </wj-flex-grid>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"ledgersCollectionView.moveToFirstPage()\">\r\n            <i class=\"fa fa-fast-backward\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"ledgersCollectionView.moveToPreviousPage()\">\r\n            <i class=\"fa fa-step-backward\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n            {{ ledgersCollectionView.pageIndex + 1 }} / {{ ledgersCollectionView.pageCount }}\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"ledgersCollectionView.moveToNextPage()\">\r\n            <i class=\"fa fa-step-forward\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"ledgersCollectionView.moveToLastPage()\">\r\n            <i class=\"fa fa-fast-forward\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <br />\r\n\r\n    <div class=\"card card-default\">\r\n      <div class=\"card-body\">\r\n        <br />\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7\">\r\n          </div>\r\n          <div class=\"col-md-5\">\r\n            <div class=\"form-container\">\r\n              <mat-form-field>\r\n                <input matInput currencyMask placeholder=\"Total Debit\" [(ngModel)]=\"totalDebitAmount\" disabled autocomplete=\"off\" autocorrect=\"off\"\r\n                  autocapitalize=\"off\" spellcheck=\"false\" value=\"0.00\" style=\"text-align: right;\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput currencyMask placeholder=\"Total Credit\" [(ngModel)]=\"totalCreditAmount\" disabled autocomplete=\"off\" autocorrect=\"off\"\r\n                  autocapitalize=\"off\" spellcheck=\"false\" value=\"0.00\" style=\"text-align: right;\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput currencyMask placeholder=\"Total Balance\" [(ngModel)]=\"totalBalanceAmount\" disabled autocomplete=\"off\" autocorrect=\"off\"\r\n                  autocapitalize=\"off\" spellcheck=\"false\" value=\"0.00\" style=\"text-align: right;\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <br />\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/software/reports/reports.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/software/reports/reports.component.ts ***!
  \*******************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.service */ "./src/app/software/reports/reports.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular5-csv/Angular5-csv */ "./node_modules/angular5-csv/Angular5-csv.js");
/* harmony import */ var angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _software_user_forms_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../software.user.forms.service */ "./src/app/software/software.user.forms.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(reportsService, toastr, softwareUserFormsService, router) {
        this.reportsService = reportsService;
        this.toastr = toastr;
        this.softwareUserFormsService = softwareUserFormsService;
        this.router = router;
        this.dateStartValue = new Date();
        this.dateEndValue = new Date();
        this.ledgersData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.ledgersCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"](this.ledgersData);
        this.ledgersNumberOfPageIndex = 15;
        this.isProgressBarHidden = true;
        this.totalDebitAmount = 0;
        this.totalCreditAmount = 0;
        this.totalBalanceAmount = 0;
        this.isBtnGenerateDisabled = true;
        this.cboShowNumberOfRows = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.isLoadingSpinnerHidden = false;
        this.isContentHidden = true;
        this.isAddButtonHide = true;
        this.isEditButtonHide = true;
        this.isUpdateButtonHide = true;
        this.isDeleteButtonHide = true;
    }
    ReportsComponent.prototype.createCboShowNumberOfRows = function () {
        for (var i = 0; i <= 4; i++) {
            var rows = 0;
            var rowsString = "";
            if (i == 0) {
                rows = 15;
                rowsString = "15 Rows";
            }
            else if (i == 1) {
                rows = 50;
                rowsString = "50 Rows";
            }
            else if (i == 2) {
                rows = 100;
                rowsString = "100 Rows";
            }
            else if (i == 3) {
                rows = 150;
                rowsString = "150 Rows";
            }
            else {
                rows = 200;
                rowsString = "200 Rows";
            }
            this.cboShowNumberOfRows.push({
                rowNumber: rows,
                rowString: rowsString
            });
        }
    };
    ReportsComponent.prototype.cboShowNumberOfRowsOnSelectedIndexChanged = function (selectedValue) {
        this.ledgersNumberOfPageIndex = selectedValue;
        this.ledgersCollectionView.pageSize = this.ledgersNumberOfPageIndex;
        this.ledgersCollectionView.refresh();
        this.ledgersFlexGrid.refresh();
    };
    ReportsComponent.prototype.getCardsData = function () {
        var _this = this;
        this.isBtnGenerateDisabled = true;
        this.totalDebitAmount = 0;
        this.totalCreditAmount = 0;
        this.totalBalanceAmount = 0;
        var startDate = ('0' + (this.dateStartValue.getMonth() + 1)).slice(-2) + '-' + ('0' + this.dateStartValue.getDate()).slice(-2) + '-' + this.dateStartValue.getFullYear();
        var endDate = ('0' + (this.dateEndValue.getMonth() + 1)).slice(-2) + '-' + ('0' + this.dateEndValue.getDate()).slice(-2) + '-' + this.dateEndValue.getFullYear();
        this.reportsService.getLedgers(this.cardNumber, startDate, endDate);
        this.getLedgersSubscription = this.reportsService.getLedgerObservable.subscribe(function (data) {
            if (data.length > 0) {
                _this.ledgersData = data;
                _this.ledgersCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"](_this.ledgersData);
                _this.ledgersCollectionView.pageSize = _this.ledgersNumberOfPageIndex;
                _this.ledgersCollectionView.trackChanges = true;
                _this.ledgersCollectionView.refresh();
                _this.ledgersFlexGrid.refresh();
                for (var p = 1; p <= _this.ledgersCollectionView.pageCount; p++) {
                    for (var i = 0; i < _this.ledgersCollectionView.items.length; i++) {
                        _this.totalDebitAmount += _this.ledgersCollectionView.items[i].DebitAmount;
                        _this.totalCreditAmount += _this.ledgersCollectionView.items[i].CreditAmount;
                        _this.totalBalanceAmount += _this.ledgersCollectionView.items[i].BalanceAmount;
                    }
                    if (p == _this.ledgersCollectionView.pageCount) {
                        _this.ledgersCollectionView.moveToFirstPage();
                    }
                    else {
                        _this.ledgersCollectionView.moveToNextPage();
                    }
                }
                _this.toastr.success("Generate Successful!");
            }
            else {
                _this.toastr.error("No data!");
            }
            _this.isProgressBarHidden = true;
            _this.isBtnGenerateDisabled = false;
            var btnGenerate = document.getElementById("btnGenerate");
            btnGenerate.innerHTML = "<i class='fa fa-refresh fa-fw'></i> Generate";
            btnGenerate.removeAttribute("disabled");
            if (_this.getLedgersSubscription != null)
                _this.getLedgersSubscription.unsubscribe();
        });
    };
    ReportsComponent.prototype.btnGenerateLedgerOnclick = function () {
        if (this.cardNumber != "") {
            var btnGenerate = document.getElementById("btnGenerate");
            btnGenerate.innerHTML = "<i class='fa fa-refresh fa-fw'></i> Generating...";
            btnGenerate.setAttribute("disabled", "disabled");
            this.isProgressBarHidden = false;
            this.ledgersData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
            this.ledgersCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"](this.ledgersData);
            this.ledgersCollectionView.pageSize = 15;
            this.ledgersCollectionView.trackChanges = true;
            this.ledgersCollectionView.refresh();
            this.ledgersFlexGrid.refresh();
            this.getCardsData();
        }
        else {
            this.toastr.error("Please provide a card number.");
        }
    };
    ReportsComponent.prototype.onCardNumberKeyPress = function (event) {
        if (this.cardNumber != "") {
            this.isBtnGenerateDisabled = false;
            if (event.key == "Enter") {
                this.btnGenerateLedgerOnclick();
            }
        }
        else {
            this.isBtnGenerateDisabled = true;
        }
    };
    ReportsComponent.prototype.btnExportLedgerOnclick = function () {
        var data = [{
                Date: "Date",
                Particulars: "Particulars",
                DebitAmount: "Debit",
                CreditAmount: "Credit",
                BalanceAmount: "Balance"
            }];
        if (this.ledgersCollectionView.items.length > 0) {
            for (var p = 1; p <= this.ledgersCollectionView.pageCount; p++) {
                for (var i = 0; i < this.ledgersCollectionView.items.length; i++) {
                    data.push({
                        Date: this.ledgersCollectionView.items[i].LedgerDateTime,
                        Particulars: this.ledgersCollectionView.items[i].Particulars,
                        DebitAmount: this.ledgersCollectionView.items[i].DebitAmount,
                        CreditAmount: this.ledgersCollectionView.items[i].CreditAmount,
                        BalanceAmount: this.ledgersCollectionView.items[i].BalanceAmount,
                    });
                }
                if (p == this.ledgersCollectionView.pageCount) {
                    this.ledgersCollectionView.moveToFirstPage();
                }
                else {
                    this.ledgersCollectionView.moveToNextPage();
                }
            }
        }
        var cardNumber = this.cardNumber;
        var startDate = ('0' + (this.dateStartValue.getMonth() + 1)).slice(-2) + '-' + ('0' + this.dateStartValue.getDate()).slice(-2) + '-' + this.dateStartValue.getFullYear();
        var endDate = ('0' + (this.dateEndValue.getMonth() + 1)).slice(-2) + '-' + ('0' + this.dateEndValue.getDate()).slice(-2) + '-' + this.dateEndValue.getFullYear();
        new angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_5__["Angular5Csv"](data, cardNumber + '_From(' + startDate + ")_To(" + endDate + ")");
    };
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createCboShowNumberOfRows();
        setTimeout(function () {
            _this.softwareUserFormsService.getCurrentForm("ReportLedger");
            _this.getUserFormsSubscription = _this.softwareUserFormsService.getCurrentUserFormsObservable.subscribe(function (data) {
                if (data != null) {
                    _this.isLoadingSpinnerHidden = true;
                    _this.isContentHidden = false;
                    if (data.CanAdd) {
                        _this.isAddButtonHide = false;
                    }
                    if (data.CanEdit) {
                        _this.isEditButtonHide = false;
                    }
                    if (data.CanUpdate) {
                        _this.isUpdateButtonHide = false;
                    }
                    if (data.CanDelete) {
                        _this.isDeleteButtonHide = false;
                    }
                }
                else {
                    _this.router.navigateByUrl("/software/forbidden", { skipLocationChange: true });
                }
                if (_this.getUserFormsSubscription != null)
                    _this.getUserFormsSubscription.unsubscribe();
            });
        }, 1000);
    };
    ReportsComponent.prototype.ngOnDestroy = function () {
        if (this.getLedgersSubscription != null)
            this.getLedgersSubscription.unsubscribe();
        if (this.getUserFormsSubscription != null)
            this.getUserFormsSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ledgersFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4__["WjFlexGrid"])
    ], ReportsComponent.prototype, "ledgersFlexGrid", void 0);
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/software/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/software/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _software_user_forms_service__WEBPACK_IMPORTED_MODULE_6__["SoftwareUserFormsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/software/reports/reports.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/software/reports/reports.service.ts ***!
  \*****************************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportsService = /** @class */ (function () {
    function ReportsService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIURLHost = this.appSettings.defaultAPIURLHost;
        this.getLedgerSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getLedgerObservable = this.getLedgerSource.asObservable();
    }
    ReportsService.prototype.getLedgers = function (cardNumber, dateStart, dateEnd) {
        var _this = this;
        var ledgersObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"]();
        this.getLedgerSource.next(ledgersObservableArray);
        this.http.get(this.defaultAPIURLHost + "/api/reportLedger/list/" + cardNumber + "/" + dateStart + "/" + dateEnd, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    var ledgerDate = new Date(results[i].LedgerDateTime);
                    var ledgerDateTime = ('0' + (ledgerDate.getMonth() + 1)).slice(-2) + '-' + ('0' + ledgerDate.getDate()).slice(-2) + '-' + ledgerDate.getFullYear();
                    var balanceAmount = results[i].DebitAmount - results[i].CreditAmount;
                    ledgersObservableArray.push({
                        Id: results[i].Id,
                        CardId: results[i].CardId,
                        CardNumber: results[i].CardNumber,
                        LedgerDateTime: ledgerDateTime,
                        DebitAmount: results[i].DebitAmount,
                        DebitAmountDisplay: results[i].DebitAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        CreditAmount: results[i].CreditAmount,
                        CreditAmountDisplay: results[i].CreditAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        Particulars: results[i].Particulars,
                        BalanceAmount: balanceAmount,
                        BalanceAmountDisplay: balanceAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    });
                }
            }
            _this.getLedgerSource.next(ledgersObservableArray);
        });
    };
    ReportsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], ReportsService);
    return ReportsService;
}());



/***/ }),

/***/ "./src/app/software/software-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/software/software-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SoftwareRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareRoutingModule", function() { return SoftwareRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/software/dashboard/dashboard.component.ts");
/* harmony import */ var _software_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./software.component */ "./src/app/software/software.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/software/profile/profile.component.ts");
/* harmony import */ var _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transfer/transfer.component */ "./src/app/software/transfer/transfer.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/software/reports/reports.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/software/cards/cards.component.ts");
/* harmony import */ var _check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./check-balance/check-balance.component */ "./src/app/software/check-balance/check-balance.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users.component */ "./src/app/software/users/users.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/software/forbidden/forbidden.component.ts");
/* harmony import */ var _software_router_activate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./software.router.activate */ "./src/app/software/software.router.activate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ===============
// Angular Modules
// ===============



// ==========
// Components
// ==========









// ==============
// Custom Classes
// ==============

// ======
// Routes
// ======
var routes = [
    {
        path: 'software', component: _software_component__WEBPACK_IMPORTED_MODULE_4__["SoftwareComponent"], canActivate: [_software_router_activate__WEBPACK_IMPORTED_MODULE_12__["SoftwareRouterActivate"]],
        children: [
            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_software_router_activate__WEBPACK_IMPORTED_MODULE_12__["SoftwareRouterActivate"]] },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_software_router_activate__WEBPACK_IMPORTED_MODULE_12__["SoftwareRouterActivate"]] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_software_router_activate__WEBPACK_IMPORTED_MODULE_12__["SoftwareRouterActivate"]] },
            { path: 'transfer', component: _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_6__["TransferComponent"], canActivate: [_software_router_activate__WEBPACK_IMPORTED_MODULE_12__["SoftwareRouterActivate"]] },
            { path: 'reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"], canActivate: [_software_router_activate__WEBPACK_IMPORTED_MODULE_12__["SoftwareRouterActivate"]] },
            { path: 'cards', component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_8__["CardsComponent"], canActivate: [_software_router_activate__WEBPACK_IMPORTED_MODULE_12__["SoftwareRouterActivate"]] },
            { path: 'checkbalance', component: _check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_9__["CheckBalanceComponent"], canActivate: [_software_router_activate__WEBPACK_IMPORTED_MODULE_12__["SoftwareRouterActivate"]] },
            { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"], canActivate: [_software_router_activate__WEBPACK_IMPORTED_MODULE_12__["SoftwareRouterActivate"]] },
            { path: 'forbidden', component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_11__["ForbiddenComponent"], canActivate: [_software_router_activate__WEBPACK_IMPORTED_MODULE_12__["SoftwareRouterActivate"]] }
        ]
    },
];
var SoftwareRoutingModule = /** @class */ (function () {
    function SoftwareRoutingModule() {
    }
    SoftwareRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], SoftwareRoutingModule);
    return SoftwareRoutingModule;
}());



/***/ }),

/***/ "./src/app/software/software.component.css":
/*!*************************************************!*\
  !*** ./src/app/software/software.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/software/software.component.html":
/*!**************************************************!*\
  !*** ./src/app/software/software.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-sm navbar-dark software-navbar-custom-size\">\r\n    <div class=\"container-fluid\">\r\n        <a class=\"navbar-brand\" routerLink=\"/home\">\r\n            <img src=\"../../assets/images/logo/sodex.png\" class=\"software-navbar-brand-style\" />\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <!-- <li class=\"nav-item\">\r\n                    <a class=\"nav-link nav-link-software\" href=\"#\">About</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link nav-link-software\" href=\"#\">Contact</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link nav-link-software\" href=\"#\">Support</a>\r\n                </li> -->\r\n            </ul>\r\n            <form class=\"form-inline my-2 my-lg-0\">\r\n                <ul class=\"navbar-nav mr-auto\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link nav-link-software\" routerLink=\"/software\">{{ currentUser }}</a>\r\n                    </li>\r\n                    <li class=\"nav-item\" *ngIf=\"isUserLoggedIn\">\r\n                        <a class=\"nav-link nav-link-software\" routerLink=\"#\" (click)=\"logoutUser()\">\r\n                            <i class=\"fa fa-power-off \"></i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<mat-drawer-container class=\"side-nav-container\">\r\n    <mat-drawer class=\"side-nav-drawer\" #drawer [mode]=\"'side'\">\r\n        <mat-nav-list>\r\n            <a mat-list-item routerLink=\"/software\" class=\"side-nav-link-style\">\r\n                <span class=\"mat-nav-list-a-style\">\r\n                    <img src=\"../../assets/images/icons/home.png\"> &nbsp;&nbsp; Dashboard\r\n                </span>\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <label mat-subheader> &nbsp;&nbsp;&nbsp; Setup</label>\r\n            <a mat-list-item routerLink=\"/software/profile\" class=\"side-nav-link-style\">\r\n                <span class=\"mat-nav-list-a-style\">\r\n                    <img src=\"../../assets/images/icons/store.png\"> &nbsp;&nbsp; Profile\r\n                </span>\r\n            </a>\r\n            <a mat-list-item routerLink=\"/software/cards\" class=\"side-nav-link-style\">\r\n                <span class=\"mat-nav-list-a-style\">\r\n                    <img src=\"../../assets/images/icons/cards.png\"> &nbsp;&nbsp; Cards\r\n                </span>\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <label mat-subheader> &nbsp;&nbsp;&nbsp; Transaction</label>\r\n            <a mat-list-item routerLink=\"/software/transfer\" class=\"side-nav-link-style\">\r\n                <span class=\"mat-nav-list-a-style\">\r\n                    <img src=\"../../assets/images/icons/transfer.png\"> &nbsp;&nbsp; Transfer\r\n                </span>\r\n            </a>\r\n            <a mat-list-item routerLink=\"/software/checkbalance\" class=\"side-nav-link-style\">\r\n                <span class=\"mat-nav-list-a-style\">\r\n                    <img src=\"../../assets/images/icons/check-balance.png\"> &nbsp;&nbsp; Check Balance\r\n                </span>\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <label mat-subheader> &nbsp;&nbsp;&nbsp; Reports</label>\r\n            <a mat-list-item routerLink=\"/software/reports\" class=\"side-nav-link-style\">\r\n                <span class=\"mat-nav-list-a-style\">\r\n                    <img src=\"../../assets/images/icons/reports.png\"> &nbsp;&nbsp; Ledger\r\n                </span>\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <label mat-subheader> &nbsp;&nbsp;&nbsp; Admin</label>\r\n            <a mat-list-item routerLink=\"/software/users\" class=\"side-nav-link-style\">\r\n                <span class=\"mat-nav-list-a-style\">\r\n                    <img src=\"../../assets/images/icons/users.png\"> &nbsp;&nbsp; Users\r\n                </span>\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n        </mat-nav-list>\r\n    </mat-drawer>\r\n    <mat-drawer-content style=\"background-color: #ffffff;\">\r\n        <mat-toolbar class=\"mat-tool-bar-styles\">\r\n            <div class=\"container-fluid\">\r\n                <button type=\"button\" class=\"btn\" (click)=\"openDrawer()\">\r\n                    <i class=\"fa fa-bars\"></i>\r\n                </button>\r\n                &nbsp;\r\n                <img id=\"toolBarImage\" class=\"toolBar-img-style\" />\r\n                <span class=\"toolbar-title-style\">\r\n                    {{ ToolbarTitle }}\r\n                </span>\r\n            </div>\r\n        </mat-toolbar>\r\n        <div class=\"container-fluid\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </mat-drawer-content>\r\n</mat-drawer-container>\r\n<div class=\"software-footer\">\r\n    © 2018, SODE\r\n    <span style=\"color: rgb(184, 0, 0)\">X</span>.IO VERSION 1.1\r\n</div>"

/***/ }),

/***/ "./src/app/software/software.component.ts":
/*!************************************************!*\
  !*** ./src/app/software/software.component.ts ***!
  \************************************************/
/*! exports provided: SoftwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareComponent", function() { return SoftwareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SoftwareComponent = /** @class */ (function () {
    function SoftwareComponent(router) {
        var _this = this;
        this.router = router;
        this.ToolbarTitle = "";
        this.currentUser = "Login";
        this.isUserLoggedIn = false;
        router.events.subscribe(function (val) {
            var toolBarImage = document.getElementById("toolBarImage");
            if (router.url == "/software") {
                _this.ToolbarTitle = "Dashboard";
                toolBarImage.setAttribute("src", "../../assets/images/icons/home.png");
            }
            else if (router.url == "/software/profile") {
                _this.ToolbarTitle = "Profile";
                toolBarImage.setAttribute("src", "../../assets/images/icons/store.png");
            }
            else if (router.url == "/software/transfer") {
                _this.ToolbarTitle = "Transfer";
                toolBarImage.setAttribute("src", "../../assets/images/icons/transfer.png");
            }
            else if (router.url == "/software/reports") {
                _this.ToolbarTitle = "Reports";
                toolBarImage.setAttribute("src", "../../assets/images/icons/reports.png");
            }
            else if (router.url == "/software/cards") {
                _this.ToolbarTitle = "Cards";
                toolBarImage.setAttribute("src", "../../assets/images/icons/cards.png");
            }
            else if (router.url == "/software/users") {
                _this.ToolbarTitle = "Users";
                toolBarImage.setAttribute("src", "../../assets/images/icons/users.png");
            }
            else if (router.url == "/software/checkbalance") {
                _this.ToolbarTitle = "Check Balance";
                toolBarImage.setAttribute("src", "../../assets/images/icons/check-balance.png");
            }
            else if (router.url == "/software/forbidden") {
                _this.ToolbarTitle = "Forbidden";
                toolBarImage.setAttribute("src", "../../assets/images/icons/forbidden.png");
            }
            else {
                _this.ToolbarTitle = "Sodex";
            }
        });
    }
    SoftwareComponent.prototype.openDrawer = function () {
        this.drawer.toggle();
    };
    SoftwareComponent.prototype.logoutUser = function () {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('username');
        this.currentUser = "Login";
        ;
        this.isUserLoggedIn = false;
        location.reload();
    };
    SoftwareComponent.prototype.ngOnInit = function () {
        this.openDrawer();
        if (localStorage.getItem("access_token") != null) {
            this.currentUser = localStorage.getItem("username");
            this.isUserLoggedIn = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"])
    ], SoftwareComponent.prototype, "drawer", void 0);
    SoftwareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-software',
            template: __webpack_require__(/*! ./software.component.html */ "./src/app/software/software.component.html"),
            styles: [__webpack_require__(/*! ./software.component.css */ "./src/app/software/software.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SoftwareComponent);
    return SoftwareComponent;
}());



/***/ }),

/***/ "./src/app/software/software.module.ts":
/*!*********************************************!*\
  !*** ./src/app/software/software.module.ts ***!
  \*********************************************/
/*! exports provided: CustomCurrencyMaskConfig, SoftwareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCurrencyMaskConfig", function() { return CustomCurrencyMaskConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareModule", function() { return SoftwareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/software/dashboard/dashboard.component.ts");
/* harmony import */ var _software_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./software.component */ "./src/app/software/software.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/software/profile/profile.component.ts");
/* harmony import */ var _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transfer/transfer.component */ "./src/app/software/transfer/transfer.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/software/reports/reports.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/software/cards/cards.component.ts");
/* harmony import */ var _check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./check-balance/check-balance.component */ "./src/app/software/check-balance/check-balance.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users.component */ "./src/app/software/users/users.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/software/forbidden/forbidden.component.ts");
/* harmony import */ var _cards_cards_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cards/cards.service */ "./src/app/software/cards/cards.service.ts");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.service */ "./src/app/software/profile/profile.service.ts");
/* harmony import */ var _transfer_transfer_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./transfer/transfer.service */ "./src/app/software/transfer/transfer.service.ts");
/* harmony import */ var _check_balance_check_balance_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./check-balance/check-balance.service */ "./src/app/software/check-balance/check-balance.service.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/users.service */ "./src/app/software/users/users.service.ts");
/* harmony import */ var _software_user_forms_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./software.user.forms.service */ "./src/app/software/software.user.forms.service.ts");
/* harmony import */ var _software_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./software-routing.module */ "./src/app/software/software-routing.module.ts");
/* harmony import */ var _software_router_activate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./software.router.activate */ "./src/app/software/software.router.activate.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid.filter */ "./node_modules/wijmo/wijmo.angular2.grid.filter.js");
/* harmony import */ var wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! wijmo/wijmo.angular2.input */ "./node_modules/wijmo/wijmo.angular2.input.js");
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var ng2_currency_mask_src_currency_mask_config__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng2-currency-mask/src/currency-mask.config */ "./node_modules/ng2-currency-mask/src/currency-mask.config.js");
/* harmony import */ var ng2_currency_mask_src_currency_mask_config__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask_src_currency_mask_config__WEBPACK_IMPORTED_MODULE_40__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ===============
// Angular Modules
// ===============



// ==========
// Components
// ==========









// ========
// Services
// ========






// =======
// Routing
// =======


// ===============
// Material Design
// ===============














// =========
// Bootstrap
// =========


// =====
// Wijmo
// =====



// ============
// Curreny Mask
// ============


var CustomCurrencyMaskConfig = {
    align: "right",
    allowNegative: false,
    decimal: ".",
    precision: 2,
    prefix: "",
    suffix: "",
    thousands: ","
};
var SoftwareModule = /** @class */ (function () {
    function SoftwareModule() {
    }
    SoftwareModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _software_routing_module__WEBPACK_IMPORTED_MODULE_18__["SoftwareRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_34__["ModalModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_35__["TooltipModule"].forRoot(),
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_39__["CurrencyMaskModule"],
                wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_36__["WjGridFilterModule"],
                wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_37__["WjGridModule"],
                wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_38__["WjInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__["MatDatepickerModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_31__["MatCardModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"]
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _software_component__WEBPACK_IMPORTED_MODULE_4__["SoftwareComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_6__["TransferComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"],
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_8__["CardsComponent"],
                _check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_9__["CheckBalanceComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"],
                _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_11__["ForbiddenComponent"]
            ],
            providers: [
                _software_router_activate__WEBPACK_IMPORTED_MODULE_19__["SoftwareRouterActivate"],
                _cards_cards_service__WEBPACK_IMPORTED_MODULE_12__["CardsService"],
                _profile_profile_service__WEBPACK_IMPORTED_MODULE_13__["ProfileService"],
                _transfer_transfer_service__WEBPACK_IMPORTED_MODULE_14__["TransferService"],
                _check_balance_check_balance_service__WEBPACK_IMPORTED_MODULE_15__["CheckBalanceService"],
                _users_users_service__WEBPACK_IMPORTED_MODULE_16__["UsersService"],
                _software_user_forms_service__WEBPACK_IMPORTED_MODULE_17__["SoftwareUserFormsService"],
                { provide: ng2_currency_mask_src_currency_mask_config__WEBPACK_IMPORTED_MODULE_40__["CURRENCY_MASK_CONFIG"], useValue: CustomCurrencyMaskConfig }
            ]
        })
    ], SoftwareModule);
    return SoftwareModule;
}());



/***/ }),

/***/ "./src/app/software/software.router.activate.ts":
/*!******************************************************!*\
  !*** ./src/app/software/software.router.activate.ts ***!
  \******************************************************/
/*! exports provided: SoftwareRouterActivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareRouterActivate", function() { return SoftwareRouterActivate; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SoftwareRouterActivate = /** @class */ (function () {
    function SoftwareRouterActivate(router) {
        this.router = router;
    }
    SoftwareRouterActivate.prototype.canActivate = function () {
        if (localStorage.getItem("access_token") == null) {
            this.router.navigate(["/login"]);
            return false;
        }
        else {
            return true;
        }
    };
    SoftwareRouterActivate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], SoftwareRouterActivate);
    return SoftwareRouterActivate;
}());



/***/ }),

/***/ "./src/app/software/software.user.forms.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/software/software.user.forms.service.ts ***!
  \*********************************************************/
/*! exports provided: SoftwareUserFormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareUserFormsService", function() { return SoftwareUserFormsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SoftwareUserFormsService = /** @class */ (function () {
    function SoftwareUserFormsService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIURLHost = this.appSettings.defaultAPIURLHost;
        this.getCurrentUserFormSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getCurrentUserFormsObservable = this.getCurrentUserFormSource.asObservable();
    }
    SoftwareUserFormsService.prototype.getCurrentForm = function (form) {
        var _this = this;
        var userForm = {
            Id: 0,
            UserId: 0,
            FormId: 0,
            Form: "",
            Particulars: "",
            CanAdd: false,
            CanEdit: false,
            CanUpdate: false,
            CanDelete: false
        };
        this.getCurrentUserFormSource.next(userForm);
        this.http.get(this.defaultAPIURLHost + "/api/userForm/current/form/" + form, this.options).subscribe(function (response) {
            var result = response.json();
            if (result != null) {
                userForm = {
                    Id: result.Id,
                    UserId: result.UserId,
                    FormId: result.FormId,
                    Form: result.Form,
                    Particulars: result.Particulars,
                    CanAdd: result.CanAdd,
                    CanEdit: result.CanEdit,
                    CanUpdate: result.CanUpdate,
                    CanDelete: result.CanDelete
                };
                _this.getCurrentUserFormSource.next(userForm);
            }
            else {
                _this.getCurrentUserFormSource.next(null);
            }
        });
    };
    SoftwareUserFormsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], SoftwareUserFormsService);
    return SoftwareUserFormsService;
}());



/***/ }),

/***/ "./src/app/software/transfer/transfer.component.css":
/*!**********************************************************!*\
  !*** ./src/app/software/transfer/transfer.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/software/transfer/transfer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/software/transfer/transfer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"isLoadingSpinnerHidden\">\r\n  <br /><br /><br />\r\n  <mat-spinner style=\"margin: auto;\"></mat-spinner>\r\n</div>\r\n<div [hidden]=\"isContentHidden\">\r\n  <div class=\"container-fluid\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software\">Dashboard</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item active\">Transfer</li>\r\n    </ol>\r\n\r\n    <div class=\"card card-default\">\r\n      <div class=\"card-header\" align=\"right\">\r\n        <button type=\"button\" [hidden]=\"isUpdateButtonHide\" class=\"btn btn-primary\" style=\"margin-right: 5px;\" [disabled]=\"isBtnTransferDisable\"\r\n          (click)=\"openTransferModal(trasnferModalTemplate)\">\r\n          <i class=\"fa fa-credit-card fa-fw\"></i>Transfer\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/software\">\r\n          <i class=\"fa fa-close fa-fw\"></i>Close\r\n        </button>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                <mat-form-field style=\"width: 100%;\">\r\n                  <input matInput placeholder=\"Card Number\" type=\"password\" (keyup)=\"onCardNumberKeyPress($event)\" [(ngModel)]=\"card.CardNumber\"\r\n                    autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-2\" align=\"right\">\r\n                <button class=\"btn btn-info btn-block\" style=\"margin-top: 8px;\" type=\"button\" tooltip=\"Load Card Details\" placement=\"top\"\r\n                  (click)=\"btnLoadCardDetailsOnclick()\">\r\n                  <i class=\"fa fa-credit-card\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-container\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Name\" [disabled]=\"true\" [(ngModel)]=\"card.FullName\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\r\n                  spellcheck=\"false\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <textarea matInput placeholder=\"Address\" [disabled]=\"true\" [(ngModel)]=\"card.Address\" rows=\"5\" style=\"height: 87px; resize: none;\"\r\n                  autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\"></textarea>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Email\" [disabled]=\"true\" [(ngModel)]=\"card.Email\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\r\n                  spellcheck=\"false\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Contact Number\" [disabled]=\"true\" [(ngModel)]=\"card.ContactNumber\" autocomplete=\"off\" autocorrect=\"off\"\r\n                  autocapitalize=\"off\" spellcheck=\"false\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"form-container\">\r\n              <mat-form-field>\r\n                <input matInput currencyMask [options]=\"{ prefix: '', thousands: ',', decimal: '.' }\" placeholder=\"Balance\" [disabled]=\"true\"\r\n                  [(ngModel)]=\"card.Balance\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" style=\"text-align: right; font-size: 60px; height: 86.5px;\"\r\n                  value=\"0.00\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Status\" [disabled]=\"true\" [(ngModel)]=\"card.Status\">\r\n                  <mat-option [value]=\"'Enable'\">Enable</mat-option>\r\n                  <mat-option [value]=\"'Disable'\">Disable</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #trasnferModalTemplate>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Transfer</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"form-container\">\r\n        <mat-form-field>\r\n          <input matInput currencyMask placeholder=\"Amount\" autocomplete=\"off\" [(ngModel)]=\"amountToBeTransfered\" autocorrect=\"off\"\r\n            autocapitalize=\"off\" spellcheck=\"false\" value=\"0.00\" style=\"font-size: 60px;\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput currencyMask placeholder=\"Mother Card Current Balance\" [(ngModel)]=\"motherCardBalance\" autocomplete=\"off\"\r\n            autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" value=\"0.00\" disabled />\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" [hidden]=\"isUpdateButtonHide\" class=\"btn btn-primary\" style=\"margin-right: 5px;\" id=\"btnTransferAmount\"\r\n        (click)=\"btnTransferAmountOnclick()\">\r\n        <i class=\"fa fa-credit-card fa-fw\"></i>Transfer\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger\" id=\"btnTransferAmountCloseModal\" (click)=\"modalRef.hide()\">\r\n        <i class=\"fa fa-close fa-fw\"></i>Close\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/software/transfer/transfer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/software/transfer/transfer.component.ts ***!
  \*********************************************************/
/*! exports provided: TransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferComponent", function() { return TransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transfer.service */ "./src/app/software/transfer/transfer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _software_user_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../software.user.forms.service */ "./src/app/software/software.user.forms.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransferComponent = /** @class */ (function () {
    function TransferComponent(modalService, transferService, toastr, softwareUserFormsService, router) {
        this.modalService = modalService;
        this.transferService = transferService;
        this.toastr = toastr;
        this.softwareUserFormsService = softwareUserFormsService;
        this.router = router;
        this.amountToBeTransfered = 0;
        this.motherCardBalance = 0;
        this.isCardDetailLoaded = false;
        this.isBtnTransferDisable = true;
        this.card = {
            Id: 0,
            CardNumber: "",
            FullName: "",
            Address: "",
            Email: "",
            ContactNumber: "",
            UserId: 0,
            Balance: 0,
            Particulars: "",
            Status: ""
        };
        this.isLoadingSpinnerHidden = false;
        this.isContentHidden = true;
        this.isAddButtonHide = true;
        this.isEditButtonHide = true;
        this.isUpdateButtonHide = true;
        this.isDeleteButtonHide = true;
        this.canTransfer = false;
    }
    TransferComponent.prototype.openTransferModal = function (template) {
        var _this = this;
        if (this.card.CardNumber != "") {
            this.amountToBeTransfered = 0;
            this.transferService.getMotherCardBalance();
            this.getMotherCardBalanceSubscription = this.transferService.getMotherCardBalancedObservable.subscribe(function (data) {
                _this.modalRef = _this.modalService.show(template);
                if (data != null) {
                    _this.motherCardBalance = data;
                }
                if (_this.getMotherCardBalanceSubscription != null)
                    _this.getMotherCardBalanceSubscription.unsubscribe();
            });
        }
        else {
            this.toastr.error("Please provide a card number.");
        }
    };
    TransferComponent.prototype.btnLoadCardDetailsOnclick = function () {
        var _this = this;
        if (this.card.CardNumber != "") {
            this.transferService.getCardDetails(this.card.CardNumber);
            this.getCardSubscription = this.transferService.getCardObservable.subscribe(function (data) {
                if (data != null) {
                    _this.card.FullName = data.FullName;
                    _this.card.Address = data.Address;
                    _this.card.Email = data.Email;
                    _this.card.ContactNumber = data.ContactNumber;
                    _this.card.UserId = data.UserId;
                    _this.card.Balance = data.Balance;
                    _this.card.Particulars = data.Particulars;
                    _this.card.Status = data.Status;
                    _this.toastr.success("Card details successfully loaded.");
                    _this.isCardDetailLoaded = true;
                    _this.isBtnTransferDisable = false;
                    if (_this.canTransfer) {
                        _this.openTransferModal(_this.trasnferModalTemplate);
                    }
                }
                else {
                    _this.toastr.error("No card details for this card number.");
                    _this.card.FullName = "";
                    _this.card.Address = "";
                    _this.card.Email = "";
                    _this.card.ContactNumber = "";
                    _this.card.UserId = 0;
                    _this.card.Balance = 0;
                    _this.card.Particulars = "";
                    _this.card.Status = "";
                    _this.isCardDetailLoaded = false;
                    _this.isBtnTransferDisable = false;
                }
                if (_this.getCardSubscription != null)
                    _this.getCardSubscription.unsubscribe();
            });
        }
        else {
            this.toastr.error("Please provide a card number.");
        }
    };
    TransferComponent.prototype.btnTransferAmountOnclick = function () {
        var _this = this;
        var btnTransferAmount = document.getElementById("btnTransferAmount");
        btnTransferAmount.innerHTML = "<i class='fa fa-credit-card fa-fw'></i> Transferring...";
        btnTransferAmount.setAttribute("disabled", "disabled");
        var btnTransferAmountCloseModal = document.getElementById("btnTransferAmountCloseModal");
        btnTransferAmountCloseModal.setAttribute("disabled", "disabled");
        var objTransferData = {
            DestinationCardNumber: this.card.CardNumber,
            Amount: this.amountToBeTransfered
        };
        this.transferService.transferAmount(objTransferData);
        this.transferAmountSubscription = this.transferService.transferAmountObservable.subscribe(function (data) {
            if (data[0] == "success") {
                _this.toastr.success('Transfer Successful!');
                setTimeout(function () {
                    btnTransferAmount.innerHTML = "<i class='fa fa-credit-card fa-fw'></i> Transfer";
                    btnTransferAmount.removeAttribute("disabled");
                    btnTransferAmountCloseModal.removeAttribute("disabled");
                }, 500);
                _this.modalRef.hide();
                _this.btnLoadCardDetailsOnclick();
            }
            else if (data[0] == "failed") {
                _this.toastr.error(data[1]);
                btnTransferAmount.innerHTML = "<i class='fa fa-credit-card fa-fw'></i> Transfer";
                btnTransferAmount.removeAttribute("disabled");
                btnTransferAmountCloseModal.removeAttribute("disabled");
            }
            if (_this.transferAmountSubscription != null)
                _this.transferAmountSubscription.unsubscribe();
        });
    };
    TransferComponent.prototype.onCardNumberKeyPress = function (event) {
        this.isBtnTransferDisable = true;
        if (event.key == "Enter") {
            this.btnLoadCardDetailsOnclick();
        }
    };
    TransferComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.softwareUserFormsService.getCurrentForm("TransactionTransfer");
            _this.getUserFormsSubscription = _this.softwareUserFormsService.getCurrentUserFormsObservable.subscribe(function (data) {
                if (data != null) {
                    _this.isLoadingSpinnerHidden = true;
                    _this.isContentHidden = false;
                    _this.isCardDetailLoaded = false;
                    if (data.CanAdd) {
                        _this.isAddButtonHide = false;
                    }
                    if (data.CanEdit) {
                        _this.isEditButtonHide = false;
                    }
                    if (data.CanUpdate) {
                        _this.isUpdateButtonHide = false;
                        _this.canTransfer = true;
                    }
                    if (data.CanDelete) {
                        _this.isDeleteButtonHide = false;
                    }
                }
                else {
                    _this.router.navigateByUrl("/software/forbidden", { skipLocationChange: true });
                }
                if (_this.getUserFormsSubscription != null)
                    _this.getUserFormsSubscription.unsubscribe();
            });
        }, 1000);
    };
    TransferComponent.prototype.ngOnDestroy = function () {
        if (this.getMotherCardBalanceSubscription != null)
            this.getMotherCardBalanceSubscription.unsubscribe();
        if (this.getCardSubscription != null)
            this.getCardSubscription.unsubscribe();
        if (this.transferAmountSubscription != null)
            this.transferAmountSubscription.unsubscribe();
        if (this.getUserFormsSubscription != null)
            this.getUserFormsSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('trasnferModalTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TransferComponent.prototype, "trasnferModalTemplate", void 0);
    TransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfer',
            template: __webpack_require__(/*! ./transfer.component.html */ "./src/app/software/transfer/transfer.component.html"),
            styles: [__webpack_require__(/*! ./transfer.component.css */ "./src/app/software/transfer/transfer.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _transfer_service__WEBPACK_IMPORTED_MODULE_2__["TransferService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _software_user_forms_service__WEBPACK_IMPORTED_MODULE_4__["SoftwareUserFormsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TransferComponent);
    return TransferComponent;
}());



/***/ }),

/***/ "./src/app/software/transfer/transfer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/software/transfer/transfer.service.ts ***!
  \*******************************************************/
/*! exports provided: TransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferService", function() { return TransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransferService = /** @class */ (function () {
    function TransferService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIURLHost = this.appSettings.defaultAPIURLHost;
        this.getMotherCardBalanceSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getMotherCardBalancedObservable = this.getMotherCardBalanceSource.asObservable();
        this.getCardSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getCardObservable = this.getCardSource.asObservable();
        this.transferAmountSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.transferAmountObservable = this.transferAmountSource.asObservable();
    }
    TransferService.prototype.getMotherCardBalance = function () {
        var _this = this;
        this.getMotherCardBalanceSource.next(0);
        this.http.get(this.defaultAPIURLHost + "/api/cards/motherCardBalance", this.options).subscribe(function (response) {
            var results = response.json();
            if (results != null) {
                _this.getMotherCardBalanceSource.next(results);
            }
            else {
                _this.getMotherCardBalanceSource.next(null);
            }
        });
    };
    TransferService.prototype.getCardDetails = function (cardNumber) {
        var _this = this;
        var cardDetail = {
            Id: 0,
            FullName: "",
            Address: "",
            Email: "",
            ContactNumber: "",
            UserId: 0,
            Balance: 0,
            Particulars: "",
            Status: ""
        };
        this.getCardSource.next(cardDetail);
        this.http.get(this.defaultAPIURLHost + "/api/cards/detail/" + cardNumber, this.options).subscribe(function (response) {
            var results = response.json();
            if (results != null) {
                cardDetail.FullName = results.FullName;
                cardDetail.Address = results.Address;
                cardDetail.Email = results.Email;
                cardDetail.ContactNumber = results.ContactNumber;
                cardDetail.UserId = results.UserId;
                cardDetail.Balance = results.Balance;
                cardDetail.Particulars = results.Particulars;
                cardDetail.Status = results.Status;
                _this.getCardSource.next(cardDetail);
            }
            else {
                _this.getCardSource.next(null);
            }
        });
    };
    TransferService.prototype.transferAmount = function (objTransferData) {
        var _this = this;
        this.http.put(this.defaultAPIURLHost + "/api/cards/transfer", JSON.stringify(objTransferData), this.options).subscribe(function (response) {
            var responseResults = ["success", ""];
            _this.transferAmountSource.next(responseResults);
        }, function (error) {
            var errorResults = ["failed", error.json()];
            _this.transferAmountSource.next(errorResults);
        });
    };
    TransferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], TransferService);
    return TransferService;
}());



/***/ }),

/***/ "./src/app/software/users/users.component.css":
/*!****************************************************!*\
  !*** ./src/app/software/users/users.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/software/users/users.component.html":
/*!*****************************************************!*\
  !*** ./src/app/software/users/users.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"isLoadingSpinnerHidden\">\r\n  <br /><br /><br />\r\n  <mat-spinner style=\"margin: auto;\"></mat-spinner>\r\n</div>\r\n<div [hidden]=\"isContentHidden\">\r\n  <div class=\"container-fluid\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software\">Dashboard</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item active\">Users</li>\r\n    </ol>\r\n    <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"selectedTab.value\" (selectedIndexChange)=\"selectedTab.setValue($event)\"\r\n      (selectedTabChange)=\"onUserTabClick($event)\">\r\n      <mat-tab [label]=\"'User List'\">\r\n        <br />\r\n\r\n        <div class=\"card card-default\">\r\n          <div class=\"card-header\" align=\"right\">\r\n            <table border=\"0\" style=\"width: 100%; border: none;\">\r\n              <tr>\r\n                <td style=\"width: 80%;\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <b>Show</b>\r\n                      </div>\r\n                    </div>\r\n                    <wj-combo-box #cboNumberOfRows [itemsSource]=\"cboShowNumberOfRows\" [isEditable]=\"false\"\r\n                      [isRequired]=\"true\" [displayMemberPath]=\"'rowString'\" [selectedValuePath]=\"'rowNumber'\"\r\n                      (selectedIndexChanged)=\"cboShowNumberOfRowsOnSelectedIndexChanged(cboNumberOfRows.selectedValue)\"\r\n                      style=\"width: 180px;\">\r\n                    </wj-combo-box>\r\n                  </div>\r\n                </td>\r\n                <td style=\"width: 20%;\" align=\"right\">\r\n                  <button type=\"button\" [hidden]=\"isAddButtonHide\" class=\"btn btn-info\" style=\"margin-right: 5px;\"\r\n                    (click)=\"btnRegisterNewUserOnclick(newUserModalTemplate)\">\r\n                    <i class=\"fa fa-key fa-fw\"></i>Register\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/software\">\r\n                    <i class=\"fa fa-close fa-fw\"></i>Close\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <mat-progress-bar [hidden]=\"isProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n            <wj-flex-grid #userFlexGrid [itemsSource]=\"usersCollectionView\" [selectionMode]=\"3\" [frozenColumns]=\"2\">\r\n              <wj-flex-grid-filter></wj-flex-grid-filter>\r\n              <wj-flex-grid-column *ngIf=\"isShowEditColumn\" [header]=\"Edit\" [isReadOnly]=\"true\" [width]=\"95\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\">\r\n                  <button [hidden]=\"isEditButtonHide\" type=\"button\" class=\"btn btn-primary btn-block btn-xs\" (click)=\"btnOpenUser()\">\r\n                    <i class=\"fa fa-edit fa-fw\"></i> Edit\r\n                  </button>\r\n                </ng-template>\r\n              </wj-flex-grid-column>\r\n              <wj-flex-grid-column [header]=\"'Name'\" [binding]=\"'FullName'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n              <wj-flex-grid-column [header]=\"'Username'\" [binding]=\"'Username'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n              <wj-flex-grid-column [header]=\"'Address'\" [binding]=\"'Address'\" [isReadOnly]=\"true\" [width]=\"'3*'\"></wj-flex-grid-column>\r\n              <wj-flex-grid-column [header]=\"'Contact Number'\" [binding]=\"'ContactNumber'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n              <wj-flex-grid-column [header]=\"'Status'\" [binding]=\"'Status'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n            </wj-flex-grid>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"usersCollectionView.moveToFirstPage()\">\r\n                <i class=\"fa fa-fast-backward\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"usersCollectionView.moveToPreviousPage()\">\r\n                <i class=\"fa fa-step-backward\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                {{ usersCollectionView.pageIndex + 1 }} / {{ usersCollectionView.pageCount }}\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"usersCollectionView.moveToNextPage()\">\r\n                <i class=\"fa fa-step-forward\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"usersCollectionView.moveToLastPage()\">\r\n                <i class=\"fa fa-fast-forward\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <br />\r\n      </mat-tab>\r\n\r\n      <mat-tab *ngFor=\"let detailTab of detailTabs; let index = index\" [label]=\"detailTab\">\r\n        <br />\r\n\r\n        <div class=\"card card-default\">\r\n          <div class=\"card-header\" align=\"right\">\r\n            <button type=\"button\" [hidden]=\"isUpdateButtonHide\" class=\"btn btn-primary\" id=\"btnUpdateUser\" style=\"margin-right: 5px;\"\r\n              (click)=\"btnUpdateUser()\">\r\n              <i class=\"fa fa-check fa-fw\"></i>Update\r\n            </button>\r\n            <button type=\"button\" [hidden]=\"isEditButtonHide\" class=\"btn btn-primary\" id=\"btnEditUser\" style=\"margin-right: 5px;\"\r\n              (click)=\"btnEditUser()\">\r\n              <i class=\"fa fa-edit fa-fw\"></i>Edit\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-danger\" id=\"btnCloseUser\" (click)=\"removeUserTab(index)\">\r\n              <i class=\"fa fa-close fa-fw\"></i>Close\r\n            </button>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"form-container\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Name\" [disabled]=\"isUserFieldDisabled\" [(ngModel)]=\"listUsers[userIndex].FullName\"\r\n                      autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <textarea matInput placeholder=\"Address\" [disabled]=\"isUserFieldDisabled\" rows=\"5\" style=\"height: 87px; resize: none;\"\r\n                      [(ngModel)]=\"listUsers[userIndex].Address\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\r\n                      spellcheck=\"false\"></textarea>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" [disabled]=\"isUserFieldDisabled\" [(ngModel)]=\"listUsers[userIndex].Email\"\r\n                      autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Contact Number\" [disabled]=\"isUserFieldDisabled\" autocomplete=\"off\"\r\n                      autocorrect=\"off\" [(ngModel)]=\"listUsers[userIndex].ContactNumber\" autocapitalize=\"off\"\r\n                      spellcheck=\"false\">\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Username\" disabled [(ngModel)]=\"listUsers[userIndex].Username\"\r\n                      autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div class=\"form-container\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Mother Card Number\" [disabled]=\"isUserFieldDisabled\"\r\n                      [(ngModel)]=\"listUsers[userIndex].MotherCardNumber\" autocomplete=\"off\" autocorrect=\"off\"\r\n                      autocapitalize=\"off\" spellcheck=\"false\">\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput currencyMask placeholder=\"Balance\" disabled [(ngModel)]=\"listUsers[userIndex].MotherCardBalance\"\r\n                      autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" style=\"font-size: 60px; height: 86.5px;\"\r\n                      value=\"0.00\">\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Status\" [disabled]=\"isUserFieldDisabled\" [(ngModel)]=\"listUsers[userIndex].Status\">\r\n                      <mat-option [value]=\"'Enable'\">Enable</mat-option>\r\n                      <mat-option [value]=\"'Disable'\">Disable</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"User Type\" [disabled]=\"isUserFieldDisabled\" [(ngModel)]=\"listUsers[userIndex].UserTypeId\">\r\n                      <mat-option>--</mat-option>\r\n                      <mat-option *ngFor=\"let userType of userTypeData\" [value]=\"userType.Id\">\r\n                        {{ userType.UserType }}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <br />\r\n\r\n        <mat-tab-group>\r\n          <mat-tab label=\"User Forms\">\r\n            <br />\r\n\r\n            <div class=\"card card-default\">\r\n              <div class=\"card-header\" align=\"right\">\r\n                <table border=\"0\" style=\"width: 100%; border: none;\">\r\n                  <tr>\r\n                    <td style=\"width: 80%;\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <div class=\"input-group-text\">\r\n                            <b>Show</b>\r\n                          </div>\r\n                        </div>\r\n                        <wj-combo-box #cboUserFormNumberOfRows [itemsSource]=\"cboUserFormShowNumberOfRows\" [isEditable]=\"false\"\r\n                          [isRequired]=\"true\" [displayMemberPath]=\"'rowString'\" [selectedValuePath]=\"'rowNumber'\"\r\n                          (selectedIndexChanged)=\"cboUserFormShowNumberOfRowsOnSelectedIndexChanged(cboUserFormNumberOfRows.selectedValue)\"\r\n                          style=\"width: 180px;\">\r\n                        </wj-combo-box>\r\n                      </div>\r\n                    </td>\r\n                    <td style=\"width: 20%;\" align=\"right\">\r\n                      <button type=\"button\" [hidden]=\"isAddButtonHide\" class=\"btn btn-primary\" [disabled]=\"isBtnUserFormButtonsDisabled\"\r\n                        (click)=\"btnAddUserFormOnclick(newUserFormModalTemplate)\">\r\n                        <i class=\"fa fa-plus fa-fw\"></i>Add\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <mat-progress-bar [hidden]=\"isUserFormProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n                <wj-flex-grid #userFormFlexGrid [itemsSource]=\"userFormCollectionView\" [selectionMode]=\"3\"\r\n                  [frozenColumns]=\"2\">\r\n                  <wj-flex-grid-filter></wj-flex-grid-filter>\r\n                  <wj-flex-grid-column *ngIf=\"isShowEditColumn\" [header]=\"Edit\" [isReadOnly]=\"true\" [width]=\"95\">\r\n                    <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\">\r\n                      <button [hidden]=\"isEditButtonHide\" type=\"button\" class=\"btn btn-primary btn-block btn-xs\"\r\n                        [disabled]=\"isBtnUserFormButtonsDisabled\" (click)=\"btnEditUserFormOnclick(newUserFormModalTemplate)\">\r\n                        <i class=\"fa fa-edit fa-fw\"></i> Edit\r\n                      </button>\r\n                    </ng-template>\r\n                  </wj-flex-grid-column>\r\n                  <wj-flex-grid-column *ngIf=\"isShowDeleteColumn\" [header]=\"Delete\" [isReadOnly]=\"true\" [width]=\"95\">\r\n                    <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\">\r\n                      <button [hidden]=\"isDeleteButtonHide\" type=\"button\" class=\"btn btn-danger btn-block btn-xs\"\r\n                        [disabled]=\"isBtnUserFormButtonsDisabled\" (click)=\"btnDeleteUserFormOnclick(deleteUserFormModalTemplate)\">\r\n                        <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                      </button>\r\n                    </ng-template>\r\n                  </wj-flex-grid-column>\r\n                  <wj-flex-grid-column [header]=\"'Particulars'\" [binding]=\"'Particulars'\" [isReadOnly]=\"true\" [width]=\"'3*'\"></wj-flex-grid-column>\r\n                  <wj-flex-grid-column [header]=\"'Can Add'\" [binding]=\"'CanAdd'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                  <wj-flex-grid-column [header]=\"'Cann Edit'\" [binding]=\"'CanEdit'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                  <wj-flex-grid-column [header]=\"'Can Update'\" [binding]=\"'CanUpdate'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                  <wj-flex-grid-column [header]=\"'Can Delete'\" [binding]=\"'CanDelete'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                </wj-flex-grid>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n                  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"userFormCollectionView.moveToFirstPage()\">\r\n                    <i class=\"fa fa-fast-backward\"></i>\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"userFormCollectionView.moveToPreviousPage()\">\r\n                    <i class=\"fa fa-step-backward\"></i>\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                    {{ userFormCollectionView.pageIndex + 1 }} / {{ userFormCollectionView.pageCount }}\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"userFormCollectionView.moveToNextPage()\">\r\n                    <i class=\"fa fa-step-forward\"></i>\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"userFormCollectionView.moveToLastPage()\">\r\n                    <i class=\"fa fa-fast-forward\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n    <br />\r\n  </div>\r\n\r\n  <ng-template #newUserModalTemplate>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">\r\n        <i class=\"fa fa-key fa-fw\"></i> Register User</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <mat-tab-group>\r\n        <mat-tab label=\"User Information\">\r\n          <div class=\"form-container\">\r\n            <br />\r\n\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Fullname\" [(ngModel)]=\"user.FullName\" autocomplete=\"off\" autocorrect=\"off\"\r\n                autocapitalize=\"off\" spellcheck=\"false\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <textarea matInput placeholder=\"Address\" rows=\"5\" [(ngModel)]=\"user.Address\" autocomplete=\"off\"\r\n                autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\"></textarea>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Email Address\" [(ngModel)]=\"user.Email\" autocomplete=\"off\" autocorrect=\"off\"\r\n                autocapitalize=\"off\" spellcheck=\"false\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Contact Number\" [(ngModel)]=\"user.ContactNumber\" autocomplete=\"off\"\r\n                autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n            </mat-form-field>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Credentials and Card Details\">\r\n          <div class=\"form-container\">\r\n            <br />\r\n\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" placeholder=\"Mother Card Number\" [(ngModel)]=\"user.MotherCardNumber\"\r\n                autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n            </mat-form-field>\r\n\r\n            <br />\r\n            <br />\r\n\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Username\" [(ngModel)]=\"user.UserName\" autocomplete=\"off\" autocorrect=\"off\"\r\n                autocapitalize=\"off\" spellcheck=\"false\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.Password\" autocomplete=\"off\"\r\n                autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput type=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"user.ConfirmPassword\"\r\n                autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\r\n            </mat-form-field>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n\r\n\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" [hidden]=\"isAddButtonHide\" class=\"btn btn-success\" style=\"margin-right: 5px;\" id=\"btnRegisterUser\"\r\n        (click)=\"btnRegisterUserOnclick()\">\r\n        <i class=\"fa fa-key fa-fw\"></i> Register\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger\" id=\"btnCloseNewRegisterUserModal\" (click)=\"newUserModalRef.hide()\">\r\n        <i class=\"fa fa-close fa-fw\"></i>Cancel\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #newUserFormModalTemplate>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">\r\n        <i class=\"fa fa-unlock fa-fw\"></i> New User Form</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"form-container\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Form\" [(ngModel)]=\"userForm.FormId\">\r\n            <mat-option>--</mat-option>\r\n            <mat-option *ngFor=\"let form of formData\" [value]=\"form.Id\">\r\n              {{ form.Particulars }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"userForm.CanAdd\">Can Add</mat-checkbox>\r\n        <br />\r\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"userForm.CanEdit\">Can Edit</mat-checkbox>\r\n        <br />\r\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"userForm.CanUpdate\">Can Update</mat-checkbox>\r\n        <br />\r\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"userForm.CanDelete\">Can Delete</mat-checkbox>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" [hidden]=\"iSaveUserFormButtonHide\" class=\"btn btn-primary\" style=\"margin-right: 5px;\" id=\"btnSaveUserForm\"\r\n        (click)=\"btnSaveUserFormOnclick()\">\r\n        <i class=\"fa fa-save fa-fw\"></i>Save\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger\" id=\"btnCloseUserFormModal\" (click)=\"newUserFormModalRef.hide()\">\r\n        <i class=\"fa fa-close fa-fw\"></i>Cancel\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #deleteUserFormModalTemplate>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">\r\n        <i class=\"fa fa-trash fa-fw\"></i> Delete</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      Are you sure you want to delete this user form?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" [hidden]=\"isDeleteButtonHide\" class=\"btn btn-danger\" style=\"margin-right: 5px;\" id=\"btnConfirmDeleteUserForm\"\r\n        (click)=\"btnConfirmDeleteUserFormOnclick()\">\r\n        <i class=\"fa fa-trash fa-fw\"></i>Delete\r\n      </button>\r\n      <button type=\"button\" class=\"btn\" id=\"btnConfirmDeleteUserFormCloseModal\" (click)=\"deleteUserFormModalRef.hide()\">\r\n        <i class=\"fa fa-close fa-fw\"></i>Cancel\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/software/users/users.component.ts":
/*!***************************************************!*\
  !*** ./src/app/software/users/users.component.ts ***!
  \***************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.service */ "./src/app/software/users/users.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _software_user_forms_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../software.user.forms.service */ "./src/app/software/software.user.forms.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService, modalService, toastr, softwareUserFormsService, router) {
        this.usersService = usersService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.softwareUserFormsService = softwareUserFormsService;
        this.router = router;
        this.showUserDetailTab = false;
        this.detailTabs = [];
        this.selectedTab = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.isUserFieldDisabled = false;
        this.user = {
            Id: 0,
            FullName: "",
            Address: "",
            Email: "",
            ContactNumber: "",
            UserName: "",
            Password: "",
            ConfirmPassword: "",
            MotherCardNumber: ""
        };
        this.userIndex = 0;
        this.listUsers = [{
                TabNumber: 0,
                Id: 0,
                UserTypeId: 0,
                Username: "",
                FullName: "",
                Address: "",
                Email: "",
                ContactNumber: "",
                MotherCardNumber: "",
                MotherCardBalance: "",
                Status: "",
                UserFormsList: new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]()
            }];
        this.usersData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.usersCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["CollectionView"](this.usersData);
        this.usersNumberOfPageIndex = 15;
        this.isProgressBarHidden = false;
        this.cboShowNumberOfRows = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.cboUserFormShowNumberOfRows = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.userFormData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.userFormCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["CollectionView"](this.usersData);
        this.userFormNumberOfPageIndex = 15;
        this.isUserFormProgressBarHidden = false;
        this.userTypeData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.formData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.userForm = {
            Id: 0,
            UserId: 0,
            FormId: 0,
            CanAdd: false,
            CanEdit: false,
            CanUpdate: false,
            CanDelete: false,
        };
        this.isBtnUserFormButtonsDisabled = true;
        this.isLoadingSpinnerHidden = false;
        this.isContentHidden = true;
        this.isAddButtonHide = true;
        this.isEditButtonHide = true;
        this.isUpdateButtonHide = true;
        this.isDeleteButtonHide = true;
        this.isShowEditColumn = false;
        this.isShowDeleteColumn = false;
        this.iSaveUserFormButtonHide = true;
    }
    UsersComponent.prototype.createCboShowNumberOfRows = function () {
        for (var i = 0; i <= 4; i++) {
            var rows = 0;
            var rowsString = "";
            if (i == 0) {
                rows = 15;
                rowsString = "15 Rows";
            }
            else if (i == 1) {
                rows = 50;
                rowsString = "50 Rows";
            }
            else if (i == 2) {
                rows = 100;
                rowsString = "100 Rows";
            }
            else if (i == 3) {
                rows = 150;
                rowsString = "150 Rows";
            }
            else {
                rows = 200;
                rowsString = "200 Rows";
            }
            this.cboShowNumberOfRows.push({
                rowNumber: rows,
                rowString: rowsString
            });
            this.cboUserFormShowNumberOfRows.push({
                rowNumber: rows,
                rowString: rowsString
            });
        }
    };
    UsersComponent.prototype.cboShowNumberOfRowsOnSelectedIndexChanged = function (selectedValue) {
        this.usersNumberOfPageIndex = selectedValue;
        this.usersCollectionView.pageSize = this.usersNumberOfPageIndex;
        this.usersCollectionView.refresh();
        this.userFlexGrid.refresh();
    };
    UsersComponent.prototype.getUsersData = function () {
        var _this = this;
        this.usersData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.usersCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["CollectionView"](this.usersData);
        this.usersCollectionView.pageSize = 15;
        this.usersCollectionView.trackChanges = true;
        this.usersCollectionView.refresh();
        this.userFlexGrid.refresh();
        this.isProgressBarHidden = false;
        this.usersService.getUsers();
        this.getUsersSubscription = this.usersService.getUsersObservable.subscribe(function (data) {
            if (data.length > 0) {
                _this.usersData = data;
                _this.usersCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["CollectionView"](_this.usersData);
                _this.usersCollectionView.pageSize = _this.usersNumberOfPageIndex;
                _this.usersCollectionView.trackChanges = true;
                _this.usersCollectionView.refresh();
                _this.userFlexGrid.refresh();
            }
            _this.isProgressBarHidden = true;
        });
    };
    UsersComponent.prototype.btnOpenUser = function () {
        var _this = this;
        var currentUser = this.usersCollectionView.currentItem;
        this.detailTabs.push(currentUser.Username);
        this.selectedTab.setValue(this.detailTabs.length);
        this.listUsers.push({
            TabNumber: this.selectedTab.value,
            Id: currentUser.Id,
            UserTypeId: currentUser.UserTypeId,
            Username: currentUser.Username,
            FullName: currentUser.FullName,
            Address: currentUser.Address,
            Email: currentUser.Email,
            ContactNumber: currentUser.ContactNumber,
            MotherCardNumber: currentUser.MotherCardNumber,
            MotherCardBalance: currentUser.MotherCardBalance,
            Status: currentUser.Status
        });
        this.userIndex = this.listUsers.length - 1;
        setTimeout(function () {
            _this.isUserFieldDisabled = true;
            var btnUpdateUser = document.getElementById("btnUpdateUser");
            btnUpdateUser.setAttribute("disabled", "disabled");
            _this.getUserTypes();
            _this.getUserForms();
        }, 100);
    };
    UsersComponent.prototype.removeUserTab = function (index) {
        var _this = this;
        if ((this.detailTabs.length - 1) == index) {
            var currentUserIndex = this.listUsers.indexOf(this.listUsers.filter(function (card) { return card.TabNumber === _this.selectedTab.value; })[0]);
            this.listUsers.splice(currentUserIndex, 1);
            currentUserIndex--;
            this.userIndex = currentUserIndex;
        }
        else {
            var currentUserIndex = this.listUsers.indexOf(this.listUsers.filter(function (card) { return card.TabNumber === _this.selectedTab.value; })[0]);
            this.listUsers.splice(currentUserIndex, 1);
            var tabNumber = this.selectedTab.value;
            for (var i = currentUserIndex; i < this.listUsers.length; i++) {
                this.listUsers[i].TabNumber = tabNumber;
                tabNumber++;
            }
            this.userIndex = this.listUsers.indexOf(this.listUsers[currentUserIndex]);
        }
        this.detailTabs.splice(index, 1);
    };
    UsersComponent.prototype.onUserTabClick = function (event) {
        var _this = this;
        if (event.index > 0) {
            var currentUserIndex = this.listUsers.indexOf(this.listUsers.filter(function (card) { return card.TabNumber === _this.selectedTab.value; })[0]);
            this.userIndex = currentUserIndex;
            this.userFormData = this.listUsers[this.userIndex].UserFormsList;
            this.userFormCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["CollectionView"](this.userFormData);
            this.userFormCollectionView.pageSize = this.userFormNumberOfPageIndex;
            this.userFormCollectionView.trackChanges = true;
            this.userFormCollectionView.refresh();
            this.userFormFlexGrid.refresh();
        }
        else {
            if (event.index == 0) {
                this.usersCollectionView.refresh();
                this.userFlexGrid.refresh();
            }
        }
    };
    UsersComponent.prototype.btnRegisterNewUserOnclick = function (template) {
        this.newUserModalRef = this.modalService.show(template, { class: "" });
    };
    UsersComponent.prototype.btnRegisterUserOnclick = function () {
        var _this = this;
        var btnRegisterUser = document.getElementById("btnRegisterUser");
        btnRegisterUser.innerHTML = "<i class='fa fa-key fa-fw'></i> Registering...";
        btnRegisterUser.setAttribute("disabled", "disabled");
        var btnCloseNewRegisterUserModal = document.getElementById("btnCloseNewRegisterUserModal");
        btnCloseNewRegisterUserModal.setAttribute("disabled", "disabled");
        var objUser = {
            Id: this.user.Id,
            FullName: this.user.FullName,
            Address: this.user.Address,
            Email: this.user.Email,
            ContactNumber: this.user.ContactNumber,
            UserName: this.user.UserName,
            Password: this.user.Password,
            ConfirmPassword: this.user.ConfirmPassword,
            MotherCardNumber: this.user.MotherCardNumber
        };
        this.usersService.register(objUser);
        this.registerUserSubscription = this.usersService.registerUserObservable.subscribe(function (data) {
            if (data[0] == "success") {
                _this.toastr.success('Save Successful!');
                setTimeout(function () {
                    btnRegisterUser.innerHTML = "<i class='fa fa-key fa-fw'></i> Register";
                    btnRegisterUser.removeAttribute("disabled");
                    btnCloseNewRegisterUserModal.removeAttribute("disabled");
                }, 500);
                _this.getUsersData();
                _this.newUserModalRef.hide();
            }
            else if (data[0] == "failed") {
                for (var i = 1; i < data.length; i++) {
                    _this.toastr.error(data[i]);
                }
                btnRegisterUser.innerHTML = "<i class='fa fa-key fa-fw'></i> Register";
                btnRegisterUser.removeAttribute("disabled");
                btnCloseNewRegisterUserModal.removeAttribute("disabled");
            }
            if (_this.registerUserSubscription != null)
                _this.registerUserSubscription.unsubscribe();
        });
    };
    UsersComponent.prototype.btnEditUser = function () {
        this.isUserFieldDisabled = false;
        var btnUpdateUser = document.getElementById("btnUpdateUser");
        btnUpdateUser.removeAttribute("disabled");
        var btnEditUser = document.getElementById("btnEditUser");
        btnEditUser.setAttribute("disabled", "disabled");
        this.isBtnUserFormButtonsDisabled = false;
    };
    UsersComponent.prototype.btnUpdateUser = function () {
        var _this = this;
        if (this.listUsers.length > 0) {
            this.isUserFieldDisabled = true;
            var objUser = {
                Id: this.listUsers[this.userIndex].Id,
                FullName: this.listUsers[this.userIndex].FullName,
                Address: this.listUsers[this.userIndex].Address,
                Email: this.listUsers[this.userIndex].Email,
                ContactNumber: this.listUsers[this.userIndex].ContactNumber,
                MotherCardNumber: this.listUsers[this.userIndex].MotherCardNumber,
                Status: this.listUsers[this.userIndex].Status,
                UserTypeId: this.listUsers[this.userIndex].UserTypeId
            };
            var btnUpdateUser_1 = document.getElementById("btnUpdateUser");
            btnUpdateUser_1.innerHTML = "<i class='fa fa-check fa-fw'></i> Updating...";
            btnUpdateUser_1.setAttribute("disabled", "disabled");
            var btnEditUser_1 = document.getElementById("btnEditUser");
            btnEditUser_1.setAttribute("disabled", "disabled");
            var btnCloseUser_1 = document.getElementById("btnCloseUser");
            btnCloseUser_1.setAttribute("disabled", "disabled");
            this.usersService.updateUser(objUser);
            this.updateUserSubscription = this.usersService.updateUserObservable.subscribe(function (data) {
                if (data[0] == "success") {
                    _this.toastr.success('Update Successful!');
                    _this.isUserFieldDisabled = true;
                    btnUpdateUser_1.innerHTML = "<i class='fa fa-check fa-fw'></i> Update";
                    btnUpdateUser_1.setAttribute("disabled", "disabled");
                    btnEditUser_1.removeAttribute("disabled");
                    btnCloseUser_1.removeAttribute("disabled");
                    _this.getUsersData();
                    _this.isBtnUserFormButtonsDisabled = true;
                }
                else if (data[0] == "failed") {
                    _this.toastr.error(data[1]);
                    _this.isUserFieldDisabled = false;
                    btnUpdateUser_1.innerHTML = "<i class='fa fa-check fa-fw'></i> Update";
                    btnUpdateUser_1.removeAttribute("disabled");
                    btnCloseUser_1.removeAttribute("disabled");
                    _this.isBtnUserFormButtonsDisabled = false;
                }
                if (_this.updateUserSubscription != null)
                    _this.updateUserSubscription.unsubscribe();
            });
        }
    };
    UsersComponent.prototype.cboUserFormShowNumberOfRowsOnSelectedIndexChanged = function (selectedValue) {
        this.userFormNumberOfPageIndex = selectedValue;
        this.userFormCollectionView.pageSize = this.userFormNumberOfPageIndex;
        this.userFormCollectionView.refresh();
        this.userFormFlexGrid.refresh();
    };
    UsersComponent.prototype.getUserTypes = function () {
        var _this = this;
        this.usersService.getUserTypes();
        this.getUserTypesSubscription = this.usersService.getUserTypesObservable.subscribe(function (data) {
            var userTypesObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
            if (data.length > 0) {
                for (var i = 0; i <= data.length - 1; i++) {
                    userTypesObservableArray.push({
                        Id: data[i].Id,
                        UserType: data[i].UserType
                    });
                }
            }
            _this.userTypeData = userTypesObservableArray;
            if (_this.getUserTypesSubscription != null)
                _this.getUserTypesSubscription.unsubscribe();
        });
    };
    UsersComponent.prototype.getUserForms = function () {
        var _this = this;
        this.userFormData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        this.userFormCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["CollectionView"](this.userFormData);
        this.userFormCollectionView.pageSize = 15;
        this.userFormCollectionView.trackChanges = true;
        this.userFormCollectionView.refresh();
        this.userFormFlexGrid.refresh();
        this.isUserFormProgressBarHidden = false;
        this.usersService.getUserForms(this.listUsers[this.userIndex].Id);
        this.getUserFormSubscription = this.usersService.getUserFormsObservable.subscribe(function (data) {
            if (data.length > 0) {
                _this.userFormData = data;
                _this.userFormCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["CollectionView"](_this.userFormData);
                _this.userFormCollectionView.pageSize = _this.userFormNumberOfPageIndex;
                _this.userFormCollectionView.trackChanges = true;
                _this.userFormCollectionView.refresh();
                _this.userFormFlexGrid.refresh();
                _this.listUsers[_this.userIndex].UserFormsList = data;
            }
            _this.isUserFormProgressBarHidden = true;
            if (_this.getUserFormSubscription != null)
                _this.getUserFormSubscription.unsubscribe();
        });
    };
    UsersComponent.prototype.getForms = function (id) {
        var _this = this;
        this.usersService.getForms();
        this.getFormsSubscription = this.usersService.getFormsObservable.subscribe(function (data) {
            var formsObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
            if (data.length > 0) {
                for (var i = 0; i <= data.length - 1; i++) {
                    formsObservableArray.push({
                        Id: data[i].Id,
                        Form: data[i].Form,
                        Particulars: data[i].Particulars,
                    });
                }
            }
            _this.formData = formsObservableArray;
            if (_this.getFormsSubscription != null)
                _this.getFormsSubscription.unsubscribe();
        });
    };
    UsersComponent.prototype.btnAddUserFormOnclick = function (template) {
        this.newUserFormModalRef = this.modalService.show(template, { class: "" });
        this.getForms(0);
        this.userForm.Id = 0;
        this.userForm.UserId = this.listUsers[this.userIndex].Id;
        this.userForm.FormId = 0;
        this.userForm.CanAdd = false;
        this.userForm.CanEdit = false;
        this.userForm.CanUpdate = false;
        this.userForm.CanDelete = false;
    };
    UsersComponent.prototype.btnEditUserFormOnclick = function (template) {
        this.newUserFormModalRef = this.modalService.show(template, { class: "" });
        var currentUserForm = this.userFormCollectionView.currentItem;
        this.getForms(currentUserForm.Id);
        this.userForm.Id = currentUserForm.Id;
        this.userForm.UserId = this.listUsers[this.userIndex].Id;
        this.userForm.FormId = currentUserForm.FormId;
        this.userForm.CanAdd = currentUserForm.CanAdd;
        this.userForm.CanEdit = currentUserForm.CanEdit;
        this.userForm.CanUpdate = currentUserForm.CanUpdate;
        this.userForm.CanDelete = currentUserForm.CanDelete;
    };
    UsersComponent.prototype.btnSaveUserFormOnclick = function () {
        var _this = this;
        var objUserForm = {
            Id: this.userForm.Id,
            FormId: this.userForm.FormId,
            UserId: this.userForm.UserId,
            CanAdd: this.userForm.CanAdd,
            CanEdit: this.userForm.CanEdit,
            CanUpdate: this.userForm.CanUpdate,
            CanDelete: this.userForm.CanDelete
        };
        if (this.userForm.Id == 0) {
            var btnSaveUserForm_1 = document.getElementById("btnSaveUserForm");
            btnSaveUserForm_1.innerHTML = "<i class='fa fa-save fa-fw'></i> Saving...";
            btnSaveUserForm_1.setAttribute("disabled", "disabled");
            var btnCloseUserFormModal_1 = document.getElementById("btnCloseUserFormModal");
            btnCloseUserFormModal_1.setAttribute("disabled", "disabled");
            this.usersService.saveUserForm(objUserForm);
            this.saveUserFormSubscription = this.usersService.saveUserFormObservable.subscribe(function (data) {
                if (data[0] == "success") {
                    _this.toastr.success('Save Successful!');
                    setTimeout(function () {
                        btnSaveUserForm_1.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                        btnSaveUserForm_1.removeAttribute("disabled");
                        btnCloseUserFormModal_1.removeAttribute("disabled");
                    }, 500);
                    _this.getUserForms();
                    _this.newUserFormModalRef.hide();
                }
                else if (data[0] == "failed") {
                    _this.toastr.error(data[1]);
                    btnSaveUserForm_1.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                    btnSaveUserForm_1.removeAttribute("disabled");
                    btnCloseUserFormModal_1.removeAttribute("disabled");
                }
                if (_this.saveUserFormSubscription != null)
                    _this.saveUserFormSubscription.unsubscribe();
            });
        }
        else {
            var btnSaveUserForm_2 = document.getElementById("btnSaveUserForm");
            btnSaveUserForm_2.innerHTML = "<i class='fa fa-save fa-fw'></i> Saving...";
            btnSaveUserForm_2.setAttribute("disabled", "disabled");
            var btnCloseUserFormModal_2 = document.getElementById("btnCloseUserFormModal");
            btnCloseUserFormModal_2.setAttribute("disabled", "disabled");
            this.usersService.updateUserForm(objUserForm);
            this.updateUserFormSubscription = this.usersService.updateUserFormObservable.subscribe(function (data) {
                if (data[0] == "success") {
                    _this.toastr.success('Update Successful!');
                    setTimeout(function () {
                        btnSaveUserForm_2.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                        btnSaveUserForm_2.removeAttribute("disabled");
                        btnCloseUserFormModal_2.removeAttribute("disabled");
                    }, 500);
                    _this.getUserForms();
                    _this.newUserFormModalRef.hide();
                }
                else if (data[0] == "failed") {
                    _this.toastr.error(data[1]);
                    btnSaveUserForm_2.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                    btnSaveUserForm_2.removeAttribute("disabled");
                    btnCloseUserFormModal_2.removeAttribute("disabled");
                }
                if (_this.updateUserFormSubscription != null)
                    _this.updateUserFormSubscription.unsubscribe();
            });
        }
    };
    UsersComponent.prototype.btnDeleteUserFormOnclick = function (template) {
        this.deleteUserFormModalRef = this.modalService.show(template, { class: "modal-sm" });
    };
    UsersComponent.prototype.btnConfirmDeleteUserFormOnclick = function () {
        var _this = this;
        var btnConfirmDeleteUserForm = document.getElementById("btnConfirmDeleteUserForm");
        btnConfirmDeleteUserForm.innerHTML = "<i class='fa fa-trash fa-fw'></i> Deleting...";
        btnConfirmDeleteUserForm.setAttribute("disabled", "disabled");
        var btnConfirmDeleteUserFormCloseModal = document.getElementById("btnConfirmDeleteUserFormCloseModal");
        btnConfirmDeleteUserFormCloseModal.setAttribute("disabled", "disabled");
        var currentUserForm = this.userFormCollectionView.currentItem;
        this.usersService.deleteUserForm(currentUserForm.Id);
        this.deleteUserFormSubscription = this.usersService.deleteUserFormObservable.subscribe(function (data) {
            if (data[0] == "success") {
                _this.toastr.success('Delete Successful!');
                setTimeout(function () {
                    btnConfirmDeleteUserForm.innerHTML = "<i class='fa fa-trash fa-fw'></i> Delete";
                    btnConfirmDeleteUserForm.removeAttribute("disabled");
                    btnConfirmDeleteUserFormCloseModal.removeAttribute("disabled");
                }, 500);
                _this.getUserForms();
                _this.deleteUserFormModalRef.hide();
            }
            else if (data[0] == "failed") {
                _this.toastr.error(data[1]);
                btnConfirmDeleteUserForm.innerHTML = "<i class='fa fa-trash fa-fw'></i> Delete";
                btnConfirmDeleteUserForm.removeAttribute("disabled");
                btnConfirmDeleteUserFormCloseModal.removeAttribute("disabled");
            }
            if (_this.deleteUserFormSubscription != null)
                _this.deleteUserFormSubscription.unsubscribe();
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createCboShowNumberOfRows();
        setTimeout(function () {
            _this.softwareUserFormsService.getCurrentForm("AdminUser");
            _this.getUserFormsSubscription = _this.softwareUserFormsService.getCurrentUserFormsObservable.subscribe(function (data) {
                if (data != null) {
                    _this.isLoadingSpinnerHidden = true;
                    _this.isContentHidden = false;
                    if (data.CanAdd) {
                        _this.isAddButtonHide = false;
                    }
                    if (data.CanEdit) {
                        _this.isEditButtonHide = false;
                        _this.isShowEditColumn = true;
                    }
                    if (data.CanUpdate) {
                        _this.isUpdateButtonHide = false;
                    }
                    if (data.CanDelete) {
                        _this.isDeleteButtonHide = false;
                        _this.isShowDeleteColumn = true;
                    }
                    if (data.CanAdd && data.CanUpdate) {
                        _this.iSaveUserFormButtonHide = false;
                    }
                    _this.getUsersData();
                }
                else {
                    _this.router.navigateByUrl("/software/forbidden", { skipLocationChange: true });
                }
                if (_this.getUserFormsSubscription != null)
                    _this.getUserFormsSubscription.unsubscribe();
            });
        }, 1000);
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        if (this.getUsersSubscription != null)
            this.getUsersSubscription.unsubscribe();
        if (this.registerUserSubscription != null)
            this.registerUserSubscription.unsubscribe();
        if (this.updateUserSubscription != null)
            this.updateUserSubscription.unsubscribe();
        if (this.getUserFormSubscription != null)
            this.getUserFormSubscription.unsubscribe();
        if (this.getFormsSubscription != null)
            this.getFormsSubscription.unsubscribe();
        if (this.saveUserFormSubscription != null)
            this.saveUserFormSubscription.unsubscribe();
        if (this.updateUserFormSubscription != null)
            this.updateUserFormSubscription.unsubscribe();
        if (this.deleteUserFormSubscription != null)
            this.deleteUserFormSubscription.unsubscribe();
        if (this.getUserFormsSubscription != null)
            this.getUserFormsSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__["WjFlexGrid"])
    ], UsersComponent.prototype, "userFlexGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userFormFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__["WjFlexGrid"])
    ], UsersComponent.prototype, "userFormFlexGrid", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/software/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/software/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _software_user_forms_service__WEBPACK_IMPORTED_MODULE_7__["SoftwareUserFormsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/software/users/users.service.ts":
/*!*************************************************!*\
  !*** ./src/app/software/users/users.service.ts ***!
  \*************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = /** @class */ (function () {
    function UsersService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIURLHost = this.appSettings.defaultAPIURLHost;
        this.getUserTypesSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getUserTypesObservable = this.getUserTypesSource.asObservable();
        this.getUsersSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getUsersObservable = this.getUsersSource.asObservable();
        this.registerUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.registerUserObservable = this.registerUserSource.asObservable();
        this.updateUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.updateUserObservable = this.updateUserSource.asObservable();
        this.getUserFormsSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getUserFormsObservable = this.getUserFormsSource.asObservable();
        this.getFormsSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getFormsObservable = this.getFormsSource.asObservable();
        this.saveUserFormSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.saveUserFormObservable = this.saveUserFormSource.asObservable();
        this.updateUserFormSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.updateUserFormObservable = this.updateUserFormSource.asObservable();
        this.deleteUserFormSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.deleteUserFormObservable = this.deleteUserFormSource.asObservable();
    }
    UsersService.prototype.getUserTypes = function () {
        var _this = this;
        var userTypesObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"]();
        this.getUserTypesSource.next(userTypesObservableArray);
        this.http.get(this.defaultAPIURLHost + "/api/user/userType/dropdown/list", this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    userTypesObservableArray.push({
                        Id: results[i].Id,
                        UserType: results[i].UserType
                    });
                }
            }
            _this.getUserTypesSource.next(userTypesObservableArray);
        });
    };
    UsersService.prototype.getUsers = function () {
        var _this = this;
        var usersObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"]();
        this.getUsersSource.next(usersObservableArray);
        this.http.get(this.defaultAPIURLHost + "/api/user/list", this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    usersObservableArray.push({
                        Id: results[i].Id,
                        AspNetUserId: results[i].AspNetUserId,
                        Username: results[i].Username,
                        UserTypeId: results[i].UserTypeId,
                        FullName: results[i].FullName,
                        Address: results[i].Address,
                        Email: results[i].Email,
                        ContactNumber: results[i].ContactNumber,
                        MotherCardNumber: results[i].MotherCardNumber,
                        MotherCardBalance: results[i].MotherCardBalance,
                        Status: results[i].Status
                    });
                }
            }
            _this.getUsersSource.next(usersObservableArray);
        });
    };
    UsersService.prototype.register = function (user) {
        var _this = this;
        this.http.post(this.defaultAPIURLHost + "/api/account/register", JSON.stringify(user), this.options).subscribe(function (response) {
            var responseResults = ["success", ""];
            _this.registerUserSource.next(responseResults);
        }, function (error) {
            var errorResults = ["failed"];
            if (error.json().ModelState[""] != undefined || error.json().ModelState[""] != null) {
                var errorMessage = error.json().ModelState[""];
                if (errorMessage.length > 0) {
                    for (var i = 0; i < errorMessage.length; i++) {
                        errorResults.push(errorMessage[i]);
                    }
                }
            }
            if (error.json().ModelState["model.FullName"] != undefined || error.json().ModelState["model.FullName"] != null) {
                var fullnameErrors = error.json().ModelState["model.FullName"];
                if (fullnameErrors.length > 0) {
                    for (var i = 0; i < fullnameErrors.length; i++) {
                        errorResults.push(fullnameErrors[i]);
                    }
                }
            }
            if (error.json().ModelState["model.Address"] != undefined || error.json().ModelState["model.FullName"] != null) {
                var addressErrors = error.json().ModelState["model.Address"];
                if (addressErrors.length > 0) {
                    for (var i = 0; i < addressErrors.length; i++) {
                        errorResults.push(addressErrors[i]);
                    }
                }
            }
            if (error.json().ModelState["model.ContactNumber"] != undefined || error.json().ModelState["model.FullName"] != null) {
                var contactNumberErrors = error.json().ModelState["model.ContactNumber"];
                if (contactNumberErrors.length > 0) {
                    for (var i = 0; i < contactNumberErrors.length; i++) {
                        errorResults.push(contactNumberErrors[i]);
                    }
                }
            }
            if (error.json().ModelState["model.Email"] != undefined || error.json().ModelState["model.FullName"] != null) {
                var emailErrors = error.json().ModelState["model.Email"];
                if (emailErrors.length > 0) {
                    for (var i = 0; i < emailErrors.length; i++) {
                        errorResults.push(emailErrors[i]);
                    }
                }
            }
            if (error.json().ModelState["model.UserName"] != undefined || error.json().ModelState["model.FullName"] != null) {
                var usernameErrors = error.json().ModelState["model.UserName"];
                if (usernameErrors.length > 0) {
                    for (var i = 0; i < usernameErrors.length; i++) {
                        errorResults.push(usernameErrors[i]);
                    }
                }
            }
            if (error.json().ModelState["model.Password"] != undefined || error.json().ModelState["model.FullName"] != null) {
                var passwordErrors = error.json().ModelState["model.Password"];
                if (passwordErrors.length > 0) {
                    for (var i = 0; i < passwordErrors.length; i++) {
                        errorResults.push(passwordErrors[i]);
                    }
                }
            }
            _this.registerUserSource.next(errorResults);
        });
    };
    UsersService.prototype.updateUser = function (objUser) {
        var _this = this;
        var id = objUser.Id;
        this.http.put(this.defaultAPIURLHost + "/api/user/update/" + id, JSON.stringify(objUser), this.options).subscribe(function (response) {
            var responseResults = ["success", ""];
            _this.updateUserSource.next(responseResults);
        }, function (error) {
            var errorResults = ["failed", error.json()];
            _this.updateUserSource.next(errorResults);
        });
    };
    UsersService.prototype.getUserForms = function (userId) {
        var _this = this;
        var userFormsObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"]();
        this.getUserFormsSource.next(userFormsObservableArray);
        this.http.get(this.defaultAPIURLHost + "/api/userForm/list/" + userId, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    userFormsObservableArray.push({
                        Id: results[i].Id,
                        UserId: results[i].UserId,
                        FormId: results[i].FormId,
                        Form: results[i].Form,
                        Particulars: results[i].Particulars,
                        CanAdd: results[i].CanAdd,
                        CanEdit: results[i].CanEdit,
                        CanUpdate: results[i].CanUpdate,
                        CanDelete: results[i].CanDelete
                    });
                }
            }
            _this.getUserFormsSource.next(userFormsObservableArray);
        });
    };
    UsersService.prototype.getForms = function () {
        var _this = this;
        var formsObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"]();
        this.getFormsSource.next(formsObservableArray);
        this.http.get(this.defaultAPIURLHost + "/api/userForm/forms/list", this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    formsObservableArray.push({
                        Id: results[i].Id,
                        Form: results[i].Form,
                        Particulars: results[i].Particulars
                    });
                }
            }
            _this.getFormsSource.next(formsObservableArray);
        });
    };
    UsersService.prototype.saveUserForm = function (objUserForm) {
        var _this = this;
        this.http.post(this.defaultAPIURLHost + "/api/userForm/add", JSON.stringify(objUserForm), this.options).subscribe(function (response) {
            var responseResults = ["success", ""];
            _this.saveUserFormSource.next(responseResults);
        }, function (error) {
            var errorResults = ["failed", error.json()];
            _this.saveUserFormSource.next(errorResults);
        });
    };
    UsersService.prototype.updateUserForm = function (objUserForm) {
        var _this = this;
        var id = objUserForm.Id;
        this.http.put(this.defaultAPIURLHost + "/api/userForm/update/" + id, JSON.stringify(objUserForm), this.options).subscribe(function (response) {
            var responseResults = ["success", ""];
            _this.updateUserFormSource.next(responseResults);
        }, function (error) {
            var errorResults = ["failed", error.json()];
            _this.updateUserFormSource.next(errorResults);
        });
    };
    UsersService.prototype.deleteUserForm = function (id) {
        var _this = this;
        this.http.delete(this.defaultAPIURLHost + "/api/userForm/delete/" + id, this.options).subscribe(function (response) {
            var responseResults = ["success", ""];
            _this.deleteUserFormSource.next(responseResults);
        }, function (error) {
            var errorResults = ["failed", error.json()];
            _this.deleteUserFormSource.next(errorResults);
        });
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], UsersService);
    return UsersService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Innosoft\Software Development\Projects\SodexV2\sodex-ui-v2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map