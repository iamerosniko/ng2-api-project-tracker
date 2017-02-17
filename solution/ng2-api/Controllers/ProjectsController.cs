using ng2_api.Models;
using System.Collections.Generic;
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
        public List<PT_Projects_DTO> Get()
        {
            IQueryable<PT_Projects> tempProjects = db.PT_Projects;
            List<PT_Projects_DTO> projects = new List<PT_Projects_DTO>();

            foreach (PT_Projects project in tempProjects)
            {
                projects.Add(new PT_Projects_DTO
                {
                    pt_project_id = project.pt_project_id,
                    pt_project_deleted = project.pt_project_deleted,
                    pt_project_desc = project.pt_project_desc,
                    pt_project_name = project.pt_project_name,
                    pt_project_owner = project.pt_project_owner,
                    pt_project_show = project.pt_project_show,
                    pt_project_tech = project.pt_project_tech
                });
            }

            return projects;
        }

        // GET api/projects/5
        public PT_Projects_DTO Get(System.Guid projectID)
        {
            PT_Projects project = db.PT_Projects.Find(projectID);
            return new PT_Projects_DTO
            {
                pt_project_id=project.pt_project_id,
                pt_project_deleted=project.pt_project_deleted,
                pt_project_desc=project.pt_project_desc,
                pt_project_name=project.pt_project_name,
                pt_project_owner=project.pt_project_owner,
                pt_project_show=project.pt_project_show,
                pt_project_tech=project.pt_project_tech
            };
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
