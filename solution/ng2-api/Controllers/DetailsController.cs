using ng2_api.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace ng2_api.Controllers
{
    public class DetailsController : ApiController
    {
        public PTContext db = new PTContext();
        //on load display all project's details
        public List<PT_ProjectDetails_DTO> Get(System.Guid ID)
        {
            List<PT_ProjectDetails_DTO> details = new List<PT_ProjectDetails_DTO>();
            //IQueryable<PT_Projects> tempProjects = db.PT_Projects;
            IQueryable<PT_ProjectDetails> tempDetails = from l in db.PT_ProjectDetails
                                                        where l.pt_detail_show == true
                                                        where l.pt_detail_deleted == false
                                                        where l.pt_project_id == ID
                                                        select l;

            foreach (PT_ProjectDetails detail in tempDetails)
            {
                details.Add(new PT_ProjectDetails_DTO
                {
                    pt_detail_actend = detail.pt_detail_actend,
                    pt_detail_actstart = detail.pt_detail_actstart,
                    pt_detail_assignee = detail.pt_detail_assignee,
                    pt_detail_deleted = detail.pt_detail_deleted,
                    pt_detail_deliverable = detail.pt_detail_deliverable,
                    pt_detail_description = detail.pt_detail_description,
                    pt_detail_estend = detail.pt_detail_estend,
                    pt_detail_eststart = detail.pt_detail_eststart,
                    pt_detail_id = detail.pt_detail_id,
                    pt_detail_priority = detail.pt_detail_priority,
                    pt_detail_show = detail.pt_detail_show,
                    pt_detail_status = detail.pt_detail_status,
                    pt_detail_task = detail.pt_detail_task,
                    pt_project_id = detail.pt_project_id

                });
            }
            return details;
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
    }
}
