import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { ProjectListComponent } from './projects/project-list.component';
import { ProjectEditComponent } from './projects/project-edit.component';
import { ProjectParentComponent } from './projects/project-parent.component';
const projectTrackerRoutes: Routes = [
    //paths
    { path : 'project-tracker', component: ProjectParentComponent }
];

 @NgModule ({
     imports: [ RouterModule.forChild(projectTrackerRoutes) ],
     exports: [ RouterModule ]
 })

export class ProjectTrackerRouting {}