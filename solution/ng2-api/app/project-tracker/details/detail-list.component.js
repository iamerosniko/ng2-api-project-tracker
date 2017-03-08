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
var detail_parent_component_1 = require('./detail-parent.component');
var DetailListComponent = (function () {
    function DetailListComponent() {
    }
    DetailListComponent.prototype.newProject = function () {
        this.mainDetail.newRecord();
    };
    DetailListComponent.prototype.delete = function (detail) {
        this.mainDetail.deleteRecord(detail);
        this.mainDetail.refreshList();
    };
    DetailListComponent.prototype.onSelect = function (detail) {
        this.mainDetail.isNew = false;
        this.mainDetail.viewpage = 1;
        this.mainDetail.selectedDetail = detail;
        this.mainDetail.updateStatus();
    };
    DetailListComponent.prototype.getProgressColor = function (detail) {
        return detail.pt_detail_progress == 0 ? 'black' : 'white';
    };
    DetailListComponent.prototype.ngOnInit = function () {
        this.mainDetail.getProjectDetail();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', detail_parent_component_1.DetailParentComponent)
    ], DetailListComponent.prototype, "mainDetail", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DetailListComponent.prototype, "tag", void 0);
    DetailListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'detail-list.component.html',
            selector: 'detail-list'
        }), 
        __metadata('design:paramtypes', [])
    ], DetailListComponent);
    return DetailListComponent;
}());
exports.DetailListComponent = DetailListComponent;
