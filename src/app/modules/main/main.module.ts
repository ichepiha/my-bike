import { NgModule } from "@angular/core";
import { MainComponent } from './components/main/main.component';
import { MainRoutingModule } from "./main-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from "../../shared/shared.module";
import { FooterNavigationComponent } from './components/footer-navigation/footer-navigation.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterNavigationComponent
  ],
  imports: [MainRoutingModule, SharedModule]
})

export class MainModule {
}
