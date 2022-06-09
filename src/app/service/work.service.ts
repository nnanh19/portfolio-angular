import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(
    private http : HttpClient
  ) { }

  getListWork(){
    const works = this.http.get("http://localhost:3000/works?_limit=3")
    return works
  }
  getAll(){
    const works = this.http.get("http://localhost:3000/works")
    return works
  }


}
