import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from "../../services/auth.service";
import { SharedModule } from "../../shared/shared.module";
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, SharedModule, AuthRoutingModule],
  exports: [],
  providers: [AuthService],
  declarations: [
    SignupComponent,
    LoginComponent
  ]
})

export class AuthModule {
}
