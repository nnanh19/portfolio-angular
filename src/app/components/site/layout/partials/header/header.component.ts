import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("menu") menu? : any

  constructor() { }

  ngOnInit(): void {

  }
 
  showMenu(){
    this.menu.nativeElement.classList.toggle('tw-invisible')
    console.log(1);
  }
  hideMenu(){
    this.menu.nativeElement.classList.toggle('tw-invisible')
    console.log(1);
  }

}
