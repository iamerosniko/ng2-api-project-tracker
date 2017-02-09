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
var project_service_1 = require('./project.service');
var ProjectListComponent = (function () {
    function ProjectListComponent(router, projectService) {
        this.router = router;
        this.projectService = projectService;
    }
    ProjectListComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().then(function (project) { return _this.projects = project; });
    };
    ProjectListComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectListComponent.prototype.onSelect = function (project) {
        this.router.navigate(['/project', project.id]);
    };
    ProjectListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'project-list.component.html',
            selector: 'project-list'
        }), 
        __metadata('design:paramtypes', [router_1.Router, project_service_1.ProjectService])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;
