using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ng2_api.Controllers
{
    public class ProjectsController : ApiController
    {
        // GET api/projects
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/projects/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/projects
        public void Post([FromBody]string value)
        {
        }

        // PUT api/projects/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/projects/5
        public void Delete(int id)
        {
        }
    }
}
