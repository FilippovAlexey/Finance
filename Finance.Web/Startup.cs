using JetBrains.Annotations;
using Finance.Web;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Startup))]

namespace Finance.Web
{
    public partial class Startup
    {
        [UsedImplicitly]
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}