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
    
    public partial class VTD_VulnerabilitiesTestings_LT
    {
        public int VulnerabilityTestingID { get; set; }
        public int VulnerabilityID { get; set; }
        public int TestEventID { get; set; }
    
        public virtual VTD_TestEvents_TT VTD_TestEvents_TT { get; set; }
        public virtual VTD_Vulnerabilities_TT VTD_Vulnerabilities_TT { get; set; }
    }
}