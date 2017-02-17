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
var project_1 = require('./project');
var project_service_1 = require('./project.service');
var angular2_uuid_1 = require('angular2-uuid');
var ProjectParentComponent = (function () {
    function ProjectParentComponent(projectService) {
        this.projectService = projectService;
        this.viewpage = 0;
        this.isNew = false;
        this.selectedProject = new project_1.Project('', '', '', '', '', false, true);
    }
    ProjectParentComponent.prototype.refreshList = function () {
        var _this = this;
        this.projectService.getProjects().then(function (project) { return _this.projectList = project; });
    };
    ProjectParentComponent.prototype.newRecord = function () {
        this.selectedProject = new project_1.Project(angular2_uuid_1.UUID.UUID(), '', '', '', '', false, true);
        this.isNew = true;
        this.viewpage = 1;
    };
    ProjectParentComponent.prototype.saveRecord = function () {
        this.isNew ? this.projectService.postProject(this.selectedProject) : this.projectService.putProject(this.selectedProject);
        this.isNew = false;
    };
    ProjectParentComponent.prototype.deleteRecord = function (project) {
        this.projectService.deleteProject(project);
    };
    ProjectParentComponent.prototype.ngOnInit = function () {
        this.refreshList();
    };
    ProjectParentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "project-parent.component.html"
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], ProjectParentComponent);
    return ProjectParentComponent;
}());
exports.ProjectParentComponent = ProjectParentComponent;
