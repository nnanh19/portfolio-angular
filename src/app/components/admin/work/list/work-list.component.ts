import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/service/work.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css'],
  providers: [{ provide: NzMessageService}],
})
export class AdminWorkListComponent implements OnInit {
  listOfWorks? : any 
  listOfDisplayData : any
  constructor(
    private workService: WorkService,
    private nzMessageService : NzMessageService,
    private notification : NzNotificationService,
    private router : Router,
  ) { }
  ngOnInit(): void {
    this.workService.getAll().subscribe(works => {
      this.listOfWorks = works
      this.listOfDisplayData = [...this.listOfWorks]
    })
  }
  searchValue = '';
  visible = false;

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfWorks.filter((item:any) => item.title.indexOf(this.searchValue) !== -1);
  }

  cancel(): void {
    this.nzMessageService.info('Đã hủy');
  }


  onDelete(id: any){
    this.workService.remove(id).subscribe(() =>{
      this.listOfDisplayData = this.listOfWorks.filter((item:any) => item.id !== id)
      this.notification.create(
        'success',
        'Xóa thành công',
        ''
      )
    })
  }
}
