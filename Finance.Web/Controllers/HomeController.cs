using System.Web.Mvc;

namespace Finance.Web.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			ViewBag.Title = "Finance";
			return View();
		}


		public FileResult Downloadex()
		{
			byte[] fileBytes = System.IO.File.ReadAllBytes(@"C:\Users\afilipov\Source\Repos\FinanceApp\Report.xlsx");
			string fileName = "Report.xlsx";
			return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
		}

		public FileResult Downloadpdf()
		{
			byte[] fileBytes = System.IO.File.ReadAllBytes(@"C:\Users\afilipov\Source\Repos\FinanceApp\Report.xlsx");
			string fileName = "Report.xlsx";
			return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
		}
	}
}