using Finance.DataAccess.Entities;
using Finance.DataAccess.Interfaces;
using Finance.Services.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Finance.Services
{
    public class FiananceProjectService
    {
        private readonly IFinanceProjectRepository _fProjRepo;
        public FiananceProjectService(IFinanceProjectRepository fProjRepo)
        {
            _fProjRepo = fProjRepo;
        }

        public void Create(FianceProjectViewModel projVM)
        {
            _fProjRepo.Add(new FinanceProject { Id = projVM.Id, Name = projVM.Name});
            _fProjRepo.Save();
        }

        public IEnumerable<FianceProjectViewModel> GetAll()
        {
            var prgs = _fProjRepo.GetAll();
            List<FianceProjectViewModel> result = new List<FianceProjectViewModel>();
            foreach(var a in prgs)
            {
                result.Add(new FianceProjectViewModel { Id = a.Id, Bills = a.Bills.Select(b=>b.Name).ToList(), Name = a.Name });
            }
            return result;
        }
    }
}
