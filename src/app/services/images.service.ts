import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getImages({category, text}: Params): Observable<any> {
    const url = `${BASE_URL}&lang=es&q=${text}&category=${category}`;

    return this.http.get(url);
  }
}
