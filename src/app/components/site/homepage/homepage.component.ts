import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  listWork : any
  viewLess? : boolean

  constructor(
    private workService : WorkService
  ) { }

  ngOnInit(): void {
    this.workService.getListWork().subscribe( works => this.listWork = works)
  }
  getAllListWork(){
    this.viewLess = true
    this.workService.getAll().subscribe( works => this.listWork = works)
  }
  getLessListWork(){
    this.viewLess = false
    this.workService.getListWork().subscribe( works => this.listWork = works)
  }
}
