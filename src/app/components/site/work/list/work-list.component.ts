import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {

  isVisible = false;
  isOkLoading = false;

  totalLength: any 
  page: number = 1

  listWorks? : any
  
  constructor(
    private workService: WorkService
  ) { }

  ngOnInit(): void {
    this.workService.getAll().subscribe(list => this.listWorks = list)
  }

}
