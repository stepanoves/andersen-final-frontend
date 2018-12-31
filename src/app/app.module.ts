import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ImComponent } from './im/im.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AddInfoComponent } from './add-info/add-info.component';
import { MainComponent } from './main/main.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './group/group.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path: '', component: AuthComponent, children: [ {
    path: 'im',
    component: ImComponent
  }, {
    path: 'groups',
    component: GroupsComponent
  } ,{
    path: 'groups/group/:id',
    component: GroupComponent,
  }]},
  { path: 'register', component: RegisterComponent },
  { path: 'addinfo', component: AddInfoComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ImComponent,
    RegisterComponent,
    AddInfoComponent,
    MainComponent,
    GroupsComponent,
    GroupComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
