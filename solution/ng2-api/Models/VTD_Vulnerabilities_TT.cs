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
    
    public partial class VTD_Vulnerabilities_TT
    {
        public VTD_Vulnerabilities_TT()
        {
            this.VTD_VulnerabilitiesApplications_LT = new HashSet<VTD_VulnerabilitiesApplications_LT>();
            this.VTD_VulnerabilitiesTestings_LT = new HashSet<VTD_VulnerabilitiesTestings_LT>();
        }
    
        public int VulnerabilityID { get; set; }
        public string VulnerabilityName { get; set; }
        public string VulnerabilityType { get; set; }
        public string Description { get; set; }
        public short IsActive { get; set; }
    
        public virtual ICollection<VTD_VulnerabilitiesApplications_LT> VTD_VulnerabilitiesApplications_LT { get; set; }
        public virtual ICollection<VTD_VulnerabilitiesTestings_LT> VTD_VulnerabilitiesTestings_LT { get; set; }
    }
}
