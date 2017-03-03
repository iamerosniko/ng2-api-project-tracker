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
var FuiListComponent = (function () {
    function FuiListComponent() {
    }
    FuiListComponent.prototype.newFui = function () {
        this.mainFui.newRecord();
    };
    FuiListComponent.prototype.delete = function (detail) {
        this.mainFui.deleteRecord(detail);
    };
    FuiListComponent.prototype.onSelect = function (detail) {
        this.mainFui.isNew = false;
        this.mainFui.viewpage = 1;
        this.mainFui.selectedFui = detail;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', fui_parent_component_1.FuiParentComponent)
    ], FuiListComponent.prototype, "mainFui", void 0);
    FuiListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'fui-list.component.html',
            selector: 'fui-list'
        }), 
        __metadata('design:paramtypes', [])
    ], FuiListComponent);
    return FuiListComponent;
}());
exports.FuiListComponent = FuiListComponent;
