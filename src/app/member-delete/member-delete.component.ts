import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Member } from './../member.model';

@Component({
  selector: 'app-member-delete',
  templateUrl: './member-delete.component.html',
  styleUrls: ['./member-delete.component.css']
})
export class MemberDeleteComponent implements OnInit {
  @Input() member: Member;
  @Output() clickSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeMember(member: Member): void {
    this.clickSender.emit(member);
  }

}
