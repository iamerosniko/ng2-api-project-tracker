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
require('rxjs/add/operator/toPromise');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var DetailService = (function () {
    //private carsUrl = 'http://localhost:3000/api/ng2_cars';  // live
    function DetailService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.detailsUrl = 'api/details'; // testing
    }
    DetailService.prototype.postDetail = function (newDetail) {
        return this.http
            .post(this.detailsUrl, JSON.stringify(newDetail), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); }) // testing
            .catch(this.handleError);
    };
    DetailService.prototype.getCompletedItems = function (id) {
        var url = this.detailsUrl + "/GetCompletedItems/?projectID=" + id;
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); }) //testing
            .catch(this.handleError);
    };
    DetailService.prototype.getOnHoldItems = function (id) {
        var url = this.detailsUrl + "/GetOnholdItems/?projectID=" + id;
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); }) //testing
            .catch(this.handleError);
    };
    DetailService.prototype.getIncidentItems = function (id) {
        var url = this.detailsUrl + "/GetIncidentItems/?projectID=" + id;
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); }) //testing
            .catch(this.handleError);
    };
    DetailService.prototype.getTaskItems = function (id) {
        var url = this.detailsUrl + "/GetTaskItems/?projectID=" + id;
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); }) //testing
            .catch(this.handleError);
    };
    DetailService.prototype.getDetails = function (id) {
        var url = this.detailsUrl + "/?projectID=" + id;
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); }) //testing
            .catch(this.handleError);
    };
    DetailService.prototype.getDetail = function (id) {
        var url = this.detailsUrl + "/GetDetail/?detailID=" + id;
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); }) // testing
            .catch(this.handleError);
    };
    DetailService.prototype.putDetail = function (detail) {
        var url = this.detailsUrl + "/" + detail.pt_project_id;
        return this.http
            .put(url, JSON.stringify(detail), { headers: this.headers })
            .toPromise()
            .then(function () { return detail; })
            .catch(this.handleError);
    };
    DetailService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DetailService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DetailService);
    return DetailService;
}());
exports.DetailService = DetailService;
