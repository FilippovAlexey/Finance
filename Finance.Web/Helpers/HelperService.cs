using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using Finance.Common;

namespace Finance.Web.Helpers
{
    public static class HelperService
    {
        public static int GetUserId(IPrincipal user)
        {
            int id = -1;
            var identityClaim = GetClaim(0, user);

            if (identityClaim != null)
            {
                id = int.Parse(identityClaim.Value);
            }
            return id;
        }

        public static string GetUserName(IPrincipal user)
        {
            var identityClaim = GetClaim(ClaimType.UserName, user);
            var userName = string.Empty;

            if (identityClaim != null)
            {
                userName = identityClaim.Value;
            }
            return userName;
        }

        private static Claim GetClaim(ClaimType claimType, IPrincipal user)
        {
            var identity = (ClaimsIdentity)user.Identity;
            IEnumerable<Claim> claims = identity.Claims;
            var identityClaim = claims.FirstOrDefault(n => n.Type == claimType.ToString());
            return identityClaim;
        }
    }
}