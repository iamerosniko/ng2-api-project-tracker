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
var project_1 = require('./project');
var project_service_1 = require('./project.service');
var ProjectEditComponent = (function () {
    function ProjectEditComponent(projectService, route, router) {
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.model = new project_1.Project(0, '', '');
        this.submitted = false;
        this.technology = [
            '.NET Technology',
            'MS Access FrontEnd + MS SQL Server Backend',
            'MS Access FrontEnd + Backend'
        ];
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
        //this.route.params
        //.switchMap((params: Params) => this.projectService.getProject(+params['id'])) //the + value will convert id to number type
        //.subscribe(project => this.model = project);
    };
    ProjectEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.projectService.putProject(this.model);
        setTimeout(function () {
            _this.router.navigate(['/project-list']);
        }, 2000);
    };
    ProjectEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'project-edit.component.html',
            selector: 'project-edit'
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.ActivatedRoute, router_1.Router])
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());
exports.ProjectEditComponent = ProjectEditComponent;
