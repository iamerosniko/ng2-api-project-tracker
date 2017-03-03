import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fui } from './fui';
import { FuiService } from './fui.service';
import { UUID } from 'angular2-uuid';

@Component({
    moduleId: module.id,
    templateUrl:`fui-parent.component.html`
})

export class FuiParentComponent implements OnInit{
    fuiList : Fui[];
    viewpage : number = 0;
    isNew : boolean = false;
    selectedFui : Fui = new Fui('','','','','',false);
    constructor(
        private router: Router,
        public fuiService: FuiService
    ){ }

    refreshList(): void {
        this.fuiService.getFuis().then(Fui => this.fuiList = Fui );
    }

    newRecord(): void{
        this.selectedFui=new Fui(UUID.UUID(),'','','','',false);
        this.isNew=true; 
        this.viewpage=1;
    }
    
    saveRecord(): void{
        this.isNew 
        ? this.fuiService.postFui(this.selectedFui).then(
            any => {
                this.backtoList();
            })
        : this.fuiService.putFui(this.selectedFui).then(
            any => {
                this.backtoList();
            });
    }

    backtoList(): void {
        this.viewpage=0;
        this.refreshList();
        this.isNew=false;
    }

    deleteRecord(fui:Fui): void{
        if (confirm("Are you sure you want to delete?")) {
            this.fuiService.deleteFui(fui.pt_fui_id).then(any=>{
                this.refreshList();
            });
        }
    }

    ngOnInit(){
        this.refreshList();
    }
}
