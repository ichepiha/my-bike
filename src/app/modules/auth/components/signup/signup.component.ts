import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AppDestroy } from "../../../../shared/AppDestroy";
import { takeUntil } from "rxjs";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends AppDestroy implements OnInit {

  signupForm: FormGroup | undefined;
  error = '';

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _store: AngularFirestore,
    private _snackBar: MatSnackBar,
    private _afAuth: AngularFireAuth
  ) {
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
    this.signupForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  createUser(): void {
    this._authService.createUser(this.signupForm?.get('email')?.value, this.signupForm?.get('password')?.value)
      .then((response) => {
        this._store.collection('users').doc(response.user.uid).set(
          {
            'uid': response.user.uid,
            'displayName': 'Користувач',
            'city': '',
            'country': '',
            'age': null,
            'experience': '',
            'sex': '',
            'stravaLink': ''
          }
        ).then(() => {
          this._snackBar.open('Користувач успішно створений', 'Добре', {duration: 3000});
          this._router.navigate(['/main']);
        });
      })
      .catch(error => this.error = error);
  }

}
