import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent {

  public modalNewUser: boolean = false;
  public modalEditUser: boolean = false;
  public modalDeleteUser: boolean = false;


  public showPassword: boolean = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  openModalCreateUser() {
    this.modalNewUser = true;
  }
  closeModalCreateUser() {
    this.modalNewUser = false;
  }

  openModalEditUser() {
    this.modalEditUser = true;
  }
  closeModalEditUser() {
    this.modalEditUser = false;
  }
  openModalDeleteUser(){
    this.modalDeleteUser = true;
  }
  closeModalDeleteUser(){
    this.modalDeleteUser = false;
  }




  createUser(){
    this.closeModalCreateUser()
  }
  editUser(){
    this.closeModalEditUser();
  }
  deleteService(){
    this.closeModalDeleteUser();
  }


  onlyNumbers(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

}
