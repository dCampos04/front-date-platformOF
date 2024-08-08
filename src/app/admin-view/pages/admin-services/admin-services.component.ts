import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-services',
  standalone: true,
  imports: [],
  templateUrl: './admin-services.component.html',
  styleUrl: './admin-services.component.css'
})
export class AdminServicesComponent {

  public modalNewService: boolean = false;
  public modalEditService: boolean = false;
  public modalDeleteService: boolean = false;

  openModalCreateService() {
    this.modalNewService = true;
  }
  closeModalCreateService() {
    this.modalNewService = false;
  }

  openModalEditService() {
    this.modalEditService = true;
  }
  closeModalEditService() {
    this.modalEditService = false;
  }
  openModalDeleteService(){
    this.modalDeleteService = true;
  }
  closeModalDeleteService(){
    this.modalDeleteService = false;
  }




  createService(){
    this.closeModalCreateService()
  }
  editService(){
    this.closeModalEditService();
  }
  deleteService(){
    this.closeModalDeleteService();
  }


  onlyNumbers(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }


}
