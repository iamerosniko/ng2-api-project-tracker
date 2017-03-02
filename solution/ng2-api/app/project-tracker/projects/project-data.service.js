"use strict";
var angular2_uuid_1 = require('angular2-uuid');
var ProjectDataService = (function () {
    function ProjectDataService() {
    }
    ProjectDataService.prototype.createDb = function () {
        var projects = [
            {
                pt_project_id: angular2_uuid_1.UUID.UUID(),
                pt_project_name: "sample 1",
                pt_project_desc: "desc",
                pt_project_tech: "MS Access FrontEnd + Backend",
                pt_project_owner: "eros niko"
            },
            {
                pt_project_id: angular2_uuid_1.UUID.UUID(),
                pt_project_name: "sample 2",
                pt_project_desc: "desc",
                pt_project_tech: "MS Access FrontEnd + Backend",
                pt_project_owner: "eros niko"
            }
        ];
        return { projects: projects };
    };
    return ProjectDataService;
}());
exports.ProjectDataService = ProjectDataService;
