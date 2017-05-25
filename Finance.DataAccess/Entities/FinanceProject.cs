﻿using Finance.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Finance.DataAccess.Entities
{
    public class FinanceProject : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual IEnumerable<Bill> Bills { get; set; }
	    public IEnumerable<FinanceUser> Members { get; set; }
	    public FinanceUser Owner { get; set; }
    }
}
