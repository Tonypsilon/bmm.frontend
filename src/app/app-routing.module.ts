import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SeasonCreateComponent } from './season/admin/season-create/season-create.component';
import { loggedInGuard } from './logged-in.guard';
import { UserCreateComponent } from './user/admin/user-create/user-create.component';
import {ChangePasswordComponent} from "./user/admin/change-password/change-password.component";
import {SeasonAdminCreateComponent} from "./user/admin/season-admin-create/season-admin-create.component";
import {ClubCreateComponent} from "./club/admin/club-create/club-create.component";
import {ClubAdminCreateComponent} from "./user/admin/club-admin-create/club-admin-create.component";
import {CreateOrganizationComponent} from "./user/clubadmin/create-organization/create-organization.component";
import {VenueManagementFormComponent} from "./clubadmin/venue-management-form/venue-management-form.component";
import {EditTeamsComponent} from "./organization/edit-teams/edit-teams.component";
import {EditTeamDivisionLinksComponent} from "./edit-team-division-links/edit-team-division-links.component";
import {CreateTeamAdminComponent} from "./create-team-admin/create-team-admin.component";
import {EditResultsComponent} from "./edit-results/edit-results.component";
import {SeasonComponent} from "./season/season.component";
import {DivisionComponent} from "./division/division.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin/home', component: AdminHomeComponent, canActivate: [loggedInGuard]},
  {path: 'admin/create-season', component: SeasonCreateComponent},
  {path: 'admin/create-user', component: UserCreateComponent},
  {path: 'admin/change-password', component: ChangePasswordComponent},
  {path: 'admin/create-season-admin', component: SeasonAdminCreateComponent},
  {path: 'admin/create-club', component: ClubCreateComponent},
  {path: 'admin/create-club-admin', component: ClubAdminCreateComponent},
  {path: 'admin/create-organization', component: CreateOrganizationComponent},
  {path: 'admin/clubs/:clubId/venues', component: VenueManagementFormComponent},
  {path: 'admin/organizations/:organizationId/teams', component: EditTeamsComponent},
  {path: 'admin/seasons/:seasonId/teamdivisionlinks', component: EditTeamDivisionLinksComponent},
  {path: 'admin/organizations/:organizationId/teamadmins', component: CreateTeamAdminComponent},
  {path: 'admin/matches/:matchId/games', component: EditResultsComponent},
  {path: 'seasons/:seasonName/divisions/:divisionId', component: DivisionComponent},
  {path: 'seasons/:seasonName', component: SeasonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
