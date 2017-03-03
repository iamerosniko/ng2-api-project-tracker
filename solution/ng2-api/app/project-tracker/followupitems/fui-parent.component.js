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
var router_1 = require('@angular/router');
var fui_1 = require('./fui');
var fui_service_1 = require('./fui.service');
var angular2_uuid_1 = require('angular2-uuid');
var FuiParentComponent = (function () {
    function FuiParentComponent(router, fuiService) {
        this.router = router;
        this.fuiService = fuiService;
        this.viewpage = 0;
        this.isNew = false;
        this.selectedFui = new fui_1.Fui('', '', '', '', '', false);
    }
    FuiParentComponent.prototype.refreshList = function () {
        var _this = this;
        this.fuiService.getFuis().then(function (Fui) { return _this.fuiList = Fui; });
    };
    FuiParentComponent.prototype.newRecord = function () {
        this.selectedFui = new fui_1.Fui(angular2_uuid_1.UUID.UUID(), '', '', '', '', false);
        this.isNew = true;
        this.viewpage = 1;
    };
    FuiParentComponent.prototype.saveRecord = function () {
        var _this = this;
        this.isNew
            ? this.fuiService.postFui(this.selectedFui).then(function (any) {
                _this.backtoList();
            })
            : this.fuiService.putFui(this.selectedFui).then(function (any) {
                _this.backtoList();
            });
    };
    FuiParentComponent.prototype.backtoList = function () {
        this.viewpage = 0;
        this.refreshList();
        this.isNew = false;
    };
    FuiParentComponent.prototype.deleteRecord = function (fui) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            this.fuiService.deleteFui(fui.pt_fui_id).then(function (any) {
                _this.refreshList();
            });
        }
    };
    FuiParentComponent.prototype.ngOnInit = function () {
        this.refreshList();
    };
    FuiParentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "fui-parent.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, fui_service_1.FuiService])
    ], FuiParentComponent);
    return FuiParentComponent;
}());
exports.FuiParentComponent = FuiParentComponent;
