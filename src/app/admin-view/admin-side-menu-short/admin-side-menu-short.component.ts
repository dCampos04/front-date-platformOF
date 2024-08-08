import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-admin-side-menu-short',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './admin-side-menu-short.component.html',
  styleUrl: './admin-side-menu-short.component.css'
})
export class AdminSideMenuShortComponent {

  public toggleServices : boolean = false;
  public toggleUsers : boolean = false;


  changeToggleServices(){
    this.toggleServices = !this.toggleServices;
  }

  changeToggleUsers(){
    this.toggleUsers = !this.toggleUsers;
  }


  closeAll(){
    this.toggleServices = false;
    this.toggleUsers = false;
  }

  closeToggleServices(){
    this.toggleServices = false;
  }

  closeToggleUsers (){
    this.toggleUsers = false;
  }

}
