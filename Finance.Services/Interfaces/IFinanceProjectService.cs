using System.Collections.Generic;
using Finance.Services.ViewModels;

namespace Finance.Services.Interfaces
{
    public interface IFinanceProjectService
    {
	    int Create(FianceProjectViewModel projVm);
	    IEnumerable<FianceProjectViewModel> GetAllById(int userId);
	    FianceProjectViewModel GetById(int id);

	}
}
