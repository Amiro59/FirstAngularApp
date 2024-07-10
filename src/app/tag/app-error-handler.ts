import { ErrorHandler } from "@angular/core";
import { AppError } from "src/Errors/app-error";
import { BadDataError } from "src/Errors/bad-data-error";
import { NotFoundError } from "src/Errors/not-found-error";

export class AppErrorHandler implements ErrorHandler{
    handleError(error: AppError): void {
        if(error instanceof NotFoundError)
        {
          alert("کاربر گرامی صفحه مورد نظر یافت نشد.")
        }
        
       else if(error instanceof BadDataError)
       {
        alert("کاربر گرامی درخواست شما انجام نشد پس از 5 دقیقه دوباره تلاش کنید")
       }
        
        alert("خطایی رخ داده لطفا بعد از چند دقیقه مجدد تلاش کنید");
           
        
    }

}