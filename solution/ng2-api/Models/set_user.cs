//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ng2_api.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class set_user
    {
        public set_user()
        {
            this.VTD_BusinessGroupUsers_LT = new HashSet<VTD_BusinessGroupUsers_LT>();
        }
    
        public string user_id { get; set; }
        public string user_name { get; set; }
        public string user_last_name { get; set; }
        public string user_first_name { get; set; }
        public string user_middle_name { get; set; }
        public Nullable<bool> can_PROD { get; set; }
        public Nullable<bool> can_UAT { get; set; }
        public Nullable<bool> can_PEER { get; set; }
        public Nullable<bool> can_DEV { get; set; }
        public Nullable<System.DateTime> created_date { get; set; }
    
        public virtual ICollection<VTD_BusinessGroupUsers_LT> VTD_BusinessGroupUsers_LT { get; set; }
    }
}
