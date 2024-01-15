import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {
  public technologies = [
    "Angular", "Node JS", "Big Data", "Android", "AI"
  ]
}
