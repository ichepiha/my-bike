import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { takeUntil } from "rxjs";
import { AppDestroy } from "../../../../shared/AppDestroy";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AppDestroy implements OnInit {

  loginForm: FormGroup | undefined;
  error = '';

  constructor(private _fb: FormBuilder, private _afAuth: AngularFireAuth, private _router: Router) {
    super();
    this._afAuth.authState
      .pipe(takeUntil(this.destroy$))
      .subscribe(auth => {
        if (auth) this._router.navigate(['/main']);
      });
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login(): void {
    this._afAuth.signInWithEmailAndPassword(this.loginForm?.get('email')?.value, this.loginForm?.get('password')?.value)
      .then(() => this._router.navigate(['/main']))
      .catch(error => this.error = error);
  }

}
