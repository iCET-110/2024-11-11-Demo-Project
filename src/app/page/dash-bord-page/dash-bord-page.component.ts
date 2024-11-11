import { Component } from '@angular/core';
import { SideBarComponent } from "../../common/side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dash-bord-page',
  standalone: true,
  imports: [SideBarComponent,RouterOutlet],
  templateUrl: './dash-bord-page.component.html',
  styleUrl: './dash-bord-page.component.css'
})
export class DashBordPageComponent {

}
