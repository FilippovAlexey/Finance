using JetBrains.Annotations;
using Finance.DataAccess;
using Finance.DataAccess.Interfaces;
using Finance.DataAccess.Interfaces.RepositoryInterfaces;
using Finance.DataAccess.Repositories;
using StructureMap;
using Finance.DataAccess.Interfaces.RepositoryInterfaces;
using Finance.DataAccess.Repositories;
using MedeStFinance.DataAccess.Interfaces;

namespace Finance.Services
{
    [UsedImplicitly]
    public class ServicesRegistry : Registry
    {
        public ServicesRegistry()
        {
            For<Finance.DataAccess.Interfaces.IContext>().Use<Finance.DataAccess.Context>();
            For<IFinanceUserRepository>().Use<FinanceUserRepository>();
	        For<IFinanceProjectRepository>().Use<FinanceProjectRepository>();
	        For<IBillRepository>().Use<BillRepository>();
        }
    }
}