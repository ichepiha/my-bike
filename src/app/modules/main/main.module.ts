import { NgModule } from "@angular/core";
import { MainComponent } from './page/main/main.component';
import { MainRoutingModule } from "./main-routing.module";
import { HeaderComponent } from '../../core/header/header.component';
import { SharedModule } from "../../shared/shared.module";
import { FooterNavigationComponent } from '../../core/footer-navigation/footer-navigation.component';
import { MyInfoComponent } from './components/my-info/my-info.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterNavigationComponent,
    MyInfoComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [MainRoutingModule, SharedModule, ReactiveFormsModule]
})

export class MainModule {
}
