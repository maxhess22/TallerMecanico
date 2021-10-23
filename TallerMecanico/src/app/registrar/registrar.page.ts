import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ToastController } from '@ionic/angular';



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
          ///validar
          if (txtUser.value.trim().length == 0){
            const msjError = await this.alerta.create({
              message : "Nombre no especificado",
              duration: 2000,
              color : "danger",
              position: "top"


            });
            msjError.present();
            return;
          }else if (txtCorreo.value.trim().length == 0){
            const msjError = await this.alerta.create({
              message : "Correo no especificado",
              duration: 2000,
              color : "danger",
              position: 'top'
            });
             msjError.present();
             return;
          }else if (txtfono.value.trim().length == 0 ){
            const msjError = await this.alerta.create({
              message : "Telefono no especificado",
              duration: 2000,
              color : "danger",
              position: "top"

            });
            msjError.present();
            return;

            }else if (txtPass.value.trim().length == 0){
              const msjError = await this.alerta.create({
                message : "Contraseña no especificada",
                duration: 2000,
                color : "danger",
                position: "top"
              });
              msjError.present();
              return;
            }else if (txtPass2.value.trim().length == 0){
              const msjError = await this.alerta.create({
                message : " Contraseña de confirmación no especificada",
                duration: 2000,
                color : "danger",
                position: "top"
              });
              msjError.present();
              return;
            }else if (txtPass.value.trim().length != txtPass2.value.trim().length){
                    const msjError = await this.alerta.create({
                      message : "Las contraseñas no coinciden",
                      duration: 2000,
                      color : "danger",
                      position: "middle"
                     });
                     msjError.present();
                     return;
                  }

          const datos = [{"user": txtUser.value,
                          "email": txtCorreo.value,
                          "telefono": txtfono.value,
                          "password1": txtPass.value,
                          "password2": txtPass2.value
                        }];
          await this.crud.agregar(datos)// guarda los datos en bd storage
          const msjExito = await this.alerta.create({
            message : "Usuario Registrado",
            duration: 2000,
            color : "success",
            position: "middle",


          });

           msjExito.present();
           //Limpiar despues de ingresar datos
            txtUser.value= "";
            txtfono.value= "";
            txtCorreo.value= "";
            txtPass.value= "";
            txtPass2.value= "";

        }
      }





