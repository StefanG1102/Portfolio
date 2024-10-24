"use strict";
(self["webpackChunkportfolioFrontend"] = self["webpackChunkportfolioFrontend"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 708);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 2152);




class AppComponent {
  constructor() {
    this.title = 'portfolioFrontend';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "flex", "flex-col", "min-h-screen"], [1, "flex-grow"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 708);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 2152);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ 5274);
/* harmony import */ var _dark_mode_toggle_dark_mode_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dark-mode-toggle/dark-mode-toggle.component */ 9396);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/resume.component */ 3972);
/* harmony import */ var _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imprint/imprint.component */ 2912);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ 8712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);













const appRoutes = [{
  path: '',
  component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__.HomepageComponent
}, {
  path: 'Lebenslauf',
  component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__.ResumeComponent
}, {
  path: 'Kontakt',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__.ContactComponent
}, {
  path: 'Impressum',
  component: _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_7__.ImprintComponent
}, {
  path: '**',
  redirectTo: ''
} // Optional: Redirect any unknown paths to homepage
// Add more routes as needed
];

class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(appRoutes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__.HomepageComponent, _dark_mode_toggle_dark_mode_toggle_component__WEBPACK_IMPORTED_MODULE_5__.DarkModeToggleComponent, _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__.ResumeComponent, _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_7__.ImprintComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__.ContactComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 8712:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ContactComponent {
  static {
    this.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 16,
      vars: 0,
      consts: [[1, "bg-gray-800", "text-white", "p-6", "rounded-lg", "shadow-lg", "max-w-md", "mx-auto", "mt-10", "h-full"], [1, "text-2xl", "font-bold", "mb-4"], [1, "mb-2"], ["href", "mailto:stefanganswintbewerbung@gmail.com\n", 1, "text-blue-400", "hover:underline"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kontakt");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2)(4, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Stefan Ganswint");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2)(8, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "stefanganswintbewerbung@gmail.com ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 2)(13, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Address:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Wiesecker Weg 42 35396 Gie\u00DFen");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9396:
/*!****************************************************************!*\
  !*** ./src/app/dark-mode-toggle/dark-mode-toggle.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DarkModeToggleComponent: () => (/* binding */ DarkModeToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function DarkModeToggleComponent__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DarkModeToggleComponent__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class DarkModeToggleComponent {
  constructor() {
    this.isDarkMode = false;
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true'); // Store preference
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('darkMode'); // Remove preference
    }
  }

  ngOnInit() {
    const darkModePreference = localStorage.getItem('darkMode');
    this.isDarkMode = darkModePreference === 'true';
    if (this.isDarkMode) {
      document.body.classList.add('dark');
    }
  }
  static {
    this.ɵfac = function DarkModeToggleComponent_Factory(t) {
      return new (t || DarkModeToggleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DarkModeToggleComponent,
      selectors: [["app-dark-mode-toggle"]],
      decls: 4,
      vars: 2,
      consts: [[1, "fixed", "top-4", "right-4"], [1, "p-2", "rounded-full", "bg-gray-200", "dark:bg-gray-700", "hover:bg-gray-300", "dark:hover:bg-gray-600", "transition", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", "class", "size-6", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"]],
      template: function DarkModeToggleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DarkModeToggleComponent_Template_button_click_1_listener() {
            return ctx.toggleDarkMode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DarkModeToggleComponent__svg_svg_2_Template, 2, 0, "svg", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DarkModeToggleComponent__svg_svg_3_Template, 2, 0, "svg", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDarkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDarkMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 708:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class FooterComponent {
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 21,
      vars: 0,
      consts: [[1, "sectionColor", "text-white", "py-6", "mt-20"], [1, "container", "mx-auto", "px-4"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-center"], [1, "mb-4", "md:mb-0"], [1, "text-lg", "font-bold"], [1, "text-sm"], ["routerLink", "/Impressum", "routerLinkActive", "text-blue-400", 1, "hover:underline"], [1, "text-md", "font-semibold"], [1, "flex", "space-x-4", "mt-2"], ["href", "https://www.linkedin.com/in/stefan-ganswint-32b70b2b2/", "target", "_blank", "rel", "noopener noreferrer", 1, "hover:text-gray-400"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["d", "M22.225 0h-20.45c-1.006 0-1.835.835-1.835 1.835v20.45c0 1.006.835 1.835 1.835 1.835h20.45c1.006 0 1.835-.835 1.835-1.835v-20.45c0-1.006-.835-1.835-1.835-1.835zm-11.225 22.525h-3.555v-10.965h3.555v10.965zm-1.785-12.546c-1.138 0-2.063-.925-2.063-2.063 0-1.143.925-2.063 2.063-2.063s2.063.925 2.063 2.063c0 1.138-.925 2.063-2.063 2.063zm12.451 12.546h-3.555v-5.605c0-1.334-.024-3.048-1.854-3.048-1.852 0-2.134 1.447-2.134 2.95v5.703h-3.555v-10.965h3.555v1.506c.496-.954 1.716-2.107 3.562-2.107 3.804 0 4.5 2.49 4.5 5.733v6.833z"], ["href", "https://github.com/StefanG1102", "target", "_blank", "rel", "noopener noreferrer", 1, "hover:text-gray-400"], ["d", "M12 0c-6.627 0-12 5.373-12 12 0 5.308 3.438 9.817 8.209 11.388.6.111.823-.261.823-.578 0-.286-.011-1.046-.017-2.055-3.342.724-4.048-1.608-4.048-1.608-.548-1.386-1.336-1.754-1.336-1.754-1.093-.747.083-.732.083-.732 1.21.085 1.845 1.242 1.845 1.242 1.073 1.831 2.809 1.302 3.492.995.108-.775.42-1.302.762-1.602-2.664-.304-5.467-1.335-5.467-5.931 0-1.313.469-2.385 1.235-3.228-.125-.304-.536-1.537.117-3.198 0 0 1.008-.323 3.301 1.23a11.55 11.55 0 0 1 3.002-.404c1.023.005 2.057.138 3.001.404 2.293-1.553 3.301-1.23 3.301-1.23.654 1.661.243 2.894.118 3.198.77.843 1.235 1.915 1.235 3.228 0 4.615-2.81 5.623-5.48 5.925.43.372.82 1.102.82 2.224 0 1.608-.014 2.905-.014 3.298 0 .319.224.692.826.578a12.003 12.003 0 0 0 8.209-11.388c0-6.627-5.373-12-12-12z"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stefan Ganswint");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Web und Softwareentwickler");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Impressum");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3)(12, "h4", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Follow Me");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2152:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _dark_mode_toggle_dark_mode_toggle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dark-mode-toggle/dark-mode-toggle.component */ 9396);



class HeaderComponent {
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 21,
      vars: 0,
      consts: [["aria-label", "Global", 1, "mx-auto", "flex", "max-w-7xl", "items-center", "justify-between", "p-6", "lg:px-8"], [1, "flex", "lg:flex-1"], ["href", "#", 1, "-m-1.5", "p-1.5"], [1, "sr-only"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 100 50", "width", "100", "height", "50"], ["cx", "25", "cy", "25", "r", "20", "fill", "rgb(251 146 60)"], ["points", "50,10 70,25 50,40 30,25", "fill", "#282c34"], ["x", "80", "y", "15", "width", "10", "height", "20", "fill", "rgb(251 146 60)"], [1, "hidden", "lg:flex", "lg:justify-center", "lg:gap-x-12"], ["href", "#", 1, "text-sm", "font-semibold", "leading-6", "text-customBlack", "dark:text-customWhite"], ["routerLink", "/Lebenslauf", 1, "text-sm", "font-semibold", "leading-6", "text-customBlack", "dark:text-customWhite"], ["routerLink", "/Kontakt", 1, "text-sm", "font-semibold", "leading-6", "text-customBlack", "dark:text-customWhite"], [1, "lg:flex", "lg:flex-1", "lg:justify-end"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "a", 2)(4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Stefan");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "circle", 5)(8, "polygon", 6)(9, "rect", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u00DCber mich");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "F\u00E4higkeiten");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Lebenslauf");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Kontakt");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-dark-mode-toggle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _dark_mode_toggle_dark_mode_toggle_component__WEBPACK_IMPORTED_MODULE_0__.DarkModeToggleComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5274:
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageComponent: () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



function HomepageComponent_div_121_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Das Erstellen von Webseiten mit HTML/CSS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_121_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Programmieren im Mobile First Vorgehen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_121_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Responsives Design identisch zum MockUp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_121_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Funktionalit\u00E4t durch TypeSrcipt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_121_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Error Handling ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_121_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Komponenten Basiertes Programmieren ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_121_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Verwendung von Routen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_121_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Code Testing um Fehler zu vermeiden ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_121_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pipelines, Ci/CD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_121_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nVerwenendung von Pull Reqeusts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_121_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nVersion Controll durch Branch basiertes Arbeiten ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HomepageComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45)(1, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomepageComponent_div_121_li_5_Template, 3, 0, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomepageComponent_div_121_li_6_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomepageComponent_div_121_li_7_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomepageComponent_div_121_li_8_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomepageComponent_div_121_li_9_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomepageComponent_div_121_li_10_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomepageComponent_div_121_li_11_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomepageComponent_div_121_li_12_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomepageComponent_div_121_li_13_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomepageComponent_div_121_li_14_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomepageComponent_div_121_li_15_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 12, ctx_r0.clickedLogo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clickedLogo === "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clickedLogo === "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clickedLogo === "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clickedLogo === "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clickedLogo === "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clickedLogo === "angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clickedLogo === "angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clickedLogo === "angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clickedLogo === "git");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clickedLogo === "git");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clickedLogo === "git");
  }
}
const _c0 = function (a0) {
  return {
    "opacity-50": a0
  };
};
const _c1 = function (a0) {
  return {
    "bubble-animate": a0
  };
};
class HomepageComponent {
  constructor() {
    this.clickedLogo = 'html';
    this.centerLogo = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'; // default logo
    this.bubble1Text = 'HTML'; // default bubble text
    this.bubble2Text = 'UI Design';
    this.bubble3Text = 'CSS';
    this.bubble4Text = 'TypeScript';
    this.animateBubbles = false;
  }
  selectLogo(logo) {
    this.clickedLogo = logo;
    this.animateBubbles = true;
    // Update the center logo and bubble texts based on the clicked logo
    switch (logo) {
      case 'html':
        this.centerLogo = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg';
        this.bubble1Text = 'HTML';
        this.bubble2Text = 'UI Design';
        this.bubble3Text = 'CSS';
        this.bubble4Text = 'TypeScript';
        break;
      case 'typescript':
        this.centerLogo = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg';
        this.bubble1Text = 'TypeScript';
        this.bubble2Text = 'Angular';
        this.bubble3Text = 'React';
        this.bubble4Text = 'JS';
        break;
      case 'angular':
        this.centerLogo = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg';
        this.bubble1Text = 'Angular';
        this.bubble2Text = 'RxJS';
        this.bubble3Text = 'TypeScript';
        this.bubble4Text = 'HTML';
        break;
      case 'git':
        this.centerLogo = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg';
        this.bubble1Text = 'Git';
        this.bubble2Text = 'Version Control';
        this.bubble3Text = 'Collaboration';
        this.bubble4Text = 'GitHub';
        break;
    }
    // Trigger animation, then reset
    setTimeout(() => {
      this.animateBubbles = false;
    }, 1000); // animation duration
  }

  static {
    this.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["app-homepage"]],
      decls: 122,
      vars: 32,
      consts: [[1, "desktop-section"], [1, "flex", "items-start", "justify-center", "pb-80", "pt-60"], [1, "mx-auto", "max-w-7xl", "px-6", "lg:px-8"], [1, "mx-auto", "max-w-2xl", "lg:mx-0", "text-center"], [1, "text-5xl", "font-bold", "tracking-tight", "dark:text-customWhite", "text-customBlack", "sm:text-7xl"], ["href", "homepage.component.css"], [1, "font-light", "tracking-tight", "dark:text-customWhite", "text-customBlack"], [1, "sectionColor", "py-12", "rounded-3xl", "mt-20", "dark:text-customWhite"], [1, "max-w-4xl", "mx-auto", "text-center"], [1, "text-3xl", "font-bold", "text-orange-400", "mb-4"], [1, "grid", "grid-cols-1", "md:grid-cols-3"], ["src", "assets/WhatsApp Image 2024-07-31 at 17.49.15.jpeg", "alt", "Your Image Description", 1, "col-span-1", "w-full", "h-auto"], [1, "col-span-2", "pl-4", "text-left"], [1, "text-base", "font-semibold", "leading-7", "tracking-tight", "text-customWhite"], [1, "text-orange-400"], [1, "text-customWhite"], [1, "grid", "grid-cols-1", "md:grid-cols-4"], [1, "col-span-2", "flex", "flex-col", "items-center"], [1, "pt-6", "text-base", "font-semibold", "leading-7", "tracking-tight", "text-orange-400"], [1, "text-white"], [1, "pt-10", "text-base", "font-semibold", "leading-7", "tracking-tight", "text-orange-400"], ["href", "mailto:stefanganswintbewerbung@gmail.com", 1, "hover:underline", "text-customWhite"], ["routerLink", "/Lebenslauf"], [1, "max-w-4xl", "mx-auto", "text-center", "pt-10", "sm:pt-20"], [1, "text-2xl", "sm:text-3xl", "font-bold", "text-customBlack", "dark:text-customWhite", "mb-4"], [1, "flex", "flex-wrap", "justify-center", "gap-10", "sm:gap-20", "p-4", "text-2xl", "sm:text-4xl", "mb-16"], ["src", "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", "alt", "HTML Logo", 1, "h-16", "sm:h-20", "cursor-pointer", 3, "ngClass", "click"], ["src", "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", "alt", "TypeScript Logo", 1, "h-16", "sm:h-20", "cursor-pointer", 3, "ngClass", "click"], ["src", "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg", "alt", "Angular Logo", 1, "h-16", "sm:h-20", "cursor-pointer", 3, "ngClass", "click"], ["src", "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", "alt", "Git Logo", 1, "h-16", "sm:h-20", "cursor-pointer", 3, "ngClass", "click"], [1, "relative", "inline-block", "mt-8", "sm:mt-10"], [1, "w-32", "h-32", "sm:w-40", "sm:h-40", "rounded-full", "bg-black", "flex", "items-center", "justify-center", "border-4", "border-orange-500"], ["alt", "Center Logo", 1, "h-12", "sm:h-16", "w-12", "sm:w-16", 3, "src", "ngClass"], [1, "absolute", "-top-12", "sm:-top-16", "left-1/2", "transform", "-translate-x-1/2"], [1, "w-20", "h-20", "sm:w-24", "sm:h-24", "rounded-full", "bg-black", "flex", "items-center", "justify-center", "border-2", "border-orange-500"], [1, "text-white", 3, "innerHTML"], [1, "absolute", "-left-16", "sm:-left-20", "top-12", "sm:top-16"], [1, "absolute", "-right-16", "sm:-right-20", "top-12", "sm:top-16"], [1, "mobile-section"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "p-5"], [1, "flex", "justify-center", "col-span-1", "mb-3"], ["src", "assets/WhatsApp Image 2024-07-31 at 17.49.15.jpeg", "alt", "Ein Bild von Stefan Ganswint", 1, "w-1/2", "h-auto"], [1, "col-span-4", "flex", "flex-col", "items-center"], [1, "flex", "flex-wrap", "justify-center", "gap-10", "sm:gap-20", "p-4", "text-2xl", "sm:text-4xl"], ["class", "mt-6 p-6 rounded-lg shadow-md transition duration-300 ease-in-out", 4, "ngIf"], [1, "mt-6", "p-6", "rounded-lg", "shadow-md", "transition", "duration-300", "ease-in-out"], [1, "text-2xl", "font-semibold", "text-customBlack", "dark:text-customWhite", "mb-4"], [1, "list-disc", "pl-5", "text-lg", "text-customBlack", "dark:text-customWhite", "space-y-2"], ["class", " flex items-start", 4, "ngIf"], ["class", "flex items-start", 4, "ngIf"], [1, "flex", "items-start"], [1, "h-3", "w-3", "bg-blue-500", "rounded-full", "mt-1", "mr-2"]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stefan");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ganswint");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5)(9, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mehr erfahren... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7)(12, "div", 8)(13, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12)(18, "h3", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mein name ist ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Stefan Ganswint");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ich bin Student an der Technischen Hochschule Mittelhessen (kurz. THM). An der Hochschule belege ich den Studiengang Social Media Systems bzw. Digital Media Systems. In diesem Studiengang kann jeder Student zwischen den Fachbereichen Medien, Management und Informatik w\u00E4hlen. Ich habe mich f\u00FCr eine Informatik vertiefung entschieden. Ich bin 24 Jahre alt und habe bereits in diversen Bereichen gearbeitet. W\u00E4hrend meiner Abiturzeit habe ich in einem Tanzstudio Breakdance f\u00FCr Kinder von der 1-6 Klasse unterrichtet. Zudem habe ich knapp 2 Jahre als Reinigungskraft bei der Firma WISAG gearbeitet. Beide Arbeitstellen habe ich aufgrund meines Studiums beendet. Seit 2022 Arbeite ich an der THM als Tutor f\u00FCr die Module Wepbasierte Programmierung 1 und 2, sowie die Betreuung des Integrationsprojekt. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16)(25, "div", 17)(26, "h3", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Stefan Ganswint");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17)(31, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Wohnort");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "35396 Gie\u00DFen");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17)(36, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "stefanganswintbewerbung@gmail.com ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17)(41, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lebenslauf");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22)(44, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Hier Klicken..");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23)(47, "h2", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25)(50, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_img_click_50_listener() {
            return ctx.selectLogo("html");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_img_click_51_listener() {
            return ctx.selectLogo("typescript");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_img_click_52_listener() {
            return ctx.selectLogo("angular");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_img_click_53_listener() {
            return ctx.selectLogo("git");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30)(55, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 33)(58, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "p", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 36)(61, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "p", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37)(64, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "p", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38)(67, "div", 1)(68, "div", 2)(69, "div", 3)(70, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Stefan");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Ganswint");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 5)(75, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Mehr erfahren... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "section", 7)(78, "div", 8)(79, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 39)(82, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 12)(85, "h3", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Mein name ist ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Stefan Ganswint");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Ich bin Student an der Technischen Hochschule Mittelhessen (kurz. THM). An der Hochschule belege ich den Studiengang Social Media Systems bzw. Digital Media Systems. In diesem Studiengang kann jeder Student zwischen den Fachbereichen Medien, Management und Informatik w\u00E4hlen. Ich habe mich f\u00FCr eine Informatik vertiefung entschieden. Ich bin 24 Jahre alt und habe bereits in diversen Bereichen gearbeitet. W\u00E4hrend meiner Abiturzeit habe ich in einem Tanzstudio Breakdance f\u00FCr Kinder von der 1-6 Klasse unterrichtet. Zudem habe ich knapp 2 Jahre als Reinigungskraft bei der Firma WISAG gearbeitet. Beide Arbeitstellen habe ich aufgrund meines Studiums beendet. Seit 2022 Arbeite ich an der THM als Tutor f\u00FCr die Module Wepbasierte Programmierung 1 und 2, sowie die Betreuung des Integrationsprojekt. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 16)(92, "div", 17)(93, "h3", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Stefan Ganswint");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 17)(98, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Wohnort");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "35396 Gie\u00DFen");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 17)(103, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "stefanganswintbewerbung@gmail.com ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 42)(108, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Lebenslauf");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a")(111, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Hier Klicken..");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 23)(114, "h2", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 43)(117, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_img_click_117_listener() {
            return ctx.selectLogo("html");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_img_click_118_listener() {
            return ctx.selectLogo("typescript");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_img_click_119_listener() {
            return ctx.selectLogo("angular");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_img_click_120_listener() {
            return ctx.selectLogo("git");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, HomepageComponent_div_121_Template, 16, 14, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.clickedLogo && ctx.clickedLogo !== "html"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.clickedLogo && ctx.clickedLogo !== "typescript"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.clickedLogo && ctx.clickedLogo !== "angular"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.clickedLogo && ctx.clickedLogo !== "git"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.centerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx.animateBubbles));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.bubble1Text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.bubble2Text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.bubble3Text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.clickedLogo && ctx.clickedLogo !== "html"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.clickedLogo && ctx.clickedLogo !== "typescript"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.clickedLogo && ctx.clickedLogo !== "angular"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.clickedLogo && ctx.clickedLogo !== "git"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clickedLogo);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe],
      styles: [".texth1[_ngcontent-%COMP%]{\n  color: #232425;\n\n}\n\nimg[_ngcontent-%COMP%] {\n  transition: opacity 0.3s ease; \n\n}\n\n\n.bubble-animate[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bubbleScale 1s ease-in-out forwards;\n}\n\n@keyframes _ngcontent-%COMP%_bubbleScale {\n  0% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n\n\n\n.hexagon-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1; \n\n  background-color: #F5F5F5; \n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  padding: 20px;\n}\n\n\n\n.hexagon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100px;\n  height: 57.74px;\n  background-color: #D27A38; \n\n  margin: 28.87px 0;\n}\n\n.hexagon[_ngcontent-%COMP%]:before, .hexagon[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  border-left: 50px solid transparent;\n  border-right: 50px solid transparent;\n}\n\n.hexagon[_ngcontent-%COMP%]:before {\n  bottom: 100%;\n  border-bottom: 28.87px solid #D27A38;\n}\n\n.hexagon[_ngcontent-%COMP%]:after {\n  top: 100%;\n  width: 0;\n  border-top: 28.87px solid #D27A38;\n}\n\n\n\n.hexagon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0UsNkJBQTZCLEVBQUUseUNBQXlDO0FBQzFFO0FBQ0EsNEJBQTRCO0FBQzVCO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7OztBQUdBLGlDQUFpQztBQUNqQztFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVyxFQUFFLHVDQUF1QztFQUNwRCx5QkFBeUIsRUFBRSxxQkFBcUI7RUFDaEQsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCLEVBQUUsa0JBQWtCO0VBQzdDLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtQ0FBbUM7RUFDbkMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsaUNBQWlDO0FBQ25DOztBQUVBLDJDQUEyQztBQUMzQztFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWCIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0aDF7XG4gIGNvbG9yOiAjMjMyNDI1O1xuXG59XG5cbmltZyB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlOyAvKiBTbW9vdGggdHJhbnNpdGlvbiBmb3Igb3BhY2l0eSBjaGFuZ2UgKi9cbn1cbi8qIEN1c3RvbSBidWJibGUgYW5pbWF0aW9uICovXG4uYnViYmxlLWFuaW1hdGUge1xuICBhbmltYXRpb246IGJ1YmJsZVNjYWxlIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGJ1YmJsZVNjYWxlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5cbi8qIEhleGFnb24gQmFja2dyb3VuZCBDb250YWluZXIgKi9cbi5oZXhhZ29uLXBhdHRlcm4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7IC8qIFRvIGVuc3VyZSBpdCBpcyBiZWhpbmQgYWxsIGNvbnRlbnQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTsgLyogQmFja2dyb3VuZCBjb2xvciAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiBDcmVhdGluZyBhIGhleGFnb24gKi9cbi5oZXhhZ29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTcuNzRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QyN0EzODsgLyogSGV4YWdvbiBjb2xvciAqL1xuICBtYXJnaW46IDI4Ljg3cHggMDtcbn1cblxuLmhleGFnb246YmVmb3JlLFxuLmhleGFnb246YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uaGV4YWdvbjpiZWZvcmUge1xuICBib3R0b206IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDI4Ljg3cHggc29saWQgI0QyN0EzODtcbn1cblxuLmhleGFnb246YWZ0ZXIge1xuICB0b3A6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICBib3JkZXItdG9wOiAyOC44N3B4IHNvbGlkICNEMjdBMzg7XG59XG5cbi8qIE9wdGlvbmFsOiBzcGFjaW5nIGJldHdlZW4gdGhlIGhleGFnb25zICovXG4uaGV4YWdvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2912:
/*!**********************************************!*\
  !*** ./src/app/imprint/imprint.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImprintComponent: () => (/* binding */ ImprintComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ImprintComponent {
  static {
    this.ɵfac = function ImprintComponent_Factory(t) {
      return new (t || ImprintComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImprintComponent,
      selectors: [["app-imprint"]],
      decls: 16,
      vars: 0,
      consts: [[1, "bg-gray-800", "text-white", "p-6", "rounded-lg", "shadow-lg", "max-w-md", "mx-auto", "mt-10", "h-full"], [1, "text-2xl", "font-bold", "mb-4"], [1, "mb-2"], ["href", "mailto:stefanganswintbewerbung@gmail.com\n", 1, "text-blue-400", "hover:underline"]],
      template: function ImprintComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Impressum / Imprint");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2)(4, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Stefan Ganswint");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2)(8, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "stefanganswintbewerbung@gmail.com ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 2)(13, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Address:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Wiesecker Weg 42 35396 Gie\u00DFen");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3972:
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeComponent: () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function ResumeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9)(6, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const exp_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.description);
  }
}
class ResumeComponent {
  constructor() {
    this.name = 'Stefan Ganswint';
    this.experience = [{
      title: 'Studium Social Media Systems',
      company: 'Technische Hoschschule Mittelhessen Gießen',
      period: '2020 - Heute',
      description: 'Ausgebildet in BWL, Grundlagen und Anwendung von Social Media und Vertieft in der IT'
    }, {
      title: 'Tutor für Webbasierte Programmierung',
      company: 'Technische Hoschschule Mittelhessen Gießen',
      period: '2022 - Heute',
      description: 'Unterstützung der Studierenden bei Fragen zu ihren Abgaben und das finden von Lösungen bei unterschiedlichen Fehlern'
    }, {
      title: 'Reinigungskraft',
      company: 'WISAG',
      period: '2020 - 2022',
      description: 'Reinigung von Büros, Toiletten und Aufenthaltsräumen'
    }, {
      title: 'Breakdance Lehrer',
      company: 'Souldance Studio Alsfeld',
      period: '2018 -  2022',
      description: 'Unterrichten von Kindern und Jugendlichen in der akkrobatischen Tanzart Breakdance. Eigenständige Unterrichts und Choreographie Planung'
    }];
  }
  static {
    this.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-resume"]],
      decls: 6,
      vars: 1,
      consts: [[1, "m-10", "flex", "flex-col", "items-center"], [1, "text-3xl", "font-semibold", "mb-6"], [1, "relative", "w-full", "max-w-3xl"], [1, "flex", "flex-col", "items-center"], ["class", "mb-12 w-full", 4, "ngFor", "ngForOf"], [1, "mb-12", "w-full"], [1, "flex", "items-start"], [1, "h-8", "w-8", "bg-orange-400", "rounded-full", "flex", "items-center", "justify-center", "text-white", "shadow-lg"], [1, "text-xs", "font-bold"], [1, "ml-4", "w-full", "border-l-2", "pl-4"], [1, "text-xl", "dark:text-customWhite", "text-customBlack", "font-semibold"], [1, "text-md", "dark:text-customWhite", "text-customBlack", "text-gray-500"], [1, "text-sm", "dark:text-customWhite", "text-customBlack", "text-gray-400"], [1, "text-gray-600", "dark:text-customWhite", "text-customBlack", "mt-2"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ResumeComponent_div_5_Template, 14, 5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".timeline[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 600px;\n  margin: auto;\n}\n\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 8px;\n  padding: 10px;\n  margin: 20px 0; \n\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: filter 0.3s ease; \n\n  z-index: 1; \n\n}\n\n.timeline-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.timeline-item[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0; \n\n}\n\n.date[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 12px;\n  color: #888;\n}\n\n\n\n.timeline-item[_ngcontent-%COMP%]:not(.clicked) {\n  filter: grayscale(100%);\n}\n\n.text-gray-600[_ngcontent-%COMP%] {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms; \n\n}\n\n.text-gray-600[_ngcontent-%COMP%]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity)); \n\n}\n\n\n\n.timeline-dot[_ngcontent-%COMP%] {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); \n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYyxFQUFFLGlEQUFpRDtFQUNqRSx3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLDRCQUE0QixFQUFFLHFDQUFxQztFQUNuRSxVQUFVLEVBQUUseUNBQXlDO0FBQ3ZEOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CLEVBQUUsdUJBQXVCO0FBQzlDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSx1QkFBdUI7QUFDekI7O0FBR0U7RUFBQSwrRkFBcUM7RUFBckMsd0RBQXFDO0VBQXJDLDBCQUFxQyxFQUFFLDRCQUE0QjtBQUE5Qjs7QUFJckM7RUFBQSxvQkFBb0I7RUFBcEIsK0NBQW9CLEVBQUUsMEJBQTBCO0FBQTVCOztBQUd0Qiw4Q0FBOEM7QUFFNUM7RUFBQSwrRUFBZ0I7RUFBaEIsbUdBQWdCO0VBQWhCLHVHQUFnQixFQUFFLHVCQUF1QjtBQUF6QiIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGltZWxpbmUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAyMHB4IDA7IC8qIEluY3JlYXNlZCBtYXJnaW4gdG8gbWFrZSBzcGFjZSBmb3IgdGhlIGxpbmVzICovXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTsgLyogQWRkIHNtb290aCB0cmFuc2l0aW9uIGZvciBmaWx0ZXIgKi9cbiAgei1pbmRleDogMTsgLyogRW5zdXJlIHRoZSBpdGVtcyBhcmUgYWJvdmUgdGhlIGxpbmVzICovXG59XG5cbi50aW1lbGluZS1pdGVtIGgzIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGltZWxpbmUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7IC8qIEhpZ2hsaWdodCBvbiBob3ZlciAqL1xufVxuXG4uZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzg4ODtcbn1cblxuLyogR3JheXNjYWxlIGVmZmVjdCAqL1xuLnRpbWVsaW5lLWl0ZW06bm90KC5jbGlja2VkKSB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xufVxuXG4udGV4dC1ncmF5LTYwMCB7XG4gIEBhcHBseSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDA7IC8qIFNtb290aCBjb2xvciB0cmFuc2l0aW9uICovXG59XG5cbi50ZXh0LWdyYXktNjAwOmhvdmVyIHtcbiAgQGFwcGx5IHRleHQtYmx1ZS01MDA7IC8qIENoYW5nZSBjb2xvciBvbiBob3ZlciAqL1xufVxuXG4vKiBPcHRpb25hbDogQWRkIGJveCBzaGFkb3cgdG8gdGltZWxpbmUgZG90cyAqL1xuLnRpbWVsaW5lLWRvdCB7XG4gIEBhcHBseSBzaGFkb3ctbGc7IC8qIFNoYWRvdyBmb3IgdGhlIGRvdCAqL1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map