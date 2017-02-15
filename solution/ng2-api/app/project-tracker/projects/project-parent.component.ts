import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';
import { UUID } from 'angular2-uuid';
@Component({
    moduleId: module.id,
    templateUrl:`project-parent.component.html`
})

export class ProjectParentComponent implements OnInit{
    projectList : Project[];
    viewpage : number = 0;
    isNew : boolean = false;
    selectedProject : Project = new Project(0,'','','','');
    constructor(
        public projectService: ProjectService
    ){ }

    refreshList(): void {
        this.projectService.getProjects().then(project => this.projectList = project );
    }

    newRecord(): void{
        this.selectedProject=new Project( UUID.UUID(),'','','','');
        this.isNew=true;
        this.viewpage=1;
    }
    
    saveRecord(): void{
        this.isNew ? this.projectService.postProject(this.selectedProject) : this.projectService.putProject(this.selectedProject);
    }

    deleteRecord(id:UUID): void{
        this.projectService.deleteProject(id);
    }

    ngOnInit(){
        this.refreshList();
    }
}
