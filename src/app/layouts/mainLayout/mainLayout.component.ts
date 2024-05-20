import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './mainlayout.component.html',
})

export class MainlayoutComponent {

}
