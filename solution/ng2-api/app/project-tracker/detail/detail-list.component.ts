import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { DetailParentComponent } from './detail-parent.component';
import { Detail } from './detail'

@Component({
    moduleId: module.id,
    templateUrl: 'detail-list.component.html',
    selector: 'detail-list'
})

export class DetailListComponent{
    @Input() mainDetail:DetailParentComponent;

    newProject(): void {
        this.mainDetail.newRecord();
    }

    deleteProject(detail: Detail){
        this.mainDetail.deleteRecord(detail);
        this.mainDetail.refreshList();
    }

    onSelect(detail: Detail) {
        this.mainDetail.isNew=false;
        this.mainDetail.viewpage=1;
        this.mainDetail.selectedDetail=detail;
    }
}