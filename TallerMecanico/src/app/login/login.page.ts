import { Component} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
   nombre ="";
   password ="";

  constructor(private crud :CrudService, private alerta: ToastController ) { }
   Login(){
     this.crud.rescatar(this.nombre)
   }
  async acceso(txtUser : HTMLInputElement ) {
    const valor = await this.crud.rescatar(txtUser.value, );
    if(valor != null){


    }
  }











}
