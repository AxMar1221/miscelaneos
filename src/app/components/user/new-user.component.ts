import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new.user.component.html',
  styles: [
  ]
})
export class NewUserComponent implements OnInit {

  constructor( private router: ActivatedRoute ) {
    this.router.parent?.params.subscribe( param => {
      console.log("Ruta PADRE");
      console.log(param);
    })
   }

  ngOnInit(): void {
  }

}
