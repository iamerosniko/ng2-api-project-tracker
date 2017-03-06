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
//Folder : Projects
var project_service_1 = require('../projects/project.service');
//Folder : Details
var detail_service_1 = require('../details/detail.service');
//followupitems
var fui_service_1 = require('../followupitems/fui.service');
var ReportParentComponent = (function () {
    function ReportParentComponent(detailService, projectService, fuiService) {
        this.detailService = detailService;
        this.projectService = projectService;
        this.fuiService = fuiService;
        this.currentProjectName = '';
        this.projects = null;
        this.taskList = null;
        this.completedList = null;
        this.incidentList = null;
        this.onholdList = null;
        this.fuiList = null;
        this.ctr = 0;
        this.projectLength = 0;
    }
    ReportParentComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .then(function (projects) {
            _this.projects = projects,
                _this.projectLength = _this.projects.length,
                _this.projectLength > 0 ? _this.getAllDetails(_this.projects[_this.ctr]) : null;
        });
    };
    ReportParentComponent.prototype.changePage = function (con) {
        this.ctr = con ? this.ctr + 1 : this.ctr - 1;
        this.getAllDetails(this.projects[this.ctr]);
    };
    ReportParentComponent.prototype.getAllDetails = function (project) {
        var _this = this;
        this.detailService.getTaskItems(project.pt_project_id).then(function (tasks) { return _this.taskList = tasks; });
        this.detailService.getIncidentItems(project.pt_project_id).then(function (incidents) { return _this.incidentList = incidents; });
        this.detailService.getCompletedItems(project.pt_project_id).then(function (complete) { return _this.completedList = complete; });
        this.detailService.getOnHoldItems(project.pt_project_id).then(function (onhold) { return _this.onholdList = onhold; });
        this.fuiService.getFuis().then(function (fui) { return _this.fuiList = fui; });
        this.currentProjectName = project.pt_project_name;
    };
    ReportParentComponent.prototype.tabChange = function () {
        this.ctr = 0;
        this.getAllDetails(this.projects[this.ctr]);
    };
    ReportParentComponent.prototype.ngOnInit = function () {
        this.getAllProjects();
    };
    ReportParentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "report-parent.component.html"
        }), 
        __metadata('design:paramtypes', [detail_service_1.DetailService, project_service_1.ProjectService, fui_service_1.FuiService])
    ], ReportParentComponent);
    return ReportParentComponent;
}());
exports.ReportParentComponent = ReportParentComponent;
