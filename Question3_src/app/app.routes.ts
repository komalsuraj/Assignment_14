import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologyComponent } from './technology/technology.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path : "", component : TechnologyComponent},
    { path : "Technologies", component : TechnologyComponent},
    { path : "Books", component : BooksComponent},
    { path : "**", component : ErrorComponent}
];
