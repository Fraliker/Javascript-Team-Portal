import { Component, OnInit, Input } from '@angular/core';
import { Member } from './../member.model';
import { MemberService } from './../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coach-member-summary',
  templateUrl: './coach-member-summary.component.html',
  styleUrls: ['./coach-member-summary.component.css']
})
export class CoachMemberSummaryComponent implements OnInit {
  @Input() member: Member;
  constructor() { }

  ngOnInit() {
  }

}
