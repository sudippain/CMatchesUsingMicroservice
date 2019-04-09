import { Component, OnInit } from '@angular/core';
import { CmatchesService } from '../../cmatches.service';
import { MatSnackBar } from '@angular/material';
import { CalenderMatches } from '../../calendar-matches';

@Component({
  selector: 'cmatches-calendar-matches',
  templateUrl: './calendar-matches.component.html',
  styleUrls: ['./calendar-matches.component.css']
})
export class CalendarMatchesComponent implements OnInit {

  match: Array<any>;
  constructor(private service:CmatchesService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.match=[];
    this.service.getCalendarMatches().subscribe((data:any) => {
      console.log(data);      
      this.match = data;
    }
    )
  }

  addToFav(matches){
    let message = `${matches.name} Add to Wathclist`;
    this.service.addMatchTofavouriteList(matches).subscribe(data=>{
      this.snackBar.open(message, '', {
        duration: 1000
    });

  },
  (error)=>{
    let message = `Match Already present in Wathclist`;
    this.snackBar.open(message, '', {
      duration: 1000
  }
    )
    
}
    )
}
}
