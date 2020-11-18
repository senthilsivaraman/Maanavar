import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlogComponent } from './userlog/userlog.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { LibraryComponent } from './library/library.component';
import { CalenderComponent } from './calender/calender.component';
import { TranscriptsComponent } from './common/transcripts/transcripts.component';
import { UnivannouncementComponent } from './common/univannouncement/univannouncement.component';
import { MaanavarannouncementComponent } from './common/maanavarannouncement/maanavarannouncement.component';
import { DownloadablecontentComponent } from './course/downloadablecontent/downloadablecontent.component';
import { AssignmentsComponent } from './course/assignments/assignments.component';
import { LiveclassComponent } from './course/liveclass/liveclass.component';
import { GradesComponent } from './course/grades/grades.component';
import { CourseannouncementComponent } from './course/courseannouncement/courseannouncement.component';
import { CourseschduleComponent } from './course/courseschdule/courseschdule.component';
import { EnrolledcoursesComponent } from './course/enrolledcourses/enrolledcourses.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NotesComponent } from './user/notes/notes.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    UserlogComponent,
    HomeComponent,
    MessagesComponent,
    LibraryComponent,
    CalenderComponent,
    TranscriptsComponent,
    UnivannouncementComponent,
    MaanavarannouncementComponent,
    DownloadablecontentComponent,
    AssignmentsComponent,
    LiveclassComponent,
    GradesComponent,
    CourseannouncementComponent,
    CourseschduleComponent,
    EnrolledcoursesComponent,
    ProfileComponent,
    NotesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
