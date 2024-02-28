import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-equipment-modal-screen',
  templateUrl: './equipment-modal-screen.component.html',
  styleUrls: ['./equipment-modal-screen.component.scss'],
})
export class EquipmentModalScreenComponent implements OnInit  {

  @Input() equipmentType? : string;

  constructor(
    private modalController : ModalController
  ) { }


  ngOnInit(): void {
      console.log(this.equipmentType);
  }

  closeEquipmentModal (){
    this.modalController.dismiss({
      'dismissed' : true
    })
  }

}
