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
    }
}