import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit {

  alert: string = "alert-danger";
  properties: any = {
    danger: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
