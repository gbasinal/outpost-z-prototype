import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CharacterModel } from '../model/character.model';



@Injectable({
  providedIn: 'root'
})
export class CharacterCreationService {

  constructor(
    private storage : Storage
  ) { 
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async saveStatAndName( stats:  CharacterModel ){
    await this.storage.set('characterStats', stats);
  }

  async getStatsAndName() : Promise<CharacterModel> {
    return await this.storage.get("characterStats");
  }
}
