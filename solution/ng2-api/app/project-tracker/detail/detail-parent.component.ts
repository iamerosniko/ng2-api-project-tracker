import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';
import { Detail } from './detail';
import { DetailService } from './detail.service';
import { UUID } from 'angular2-uuid';
@Component({
    moduleId: module.id,
    templateUrl:`detail-parent.component.html`
})

export class DetailParentComponent implements OnInit{
    detailList : Detail[];
    projectID : string ='';
    viewpage : number = 0;
    isNew : boolean = false;
    selectedDetail : Detail = new Detail('','','','','','','',
        new Date(),new Date(),new Date(),new Date(),'',false,true);
    constructor(
        public detailService: DetailService,
        private route: ActivatedRoute,
        private router: Router
    ){ }

    refreshList(): void {
        this.detailService.getDetails(this.projectID).then(detail => this.detailList = detail );
    }

    newRecord(): void{
        this.selectedDetail=new Detail(UUID.UUID(),this.projectID,'','','','','',
        new Date(),new Date(),new Date(),new Date(),'',false,true);
        this.isNew=true;
        this.viewpage=1;
    }
    
    saveRecord(): void{
        this.isNew ? this.detailService.postDetail(this.selectedDetail) : this.detailService.putDetail(this.selectedDetail);
        this.isNew=false;
    }

    deleteRecord(detail:Detail): void{
        if (confirm("Are you sure you want to delete?")) {
            detail.pt_detail_deleted=true;
            this.detailService.putDetail(detail);
            setTimeout(
                () => {
                    this.refreshList();
                }, 
                750
            );
        }
    }

    getSelectedProjectID(){
        this.route.params.subscribe(params => {
            this.projectID = params['id'];});
            alert(this.projectID);
    }

    ngOnInit(){
        this.refreshList();
        this.getSelectedProjectID();
    }
}
