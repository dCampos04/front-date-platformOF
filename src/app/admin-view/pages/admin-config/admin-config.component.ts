import { Component } from '@angular/core';
import {RouterLinkActive} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-admin-config',
  standalone: true,
  imports: [
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './admin-config.component.html',
  styleUrl: './admin-config.component.css'
})
export class AdminConfigComponent {

  activeHeader: string = 'empresa';

  setActiveHeader(header: string): void {
    this.activeHeader = header;
  }

}
