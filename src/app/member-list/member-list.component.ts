import { Component, OnInit } from '@angular/core';
import { MemberSummaryComponent } from './../member-summary/member-summary.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from './../member.model';
import { MemberService } from './../member.service';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }


}
