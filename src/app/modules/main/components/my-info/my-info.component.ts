import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { AppDestroy } from "../../../../shared/AppDestroy";

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent extends AppDestroy {
  userForm: FormGroup | undefined;

  constructor(private _fb: FormBuilder, private _authService: AuthService) {
    super();
  }

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm(): void {
    this.userForm = this._fb.group({
      uid: [''],
      displayName: [''],
      city: [''],
      country: [''],
      age: [],
      experience: [''],
      sex: [''],
      stravaLink: ['']
    });

    this.getUserInfo();
  }

  getUserInfo(): void {
    // @ts-ignore
    this._authService.user$.subscribe(user => this.userForm?.patchValue(user));
  }
}
