import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

interface Permisos {
  [key: string]: {
    selected: boolean;
    children?: {
      [key: string]: boolean;
    };
  };
}

@Component({
  selector: 'app-admin-roles',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './admin-roles.component.html',
  styleUrl: './admin-roles.component.css'
})
export class AdminRolesComponent {
  public modalNewRole: boolean = false;
  public modalEditRole: boolean = false;
  public modalDeleteRole: boolean = false;

  optionsServices: boolean = true;
  optionsUsers: boolean = true;

  // Definición de permisos para crear y editar roles
  permisosCrear: Permisos = {
    servicios: {
      selected: false,
      children: {
        categorias: false,
        servicios: false,
      },
    },
    usuarios: {
      selected: false,
      children: {
        locales: false,
        roles: false,
        usuarios: false,
      },
    },
    agenda: {
      selected: false,
      children: {},
    },
  };

  permisosEditar: Permisos = {
    servicios: {
      selected: false,
      children: {
        categorias: true,
        servicios: false,
      },
    },
    usuarios: {
      selected: false,
      children: {
        locales: false,
        roles: true,
        usuarios: false,
      },
    },
    agenda: {
      selected: true,
      children: {},
    },
  };

  openModalCreateRole() {
    this.modalNewRole = true;
  }

  closeModalCreateRole() {
    this.modalNewRole = false;
    this.optionsServices = true;
    this.optionsUsers = true;
    this.resetPermisos(this.permisosCrear);
  }

  openModalEditRole() {
    this.modalEditRole = true;
  }

  closeModalEditRole() {
    this.modalEditRole = false;
  }

  openModalDeleteRole() {
    this.modalDeleteRole = true;
  }

  closeModalDeleteRole() {
    this.modalDeleteRole = false;
  }

  createRole() {
    this.closeModalCreateRole();
  }

  editRole() {
    this.closeModalEditRole();
  }

  deleteRole() {
    this.closeModalDeleteRole();
  }

  toggleUsers() {
    this.optionsUsers = !this.optionsUsers;
  }

  toggleServices() {
    this.optionsServices = !this.optionsServices;
  }


  resetPermisos(permisos: Permisos) {
    Object.keys(permisos).forEach((parentKey) => {
      permisos[parentKey].selected = false;

      if (permisos[parentKey].children) {
        Object.keys(permisos[parentKey].children!).forEach((childKey) => {
          permisos[parentKey].children![childKey] = false;
        });
      }
    });
  }

  toggleParentCrear(parent: string) {
    const parentPermiso = this.permisosCrear[parent];
    parentPermiso.selected = !parentPermiso.selected;

    if (parentPermiso.children) {
      Object.keys(parentPermiso.children).forEach((key) => {
        parentPermiso.children![key] = parentPermiso.selected;
      });
    }
  }

  toggleChildCrear(parent: string, child: string) {
    this.permisosCrear[parent].children![child] = !this.permisosCrear[parent].children![child];
    const parentPermiso = this.permisosCrear[parent];
    parentPermiso.selected = Object.values(parentPermiso.children!).every((value) => value);
  }

  toggleParentEditar(parent: string) {
    const parentPermiso = this.permisosEditar[parent];
    parentPermiso.selected = !parentPermiso.selected;

    if (parentPermiso.children) {
      Object.keys(parentPermiso.children).forEach((key) => {
        parentPermiso.children![key] = parentPermiso.selected;
      });
    }
  }

  toggleChildEditar(parent: string, child: string) {
    this.permisosEditar[parent].children![child] = !this.permisosEditar[parent].children![child];
    const parentPermiso = this.permisosEditar[parent];
    parentPermiso.selected = Object.values(parentPermiso.children!).every((value) => value);
  }

  allChildrenSelectedCrear(parent: string): boolean {
    const children = this.permisosCrear[parent].children || {};
    return Object.values(children).every((selected) => selected);
  }

  allChildrenSelectedEditar(parent: string): boolean {
    const children = this.permisosEditar[parent].children || {};
    return Object.values(children).every((selected) => selected);
  }

  isChildSelectedCrear(parent: string, child: string): boolean {
    return this.permisosCrear[parent].children ? this.permisosCrear[parent].children![child] : false;
  }

  isChildSelectedEditar(parent: string, child: string): boolean {
    return this.permisosEditar[parent].children ? this.permisosEditar[parent].children![child] : false;
  }

}
