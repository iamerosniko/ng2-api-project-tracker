"use strict";
var Fui = (function () {
    function Fui(pt_fui_id, //primary key
        pt_project_name, //foreign key
        pt_fui_item, pt_fui_assignee, pt_fui_comments, pt_fui_issolved) {
        this.pt_fui_id = pt_fui_id;
        this.pt_project_name = pt_project_name;
        this.pt_fui_item = pt_fui_item;
        this.pt_fui_assignee = pt_fui_assignee;
        this.pt_fui_comments = pt_fui_comments;
        this.pt_fui_issolved = pt_fui_issolved;
    }
    return Fui;
}());
exports.Fui = Fui;
