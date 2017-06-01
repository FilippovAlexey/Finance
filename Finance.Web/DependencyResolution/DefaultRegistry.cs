namespace Finance.Web.DependencyResolution
{
    using Interfaces;
    using Finance.Services;
    using Finance.Services.Interfaces;
    using StructureMap;

    public class DefaultRegistry : Registry
    {
        #region Constructors and Destructors

        public DefaultRegistry()
        {
            
            For<IAppUserManager>().Use<AppUserManager>();
            For<IFinanceUserService>().Use<FinanceUserService>();
	        For<IFinanceProjectService>().Use<FiananceProjectService>();
	        For<IBillService>().Use<BillService>();
        }

        #endregion
    }
}