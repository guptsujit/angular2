import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['.help-block { color: red; }'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  errorMessage: string = "";
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  processLoginForm(formData): void {
    this.loading = true;
    if (formData.valid) {
      this._authService.login(formData.value)
        .subscribe(data => {
          if (!data.error) {
            localStorage.setItem('currentUser', JSON.stringify(data));
            this._router.navigate(['/userlist']);

          } else {
            this.errorMessage = "Invalid email or password";
          }
        },
        (error) => {
          this.loading = false;
          this.errorMessage = "Something went wrong.Please try again later.";

        });
    }
  }
 
}
