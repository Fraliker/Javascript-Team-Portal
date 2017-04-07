import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Member } from './../member.model';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  @Output() clickSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addMember(playerName: string){
    let newMember = new Member(playerName, [""], [""], 99, [""], [""], "", [""], [""], [""], [""], [""], "");
    this.clickSender.emit(newMember);
  }

}
