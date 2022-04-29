import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/api-rest/services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup; 
  hide = true;
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private loginService: LoginService, 
    private router: Router,
    private _snackBar: MatSnackBar){ }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      user: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('',[Validators.required, Validators.minLength(4)])
    });
  }

  logIn(): void{
    const user = this.myForm.get('user').value;
    const password = this.myForm.get('password').value;
    this.loading = true;
    this.loginService.getToken(user,password).subscribe(
			(data) => { 
        if (!data.token){
          this.myForm.reset();
          this._snackBar.open('Invalid username or password.','',{
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
        }
        else{
          localStorage.setItem('token',data.token);
          localStorage.setItem('userId',data.user._id);
          this.router.navigateByUrl('/');
        }
      this.loading = false;
      },
      (error) => {
        this.myForm.reset();
          this._snackBar.open('Invalid username or password.','',{
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
        this.loading = false;  
      }
		); 
  }

  getErrorMessage(id: string): string{
    if (this.myForm.get(id).hasError('required')) {
      return "You must enter a value.";
    }
    return this.myForm.get(id).hasError('minLength(4)') ? "Min 4 characters." : '';
  }
}
