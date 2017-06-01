using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Finance.Common;
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
		    int id = HelperService.GetUserId(User);
		    if (id == -1) return InternalServerError(new FinanceExeption("Session expired!"));
		    else
		    {
				var name = _fUserService.Find(id).Name;
			    return Ok(name);
			}
	    }
    }
}
