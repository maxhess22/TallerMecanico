import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from '../services/user-crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor( private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private userCrudService: UserCrudService) {
    this.loginForm = this.formBuilder.group({
        emailCliente: [''],
        contraseña: ['']
      })
    }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return false;
    } else {
      this.userCrudService.getCliente(this.loginForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.loginForm.reset();
            this.router.navigate(['/home']);
          })
        });
    }
  }
  onClickLogin(){

  }


}
