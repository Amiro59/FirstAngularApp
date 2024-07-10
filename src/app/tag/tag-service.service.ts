import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { BadDataError } from 'src/Errors/bad-data-error';
import { NotFoundError } from 'src/Errors/not-found-error';
import { AppError } from 'src/Errors/app-error';
import { DataService } from './data-service';


@Injectable()
export class TagServiceService extends DataService{

  constructor(http: HttpClient) { 
    super(http,'https://jsonplaceholder.typicode.com/posts/');
  }

  getPosts(){
    return this.getAll();
  }

  createPost(topic: HTMLInputElement){
    return this.create({title:topic.value});
  }

  updatePost(post:any){
    return this.update(post,post['id']);
  }

  deletePost(id:string){
    return this.delete(id);
  }
}
