import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerI } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlApi = 'https://mach-eight.uc.r.appspot.com/';

  constructor(private http: HttpClient) { }

  getData():Observable<PlayerI[]>{
    return this.http.get<PlayerI[]>(this.urlApi + '', {});
  }
}
