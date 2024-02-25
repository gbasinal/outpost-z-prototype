
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CharacterProfilePage } from './character-profile.page';
import { EquipmentScreenComponent } from './equipment-screen/equipment-screen.component';
import { StatsScreenComponent } from './stats-screen/stats-screen.component';

@NgModule({
  declarations: [
    CharacterProfilePage,
    EquipmentScreenComponent,
    // StatsScreenComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
 

    IonicModule.forRoot({}),
  ]
})
export class CharacterProfileModule { }
