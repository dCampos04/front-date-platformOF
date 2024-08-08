import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-categories',
  standalone: true,
  imports: [],
  templateUrl: './admin-categories.component.html',
  styleUrl: './admin-categories.component.css'
})
export class AdminCategoriesComponent {

  public modalNewCategorie: boolean = false;
  public modalEditCategorie: boolean = false;
  public modalDeleteCategorie: boolean = false;

  openModalCreateCategorie() {
    this.modalNewCategorie = true;
  }
  closeModalCreateCategorie() {
    this.modalNewCategorie = false;
  }

  openModalEditCategorie() {
    this.modalEditCategorie = true;
  }
  closeModalEditCategorie() {
    this.modalEditCategorie = false;
  }
  openModalDeleteCategorie(){
    this.modalDeleteCategorie = true;
  }
  closeModalDeleteCategorie(){
    this.modalDeleteCategorie = false;
  }




  createCategorie(){
    this.closeModalCreateCategorie()
  }
  editCategorie(){
    this.closeModalEditCategorie();
  }
  deleteCategorie(){
    this.closeModalDeleteCategorie();
  }

}
