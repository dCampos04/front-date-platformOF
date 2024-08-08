import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AdminSidemenuComponent} from "../admin-view/admin-sidemenu/admin-sidemenu.component";

@Component({
  selector: 'app-client-view',
  standalone: true,
  imports: [
    RouterOutlet,
    AdminSidemenuComponent
  ],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {


  public modalConfirmation: boolean = false;
  public modalEditCategorie: boolean = false;
  public modalDeleteCategorie: boolean = false;

  openModalConfirmation() {
    this.modalConfirmation = true;
  }
  closeModalConfirmarion() {
    this.modalConfirmation = false;
  }


}
