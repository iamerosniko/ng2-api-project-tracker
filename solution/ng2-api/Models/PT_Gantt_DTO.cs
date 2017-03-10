using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ng2_api.Models
{
    public class PT_Gantt_DTO
    {
        public string task { get; set; }
        public Nullable<System.DateTime> dateFrom { get; set; }
        public Nullable<System.DateTime> dateTo { get; set; }
    }
}