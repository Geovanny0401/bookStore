import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {

  private book = {
      title: "Beginning Java EE 7",
    description: "Beginning Java EE 7",
    unitCost: "123",
    isbn: "1234-3456-34564",
    nbOfPages: "234",
    languajes: "English"
    };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  delete()
  {
    this.router.navigate(['/book-list']);
  }
}
