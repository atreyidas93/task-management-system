using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Net;

namespace TaskManagementBackend.Filters
{
    public class ApiFilter: ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            var statusCode = HttpStatusCode.InternalServerError;
            var message = "An unexpected error occurred. Please try again later.";
            if (context.Exception is ArgumentException)
            {
                statusCode = HttpStatusCode.BadRequest;
                message = context.Exception.Message;
            }

            context.Result = new JsonResult(new
            {
                StatusCode = (int)statusCode,
                Message = message,
                Detail = context.Exception.StackTrace
            })
            {
                StatusCode = (int)statusCode
            };

            context.ExceptionHandled = true;
        }
    }
}
