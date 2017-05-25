using Finance.DataAccess.Entities;
using Finance.DataAccess.Interfaces;
using MedeStFinance.DataAccess.Interfaces;

namespace Finance.DataAccess.Repositories
{
	public class BillRepository:Repository<Bill>, IBillRepository
	{
		public BillRepository(IContext db) : base(db)
		{

		}
	}
}
