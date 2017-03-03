export class Fui {
    constructor (
        public pt_fui_id: string,//primary key
        public pt_project_id: string,//foreign key
        public pt_fui_item: string,
        public pt_fui_assignee: string,
        public pt_fui_comments: string,
        public pt_fui_issolved: boolean,
    ){}
}