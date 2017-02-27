using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ng2_api.Models
{
    public class PT_ProjectDetails_DTO
    {
        public System.Guid pt_detail_id { get; set; }
        public System.Guid pt_project_id { get; set; }
        public string pt_detail_priority { get; set; }
        public string pt_detail_task { get; set; }
        public string pt_detail_assignee { get; set; }
        public string pt_detail_description { get; set; }
        public string pt_detail_deliverable { get; set; }
        public string pt_detail_eststart { get; set; }
        public string pt_detail_estend { get; set; }
        public string pt_detail_actstart { get; set; }
        public string pt_detail_actend { get; set; }
        public string pt_detail_status { get; set; }
        public bool pt_detail_deleted { get; set; }
        public bool pt_detail_show { get; set; }
        public bool pt_detail_onhold { get; set; }
        public string pt_detail_reason { get; set; }
        public Nullable<decimal> pt_detail_progress { get; set; }
    }
}