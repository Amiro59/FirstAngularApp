import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-samples',
  templateUrl: './bootstrap-samples.component.html',
  styleUrls: ['./bootstrap-samples.component.css']
})
export class BootstrapSamplesComponent implements OnInit {

  data='One Of Three Columns';
  constructor() { }

  ngOnInit(): void {
  }

}
