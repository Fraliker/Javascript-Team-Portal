import {Pipe, PipeTransform} from '@angular/core';
import { Member } from './member.model';


@Pipe({
  name: "skill",
  pure: false
})


export class SkillPipe implements PipeTransform {
  transform(input: Member[], position: string){
    var output: Member[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].weakestPositions.indexOf(position) >= 0) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
