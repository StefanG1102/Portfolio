import { Component } from '@angular/core';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent {
  clickedLogo: string | null = null; // Track the clicked logo

  selectLogo(logo: string) {
    this.clickedLogo = logo; // Set the clicked logo
  }


}
