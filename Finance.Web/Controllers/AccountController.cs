using System.Net.Http;
using System.Web.Http;
using Finance.Common.Interfaces;
using Finance.Common.Loggers;
using Finance.Web.Helpers;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Finance.Services.Interfaces;
using Finance.Services.ViewModels;

namespace Finance.Web.Controllers
{
    
    [RoutePrefix("api/Account")]
    public class AccountController : ApiController
    {
        private readonly IFinanceUserService _userService;
        public AccountController(IFinanceUserService userService)
        {
            _userService = userService;
        }
        private IAuthenticationManager Authentication => Request.GetOwinContext().Authentication;
        private ILoggingService _logger;

        // POST api/Account/Logout
        [Route("Logout")]
        [Authorize]
        public IHttpActionResult Logout()
        {
            _logger = new LoggingService();
            Authentication.SignOut(CookieAuthenticationDefaults.AuthenticationType);
            _logger.Info($"{HelperService.GetUserName(User)} logout");

            return Ok();
        }
        public class LoginData
        {
           public string userName { get; set; }
           public string name { get; set; }
            public string password { get; set; }
        }
        [HttpPost]
        public IHttpActionResult Register([FromBody] LoginData data)
        {
            FinanceUserViewModel user = new FinanceUserViewModel()
            {
                Name = data.name,
                Password = data.password,
                UserName = data.userName
            };
            _userService.AddFinanceUser(user);
            return Ok();
        }
    }
}