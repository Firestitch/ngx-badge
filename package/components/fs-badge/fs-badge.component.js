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
var core_1 = require("@angular/core");
var FsBadgeComponent = (function () {
    function FsBadgeComponent() {
        this.text = '';
        this.shape = 'circle';
        this.styles = {};
        this.iconStyle = {};
    }
    FsBadgeComponent.prototype.ngOnInit = function () {
        this.type = this.image ? 'image' : 'text';
        this.iconStyle = {};
        if (this.iconSize) {
            this.iconStyle.transform = 'scale(' + this.iconSize + ')';
        }
        if (this.iconColor) {
            this.iconStyle.color = this.iconColor;
        }
    };
    FsBadgeComponent.prototype.ngOnChanges = function (changes) {
        this.styles = {};
        if (this.color) {
            this.styles['background-color'] = this.color;
        }
        if (this.size) {
            this.styles.width = this.size + 'px';
            this.styles['min-width'] = this.size + 'px';
            if (this.shape === 'circle') {
                this.styles.height = this.size + 'px';
                this.styles['line-height'] = this.size + 'px';
            }
            if (this.text) {
                this.styles['font-size'] = (this.size / 2.5) + 'px';
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
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsBadgeComponent.prototype, "text", void 0);
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
            templateUrl: './fs-badge.component.html',
            styleUrls: ['./fs-badge.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FsBadgeComponent);
    return FsBadgeComponent;
}());
exports.FsBadgeComponent = FsBadgeComponent;
//# sourceMappingURL=fs-badge.component.js.map