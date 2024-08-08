import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {

  public loginForm: FormGroup;
  public showPassword: boolean = false;
  public modalShowDog: boolean = false;
  protected readonly close = close;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (token) => {
          this.authService.saveToken(token);
          this.router.navigate(['/admin-view']);
        },
        error: (error) => {
          console.error(`Login failed: ${error}`);
        }
      })
    } else {
      console.log('Formulario invalido')
    }
  }

  openModalShowDog() {
    this.modalShowDog = true;
  }

  closeModalShowDog() {
    this.modalShowDog = false;
  }
}
