import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Match } from './current-matches';


@Injectable({
  providedIn: 'root'
})
export class CmatchesService {

  apiKey: string;
  cmatchesEndpoint: string;
  favouriteListEndpoint: string;

  constructor(private http: HttpClient) {
    this.cmatchesEndpoint = "http://cricapi.com/api/";
    this.favouriteListEndpoint = "http://localhost:8085/api/v1/match";
    this.apiKey = "Hd26pAGUKiV2NWj2DOVqYJWUiqr2";
   }

   getCurrentMatches(): Observable<Array<Match>> {
    const matchEndpoint = `${this.cmatchesEndpoint}/matches/${this.apiKey}`
    return this.http.get(matchEndpoint).pipe(
      retry(3),
      map(this.pickMatchResults),
    );
  }

  getCalendarMatches(): Observable<Array<Match>> {
    const matchEndpoint = `${this.cmatchesEndpoint}/matchCalendar/${this.apiKey}`
    return this.http.get(matchEndpoint).pipe(
      retry(3),
      map(this.pickCalendarMatches),
    );
  }

  pickCalendarMatches(response){
    return response['data'];
  }
    
  getScoreFromMatch(id:any): Observable<Array<Match>>{
    const matchEndpoint = `${this.cmatchesEndpoint}cricketScore?apikey=${this.apiKey+"&unique_id="+id}`
    console.log(matchEndpoint);
    return this.http.get<Array<Match>>(matchEndpoint);
  }

  addMatchTofavouriteList(match:Match) {
    console.log(match);
    const url = `${this.favouriteListEndpoint}/add`;
    console.log(url);
    return this.http.post(url,match);
  }

  getFavouriteListedMatches(): Observable<Array<Match>> {
    console.log("log")
    return this.http.get<Array<Match>>(this.favouriteListEndpoint+"/matches");
  }

  deleteMatchFromWatchlist(match) {
    const delUrl = `${this.favouriteListEndpoint+"/delete"}/${match.id}`;
    console.log(delUrl);
    return this.http.delete(delUrl, {responseType: 'text'});
  }
  
  pickMatchResults(response) {
    return response['matches'];
  }
}
