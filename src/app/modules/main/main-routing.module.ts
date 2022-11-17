import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./page/main/main.component";
import { MyInfoComponent } from "./components/my-info/my-info.component";

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: 'my-info', component: MyInfoComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule {

}
