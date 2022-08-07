import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  template: `
  <br>
  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
  </div>
  `,
  styles: [
  ]
})
export class EditUserComponent implements OnInit {

  constructor( private router: ActivatedRoute ) {
    this.router.parent?.params.subscribe( param => {
      console.log("Ruta HIJA Edit");
      console.log(param);
    })
   }

  ngOnInit(): void {
  }

}
