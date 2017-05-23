using System;
using System.Web.Http.Filters;
using Finance.Common;
using Finance.Common.Interfaces;
using Finance.Common.Loggers;

namespace Finance.Web.Filters
{
    public class CustomExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            ILoggingService logger = new LoggingService();

            var exceptionDetail = new ExceptionDetails()
            {
                ExceptionMessage = context.Exception.Message,
                StackTrace = context.Exception.StackTrace,
                Date = DateTime.Now,
                ControllerName = context.ActionContext.ControllerContext.ControllerDescriptor.ControllerName,
                ActionName = context.ActionContext.ActionDescriptor.ActionName
            };

            logger.Error($"Controller: {exceptionDetail.ControllerName}" +
                         $" | Action name: {exceptionDetail.ActionName}" +
                         $" | {exceptionDetail.ExceptionMessage}" +
                         $" | {exceptionDetail.StackTrace}");
        }
    }
}