
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CharacterProfilePage } from './character-profile.page';
import { EquipmentScreenComponent } from './equipment-screen/equipment-screen.component';
import { StatsScreenComponent } from './stats-screen/stats-screen.component';
import { EquipmentModalScreenComponent } from './equipment-screen/equipment-modal-screen/equipment-modal-screen.component';
import { InventoryComponent } from './equipment-screen/inventory/inventory.component';

@NgModule({
  declarations: [
    CharacterProfilePage,
    EquipmentScreenComponent,
    EquipmentModalScreenComponent,
    InventoryComponent
    // StatsScreenComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class CharacterProfileModule { }
