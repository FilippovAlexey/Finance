using Finance.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Finance.DataAccess.Entities;
using Finance.DataAccess.Interfaces.RepositoryInterfaces;
using Finance.Services.ViewModels;

namespace Finance.Services
{
    public class FinanceUserService : IFinanceUserService
    {
        private readonly IFinanceUserRepository _repository;
        public FinanceUserService(IFinanceUserRepository repository)
        {
            _repository = repository;
        }
        public void AddFinanceUser(FinanceUserViewModel user)
        {
            FinanceUser newUser = new FinanceUser()
            {
                Id = user.Id,
                Name = user.Name,
                Password = user.Password,
                UserName = user.UserName
            };
            _repository.Add(newUser);
            _repository.Save();
        }

        public FinanceUserViewModel Find(string userName)
        {
            FinanceUser fUser = _repository.FindOne(a=>a.UserName == userName);
            FinanceUserViewModel user = new FinanceUserViewModel()
            {
                Id = (int)fUser?.Id,
                Name = fUser?.Name,
                UserName = fUser?.UserName
            };
            return user;
        }
    }
}
