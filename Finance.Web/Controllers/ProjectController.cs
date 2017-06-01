using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Finance.DataAccess;
using Finance.Services.Interfaces;
using Finance.Services.ViewModels;
using Finance.Web.Helpers;

namespace MedeStaff.Web.Controllers
{
	[Authorize]
	public class ProjectController : ApiController
    {
	    private IFinanceProjectService _projectRepo; 
		public ProjectController(IFinanceProjectService projectRepo)
		{
			_projectRepo = projectRepo;
		}
		[HttpGet]
        public IHttpActionResult All()
        {
	        var result = _projectRepo.GetAllById(HelperService.GetUserId(User));
            return Ok(result);
        }

		[HttpPost]
	    public IHttpActionResult Create(FianceProjectViewModel project)
		{
			project.OwnerId = HelperService.GetUserId(User);
			var id = _projectRepo.Create(project);
		    return Ok(id);
	    }

	    [HttpGet]
	    public IHttpActionResult GetById(int id)
	    {
		    var result = _projectRepo.GetById(id);
		    return Ok(result);
	    }

	    [HttpGet]
	    public IHttpActionResult GetMembers(int id)
	    {
		    var context = new Context();
		    var result = context.FinanceProjects.FirstOrDefault(p => p.Id == id)?.Members.Select(u=>new FinanceUserViewModel {Id = u.Id, Name = u.Name}).ToList();
		    return Ok(result);
	    }


	}
}
