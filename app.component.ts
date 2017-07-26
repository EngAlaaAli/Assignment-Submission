import { AuthorService } from './author.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  authors:string[];
  constructor(service:AuthorService)
  {

    this.authors=service.getAuthors();
  }
}
