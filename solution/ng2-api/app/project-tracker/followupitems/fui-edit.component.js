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
var core_1 = require('@angular/core');
var fui_parent_component_1 = require('./fui-parent.component');
var FuiEditComponent = (function () {
    function FuiEditComponent() {
        this.submitted = false;
    }
    FuiEditComponent.prototype.backtoList = function () {
        this.mainFui.viewpage = 0;
        this.mainFui.refreshList();
    };
    FuiEditComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.mainFui.saveRecord();
    };
    Object.defineProperty(FuiEditComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.mainFui.selectedFui); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', fui_parent_component_1.FuiParentComponent)
    ], FuiEditComponent.prototype, "mainFui", void 0);
    FuiEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'fui-edit.component.html',
            selector: 'fui-edit'
        }), 
        __metadata('design:paramtypes', [])
    ], FuiEditComponent);
    return FuiEditComponent;
}());
exports.FuiEditComponent = FuiEditComponent;
