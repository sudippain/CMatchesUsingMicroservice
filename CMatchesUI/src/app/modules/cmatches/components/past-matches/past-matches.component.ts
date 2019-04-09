import { Component, OnInit } from '@angular/core';
import { CmatchesService } from '../../cmatches.service';
import { Match } from '../../current-matches';

@Component({
  selector: 'app-past-matches',
  templateUrl: './past-matches.component.html',
  styleUrls: ['./past-matches.component.css']
})
export class PastMatchesComponent implements OnInit {
  matchtemp: Array<Match>;
  prematch: Array<Match>;
  constructor(private service:CmatchesService) { }

  ngOnInit() {
    this.prematch=[];
    this.service.getCurrentMatches().subscribe((data:any) => {
      
      
     this.matchtemp=data;
      console.log(this.matchtemp);
     this.matchtemp.forEach(element => {
       if(element.matchStarted==false){
        this.prematch.push(element);
        console.log('Sudip');
       }
     });
    
    })
  }

}
