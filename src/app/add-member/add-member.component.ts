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

  addMember(playerName: string, parentNames: string[], siblingNames: string[], playerNumber: number, phoneNumbers: string[], emails: string[], nickname: string, favoritePositions: string[], strongestPositions: string[], weakestPositions: string[], feedback: string[], accomplishments: string[], imgUrl: string){
    let newMember = new Member(playerName, parentNames, siblingNames, playerNumber, phoneNumbers, emails, nickname, favoritePositions, strongestPositions, weakestPositions, feedback, accomplishments, imgUrl);
    this.clickSender.emit(newMember);
  }

}
