import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { FuiParentComponent } from './fui-parent.component';
import { Fui } from './fui';

@Component({
    moduleId: module.id,
    templateUrl: 'fui-list.component.html',
    selector: 'fui-list'
})

export class FuiListComponent{
    @Input() mainFui:FuiParentComponent;

    newFui(): void {
        this.mainFui.newRecord();
    }

    delete(detail: Fui){
        this.mainFui.deleteRecord(detail);
    }

    onSelect(detail: Fui) {
        this.mainFui.isNew=false;
        this.mainFui.viewpage=1;
        this.mainFui.selectedFui=detail;
    }
}