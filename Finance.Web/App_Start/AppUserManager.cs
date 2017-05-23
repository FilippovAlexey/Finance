using System;
using Finance.Services.ViewModels;
using Finance.Web.Interfaces;
using System.Security.Claims;
using JetBrains.Annotations;
using Finance.Common;
using Finance.Services.Interfaces;

namespace Finance.Web
{
    public class AppUserManager : IDisposable, IAppUserManager
    {
        private readonly IFinanceUserService _userService;

        [UsedImplicitly]
        public AppUserManager(IFinanceUserService userService)
        {
            _userService = userService;
        }

        public AppUserManager()
        { }

        public static AppUserManager Create()
        {
            return new AppUserManager();
        }

        public FinanceUserViewModel Find(string userName)
        {
            FinanceUserViewModel user = _userService.Find(userName);
            return user;                                                   
        }

        public ClaimsIdentity GetClaimsIdentity(FinanceUserViewModel user, string authenticationType, string password = null)
        {
            ClaimsIdentity identity = new ClaimsIdentity(authenticationType);
            identity.AddClaim(new Claim(ClaimType.UserIdClaimType.ToString(), user.Id.ToString()));
            identity.AddClaim(new Claim(ClaimType.UserName.ToString(), user.UserName));

            if (password != null)
            {
                identity.AddClaim(new Claim(ClaimType.Password.ToString(), password.Encrypt()));
            }

            return identity;
        }

        public void Dispose() { }
    }
}
