import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Estructura Proyecto';
  private readmeUrl = 'assets/README.md';

  constructor(private http: HttpClient) { }

  getReadmeContent(): Observable<string> {
    return this.http.get(this.readmeUrl, { responseType: 'text' });
  }
}
