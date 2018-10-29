import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmeSalvoPage } from './filme-salvo';

@NgModule({
  declarations: [
    FilmeSalvoPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmeSalvoPage),
  ],
})
export class FilmeSalvoPageModule {}
