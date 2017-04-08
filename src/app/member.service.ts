import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers(){
    return this.members;
  }

  getMemberById(memberId: string){
    return this.angularFire.database.object('members/' + memberId);
  }

  addMember(newMember: Member): void {
    this.members.push(newMember);
  }

  removeMember(memberToRemove): void {
    let memberEntryInDatabase = this.getMemberById(memberToRemove.$key);
    memberEntryInDatabase.remove();
  }

  updateMember(memberToUpdate): void {

    let memberEntryInDatabase = this.getMemberById(memberToUpdate.$key);
    memberEntryInDatabase.update({
      accomplishments: memberToUpdate.accomplishments,
      emails: memberToUpdate.emails,
      favoritePositions: memberToUpdate.favoritePositions,
      feedback: memberToUpdate.feedback,
      parentsNames: memberToUpdate.parentsNames,
      playerNumber: memberToUpdate.playerNumber,
      phoneNumbers: memberToUpdate.phoneNumbers,
      playerName: memberToUpdate.playerName,
      playerNickname: memberToUpdate.playerNickname,
      playerProfileImgUrl: memberToUpdate.playerProfileImgUrl,
      siblingsNames: memberToUpdate.siblingsNames,
      strongestPositions: memberToUpdate.strongestPositions,
      weakestPositions: memberToUpdate.weakestPositions
    });
  }

}
