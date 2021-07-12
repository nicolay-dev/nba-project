import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataRawI } from "../interfaces/data-raw.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlApi = 'https://mach-eight.uc.r.appspot.com/';

  constructor(private http: HttpClient) { }

  getData():Observable<DataRawI>{
    return this.http.get<DataRawI>(this.urlApi + '', {});
  }
}
