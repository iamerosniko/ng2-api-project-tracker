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
    
    public partial class VTD_Applications_TT
    {
        public VTD_Applications_TT()
        {
            this.VTD_VulnerabilitiesApplications_LT = new HashSet<VTD_VulnerabilitiesApplications_LT>();
        }
    
        public int ApplicationID { get; set; }
        public string ApplicationOfficialName { get; set; }
        public string ApplicationCommonName { get; set; }
        public string ApplicationOwner { get; set; }
        public string OtherBasicApplicationInformation { get; set; }
        public string Comments { get; set; }
        public string RecommendTestingFrequency { get; set; }
        public Nullable<System.DateTime> LastTestDate { get; set; }
        public Nullable<System.DateTime> NextTestDate { get; set; }
        public int BusinessGroupID { get; set; }
        public short IsActive { get; set; }
    
        public virtual VTD_BusinessGroups_RT VTD_BusinessGroups_RT { get; set; }
        public virtual ICollection<VTD_VulnerabilitiesApplications_LT> VTD_VulnerabilitiesApplications_LT { get; set; }
    }
}