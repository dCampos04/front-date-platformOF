  import { Component } from '@angular/core';
  import {NgClass, NgIf} from "@angular/common";



  @Component({
    selector: 'app-admin-calendar',
    standalone: true,
    imports: [
      NgClass,
      NgIf
    ],
    templateUrl: './admin-calendar.component.html',
    styleUrl: './admin-calendar.component.css'
  })
  export class AdminCalendarComponent {

  }
