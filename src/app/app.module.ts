import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule} from "@angular/material/snack-bar";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SecurityCookiesInterceptor } from './auth/security-cookies.interceptor';
import { XhrInterceptor } from './auth/xhr.interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SeasonFormComponent } from './season/admin/season-form/season-form.component';
import { SeasonCreateComponent } from './season/admin/season-create/season-create.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './admin/user/user.component';
import { SeasonAdminComponent } from './admin/season-admin/season-admin.component';
import { ClubAdminComponent } from './admin/club-admin/club-admin.component';
import { TeamAdminComponent } from './admin/team-admin/team-admin.component';
import { OrganizationAdminComponent } from './admin/organization-admin/organization-admin.component';
import { UserCreateComponent } from './user/admin/user-create/user-create.component';
import { UserFormComponent } from './user/admin/user-form/user-form.component';
import { ChangePasswordComponent } from './user/admin/change-password/change-password.component';
import { ChangePasswordFormComponent } from './user/admin/change-password-form/change-password-form.component';
import { SeasonAdminCreateComponent } from './user/admin/season-admin-create/season-admin-create.component';
import { XAdminFormComponent } from './user/admin/x-admin-form/x-admin-form.component';
import { SuccessMessageComponent } from './messages/success-message/success-message.component';
import { ClubCreateComponent } from './club/admin/club-create/club-create.component';
import { ClubFormComponent } from './club/admin/club-form/club-form.component';
import { ClubAdminCreateComponent } from './user/admin/club-admin-create/club-admin-create.component';
import { CreateOrganizationComponent } from './user/clubadmin/create-organization/create-organization.component';
import { MultipleClubsFormComponent } from './clubadmin/create-organization/multiple-clubs-form/multiple-clubs-form.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDividerModule} from "@angular/material/divider";
import { SelectMultipleClubsComponent } from './user/clubadmin/create-organization/select-multiple-clubs/select-multiple-clubs.component';
import {MatDialogModule} from "@angular/material/dialog";
import { VenueManagementComponent } from './clubadmin/venue-management/venue-management.component';
import { VenueManagementFormComponent } from './clubadmin/venue-management-form/venue-management-form.component';
import { VenueComponent } from './clubadmin/venue/venue.component';
import { EditTeamsComponent } from './organization/edit-teams/edit-teams.component';
import { OrganizationManagementComponent } from './organization/organization-management/organization-management.component';
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import { EditTeamsDialogComponent } from './organization/edit-teams-dialog/edit-teams-dialog.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { SeasonStageComponent } from './season-stage/season-stage.component';
import { PlayingDateComponent } from './playing-date/playing-date.component';
import { DivisionCreateComponent } from './division-create/division-create.component';
import { TeamDivisionLinkComponent } from './team-division-link/team-division-link.component';
import { EditTeamDivisionLinksComponent } from './edit-team-division-links/edit-team-division-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    HomeComponent,
    SeasonFormComponent,
    SeasonCreateComponent,
    AdminHomeComponent,
    AdminComponent,
    UserComponent,
    SeasonAdminComponent,
    ClubAdminComponent,
    TeamAdminComponent,
    OrganizationAdminComponent,
    UserCreateComponent,
    UserFormComponent,
    ChangePasswordComponent,
    ChangePasswordFormComponent,
    SeasonAdminCreateComponent,
    XAdminFormComponent,
    SuccessMessageComponent,
    ClubCreateComponent,
    ClubFormComponent,
    ClubAdminCreateComponent,
    CreateOrganizationComponent,
    MultipleClubsFormComponent,
    SelectMultipleClubsComponent,
    VenueManagementComponent,
    VenueManagementFormComponent,
    VenueComponent,
    EditTeamsComponent,
    OrganizationManagementComponent,
    EditTeamsDialogComponent,
    SeasonStageComponent,
    PlayingDateComponent,
    DivisionCreateComponent,
    TeamDivisionLinkComponent,
    EditTeamDivisionLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDividerModule,
    FormsModule,
    CdkDropListGroup,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkDropList,
    CdkDrag,
    MatTooltipModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityCookiesInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
