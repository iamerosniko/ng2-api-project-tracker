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
var FuiService = (function () {
    function FuiService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.fuiUrl = 'api/fui'; // testing
    }
    FuiService.prototype.postFui = function (newFui) {
        return this.http
            .post(this.fuiUrl, JSON.stringify(newFui), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); }) // testing
            .catch(this.handleError);
    };
    FuiService.prototype.getFuis = function () {
        return this.http
            .get(this.fuiUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); }) //testing
            .catch(this.handleError);
    };
    FuiService.prototype.getFui = function (id) {
        var url = this.fuiUrl + "/?FuiID=" + id;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); }) // testing
            .catch(this.handleError);
    };
    FuiService.prototype.putFui = function (Fui) {
        var url = this.fuiUrl + "/" + Fui.pt_fui_id;
        return this.http
            .put(url, JSON.stringify(Fui), { headers: this.headers })
            .toPromise()
            .then(function () { return Fui; })
            .catch(this.handleError);
    };
    FuiService.prototype.deleteFui = function (id) {
        var url = this.fuiUrl + "/Delete/?fuiID=" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    FuiService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    FuiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FuiService);
    return FuiService;
}());
exports.FuiService = FuiService;
