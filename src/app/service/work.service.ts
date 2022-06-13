import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(
    private http : HttpClient
  ) { }
  getById(id:number): Observable<any>{
    const works = this.http.get("http://localhost:3000/works/"+id)
    return works
  }
  getListWork(){
    const works = this.http.get("http://localhost:3000/works?_limit=3")
    return works
  }
  getAll(){
    const works = this.http.get("http://localhost:3000/works")
    return works
  }
  update(data: any){
    const works = this.http.put("http://localhost:3000/works/"+data.id,data)
    return works
  }
  remove(id:any):Observable<any>{
    return this.http.delete("http://localhost:3000/works/"+id)
  }
  create(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/works/",data)
  }

  createDetail(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/work/",data)
  }
}
