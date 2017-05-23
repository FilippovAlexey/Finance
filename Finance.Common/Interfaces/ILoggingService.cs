namespace Finance.Common.Interfaces
{
    public interface ILoggingService
    {
        void Error(string exception);

        void Info(string info);
    }
}
