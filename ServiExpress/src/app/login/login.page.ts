import { Cliente } from './../services/user-crud.service';
import { AgendaPage } from './../agenda/agenda.page';

import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from '../services/user-crud.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


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

  /*onSubmit() {
    if (!this.loginForm.valid) {
      return false;
    } else {
      this.userCrudService.getCliente()
        .subscribe((response) => {
          this.zone.run(() => {
            this.loginForm.reset();
            this.router.navigate(['/home']);
          })
        });
    }
  }*/
  onClickLogin(){
    let formValue = this.loginForm.value
    if (!this.loginForm.valid) {
      return false;
    } else {
      this.userCrudService.getCliente()
        .subscribe(response => {
          if ( !response.find(x =>  x.contraseña == formValue.contraseña)) {
            alert("Contraseña erronea");
          } else if (!response.find(x =>  x.emailCliente == formValue.emailCliente)) {
            alert("Email erroneo, cliente no registrado");
          }
          if (response.find(x => x.emailCliente == formValue.emailCliente && x.contraseña == formValue.contraseña)) {
            alert("Inicio de sesion exitoso");
            this.zone.run(() => {
              this.loginForm.reset();
              this.router.navigate(['/home']);
            })
          }
        });
    }
  }


}
