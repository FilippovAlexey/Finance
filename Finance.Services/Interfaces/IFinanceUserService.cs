using Finance.DataAccess.Entities;
using Finance.Services.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Finance.Services.Interfaces
{
    public interface IFinanceUserService
    {
        void AddFinanceUser(FinanceUserViewModel user);
        FinanceUserViewModel Find(string userName);
    }
}
