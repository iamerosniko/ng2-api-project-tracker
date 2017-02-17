using ng2_api.Models;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Description;

namespace ng2_api.Controllers
{
    public class ProjectsController : ApiController
    {
        public PTContext db = new PTContext();
        // GET api/projects
        public IQueryable<PT_Projects> Get()
        {
            //PT_Projects p = new PT_Projects
            //{
            //    pt_project_id = new Guid("646542ef-2d92-408e-a45b-f1a2c69f5ae7"),
            //    pt_project_desc = "",
            //    pt_project_name = "",
            //    pt_project_owner = "",
            //    pt_project_tech = ""
            //};

            //List<PT_Projects> p2 = new List<PT_Projects>();
            //p2.Add(p);

            //return p2;
            return db.PT_Projects;
            
        }

        // GET api/projects/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/projects
        [ResponseType(typeof(PT_Projects))]
        public void Post(PT_Projects project)
        {
            db.Entry(project).State = EntityState.Added;
            db.SaveChanges();
        }

        // PUT api/projects/5
        [ResponseType(typeof(PT_Projects))]
        public void Put(PT_Projects project)
        {
            db.Entry(project).State = EntityState.Modified;
            db.SaveChanges();
        }

        // DELETE api/projects/5
        public void Delete(int id)
        {
        }
    }
}
