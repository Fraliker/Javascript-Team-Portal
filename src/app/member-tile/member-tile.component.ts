import { Component, OnInit, Input } from '@angular/core';
import { Member } from './../member.model';
import { CoachMemberSummaryComponent } from './../coach-member-summary/coach-member-summary.component';
import { MemberDeleteComponent } from './../member-delete/member-delete.component';
import { MemberService } from './../member.service';

@Component({
  selector: 'app-member-tile',
  templateUrl: './member-tile.component.html',
  styleUrls: ['./member-tile.component.css']
})
export class MemberTileComponent implements OnInit {
  @Input() member: Member;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  removeMember(member: Member): void {
    this.memberService.removeMember(member);
  }

}
