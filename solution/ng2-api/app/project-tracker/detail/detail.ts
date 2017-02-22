export class Detail {
    constructor (
        public pt_detail_id: string,//primary key
        public pt_project_id: string,//foreign key
        public pt_detail_priority: string,
        public pt_detail_task: string,
        public pt_detail_assignee: string,
        public pt_detail_description: string,
        public pt_detail_deliverable: string,
        public pt_detail_eststart: Date,
        public pt_detail_estend: Date,
        public pt_detail_actstart: Date,
        public pt_detail_actend: Date,
        public pt_detail_staus: string,
        public pt_detail_deleted: Boolean,
        public pt_detail_show: boolean
    ){}
}