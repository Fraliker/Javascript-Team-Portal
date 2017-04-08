import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Member } from './../member.model';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @Input() member: Member;
  editOpen: boolean = false;
  @Output() clickSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showEdit(): void {
    this.editOpen = true;
  }

  updateMember(memberToUpdate:Member) {
    this.clickSender.emit(memberToUpdate);
    this.editOpen = false;
  }

}
