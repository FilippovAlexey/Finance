using Finance.Services.ViewModels;
using System.Security.Claims;
using JetBrains.Annotations;

namespace Finance.Web.Interfaces
{
    public interface IAppUserManager
    {
        FinanceUserViewModel Find(string userName);
        ClaimsIdentity GetClaimsIdentity(FinanceUserViewModel user, string authenticationType, string password = null);
		[UsedImplicitly]
        void Dispose();
    }
}