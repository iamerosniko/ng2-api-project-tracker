"use strict";
var Project = (function () {
    function Project(pt_project_id, pt_project_name, pt_project_desc, pt_project_tech, pt_project_owner, pt_project_deleted, pt_project_show) {
        this.pt_project_id = pt_project_id;
        this.pt_project_name = pt_project_name;
        this.pt_project_desc = pt_project_desc;
        this.pt_project_tech = pt_project_tech;
        this.pt_project_owner = pt_project_owner;
        this.pt_project_deleted = pt_project_deleted;
        this.pt_project_show = pt_project_show;
    }
    return Project;
}());
exports.Project = Project;
