import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage  {

  constructor(private crud: CrudService) {}


    async agregar( txtUser:HTMLInputElement, txtCorreo:HTMLInputElement,
                  txtfono:HTMLInputElement, txtPass:HTMLInputElement, txtPass2:HTMLInputElement)
        {
          const datos = [{"user": txtUser.value,
                          "email": txtCorreo.value,
                          "telefono": txtfono.value,
                          "password1": txtPass.value,
                          "password2": txtPass2.value
                        }];
          await this.crud.agregar(datos)
        }



}
