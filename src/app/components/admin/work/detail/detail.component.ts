import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [{provide: NzMessageService}],
})
export class DetailComponent implements OnInit {

  hideFeatAddWork : boolean = false
  listwork: any 

  validateForm!: FormGroup;
  imgArr? : any =  []

  submitForm(): void {
    console.log((this.imgArr));
    if (this.validateForm.valid) {
          this.workService.createDetail({...this.validateForm.value,img: this.imgArr,workId: parseInt(this.id!)}).subscribe(() => {
            this.http.get(`http://localhost:3000/works/${this.id}?_embed=work`).subscribe(({work} :any) => {
              this.listwork = work
            })
            this.notification.create(
              'success',
              'Thêm mới thành công',
              ''
            )
            
          })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private workService: WorkService,
    private activateRoute : ActivatedRoute,
    private notification: NzNotificationService,
    private msg: NzMessageService,
    private http: HttpClient,
    private nzMessageService: NzMessageService
  ) {
    this.http.get(`http://localhost:3000/works/${this.id}?_embed=work`).subscribe(({work} :any) => {
      this.listwork = work
      console.log(this.listwork);
    })  
    
  }

  id = this.activateRoute.snapshot.paramMap.get('id')
  hideAddWork(){  
    this.hideFeatAddWork = !this.hideFeatAddWork
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      feat: [null, [Validators.required]],
      desc: [null, [Validators.required]],
    });
    console.log(this.listwork);
    
  }
  API = 'https://api.cloudinary.com/v1_1/ph-th/image/upload';
  preset = 'rjbb3yjz';  
  formData = new FormData();
  handleChange(info: any): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file.originFileObj);
      this.formData.append('file' , info.file.originFileObj );
      this.formData.append('upload_preset', this.preset );
      this.http.post(this.API, this.formData).subscribe( ({url}:any) => {
        // this.imgArr.push(url)
        this.imgArr = [...this.imgArr, {url}]
      })
    }
  }

  cancel(): void {
    this.nzMessageService.info('Đã hủy');
  }


  onDelete(id: any){
    this.http.delete("http://localhost:3000/work/"+id).subscribe(() =>{
      this.listwork = this.listwork.filter((item:any) => item.id !== id)
      this.notification.create(
        'success',
        'Xóa thành công',
        ''
      )
    })
  }
}
