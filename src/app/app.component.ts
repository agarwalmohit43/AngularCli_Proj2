import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newItem = "";
  items = ['Angular 4', 'React', 'Underscore'];
  pushItem = function () {
    if(this.newItem.trim().length != 0){
      this.items.push(this.newItem);
      this.newItem = '';
    }else{
      alert('Please enter the item name');
    }
  };
  removeItem = function (index) {
      this.items.splice(index, 1);
  };

}
