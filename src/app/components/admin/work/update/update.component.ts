import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { WorkService } from 'src/app/service/work.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class AdminWorkUpdateComponent implements OnInit {
  id : any = this.activateRoute.snapshot.paramMap.get('id')
  work? : any 
  validateForm!: FormGroup;
  
  submitForm(): void {
    if (this.validateForm.valid) {
      try {
        this.workService.update({...this.validateForm.value,id: this.id}).subscribe(() =>{
          this.notification.create(
            'success',
            'Cập nhật thành công',
            ''
          )
          this.router.navigateByUrl('/admin/work')
        })
      } catch (error) {
      }
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

    this.workService.getById(this.id).subscribe(work => {
      this.validateForm.get('img')!.setValue(work.img);
      this.validateForm.get('title')!.setValue(work.title);
      this.validateForm.get('genre')!.setValue(work.genre);
      this.validateForm.get('frameworks')!.setValue(work.frameworks);
      this.validateForm.get('link_git')!.setValue(work.link_git);
      this.validateForm.get('link_web')!.setValue(work.link_web);
      this.validateForm.get('createdAt')!.setValue(work.createdAt);
    })
  }
  
}
