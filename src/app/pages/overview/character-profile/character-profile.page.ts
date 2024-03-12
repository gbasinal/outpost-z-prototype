import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.page.html',
  styleUrls: ['./character-profile.page.scss'],
  // standalone: true,
  // imports: [IonicModule, CommonModule, FormsModule]
})
export class CharacterProfilePage {

  isStatsScreenActive : boolean = false;

  constructor() { }

  toggleScreen(isActive : boolean){
    this.isStatsScreenActive = isActive;
  }

}
