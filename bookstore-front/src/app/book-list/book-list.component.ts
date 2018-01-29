import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  private nbBooks: number = 2;
  private books = [
    {
      id: "1",
      title: "Beginning Java EE 7",
      description: "Beginning Java EE 7",
      imageURL: "http://ecx.images-amazon.com/images/I/51amFVZbyKL._SL160_.jpg",
    },
    {
      id: "2",
      title: "Beginning Java EE 6",
      description: "Beginning Java EE platform with GlassFish 3",
      imageURL: "http://ecx.images-amazon.com/images/I/51baRLwlufL._SL160_.jpg",
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
