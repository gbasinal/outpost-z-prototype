import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EquipmentModalScreenComponent } from './equipment-modal-screen/equipment-modal-screen.component';

@Component({
  selector: 'app-equipment-screen',
  templateUrl: './equipment-screen.component.html',
  styleUrls: ['./equipment-screen.component.scss'],
  // standalone : true
})
export class EquipmentScreenComponent {

  equipmentItems = [
    { label: 'Head', src: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { label: 'Body', src: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { label: 'Arms', src: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { label: 'Legs', src: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { label: 'Feet', src: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { label: 'Primary Weapon', src: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { label: 'Secondary Weapon', src: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
    { label: 'Quickslot Item', src: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
  ];


  constructor(
    public modalController : ModalController
  ) { }

  async openEquipmentModal(equipmentType: string) {
    const modal = await this.modalController.create({
      component : EquipmentModalScreenComponent,
      componentProps : {
        'equipmentType' : equipmentType,
        
      },
      cssClass : 'equipment-modal__container'
    })

    return await modal.present();
  }

}
