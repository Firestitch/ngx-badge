"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var fs_badge_component_1 = require("./components/fs-badge/fs-badge.component");
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
//# sourceMappingURL=fs-badge.module.js.map