using Finance.DataAccess.Interfaces.RepositoryInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Finance.DataAccess.Entities;
using System.Linq.Expressions;
using Finance.DataAccess.Interfaces;
using Finance.DataAccess.Repositories;

namespace Finance.DataAccess.Repositories
{
    public class FinanceUserRepository :Repository<FinanceUser>, IFinanceUserRepository
    {
        public FinanceUserRepository(IContext db):base(db)
        {
        }
        
    }
}
