import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: []
})
export class BookFormComponent implements OnInit {

  private book = {
    title: "Beginning Java EE 7",
    description: "Beginning Java EE 7",
    unitCost: "123",
    nbOfPages: "234",
    imageURL: "http://ecx.images-amazon.com/images/I/51amFVZbyKL._SL160_.jpg",
    languajes: "0"
  };
  constructor() { }

  ngOnInit() {
  }

}
