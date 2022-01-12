import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Img } from '../model/Img'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(
    private http: HttpClient
  ) { }
  getLitsImgDbJson(): Observable<Img[]>{
    return this.http.get<Img[]>('http://localhost:3000/img')
  }
}
