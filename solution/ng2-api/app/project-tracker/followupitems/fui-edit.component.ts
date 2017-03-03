import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';
import { FuiParentComponent } from './fui-parent.component'

@Component({
    moduleId: module.id,
    templateUrl: 'fui-edit.component.html',
    selector: 'fui-edit'
})

export class FuiEditComponent{
    @Input() mainFui:FuiParentComponent;
    submitted = false;

    backtoList(): void {
        this.mainFui.viewpage=0;
        this.mainFui.refreshList();
    }

    onSubmit(): void {
        this.submitted = true;
        this.mainFui.saveRecord();
    }
    get diagnostic() { return JSON.stringify(this.mainFui.selectedFui); }
}