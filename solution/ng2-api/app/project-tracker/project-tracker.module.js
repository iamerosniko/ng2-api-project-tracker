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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
//Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
//Components
var project_edit_component_1 = require('./projects/project-edit.component');
var project_list_component_1 = require('./projects/project-list.component');
var project_tracker_component_1 = require('./project-tracker.component');
//service
var project_service_1 = require('./projects/project.service');
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var project_data_service_1 = require('./projects/project-data.service');
var project_tracker_routing_1 = require('./project-tracker.routing');
var ProjectTrackerModule = (function () {
    function ProjectTrackerModule() {
    }
    ProjectTrackerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(project_data_service_1.ProjectDataService),
                project_tracker_routing_1.ProjectTrackerRouting
            ],
            declarations: [
                project_list_component_1.ProjectListComponent,
                project_edit_component_1.ProjectEditComponent,
                project_tracker_component_1.ProjectTrackerComponent
            ],
            providers: [
                //CarService
                project_service_1.ProjectService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectTrackerModule);
    return ProjectTrackerModule;
}());
exports.ProjectTrackerModule = ProjectTrackerModule;
