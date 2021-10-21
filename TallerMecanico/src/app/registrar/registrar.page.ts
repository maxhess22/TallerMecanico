import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ToastController } from '@ionic/angular';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage  {

  constructor(private crud: CrudService, private alerta: ToastController) {}


    async agregar( txtUser:HTMLInputElement, txtCorreo:HTMLInputElement,
                  txtfono:HTMLInputElement, txtPass:HTMLInputElement, txtPass2:HTMLInputElement)
        {
          const datos = [{"user": txtUser.value,
                          "email": txtCorreo.value,
                          "telefono": txtfono.value,
                          "password1": txtPass.value,
                          "password2": txtPass2.value
                        }];
          await this.crud.agregar(datos)// guarda los datos en bd storage

          //Limpiar despues de ingresar datos


          if(datos != null){

          const msjExito = await this.alerta.create({
            message : "Usuario Registrado",
            duration: 2000,
            color : "success",
            position: "middle"


          });
           msjExito.present();
        }
          else{
            const msjError = await this.alerta.create({
              message : "Faltan campos Por Completar",
              duration: 2000,
              color : "danger",
              position: "middle"


            });
             msjError.present();
          }

            //Limpiar despues de ingresar datos
          txtUser.value= "";
          txtfono.value= "";
          txtCorreo.value= "";
          txtPass.value= "";
          txtPass2.value= "";
          }



}
