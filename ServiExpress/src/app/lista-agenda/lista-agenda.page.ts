import { AgendaCrudService } from './../services/agenda-crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-agenda',
  templateUrl: './lista-agenda.page.html',
  styleUrls: ['./lista-agenda.page.scss'],
})
export class ListaAgendaPage implements OnInit {

  Agendas:any =[];

  constructor(

    private AgendaCrudService: AgendaCrudService,
    private router: Router) {

   }

  ngOnInit() {  }

  ionViewDidEnter(){
    this.AgendaCrudService.getAgenda().subscribe((response)=>{
      this.Agendas = response['data'];
    })
  }

  removeAgenda(agenda, i){
    if(window.confirm('¿Seguro quiere Eliminar?')){
      this.AgendaCrudService.deleteAgenda(agenda.idAgenda)
      .subscribe(()=>{
        this.ionViewDidEnter();
        console.log('Horario Eliminada')
      })
    }
  }

}
