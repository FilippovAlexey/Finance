using Finance.Common.Interfaces;
using NLog;

namespace Finance.Common.Loggers
{
    public class LoggingService:ILoggingService
    {
        private static readonly ILogger Logger;

        static LoggingService()
        {
            Logger = LogManager.GetCurrentClassLogger();
        }

        public void Error(string exceptionInfo)
        {
            Logger.Error(exceptionInfo);
        }

        public void Info(string info)
        {
            Logger.Info(info);
        }
    }
}