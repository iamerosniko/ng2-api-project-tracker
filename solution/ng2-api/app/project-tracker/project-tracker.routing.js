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
//component
var project_list_component_1 = require('./projects/project-list.component');
var project_edit_component_1 = require('./projects/project-edit.component');
var project_tracker_component_1 = require('./project-tracker.component');
var projectTrackerRoutes = [
    //paths
    { path: 'project-tracker', component: project_tracker_component_1.ProjectTrackerComponent },
    //projects folder
    { path: 'project-list', component: project_list_component_1.ProjectListComponent },
    { path: 'project-edit', component: project_edit_component_1.ProjectEditComponent }
];
var ProjectTrackerRouting = (function () {
    function ProjectTrackerRouting() {
    }
    ProjectTrackerRouting = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(projectTrackerRoutes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectTrackerRouting);
    return ProjectTrackerRouting;
}());
exports.ProjectTrackerRouting = ProjectTrackerRouting;
