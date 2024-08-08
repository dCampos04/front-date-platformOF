import { Component } from '@angular/core';
import {routes} from "../../app.routes";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-admin-sidemenu',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './admin-sidemenu.component.html',
  styleUrl: './admin-sidemenu.component.css'
})
export class AdminSidemenuComponent {


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
