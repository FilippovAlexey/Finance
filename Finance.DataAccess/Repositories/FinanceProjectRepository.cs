using Finance.DataAccess.Entities;
using Finance.DataAccess.Interfaces;
using Finance.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JetBrains.Annotations;

namespace Finance.DataAccess.Repositories
{
    public class FinanceProjectRepository: Repository<FinanceProject>, IFinanceProjectRepository
    {
        public FinanceProjectRepository(IContext db) : base(db)
        {
		
        }

	    public IEnumerable<FinanceProject> GetAllById(int userId)
	    {
		    var result = _db.Set<FinanceProject>().Where(f => f.Owner.Id == userId).ToList();
		    return result;
	    }


    }
}
