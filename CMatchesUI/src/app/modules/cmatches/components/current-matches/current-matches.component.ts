import { Component, OnInit } from '@angular/core';
import { CmatchesService } from '../../cmatches.service';
import { Match } from '../../current-matches';

@Component({
  selector: 'cmatches-current-matches',
  templateUrl: './current-matches.component.html',
  styleUrls: ['./current-matches.component.css']
})
export class CurrentMatchesComponent implements OnInit {
  matchtemp: Array<Match>;
  match: Array<any>;
  constructor(private service:CmatchesService) { }

  ngOnInit() {
    this.match=[];
    this.service.getCurrentMatches().subscribe((data:any) => {
      
      
   this.matchtemp=data;
     this.matchtemp.forEach(element => {
       
       if(element.matchStarted==true){
         
         this.service.getScoreFromMatch(element.unique_id).subscribe((data:any)=>{
          console.log(data);
          this.match.push(data);
         })
       
       
       }
     });
    
    })
  }



}
