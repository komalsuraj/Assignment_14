import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  public Books = [
    "Clean code", "Design Patterns", "C Programming Language", "Code Complete", "Java"
  ]

}
