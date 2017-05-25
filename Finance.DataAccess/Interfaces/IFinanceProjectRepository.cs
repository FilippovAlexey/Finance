using Finance.DataAccess.Entities;
using Finance.DataAccess.RepositoryInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Finance.DataAccess.Interfaces
{
	public interface IFinanceProjectRepository : IRepository<FinanceProject>
	{
		IEnumerable<FinanceProject> GetAllById(int userId);
	}
}
