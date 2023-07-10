import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SeasonCreateComponent } from './season/admin/season-create/season-create.component';
import { loggedInGuard } from './logged-in.guard';
import { UserCreateComponent } from './user/admin/user-create/user-create.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin/home', component: AdminHomeComponent, canActivate: [loggedInGuard]},
  {path: 'admin/create-season', component: SeasonCreateComponent},
  {path: 'admin/create-user', component: UserCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
