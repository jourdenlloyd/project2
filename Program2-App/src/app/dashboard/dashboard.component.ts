import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showEdit = false;
  showAdd = false;

  dogs = [
  {
    name: 'Rowdy', 
    breed: 'German Shepard', 
    size: '75lbs', 
    gender: 'M'
  },
  {
    name: 'Penny', 
    breed: 'Poodle', 
    size: '55lbs', 
    gender: 'F'
  }
];


constructor() { }



toggleShowAdd() {
  this.showAdd = !this.showAdd;
}
toggleShowEdit() {
  this.showEdit = !this.showEdit;
}

}
