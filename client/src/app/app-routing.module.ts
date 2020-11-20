import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaanavarannouncementComponent } from './common/maanavarannouncement/maanavarannouncement.component';
import { UnivannouncementComponent } from './common/univannouncement/univannouncement.component';
import { EnrolledcoursesComponent } from './course/enrolledcourses/enrolledcourses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { MessagesComponent } from './messages/messages.component';
import { NotesComponent } from './user/notes/notes.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserlogComponent } from './userlog/userlog.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'fromuniversity', component: UnivannouncementComponent},
  {path:'announcements', component: MaanavarannouncementComponent},
  {path:'userreg', component: UserlogComponent},
  {path:'profile', component: ProfileComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'notes', component: NotesComponent},
  {path:'courses', component: EnrolledcoursesComponent},
  {path:'elibrary', component: LibraryComponent},
  {path:'**', component: HomeComponent, pathMatch:'full'},
 
  {path:'', component: HomeComponent},
  {path:'', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
