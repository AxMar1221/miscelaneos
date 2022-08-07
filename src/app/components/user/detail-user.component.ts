import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail.user.component.html',
  styles: [
  ]
})
export class DetailUserComponent implements OnInit {

  constructor( private router: ActivatedRoute ) {
    this.router.parent?.params.subscribe( param => {
      console.log("Ruta HIJA Detail");
      console.log(param);
    })
   }

  ngOnInit(): void {
  }

}
