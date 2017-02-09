"use strict";
var Project = (function () {
    function Project(id, projectName, description, technology, owner) {
        this.id = id;
        this.projectName = projectName;
        this.description = description;
        this.technology = technology;
        this.owner = owner;
    }
    return Project;
}());
exports.Project = Project;
