import { HttpClient, HttpHandler, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { asapScheduler } from 'rxjs';
import { AppError } from 'src/Errors/app-error';
import { BadDataError } from 'src/Errors/bad-data-error';
import { NotFoundError } from 'src/Errors/not-found-error';
import { AppErrorHandler } from './app-error-handler';
import { TagServiceService } from './tag-service.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([]),
  });


  posts: Post[] = [];

  loading:boolean=false;

  constructor(private service: TagServiceService) {
    
  }
  
  ngOnInit(): void {
  
    this.loading=true;
    this.service
      .getPosts()
      .subscribe(
        (response:any) => {
          console.log(response);
          this.posts = response.map((item:any) => new Post(item.title,item.id));
          this.loading=false;
          console.log(this.posts);
        }
        );
  }
  search(searchTect: HTMLInputElement){

    this.posts=this.posts.filter(i => i.title.includes(searchTect.value));
    
  
   //console.log(Array( this.posts).find(item => item.title.includes(topic.value)));
  }
  addTopic(topic: HTMLInputElement) {
    // (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    //this.posts.splice(0,0,{userId: 1, id: 2, title: topic.value, body: ''});
    var query =this.service
      .createPost(topic);
     
    topic.value = '';



    query.subscribe((response:any) => {
       
      console.log(response);
    },
    (error:AppError) =>{
       this.posts.splice(0,1);
       query.subscribe();
    });
    

  }

  removeTopic(topic: AbstractControl) {
    var index = this.topics.indexOf(topic);
    (this.form.get('topics') as FormArray).removeAt(index);
  }

  get topics() {
    return (this.form.get('topics') as FormArray).controls;
  }

  update(post:any) {

    this.service
      .updatePost(post)
      .subscribe(
        (response) =>{
          console.log(response);
        });


    // this.http.put(
    //   'https://jsonplaceholder.typicode.com/posts',
    //   JSON.stringify({ isRead: true })
    // );
  }

  delete(id:string)
  {
    this.service.deletePost(id)
    .subscribe(
      (response)=>{
          console.log(response);
      }
      
      
    );
  }
}

export class Post{
  title:string='';
  id:string=''

  /**
   *
   */
  constructor(title:string,id:string) {
 
    this.title = title;
    this.id = id;
  }
}
