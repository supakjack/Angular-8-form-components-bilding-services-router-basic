import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from "@angular/forms";
import { TodoService } from "./services/todo.service";
import { HttpClientModule } from "@angular/common/http";
// import { RouterModule , Routes} from "@angular/router";

// const appRoutes:Routes = {
//   {path:"", component:UserComponent},
//   {path:"about", component:AboutusComponent}
// }

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
