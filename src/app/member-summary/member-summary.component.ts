import { Component, OnInit, Input} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from './../member.model';
import { MemberService } from './../member.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-member-summary',
  templateUrl: './member-summary.component.html',
  styleUrls: ['./member-summary.component.css']
})
export class MemberSummaryComponent implements OnInit {
  @Input() member: Member;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailPage(clickedMember): void {
    this.router.navigate(['members', clickedMember.$key]);
  }

}
