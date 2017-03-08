using ng2_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ng2_api.Controllers
{
    public class ProjectImportController : ApiController
    {
        public PTContext db = new PTContext();

        // GET api/projectimport
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/projectimport/5
        public string Get(int id)
        {
            return "value";
        }

        private string getProjectID(string projectName)
        {
            PT_Projects project = new PT_Projects();
            project = (from l in db.PT_Projects
                      where l.pt_project_name == projectName
                       select l).FirstOrDefault();
            return project == null ? "" : project.pt_project_id.ToString();
        }
    }
}
