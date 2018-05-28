(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/badge", [], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/badge"] = factory();
	else
		root["@firestitch/badge"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/fs-badge/fs-badge.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".fs-badge {\n  display: inline-block;\n  height: 20px;\n  border-radius: 3px;\n  text-align: center;\n}\n\n.fs-badge.fs-badge-text {\n  line-height: 20px;\n  text-transform: uppercase;\n  padding: 1px 4px 1px 3px;\n  min-width: 45px;\n  color: #fff;\n  font-size: 14px;\n}\n\n.fs-badge.fs-badge-circle {\n  min-width: 32px;\n  height: 32px;\n  width: 32px;\n  padding: 0;\n  line-height: 32px;\n  border-radius: 50%;\n}\n\n.fs-badge.fs-badge-image {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n\n.fs-badge .material-icons {\n  line-height: 95%;\n  vertical-align: middle;\n}\n\n", "", {"version":3,"sources":["C:/Projects/fs-badge/src/components/fs-badge/C:/Projects/fs-badge/src/components/fs-badge/src/components/fs-badge/fs-badge.component.scss","C:/Projects/fs-badge/src/components/fs-badge/C:/Projects/fs-badge/fs-badge.component.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,aAAA;EACA,mBAAA;EAEA,mBAAA;CCAD;;ADEC;EACE,kBAAA;EACA,0BAAA;EACA,yBAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;CCCH;;ADdD;EAiBI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;CCCH;;ADvBD;EA0BI,6BAAA;EACA,uBAAA;EACA,6BAAA;CCCH;;AD7BD;EAgCI,iBAAA;EACA,uBAAA;CCCH","file":"fs-badge.component.scss","sourcesContent":[".fs-badge {\n  display: inline-block;\n  height: 20px;\n  border-radius: 3px;\n\n  text-align: center;\n\n  &.fs-badge-text {\n    line-height: 20px;\n    text-transform: uppercase;\n    padding: 1px 4px 1px 3px;\n    min-width: 45px;\n    color: #fff;\n    font-size: 14px;\n  }\n\n  &.fs-badge-circle {\n    min-width: 32px;\n    height: 32px;\n    width: 32px;\n    padding: 0;\n    line-height: 32px;\n    border-radius: 50%;\n  }\n\n  &.fs-badge-image {\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 50%;\n  }\n\n  .material-icons {\n    line-height: 95%;\n    vertical-align: middle;\n  }\n}\n",".fs-badge {\n  display: inline-block;\n  height: 20px;\n  border-radius: 3px;\n  text-align: center;\n}\n\n.fs-badge.fs-badge-text {\n  line-height: 20px;\n  text-transform: uppercase;\n  padding: 1px 4px 1px 3px;\n  min-width: 45px;\n  color: #fff;\n  font-size: 14px;\n}\n\n.fs-badge.fs-badge-circle {\n  min-width: 32px;\n  height: 32px;\n  width: 32px;\n  padding: 0;\n  line-height: 32px;\n  border-radius: 50%;\n}\n\n.fs-badge.fs-badge-image {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n\n.fs-badge .material-icons {\n  line-height: 95%;\n  vertical-align: middle;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./components/fs-badge/fs-badge.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fs-badge\"\n  [ngClass]=\"{ 'fs-badge-circle': shape=='circle', 'fs-badge-image': type=='image', 'fs-badge-text': type=='text' }\"\n  [ngStyle]=\"styles\"\n  [matTooltip]=\"tooltip\">\n  <mat-icon *ngIf=\"!image && icon\" [ngStyle]=\"iconStyle\">{{ icon }}</mat-icon>\n  {{ label }}\n</div>\n"

/***/ }),

/***/ "./components/fs-badge/fs-badge.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/fs-badge/fs-badge.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./components/fs-badge/fs-badge.component.ts":
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
var core_1 = __webpack_require__("@angular/core");
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
            template: __webpack_require__("./components/fs-badge/fs-badge.component.html"),
            styles: [__webpack_require__("./components/fs-badge/fs-badge.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FsBadgeComponent);
    return FsBadgeComponent;
}());
exports.FsBadgeComponent = FsBadgeComponent;


/***/ }),

/***/ "./components/fs-badge/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/fs-badge/fs-badge.component.ts"));


/***/ }),

/***/ "./fs-badge.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var material_1 = __webpack_require__("@angular/material");
var fs_badge_component_1 = __webpack_require__("./components/fs-badge/fs-badge.component.ts");
var FsBadgeModule = (function () {
    function FsBadgeModule() {
    }
    FsBadgeModule_1 = FsBadgeModule;
    FsBadgeModule.forRoot = function () {
        return {
            ngModule: FsBadgeModule_1,
            providers: []
        };
    };
    FsBadgeModule = FsBadgeModule_1 = __decorate([
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
    ], FsBadgeModule);
    return FsBadgeModule;
    var FsBadgeModule_1;
}());
exports.FsBadgeModule = FsBadgeModule;


/***/ }),

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fs-badge.module.ts"));
__export(__webpack_require__("./components/fs-badge/index.ts"));


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/material":
/***/ (function(module, exports) {

module.exports = require("@angular/material");

/***/ })

/******/ });
});
//# sourceMappingURL=index.map