import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

import { TagServiceService } from '../tag/tag-service.service';
import { TestModalComponent } from '../test-modal/test-modal.component';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {

  /**
   *
   */
  productDetails:ProductDetails={};
  phoneNumnerEntered:boolean=false;
  constructor(private movieService:MovieService,private route:ActivatedRoute,private router:Router,private modalService: NgbModal) {
  
    
  }

  ngOnInit(): void {

    let id = +this.route.snapshot.params['id'];

    this.productService.getProductDetails(id).subscribe(res =>{this.productDetails = res});
    console.log(this.route.snapshot.params['movieTitle']);

    let order = this.route.queryParamMap.subscribe(
      (res)=> {
        console.log(res.get('username'))
      }
    );

    console.log(order);

    this.movieService.getMovies().subscribe();
  }
  btnSubmitClicked: boolean = false;
  btnSubmitClicked1: boolean = false;
  log(data: any) {
    console.log(data);
  }

  log1() {
    this.btnSubmitClicked = true;
  }

  submit(f:any){
    this.modalService.open(LoginComponent,{size:'lg'});
    console.log(f);
    this.router.navigate(['/login']);
  }



  openModal() {
    
  }
}

export class ProductDetails{
  title:string='',
  imageUrl:string='',
  price

}