import { Component, OnInit, Input } from '@angular/core';
import { Member } from './../member.model';
import { CoachMemberSummaryComponent } from './../coach-member-summary/coach-member-summary.component';
import { MemberDeleteComponent } from './../member-delete/member-delete.component';

@Component({
  selector: 'app-member-tile',
  templateUrl: './member-tile.component.html',
  styleUrls: ['./member-tile.component.css']
})
export class MemberTileComponent implements OnInit {
  @Input() member: Member;

  constructor() { }

  ngOnInit() {
  }

}
