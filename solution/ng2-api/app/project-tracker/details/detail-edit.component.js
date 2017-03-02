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
var DetailEditComponent = (function () {
    //date: DateModel;
    //options: DatePickerOptions;
    function DetailEditComponent() {
        this.submitted = false;
        this.showProgress = false;
        this.priority = [
            'High', 'Medium', 'Low'
        ];
        this.entrytype = [
            'Task', 'Incident'
        ];
        //this.options = new DatePickerOptions();
    }
    DetailEditComponent.prototype.backtoList = function () {
        this.mainDetail.viewpage = 0;
        this.mainDetail.refreshList();
    };
    DetailEditComponent.prototype.updateStatus = function () {
        if (this.mainDetail.selectedDetail.pt_detail_progress == 0) {
            this.mainDetail.selectedDetail.pt_detail_status = "Awaiting";
        }
        else if (this.mainDetail.selectedDetail.pt_detail_progress < 100) {
            this.mainDetail.selectedDetail.pt_detail_status = "On Going";
        }
        else
            this.mainDetail.selectedDetail.pt_detail_status = "Completed";
    };
    DetailEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.showProgress = false;
        this.submitted = true;
        this.mainDetail.saveRecord();
        setTimeout(function () {
            _this.submitted = false;
            _this.backtoList();
        }, 2000);
    };
    DetailEditComponent.prototype.getProgressColor = function () {
        return this.mainDetail.selectedDetail.pt_detail_progress == 0 ? 'black' : 'white';
    };
    DetailEditComponent.prototype.editProgress = function () {
        this.tempVal = this.mainDetail.selectedDetail.pt_detail_progress;
        this.showProgress = !this.showProgress;
    };
    DetailEditComponent.prototype.applyProgress = function () {
        this.mainDetail.selectedDetail.pt_detail_progress = this.tempVal;
        this.editProgress();
        this.updateStatus();
    };
    Object.defineProperty(DetailEditComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.mainDetail.selectedDetail); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', detail_parent_component_1.DetailParentComponent)
    ], DetailEditComponent.prototype, "mainDetail", void 0);
    DetailEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'detail-edit.component.html',
            selector: 'detail-edit'
        }), 
        __metadata('design:paramtypes', [])
    ], DetailEditComponent);
    return DetailEditComponent;
}());
exports.DetailEditComponent = DetailEditComponent;
