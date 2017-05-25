using Finance.DataAccess.Entities;
using Finance.DataAccess.Interfaces;
using Finance.Services.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Profile;
using AutoMapper;
using Finance.DataAccess.Interfaces.RepositoryInterfaces;
using Finance.Services.Interfaces;
using MedeStFinance.DataAccess.Interfaces;

namespace Finance.Services
{
    public class FiananceProjectService:IFinanceProjectService
    {
        private readonly IFinanceProjectRepository _fProjRepo;
	    private readonly IFinanceUserRepository _fUserRepo;
	    private readonly IBillRepository _billRepository;
        public FiananceProjectService(IFinanceProjectRepository fProjRepo, IFinanceUserRepository fUserRepo, IBillRepository billRepository)
        {
            _fProjRepo = fProjRepo;
	        _fUserRepo = fUserRepo;
	        _billRepository = billRepository;
	        Mapper.Initialize(cfg => cfg.CreateMap<FinanceProject, FianceProjectViewModel>());
		}

        public int Create(FianceProjectViewModel projVM)
        {
	        var bills = new List<Bill>();

			bills.Add(new Bill
			{
				Balance = 0,
				Group = null,
				Name = "Main"
			});
	        var owner = _fUserRepo.FindOne(a => a.Id == projVM.OwnerId);
	        var members = new List<FinanceUser>();
			members.Add(owner);
			_fProjRepo.Add(new FinanceProject { Id = projVM.Id, Name = projVM.Name, Owner = owner, Bills = bills, Members = members});
            _fProjRepo.Save();
	        var tempProj = _fProjRepo.FindOne(p => p.Name == projVM.Name);
	        return tempProj.Id;
        }

        public IEnumerable<FianceProjectViewModel> GetAllById(int userId)
        {
            var prgs = _fProjRepo.GetAllById(userId);
            List<FianceProjectViewModel> result = new List<FianceProjectViewModel>();
            foreach(var a in prgs)
            {
                result.Add(new FianceProjectViewModel { Id = a.Id, Name = a.Name});
            }
            return result;
        }

	    public FianceProjectViewModel GetById(int id)
	    {
		    var result = _fProjRepo.Get(id);
		    var resultVm = Mapper.Map<FianceProjectViewModel>(result);
		    return resultVm;
	    }
    }
}
