import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// storage
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  declarations: [AppComponent, LoginComponent,
    ProfileComponent ],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule, IonicStorageModule.forRoot(), RouterModule.forRoot([
        { path: '', redirectTo: '/', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'profile', component: ProfileComponent }],;
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
