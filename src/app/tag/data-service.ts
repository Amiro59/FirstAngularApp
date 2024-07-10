import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { BadDataError } from 'src/Errors/bad-data-error';
import { NotFoundError } from 'src/Errors/not-found-error';
import { AppError } from 'src/Errors/app-error';


@Injectable()
export class DataService {

  constructor(private http: HttpClient,@Inject(String)private url:string) {
   }

  getAll(){
    return this.http
      .get(this.url)
      .pipe(
    
       map((res:any) =>{return res.map((item:any) => item);} ),
        this.handleError()
      );
  }

  create(resource:any){
    return this.http
    .post(this.url,resource)
    .pipe(
      map((res:any) =>{return res.map((item:any) => throwError);} ),
      this.handleError()
    )
  
  }

  update(resource:any,id:number){
    return this.http
    .put(this.url+id,resource);
  }

  delete(id:string){
    return this.http.delete(this.url+id)
      .pipe(
        this.handleError()
      );
  }

  private handleError(){
    return catchError((error: Response) => {
      if (error.status === 404)
        return throwError(() => new NotFoundError(error));

      if(error.status === 400)
        return throwError(() => new BadDataError(error));

      return throwError(() => new AppError(error));
    })
  }
}


export class Post{
  title:string="";
}