using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ng2_api.Models
{
    public class PT_FollowUpItems_DTO
    {
        public System.Guid pt_fui_id { get; set; }
        public System.Guid pt_project_id { get; set; }
        public string pt_fui_item { get; set; }
        public string pt_fui_assignee { get; set; }
        public string pt_fui_comments { get; set; }
        public Nullable<bool> pt_fui_issolved { get; set; }
    }
}