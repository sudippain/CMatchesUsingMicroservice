import { Component, OnInit } from '@angular/core';
import { CmatchesService } from '../../cmatches.service';
import { Match } from '../../current-matches';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'cmatches-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
  match: Array<any>;
  constructor(private service:CmatchesService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.match=[];
    this.getAllFavMovie();
  }
  getAllFavMovie():void{
    console.log("getallfavmovie1")
    this.service.getFavouriteListedMatches().subscribe(data=>{
      if(data.length==0){
        let message = ` Empty Watchlist`;
        this.snackBar.open(message, '', {
          duration: 1000
      });
      }
    
      this.match=data;
    });
  }
  deleteFromWatchlist(match):void{
    let message = `${match.name} Delete from Watchlist`;
    this.service.deleteMatchFromWatchlist(match).subscribe(data=>{
      this.snackBar.open(message, '', {
        duration: 1000
    });
      this.getAllFavMovie();
    });
  }


}
