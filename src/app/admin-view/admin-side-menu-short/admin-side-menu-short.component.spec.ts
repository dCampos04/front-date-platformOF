import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideMenuShortComponent } from './admin-side-menu-short.component';

describe('AdminSideMenuShortComponent', () => {
  let component: AdminSideMenuShortComponent;
  let fixture: ComponentFixture<AdminSideMenuShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSideMenuShortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSideMenuShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
