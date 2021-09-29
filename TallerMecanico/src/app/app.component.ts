import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

   desactivado = false;
  
  
   constructor() {}
   desactivar(){
    
    if(this.desactivar){
      this.desactivado =false;

    }else{
      this.desactivado= true;

    };
  
  
  
  }

 
}

