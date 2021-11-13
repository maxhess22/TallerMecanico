import { Component, OnInit, NgZone, Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AgendaCrudService } from '../services/agenda-crud.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Cliente } from '../services/user-crud.service';

@Injectable()

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  agendaForm: FormGroup;
  emailCliente:string="";
  contraseña:string="";
  logedUser: Cliente;
  constructor(


    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private agendaCrudService:AgendaCrudService) {
      this.logedUser = new Cliente();
      this.emailCliente = "";
      this.contraseña = "";
      this.agendaForm = this.formBuilder.group({
        horario: [''],
        fecha: [''],
        marca: [''],
        modelo:[''],
        kilometraje:[''],
        idCli:['']
      })
    }

  ngOnInit() {
  }
  onSubmit() {
    if (!this.agendaForm.valid) {
      return false;
    } else {
      this.agendaCrudService.createAgenda(this.agendaForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.agendaForm.reset();
            this.router.navigate(['/home']);
          })
        });
    }
  }
}
