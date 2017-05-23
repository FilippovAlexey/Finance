using System;

namespace Finance.Common
{
    public class ExceptionDetails
    {
        public string ExceptionMessage { get; set; }

        public string ControllerName { get; set; }

        public string ActionName { get; set; }

        public string StackTrace { get; set; }

        public DateTime Date { get; set; }
    }
}