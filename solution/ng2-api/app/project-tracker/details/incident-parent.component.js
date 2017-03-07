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
var detail_service_1 = require('./detail.service');
var project_service_1 = require('../projects/project.service');
var detail_1 = require('./detail');
var project_1 = require('../projects/project');
var angular2_uuid_1 = require('angular2-uuid');
var IncidentParentComponent = (function () {
    function IncidentParentComponent(detailService, projectService, route, router) {
        this.detailService = detailService;
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.tag = 'Incidents';
        this.project = new project_1.Project('', '', '', '', '', false, false);
        this.projectID = '';
        this.viewpage = 0;
        this.isNew = false;
        this.selectedDetail = new detail_1.Detail('', '', '', '', '', '', '', null, null, null, null, 'awaiting', false, true, false, '', 0, 'Incident');
    }
    IncidentParentComponent.prototype.refreshList = function () {
        var _this = this;
        this.detailService.getIncidentItems(this.projectID).then(function (detail) { return _this.detailList = detail; });
    };
    IncidentParentComponent.prototype.getProjectDetail = function () {
        var _this = this;
        this.projectService.getProject(this.projectID).then(function (project) { return _this.project = project; });
    };
    IncidentParentComponent.prototype.newRecord = function () {
        this.isNew = true;
        this.viewpage = 1;
        this.selectedDetail = new detail_1.Detail(angular2_uuid_1.UUID.UUID(), this.projectID, '', '', '', '', '', null, null, null, null, 'awaiting', false, true, false, '', 0, 'Incident');
    };
    IncidentParentComponent.prototype.saveRecord = function () {
        this.isNew ? this.detailService.postDetail(this.selectedDetail) : this.detailService.putDetail(this.selectedDetail);
        this.isNew = false;
    };
    IncidentParentComponent.prototype.deleteRecord = function (detail) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            detail.pt_detail_deleted = true;
            // this.detailService.putDetail(detail);
            // setTimeout(
            //     () => {
            //         this.refreshList();
            //     }, 
            //     750
            // );
            this.detailService.putDetail(detail).then(function (any) {
                _this.refreshList();
            });
        }
    };
    IncidentParentComponent.prototype.getselectedDetailID = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectID = params['id'];
        });
    };
    IncidentParentComponent.prototype.ngOnInit = function () {
        this.getselectedDetailID();
        this.refreshList();
    };
    IncidentParentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "incident-parent.component.html"
        }), 
        __metadata('design:paramtypes', [detail_service_1.DetailService, project_service_1.ProjectService, router_1.ActivatedRoute, router_1.Router])
    ], IncidentParentComponent);
    return IncidentParentComponent;
}());
exports.IncidentParentComponent = IncidentParentComponent;
