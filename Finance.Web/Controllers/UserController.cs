using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Finance.Services.Interfaces;
using Finance.Web.Helpers;

namespace Financenance.Web.Controllers
{
    public class UserController : ApiController
    {
	    private readonly IFinanceUserService _fUserService;

	    public UserController(IFinanceUserService financeUserService)
	    {
		    _fUserService = financeUserService;
	    }

	    public IHttpActionResult GetName()
	    {
		   var name = _fUserService.Find(HelperService.GetUserId(User)).Name;
		    return Ok(name);
	    }
    }
}
