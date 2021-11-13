import { Component, OnInit } from '@angular/core';
import { UserCrudService } from './../services/user-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.page.html',
  styleUrls: ['./perfil-cliente.page.scss'],
})
export class PerfilClientePage implements OnInit {

  Clientes : any=[];


  constructor(
    private UserCrudService: UserCrudService  ) { }

  ngOnInit() {}

  ionViewDidEnter(){
    this.UserCrudService.getCliente().subscribe((response)=>{
      this.Clientes = response;
    })
  }
}
