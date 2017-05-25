using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Finance.Services.ViewModels
{
	public class BillViewModel
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public decimal Balance { get; set; }
		public string Group { get; set; }
	}
}
