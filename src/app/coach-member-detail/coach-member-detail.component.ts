import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from './../member.service';


@Component({
  selector: 'app-coach-member-detail',
  templateUrl: './coach-member-detail.component.html',
  styleUrls: ['./coach-member-detail.component.css']
})

export class CoachMemberDetailComponent implements OnInit {

  memberId;
  memberToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = parseInt(urlParameters['id']);
    });
    this.memberToDisplay = this.memberService.getMemberById(this.memberId);
  }

  updateMember(memberToUpdate:Member) {
    this.memberService.updateMember(memberToUpdate);
  }

}
