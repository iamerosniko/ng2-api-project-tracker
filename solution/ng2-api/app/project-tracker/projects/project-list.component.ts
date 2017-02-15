import  { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { ProjectParentComponent } from './project-parent.component';
import { ProjectService } from './project.service';
import { ProjectEditComponent } from './project-edit.component';
import { Project } from './project'

@Component({
    moduleId: module.id,
    templateUrl: 'project-list.component.html',
    selector: 'project-list'
})

export class ProjectListComponent{
    @Input() mainProject:ProjectParentComponent;

    newProject(): void {
        this.mainProject.newRecord();
    }

    deleteProject(projectid: UUID){
        this.mainProject.deleteRecord(projectid);
        this.mainProject.refreshList();
    }

    onSelect(project: Project) {
        this.mainProject.viewpage=1;
        this.mainProject.selectedProject=project;
    }
}