using System;

namespace Finance.Common
{
    public class CalendarFilterParams
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Team { get; set; }
        public string Department { get; set; }
    }
}