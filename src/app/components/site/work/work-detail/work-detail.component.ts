import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkDetailService } from 'src/app/service/work-detail.service';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class SiteWorkDetailComponent implements OnInit {

  feats? : any
  work? :any

  constructor(
    private workDetailService: WorkDetailService,
    private activatedRoute: ActivatedRoute
  ) { }

  id:any = this.activatedRoute.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.workDetailService.getById(this.id).subscribe(feat => {
      this.work = feat
      this.feats = feat.work
      console.log(feat.work);
    })
  }
}
