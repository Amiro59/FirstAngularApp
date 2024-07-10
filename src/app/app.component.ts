import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FirstApp';

  dataRecievedFromChild = '';
  showAlert(data: any) {
    this.dataRecievedFromChild = data;
  }
}
