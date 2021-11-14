import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from '../services/user-crud.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  clienteForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private userCrudService: UserCrudService) {
    this.clienteForm = this.formBuilder.group({
        nombreCliente: [''],
        emailCliente: [''],
        telefono: [''],
        contraseña: ['']
      })
    }

  ngOnInit() {}

  onSubmit() {
    if (!this.clienteForm.valid) {
      return false;
    } else {
      this.userCrudService.createCliente(this.clienteForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.clienteForm.reset();
            this.router.navigate(['/login']);
          })
        });
    }
  }

}
