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
    public class FuiController : ApiController
    {
        public PTContext db = new PTContext();
        // GET api/projects
        public List<PT_FollowUpItems_DTO> Get()
        {
            List<PT_FollowUpItems_DTO> fuis = new List<PT_FollowUpItems_DTO>();
            //IQueryable<PT_Projects> tempProjects = db.PT_Projects;
            IQueryable<PT_FollowUpItems> tempfuis = db.PT_FollowUpItems;

            foreach (PT_FollowUpItems fui in tempfuis)
            {
                fuis.Add(new PT_FollowUpItems_DTO
                {
                });
            }
            return fuis;
        }

        // GET api/projects/5
        public PT_FollowUpItems_DTO Get(System.Guid fuiID)
        {
            PT_FollowUpItems project = db.PT_FollowUpItems.Find(fuiID);
            if (project == null)
                return new PT_FollowUpItems_DTO();
            return new PT_FollowUpItems_DTO
            {
                pt_project_id = project.pt_project_id,
                pt_fui_item = project.pt_fui_item,
                pt_fui_issolved= project.pt_fui_issolved,
                pt_fui_id=project.pt_fui_id,
                pt_fui_assignee=project.pt_fui_assignee,
                pt_fui_comments=project.pt_fui_comments
            };
        }

        // POST api/projects
        [ResponseType(typeof(PT_FollowUpItems))]
        public void Post(PT_FollowUpItems fui)
        {
            db.Entry(fui).State = EntityState.Added;
            db.SaveChanges();
        }

        // PUT api/projects/5
        [ResponseType(typeof(PT_FollowUpItems))]
        public void Put(PT_FollowUpItems fui)
        {
            db.Entry(fui).State = EntityState.Modified;
            db.SaveChanges();
        }

    }
}
