import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-admin-places',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './admin-places.component.html',
  styleUrl: './admin-places.component.css'
})
export class AdminPlacesComponent {

  public modalNewPlace: boolean = false;
  public modalEditPlace: boolean = false;
  public modalDeletePlace: boolean = false;


  selectedPartTime: string= 'SI';
  selectedTimeOpenStart: string = 'AM';
  selectedTimeCloseStart: string = 'AM';
  selectedTimeOpenEnd: string = 'AM';
  selectedTimeCloseEnd: string = 'AM';


  selectedEditPartTime: string= 'SI';
  selectedEditTimeOpenStart: string = 'AM';
  selectedEditTimeCloseStart: string = 'AM';
  selectedEditTimeOpenEnd: string = 'AM';
  selectedEditTimeCloseEnd: string = 'AM';



  openModalCreatePlace() {
    this.modalNewPlace = true;
  }
  closeModalCreatePlace() {
    this.modalNewPlace = false;
    this.selectedPartTime= 'SI';
    this.selectedTimeOpenStart = 'AM';
    this.selectedTimeCloseStart = 'AM';
    this.selectedTimeOpenEnd = 'AM';
    this.selectedTimeCloseEnd = 'AM';
  }

  openModalEditPlace() {
    this.modalEditPlace = true;
  }
  closeModalEditPlace() {
    this.modalEditPlace = false;
    this.modalNewPlace = false;
    this.selectedEditPartTime= 'SI';
    this.selectedEditTimeOpenStart = 'AM';
    this.selectedEditTimeCloseStart = 'AM';
    this.selectedEditTimeOpenEnd = 'AM';
    this.selectedEditTimeCloseEnd = 'AM';
  }
  openModalDeletePlace(){
    this.modalDeletePlace = true;
  }
  closeModalDeletePlace(){
    this.modalDeletePlace = false;
  }




  createPlace(){
    this.closeModalCreatePlace();
  }

  editPlace(){
    this.closeModalEditPlace();
  }
  deletePlace(){
    this.closeModalDeletePlace();
  }




  onlyNumbers(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

  startWhit9(event: any) {
    const input = event.target;
    if (!input.value.startsWith('9')) {
      input.value = '9' + input.value.replace(/[^0-9]/g, '');
    } else {
      input.value = '9' + input.value.slice(1).replace(/[^0-9]/g, '');
    }

    if (input.value.length > 9) {
      input.value = input.value.slice(0, 9);
    }
  }



  togglePartTime(optionPartTime: string) {
    this.selectedPartTime = optionPartTime;
  }
  toggleTimeOpenStart(time: string) {
    this.selectedTimeOpenStart = time;
  }
  toggleTimeCloseStart(time: string) {
    this.selectedTimeCloseStart = time;
  }
  toggleTimeOpenEnd(time: string) {
    this.selectedTimeOpenEnd = time;
  }
  toggleTimeCloseEnd(time: string) {
    this.selectedTimeCloseEnd = time;
  }


  toggleEditPartTime(optionPartTime: string) {
    this.selectedEditPartTime = optionPartTime;
  }
  toggleEditTimeOpenStart(time: string) {
    this.selectedEditTimeOpenStart = time;
  }
  toggleEditTimeCloseStart(time: string) {
    this.selectedEditTimeCloseStart = time;
  }
  toggleEditTimeOpenEnd(time: string) {
    this.selectedEditTimeOpenEnd = time;
  }
  toggleEditTimeCloseEnd(time: string) {
    this.selectedEditTimeCloseEnd = time;
  }

}
