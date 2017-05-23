using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Finance.Services.ViewModels
{
    public class FianceProjectViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<string> Bills { get; set; }
    }
}
