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
        public List<PT_ProjectDetails_DTO> Get(System.Guid projectID)
        {
            List<PT_ProjectDetails_DTO> details = new List<PT_ProjectDetails_DTO>();
            //IQueryable<PT_Projects> tempProjects = db.PT_Projects;
            IQueryable<PT_ProjectDetails> tempDetails = from l in db.PT_ProjectDetails
                                                        where l.pt_detail_show == true
                                                        where l.pt_detail_deleted == false
                                                        where l.pt_detail_entrytype == "Task"
                                                        where l.pt_project_id == projectID
                                                        select l;

            foreach (PT_ProjectDetails detail in tempDetails)
            {
                details.Add(new PT_ProjectDetails_DTO
                {
                    pt_detail_actend = getValue(detail.pt_detail_actend),
                    pt_detail_actstart = getValue(detail.pt_detail_actstart),
                    pt_detail_assignee = detail.pt_detail_assignee,
                    pt_detail_deleted = detail.pt_detail_deleted,
                    pt_detail_deliverable = detail.pt_detail_deliverable,
                    pt_detail_description = detail.pt_detail_description,
                    pt_detail_estend = getValue( detail.pt_detail_estend),
                    pt_detail_eststart =  getValue(detail.pt_detail_eststart),
                    pt_detail_id = detail.pt_detail_id,
                    pt_detail_priority = detail.pt_detail_priority,
                    pt_detail_show = detail.pt_detail_show,
                    pt_detail_status = detail.pt_detail_status,
                    pt_detail_task = detail.pt_detail_task,
                    pt_project_id = detail.pt_project_id,
                    pt_detail_onhold= detail.pt_detail_onhold,
                    pt_detail_reason=detail.pt_detail_reason,
                    pt_detail_progress=detail.pt_detail_progress,
                    pt_detail_entrytype=detail.pt_detail_entrytype
                    

                });
            }
            return details;
        }

        //gets selected detail.
        [Route("api/details/GetDetail")]
        public PT_ProjectDetails_DTO GetDetail(System.Guid detailID)
        {
            PT_ProjectDetails tempDetail= db.PT_ProjectDetails.Find(detailID);
            if(tempDetail==null){
                return new PT_ProjectDetails_DTO();
            }
            return new PT_ProjectDetails_DTO {
                pt_detail_actend = getValue(tempDetail.pt_detail_actend),
                pt_detail_actstart = getValue(tempDetail.pt_detail_actstart),
                pt_detail_assignee = tempDetail.pt_detail_assignee,
                pt_detail_deleted = tempDetail.pt_detail_deleted,
                pt_detail_deliverable = tempDetail.pt_detail_deliverable,
                pt_detail_description = tempDetail.pt_detail_description,
                pt_detail_estend = getValue(tempDetail.pt_detail_estend),
                pt_detail_eststart = getValue(tempDetail.pt_detail_eststart),
                pt_detail_id = tempDetail.pt_detail_id,
                pt_detail_priority = tempDetail.pt_detail_priority,
                pt_detail_show = tempDetail.pt_detail_show,
                pt_detail_status = tempDetail.pt_detail_status,
                pt_detail_task = tempDetail.pt_detail_task,
                pt_project_id = tempDetail.pt_project_id,
                pt_detail_onhold= tempDetail.pt_detail_onhold,
                pt_detail_reason=tempDetail.pt_detail_reason,
                pt_detail_progress=tempDetail.pt_detail_progress,
                pt_detail_entrytype=tempDetail.pt_detail_entrytype
            };
        }

        [Route("api/details/GetCompletedItems")]
        public List<PT_ProjectDetails_DTO> GetCompletedItems(System.Guid projectID)
        {
            List<PT_ProjectDetails_DTO> details = new List<PT_ProjectDetails_DTO>();
            //IQueryable<PT_Projects> tempProjects = db.PT_Projects;
            IQueryable<PT_ProjectDetails> tempDetails = from l in db.PT_ProjectDetails
                                                        where l.pt_detail_deleted == false
                                                        where l.pt_detail_entrytype == "Task"
                                                        where l.pt_project_id == projectID
                                                        where l.pt_detail_status == "Completed"
                                                        select l;

            foreach (PT_ProjectDetails detail in tempDetails)
            {
                details.Add(new PT_ProjectDetails_DTO
                {
                    pt_detail_actend = getValue(detail.pt_detail_actend),
                    pt_detail_actstart = getValue(detail.pt_detail_actstart),
                    pt_detail_assignee = detail.pt_detail_assignee,
                    pt_detail_deleted = detail.pt_detail_deleted,
                    pt_detail_deliverable = detail.pt_detail_deliverable,
                    pt_detail_description = detail.pt_detail_description,
                    pt_detail_estend = getValue(detail.pt_detail_estend),
                    pt_detail_eststart = getValue(detail.pt_detail_eststart),
                    pt_detail_id = detail.pt_detail_id,
                    pt_detail_priority = detail.pt_detail_priority,
                    pt_detail_show = detail.pt_detail_show,
                    pt_detail_status = detail.pt_detail_status,
                    pt_detail_task = detail.pt_detail_task,
                    pt_project_id = detail.pt_project_id,
                    pt_detail_onhold = detail.pt_detail_onhold,
                    pt_detail_reason = detail.pt_detail_reason,
                    pt_detail_progress = detail.pt_detail_progress,
                    pt_detail_entrytype = detail.pt_detail_entrytype


                });
            }
            return details;
        }

        [Route("api/details/GetOnholdItems")]
        public List<PT_ProjectDetails_DTO> GetOnholdItems(System.Guid projectID)
        {
            List<PT_ProjectDetails_DTO> details = new List<PT_ProjectDetails_DTO>();
            //IQueryable<PT_Projects> tempProjects = db.PT_Projects;
            IQueryable<PT_ProjectDetails> tempDetails = from l in db.PT_ProjectDetails
                                                        where l.pt_detail_show == true
                                                        where l.pt_detail_deleted == false
                                                        where l.pt_project_id == projectID
                                                        where l.pt_detail_onhold == true
                                                        select l;

            foreach (PT_ProjectDetails detail in tempDetails)
            {
                details.Add(new PT_ProjectDetails_DTO
                {
                    pt_detail_actend = getValue(detail.pt_detail_actend),
                    pt_detail_actstart = getValue(detail.pt_detail_actstart),
                    pt_detail_assignee = detail.pt_detail_assignee,
                    pt_detail_deleted = detail.pt_detail_deleted,
                    pt_detail_deliverable = detail.pt_detail_deliverable,
                    pt_detail_description = detail.pt_detail_description,
                    pt_detail_estend = getValue(detail.pt_detail_estend),
                    pt_detail_eststart = getValue(detail.pt_detail_eststart),
                    pt_detail_id = detail.pt_detail_id,
                    pt_detail_priority = detail.pt_detail_priority,
                    pt_detail_show = detail.pt_detail_show,
                    pt_detail_status = detail.pt_detail_status,
                    pt_detail_task = detail.pt_detail_task,
                    pt_project_id = detail.pt_project_id,
                    pt_detail_onhold = detail.pt_detail_onhold,
                    pt_detail_reason = detail.pt_detail_reason,
                    pt_detail_progress = detail.pt_detail_progress,
                    pt_detail_entrytype = detail.pt_detail_entrytype


                });
            }
            return details;
        }

        private string getValue(Nullable<System.DateTime> dt)
        {
            if (dt == null)
                return "";
            return String.Format("{0:yyyy-MM-dd}", dt); 
        }

        // POST api/projects
        [ResponseType(typeof(PT_ProjectDetails))]
        public void Post(PT_ProjectDetails detail)
        {
            db.Entry(detail).State = EntityState.Added;
            db.SaveChanges();
        }

        // PUT api/projects/5
        [ResponseType(typeof(PT_ProjectDetails))]
        public void Put(PT_ProjectDetails detail)
        {
            db.Entry(detail).State = EntityState.Modified;
            db.SaveChanges();
        }
    }
}
