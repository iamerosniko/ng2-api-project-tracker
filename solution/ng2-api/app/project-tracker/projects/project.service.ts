import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UUID } from 'angular2-uuid';
import { Project } from './project';

@Injectable()
export class ProjectService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private projectsUrl = 'api/projects';  // testing
    //private carsUrl = 'http://localhost:3000/api/ng2_cars';  // live

    constructor(private http: Http){}
    
    postProject(newProject: Project): Promise<Project> {
        return this.http
            .post(this.projectsUrl, JSON.stringify(newProject), {headers: this.headers})
            .toPromise()
            .then(res => res.json())  // testing
            //.then(res => res.json())  // live
            .catch(this.handleError);
    }

    getProjects(): Promise<Project[]> {
        return this.http
                .get(this.projectsUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json().data as Project[]) //testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
    }

    getProject(id: number): Promise<Project> {
        const url = `${this.projectsUrl}/${id}`;

        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json().data as Project)  // testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
    }

    putProject(project: Project): Promise<Project> {
        const url = `${this.projectsUrl}/${project.id}`;

        return this.http
                .put(url, JSON.stringify(project), {headers: this.headers})
                .toPromise()
                .then(() => project)
                .catch(this.handleError);
    }

    deleteProject(id: UUID): Promise<void> {
        const url = `${this.projectsUrl}/${id}`;

        return this.http.delete(url, {headers: this.headers})
                .toPromise()
                .then(() => null)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
