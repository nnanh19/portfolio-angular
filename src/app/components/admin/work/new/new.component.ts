import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { WorkService } from 'src/app/service/work.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  validateForm!: FormGroup;
  submitForm(): void {
    if (this.validateForm.valid) {
          this.workService.create(this.validateForm.value).subscribe(() => {
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
    private notification: NzNotificationService
    ) {
     
    }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      img: [null, [Validators.required]],
      title: [null, [Validators.required]],
      genre: [null, [Validators.required]],
      frameworks: [null, [Validators.required]],
      link_git: [null, [Validators.required]],
      link_web: [null],
      createdAt: [null, [Validators.required]],
    });
   
  }

}
