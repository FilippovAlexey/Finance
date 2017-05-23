// ReSharper disable MemberCanBePrivate.Global

using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Mvc;
using Finance.Services.ViewModels;
using Finance.Web.Interfaces;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;

namespace Finance.Web.Providers
{
    public class ApplicationOAuthProvider : OAuthAuthorizationServerProvider
    {
        public ApplicationOAuthProvider(string publicClientId)
        {
            if (publicClientId == null)
            {
                throw new ArgumentNullException(nameof(publicClientId));
            }
        }
//TODO: not good!
#pragma warning disable 1998
        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
#pragma warning restore 1998
        {
            var userManager = DependencyResolver.Current.GetService<IAppUserManager>();

            FinanceUserViewModel user = userManager.Find(context.UserName);

            if (user == null)
            {
                context.SetError("The user was not found in Database.");  
                return;
            }

            ClaimsIdentity oAuthIdentity = userManager.GetClaimsIdentity(user, OAuthDefaults.AuthenticationType, context.Password);
            ClaimsIdentity cookiesIdentity = userManager.GetClaimsIdentity(user, CookieAuthenticationDefaults.AuthenticationType);
            AuthenticationProperties properties = CreateProperties(user.UserName);
            AuthenticationTicket ticket = new AuthenticationTicket(oAuthIdentity, properties);
            context.Validated(ticket);
            context.Request.Context.Authentication.SignIn(cookiesIdentity);
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }

        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            if (context.ClientId == null)
            {
                context.Validated();
            }

            return Task.FromResult<object>(null);
        }

        public static AuthenticationProperties CreateProperties(string userName)
        {
            IDictionary<string, string> data = new Dictionary<string, string>
            {
                { "userName", userName }
            };
            return new AuthenticationProperties(data);
        }
    }
}