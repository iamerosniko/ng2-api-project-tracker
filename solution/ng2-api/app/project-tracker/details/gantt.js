"use strict";
var Gantt = (function () {
    function Gantt(taskNumber, taskFrom, taskTo) {
        this.taskNumber = taskNumber;
        this.taskFrom = taskFrom;
        this.taskTo = taskTo;
    }
    return Gantt;
}());
exports.Gantt = Gantt;
