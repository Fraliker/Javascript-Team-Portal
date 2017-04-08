import { Component, OnInit } from '@angular/core';
import { MemberTileComponent } from './../member-tile/member-tile.component';
import { CreateLineupComponent } from './../create-lineup/create-lineup.component';
import { AddMemberComponent } from './../add-member/add-member.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from './../member.model';
import { MemberService } from './../member.service';

@Component({
  selector: 'app-coaches-home',
  templateUrl: './coaches-home.component.html',
  styleUrls: ['./coaches-home.component.css']
})
export class CoachesHomeComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  sortMembers;
  position: string = "none";
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
    this.sortMembers = this.memberService.getMembers().subscribe(res => { this.sortMembers = res;
    });
  }

  addMember(newMember: Member){
    this.memberService.addMember(newMember);
  }

  setPosition(positionValue: string){
    this.position = positionValue;
  }

}
