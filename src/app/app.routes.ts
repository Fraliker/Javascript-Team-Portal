import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components for the routes
import { WelcomeComponent } from './welcome/welcome.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { GameprepComponent } from './gameprep/gameprep.component';
import { CoachesHomeComponent } from './coaches-home/coaches-home.component';
import { CoachMemberDetailComponent } from './coach-member-detail/coach-member-detail.component';
import { AboutComponent } from './about/about.component';

// route definitions
export const router: Routes = [
{ path: '', component: WelcomeComponent},
{ path: 'members', component: MemberListComponent},
{ path: 'members/:id', component: MemberDetailComponent},
{ path: 'coaches/gameprep', component: GameprepComponent},
{ path: 'coaches/members', component: CoachesHomeComponent},
{ path: 'coaches/members/:id', component: CoachMemberDetailComponent},
{ path: 'about', component: AboutComponent}

];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
