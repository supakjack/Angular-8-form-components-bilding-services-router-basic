import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { UserComponent } from "./components/user/user.component";
import { AboutusComponent } from "./components/aboutus/aboutus.component";

const routes: Routes =[
  { path: 'user', component: UserComponent} ,
  {path: 'aboutus', component: AboutusComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
