webpackJsonp([2],{

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/components/fs-badge/fs-badge.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".fs-badge {\n  display: inline-block;\n  height: 20px;\n  border-radius: 3px;\n  text-align: center;\n}\n\n.fs-badge.fs-badge-text {\n  line-height: 20px;\n  text-transform: uppercase;\n  padding: 1px 4px 1px 3px;\n  min-width: 45px;\n  color: #fff;\n  font-size: 14px;\n}\n\n.fs-badge.fs-badge-circle {\n  min-width: 32px;\n  height: 32px;\n  width: 32px;\n  padding: 0;\n  line-height: 32px;\n  border-radius: 50%;\n}\n\n.fs-badge.fs-badge-image {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n\n.fs-badge .material-icons {\n  line-height: 95%;\n  vertical-align: middle;\n}\n\n", "", {"version":3,"sources":["/Users/mendor/work/fs-badge/src/components/fs-badge/src/components/fs-badge/fs-badge.component.scss","/Users/mendor/work/fs-badge/fs-badge.component.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,aAAA;EACA,mBAAA;EAEA,mBAAA;CCAD;;ADEC;EACE,kBAAA;EACA,0BAAA;EACA,yBAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;CCCH;;ADdD;EAiBI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;CCCH;;ADvBD;EA0BI,6BAAA;EACA,uBAAA;EACA,6BAAA;CCCH;;AD7BD;EAgCI,iBAAA;EACA,uBAAA;CCCH","file":"fs-badge.component.scss","sourcesContent":[".fs-badge {\n  display: inline-block;\n  height: 20px;\n  border-radius: 3px;\n\n  text-align: center;\n\n  &.fs-badge-text {\n    line-height: 20px;\n    text-transform: uppercase;\n    padding: 1px 4px 1px 3px;\n    min-width: 45px;\n    color: #fff;\n    font-size: 14px;\n  }\n\n  &.fs-badge-circle {\n    min-width: 32px;\n    height: 32px;\n    width: 32px;\n    padding: 0;\n    line-height: 32px;\n    border-radius: 50%;\n  }\n\n  &.fs-badge-image {\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 50%;\n  }\n\n  .material-icons {\n    line-height: 95%;\n    vertical-align: middle;\n  }\n}\n",".fs-badge {\n  display: inline-block;\n  height: 20px;\n  border-radius: 3px;\n  text-align: center;\n}\n\n.fs-badge.fs-badge-text {\n  line-height: 20px;\n  text-transform: uppercase;\n  padding: 1px 4px 1px 3px;\n  min-width: 45px;\n  color: #fff;\n  font-size: 14px;\n}\n\n.fs-badge.fs-badge-circle {\n  min-width: 32px;\n  height: 32px;\n  width: 32px;\n  padding: 0;\n  line-height: 32px;\n  border-radius: 50%;\n}\n\n.fs-badge.fs-badge-image {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n\n.fs-badge .material-icons {\n  line-height: 95%;\n  vertical-align: middle;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../src/components/fs-badge/fs-badge.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fs-badge\"\n  [ngClass]=\"{ 'fs-badge-circle': shape=='circle', 'fs-badge-image': type=='image', 'fs-badge-text': type=='text' }\"\n  [ngStyle]=\"styles\"\n  [matTooltip]=\"tooltip\">\n  <mat-icon *ngIf=\"!image && icon\" [ngStyle]=\"iconStyle\">{{ icon }}</mat-icon>\n  {{ label }}\n</div>\n"

/***/ }),

/***/ "../src/components/fs-badge/fs-badge.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/components/fs-badge/fs-badge.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "../src/components/fs-badge/fs-badge.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FsBadgeComponent = (function () {
    function FsBadgeComponent() {
        this.shape = 'circle';
        this.styles = {};
        this.iconStyle = {};
    }
    FsBadgeComponent.prototype.ngOnInit = function () {
        this.type = this.image ? 'image' : 'text';
        this.iconStyle = {};
        if (this.iconSize) {
            this.iconStyle['transform'] = 'scale(' + this.iconSize + ')';
        }
        if (this.iconColor) {
            this.iconStyle['color'] = this.iconColor;
        }
    };
    FsBadgeComponent.prototype.ngOnChanges = function (changes) {
        this.styles = {};
        if (this.color) {
            this.styles['background-color'] = this.color;
        }
        if (this.size) {
            this.styles['width'] = this.size + 'px';
            this.styles['min-width'] = this.size + 'px';
            if (this.shape === 'circle') {
                this.styles['height'] = this.size + 'px';
                this.styles['line-height'] = this.size + 'px';
            }
        }
        if (this.image) {
            this.styles['background-image'] = 'url(' + this.image + ')';
        }
    };
    __decorate([
        core_1.Input('color'),
        __metadata("design:type", Object)
    ], FsBadgeComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input('label'),
        __metadata("design:type", Object)
    ], FsBadgeComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input('tooltip'),
        __metadata("design:type", Object)
    ], FsBadgeComponent.prototype, "tooltip", void 0);
    __decorate([
        core_1.Input('size'),
        __metadata("design:type", Object)
    ], FsBadgeComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input('shape'),
        __metadata("design:type", Object)
    ], FsBadgeComponent.prototype, "shape", void 0);
    __decorate([
        core_1.Input('image'),
        __metadata("design:type", Object)
    ], FsBadgeComponent.prototype, "image", void 0);
    __decorate([
        core_1.Input('icon'),
        __metadata("design:type", Object)
    ], FsBadgeComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input('iconSize'),
        __metadata("design:type", Object)
    ], FsBadgeComponent.prototype, "iconSize", void 0);
    __decorate([
        core_1.Input('iconColor'),
        __metadata("design:type", Object)
    ], FsBadgeComponent.prototype, "iconColor", void 0);
    FsBadgeComponent = __decorate([
        core_1.Component({
            selector: 'fs-badge',
            template: __webpack_require__("../src/components/fs-badge/fs-badge.component.html"),
            styles: [__webpack_require__("../src/components/fs-badge/fs-badge.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FsBadgeComponent);
    return FsBadgeComponent;
}());
exports.FsBadgeComponent = FsBadgeComponent;


/***/ }),

/***/ "../src/components/fs-badge/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-badge/fs-badge.component.ts"));


/***/ }),

/***/ "../src/fs-badge.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var common_1 = __webpack_require__("../node_modules/@angular/common/esm2015/common.js");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
var fs_badge_component_1 = __webpack_require__("../src/components/fs-badge/fs-badge.component.ts");
var FsComponentModule = (function () {
    function FsComponentModule() {
    }
    FsComponentModule_1 = FsComponentModule;
    FsComponentModule.forRoot = function () {
        return {
            ngModule: FsComponentModule_1,
            providers: []
        };
    };
    FsComponentModule = FsComponentModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatIconModule,
                material_1.MatTooltipModule
            ],
            exports: [
                fs_badge_component_1.FsBadgeComponent,
            ],
            entryComponents: [],
            declarations: [
                fs_badge_component_1.FsBadgeComponent,
            ],
            providers: [],
        })
    ], FsComponentModule);
    return FsComponentModule;
    var FsComponentModule_1;
}());
exports.FsComponentModule = FsComponentModule;


/***/ }),

/***/ "../src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/fs-badge.module.ts"));
__export(__webpack_require__("../src/components/fs-badge/index.ts"));


/***/ }),

/***/ "../tools lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../tools lazy recursive";

/***/ }),

/***/ "../tools/assets/playground.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../tools/components/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-title\">{{title}}</div>\n<mat-tab-group>\n  <mat-tab label=\"Examples\">\n      <div class=\"examples-body\">\n        <ng-content></ng-content>\n      </div>\n  </mat-tab>\n  <mat-tab label=\"Docs\" *ngIf=\"loaded\">\n    <div class=\"iframe-container\">\n      <iframe class=\"iframe-example ng-star-inserted\" [src]=\"submoduleUrl\"></iframe>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "../tools/components/examples/examples.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var FsExamplesComponent = (function () {
    function FsExamplesComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.loaded = false;
    }
    FsExamplesComponent.prototype.ngOnInit = function () {
        this._submoduleUrl = this.sanitizer
            .bypassSecurityTrustResourceUrl("https://" + this.submoduleName + ".components.firestitch.com/docs");
        this.loaded = true;
    };
    Object.defineProperty(FsExamplesComponent.prototype, "submoduleUrl", {
        get: function () {
            return this._submoduleUrl;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FsExamplesComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('name'),
        __metadata("design:type", String)
    ], FsExamplesComponent.prototype, "submoduleName", void 0);
    FsExamplesComponent = __decorate([
        core_1.Component({
            selector: 'fs-examples',
            template: __webpack_require__("../tools/components/examples/examples.component.html")
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], FsExamplesComponent);
    return FsExamplesComponent;
}());
exports.FsExamplesComponent = FsExamplesComponent;


/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-examples title=\"Badge Component\">\n    <fs-example title=\"Image Example\" componentName=\"image-example\">\n    <image-example></image-example>\n  </fs-example>\n\n  <fs-example title=\"Icon Example\" componentName=\"icon-example\">\n    <icon-example></icon-example>\n  </fs-example>\n</fs-examples>\n\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/components/icon-example/icon-example.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-badge size=\"100\" color=\"#3A78DA\" icon=\"cloud\" iconSize=\"3\" iconColor=\"#fff\" tooltip=\"Tooltip\"></fs-badge>\n"

/***/ }),

/***/ "./app/components/icon-example/icon-example.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var IconExampleComponent = (function () {
    function IconExampleComponent() {
    }
    IconExampleComponent = __decorate([
        core_1.Component({
            selector: 'icon-example',
            template: __webpack_require__("./app/components/icon-example/icon-example.component.html")
        })
    ], IconExampleComponent);
    return IconExampleComponent;
}());
exports.IconExampleComponent = IconExampleComponent;


/***/ }),

/***/ "./app/components/image-example/image-example.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-badge size=\"60\" image=\"https://static1.squarespace.com/static/51c30e7ce4b089f545ce58b3/t/51c88bc9e4b01e51802412b5/1372097482099/Beagle1.jpg\" tooltip=\"Tooltip\"></fs-badge>\n"

/***/ }),

/***/ "./app/components/image-example/image-example.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var ImageExampleComponent = (function () {
    function ImageExampleComponent() {
    }
    ImageExampleComponent = __decorate([
        core_1.Component({
            selector: 'image-example',
            template: __webpack_require__("./app/components/image-example/image-example.component.html")
        })
    ], ImageExampleComponent);
    return ImageExampleComponent;
}());
exports.ImageExampleComponent = ImageExampleComponent;


/***/ }),

/***/ "./app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var flex_layout_1 = __webpack_require__("../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
                flex_layout_1.FlexLayoutModule
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var playground_module_1 = __webpack_require__("./playground.module.ts");
var platform_browser_dynamic_1 = __webpack_require__("../node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
/**
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(playground_module_1.PlaygroundModule)
        .then(decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}
function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    main();
}
function decorateModuleRef(modRef) {
    var appRef = modRef.injector.get(core_1.ApplicationRef);
    var cmpRef = appRef.components[0];
    var _ng = window.ng;
    platform_browser_1.enableDebugTools(cmpRef);
    window.ng.probe = _ng.probe;
    window.ng.coreTokens = _ng.coreTokens;
    return modRef;
}


/***/ }),

/***/ "./playground.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../tools/assets/playground.scss");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
var app_component_1 = __webpack_require__("./app/app.component.ts");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var src_1 = __webpack_require__("../src/index.ts");
var animations_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/animations.js");
var material_module_1 = __webpack_require__("./app/material.module.ts");
var example_1 = __webpack_require__("../node_modules/@firestitch/example/package/index.js");
var examples_component_1 = __webpack_require__("../tools/components/examples/examples.component.ts");
var image_example_component_1 = __webpack_require__("./app/components/image-example/image-example.component.ts");
var icon_example_component_1 = __webpack_require__("./app/components/icon-example/icon-example.component.ts");
var PlaygroundModule = (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                src_1.FsComponentModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.AppMaterialModule,
                forms_1.FormsModule,
                example_1.FsExampleModule,
            ],
            entryComponents: [],
            declarations: [
                app_component_1.AppComponent,
                image_example_component_1.ImageExampleComponent,
                icon_example_component_1.IconExampleComponent,
                examples_component_1.FsExamplesComponent
            ],
            providers: [],
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());
exports.PlaygroundModule = PlaygroundModule;


/***/ })

},["./main.ts"]);
//# sourceMappingURL=main.map