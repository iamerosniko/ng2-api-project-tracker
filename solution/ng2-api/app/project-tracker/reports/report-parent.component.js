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
//Folder : project
var report_service_1 = require('./report.service');
//Folder : Projects
var project_service_1 = require('../projects/project.service');
//Folder : Details
var detail_service_1 = require('../details/detail.service');
var incident_service_1 = require('../details/incident.service');
var ReportParentComponent = (function () {
    function ReportParentComponent(reportService, detailService, incidentService, projectService) {
        this.reportService = reportService;
        this.detailService = detailService;
        this.incidentService = incidentService;
        this.projectService = projectService;
        this.currentProjectName = '';
        this.projects = null;
        this.taskList = null;
        this.completedList = null;
        this.incidentList = null;
        this.onholdList = null;
        this.ctr = 0;
        this.projectLength = 0;
    }
    ReportParentComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.projectService.getProjects().then(function (projects) { return _this.projects = projects; });
        setTimeout(function () {
            _this.projectLength = _this.projects.length;
            //alert("count : "+this.projectLength);
            if (_this.projectLength > 0) {
                _this.getAllDetails(_this.projects[_this.ctr]);
            }
        }, 1000);
    };
    ReportParentComponent.prototype.changePage = function (con) {
        this.ctr = con ? this.ctr + 1 : this.ctr - 1;
        this.getAllDetails(this.projects[this.ctr]);
    };
    ReportParentComponent.prototype.getAllDetails = function (project) {
        var _this = this;
        this.detailService.getDetails(project.pt_project_id).then(function (tasks) { return _this.taskList = tasks; });
        this.incidentService.getIncidents(project.pt_project_id).then(function (incidents) { return _this.incidentList = incidents; });
        this.detailService.getCompletedItems(project.pt_project_id).then(function (complete) { return _this.completedList = complete; });
        this.detailService.getOnHoldItems(project.pt_project_id).then(function (onhold) { return _this.onholdList = onhold; });
        this.currentProjectName = project.pt_project_name;
    };
    ReportParentComponent.prototype.ngOnInit = function () {
        this.getAllProjects();
    };
    ReportParentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "report-parent.component.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof report_service_1.ReportService !== 'undefined' && report_service_1.ReportService) === 'function' && _a) || Object, detail_service_1.DetailService, incident_service_1.IncidentService, project_service_1.ProjectService])
    ], ReportParentComponent);
    return ReportParentComponent;
    var _a;
}());
exports.ReportParentComponent = ReportParentComponent;
