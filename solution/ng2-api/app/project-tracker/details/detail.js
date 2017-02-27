"use strict";
var Detail = (function () {
    function Detail(pt_detail_id, //primary key
        pt_project_id, //foreign key
        pt_detail_priority, pt_detail_task, pt_detail_assignee, pt_detail_description, pt_detail_deliverable, pt_detail_eststart, pt_detail_estend, pt_detail_actstart, pt_detail_actend, pt_detail_status, pt_detail_deleted, pt_detail_show, pt_detail_onhold, pt_detail_reason, pt_detail_progress) {
        this.pt_detail_id = pt_detail_id;
        this.pt_project_id = pt_project_id;
        this.pt_detail_priority = pt_detail_priority;
        this.pt_detail_task = pt_detail_task;
        this.pt_detail_assignee = pt_detail_assignee;
        this.pt_detail_description = pt_detail_description;
        this.pt_detail_deliverable = pt_detail_deliverable;
        this.pt_detail_eststart = pt_detail_eststart;
        this.pt_detail_estend = pt_detail_estend;
        this.pt_detail_actstart = pt_detail_actstart;
        this.pt_detail_actend = pt_detail_actend;
        this.pt_detail_status = pt_detail_status;
        this.pt_detail_deleted = pt_detail_deleted;
        this.pt_detail_show = pt_detail_show;
        this.pt_detail_onhold = pt_detail_onhold;
        this.pt_detail_reason = pt_detail_reason;
        this.pt_detail_progress = pt_detail_progress;
    }
    return Detail;
}());
exports.Detail = Detail;
