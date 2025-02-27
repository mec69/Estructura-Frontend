import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-paginasecundaria',
  standalone: true,
  imports: [FooterComponent, RouterModule, HeaderComponent],
  templateUrl: './paginasecundaria.component.html',
  styleUrl: './paginasecundaria.component.css'
})
export class PaginasecundariaComponent {

}
