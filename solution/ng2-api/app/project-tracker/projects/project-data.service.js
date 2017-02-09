"use strict";
var ProjectDataService = (function () {
    function ProjectDataService() {
    }
    ProjectDataService.prototype.createDb = function () {
        var projects = [
            {
                id: 1,
                projectName: "sample 1",
                description: "desc",
                technology: ".Net Projects",
                owner: "eros niko"
            },
            {
                id: 2,
                projectName: "sample 2",
                description: "desc",
                technology: ".Net Projects",
                owner: "eros niko"
            }
        ];
        return { projects: projects };
    };
    return ProjectDataService;
}());
exports.ProjectDataService = ProjectDataService;
