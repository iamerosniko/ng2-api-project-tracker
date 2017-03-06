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
var detail_1 = require('../details/detail');
var ReportViewComponent = (function () {
    function ReportViewComponent() {
    }
    ReportViewComponent.prototype.getProgressColor = function (progress) {
        return progress == 0 ? 'black' : 'white';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', detail_1.Detail)
    ], ReportViewComponent.prototype, "details", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number]), 
        __metadata('design:returntype', String)
    ], ReportViewComponent.prototype, "getProgressColor", null);
    ReportViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'reportview.component.html',
            selector: 'report-view'
        }), 
        __metadata('design:paramtypes', [])
    ], ReportViewComponent);
    return ReportViewComponent;
}());
exports.ReportViewComponent = ReportViewComponent;
