import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Component imports
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberTileComponent } from './member-tile/member-tile.component';
import { MemberSummaryComponent } from './member-summary/member-summary.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AboutComponent } from './about/about.component';
import { CreateLineupComponent } from './create-lineup/create-lineup.component';
import { CoachMemberSummaryComponent } from './coach-member-summary/coach-member-summary.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { MemberDeleteComponent } from './member-delete/member-delete.component';
import { CoachMemberDetailComponent } from './coach-member-detail/coach-member-detail.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { BattingOrderComponent } from './batting-order/batting-order.component';
import { FieldingAssignmentsComponent } from './fielding-assignments/fielding-assignments.component';
import { CoachesHomeComponent } from './coaches-home/coaches-home.component';
import { GameprepComponent } from './gameprep/gameprep.component';
import { CoachesMembersListComponent } from './coaches-members-list/coaches-members-list.component';

// service imports
import { MemberService } from './member.service';

// routes import
import { routes } from './app.routes';

// firebase imports
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MemberListComponent,
    MemberTileComponent,
    MemberSummaryComponent,
    MemberDetailComponent,
    AboutComponent,
    CreateLineupComponent,
    CoachMemberSummaryComponent,
    AddMemberComponent,
    MemberDeleteComponent,
    CoachMemberDetailComponent,
    MemberEditComponent,
    BattingOrderComponent,
    FieldingAssignmentsComponent,
    CoachesHomeComponent,
    GameprepComponent,
    CoachesMembersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ MemberService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
