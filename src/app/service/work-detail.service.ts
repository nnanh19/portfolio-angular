import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkDetailService {

  constructor(
    private http : HttpClient
  ) { }
  getById(id:number): Observable<any>{
    return this.http.get(`http://localhost:3000/works/${id}?_embed=work`)
  }
}
