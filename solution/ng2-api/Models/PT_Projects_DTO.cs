using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ng2_api.Models
{
    public class PT_Projects_DTO
    {
        public System.Guid pt_project_id { get; set; }
        public string pt_project_name { get; set; }
        public string pt_project_desc { get; set; }
        public string pt_project_tech { get; set; }
        public string pt_project_owner { get; set; }
        public bool pt_project_deleted { get; set; }
        public bool pt_project_show { get; set; }
    }
}