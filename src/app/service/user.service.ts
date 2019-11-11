import { Profile } from './../model/user.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseURL = "https://v12-geckos-team-02.firebaseio.com/profiles.json";



  getAllCountry(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all') as Observable<any>;
  }


  onCreateProfile(profile: Profile): Observable<any>{
    return this.http.post(this.baseURL, profile) as Observable<any>;
  }

  onFetchProfiles(): Observable<any>{
    return this.http.get(this.baseURL)
    .pipe(map(
      responseData => {
        const profileArray = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            profileArray.push({...responseData[key], id:key});
          }
        }
        return profileArray;
      }
    ))
  }
}
