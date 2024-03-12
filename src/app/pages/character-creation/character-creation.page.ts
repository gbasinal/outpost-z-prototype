import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ModalController   } from '@ionic/angular';
import { IonCard, IonButton, IonContent, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal, IonList, IonLabel, IonListHeader, IonItem, IonToolbar, IonRippleEffect, IonTitle, IonButtons } from '@ionic/angular/standalone';
import { CharacterModel } from 'src/app/game-data/model/character.model';

import { CharacterCreationService } from 'src/app/game-data/services/character-creation.service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.page.html',
  styleUrls: ['./character-creation.page.scss'],
  standalone: true,
  imports : [IonicModule, CommonModule],
  providers : [CharacterCreationService]
})
export class CharacterCreationPage{
  character : CharacterModel = {
    name : "",
    stats : {
      strength : 0,
      agility : 0,
      intelligence : 0,
      vitality : 0,
      luck: 0
    }
  };
  constructor(
    private router : Router,
    private characterCreationService : CharacterCreationService,
    private modalController : ModalController
  ) {}


  getRandomStatsResult (min : number, max : number) {
    let minimum = Math.ceil(min);
    let maximum = Math.ceil(max);
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  randomizedStats() {
    this.character.stats.strength = this.getRandomStatsResult(0,10);
    this.character.stats.agility = this.getRandomStatsResult(0,10);
    this.character.stats.intelligence = this.getRandomStatsResult(0,10);
    this.character.stats.vitality = this.getRandomStatsResult(0,10);
    this.character.stats.luck = this.getRandomStatsResult(0,5);
    this.character.name=  this.randomizedName();
  }

  randomizedName(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const length = Math.floor(Math.random() * 10) + 1; 
    let randomName = '';
    
    for (let i = 1; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomName += characters[randomIndex];
    }
    
    return randomName;
  }

  async createCharacter(){ 
    await this.modalController.dismiss();
    this.characterCreationService.saveStatAndName(this.character);
    this.router.navigateByUrl('/overview');

  }
}
