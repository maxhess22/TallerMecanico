import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from './../services/user-crud.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  updateUserFg: FormGroup;
  idCliente: any;
  constructor(
    private userCrudService: UserCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.idCliente = this.activatedRoute.snapshot.paramMap.get('idCliente');
  }


  ngOnInit() {
    this.fetchUser(this.idCliente);
    this.updateUserFg = this.formBuilder.group({
      nombreCliente: [''],
      emailCliente: [''],
      telefono: ['']

    })
  }
  fetchUser(idCliente) {
    this.userCrudService.getUser(idCliente).subscribe((data) => {
      this.updateUserFg.setValue({
        nombreCliente: data['data']['nombreCliente'],
        emailCliente: data['data']['emailCliente'],
        telefono: data['data']['telefono'],

      });
    });
  }
  onSubmit() {
    if (!this.updateUserFg.valid) {
      return false;
    } else {
      this.userCrudService.updateCliente(this.idCliente, this.updateUserFg.value)
        .subscribe(() => {
          this.updateUserFg.reset();
          this.router.navigate(['/perfil-cliente']);
        })
    }
  }

}
