import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { WorkService } from 'src/app/service/work.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { HttpClient } from '@angular/common/http';

@Component({
  providers: [{provide: NzMessageService}],
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {


  validateForm!: FormGroup;
  // imgArr? : any =  []
  img:any
  
  submitForm(): void {
    if (this.validateForm.valid) {
          this.workService.create({...this.validateForm.value, img:this.img}).subscribe(() => {
            this.notification.create(
              'success',
              'Thêm mới thành công',
              ''
            )
            this.router.navigateByUrl('/admin/work')
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


  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    }
    return {};
  };
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private workService: WorkService,
    private activateRoute : ActivatedRoute,
    private notification: NzNotificationService,
    private msg: NzMessageService,
    private http: HttpClient
    ) {
     
    }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      genre: [null, [Validators.required]],
      desc: [null, [Validators.required]],
      frameworks: [null, [Validators.required]],
      link_git: [null, [Validators.required]],
      link_web: [null],
      createdAt: [null, [Validators.required]],
    });
 
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
        this.img = url        
      })
    }
  }
}
