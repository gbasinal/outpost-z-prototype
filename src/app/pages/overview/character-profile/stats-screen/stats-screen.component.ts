import { Component, OnInit } from '@angular/core';
import { CharacterModel } from 'src/app/game-data/model/character.model';

import { CharacterCreationService } from 'src/app/game-data/services/character-creation.service';

@Component({
  selector: 'app-stats-screen',
  templateUrl: './stats-screen.component.html',
  styleUrls: ['./stats-screen.component.scss'],
})
export class StatsScreenComponent implements OnInit {
  characterStats: CharacterModel = {
    name: 'John Doe',
    stats: {
      strength: 0,
      agility: 0,
      intelligence: 0,
      vitality: 0,
      luck: 0,
    },
  };

  constructor(public characterCreationService: CharacterCreationService) {}

  ngOnInit(): void {
    this.getSavedStats();
  }

  async getSavedStats() {
    try {
      const stats = await this.characterCreationService.getStatsAndName();
      if (stats) {
        this.characterStats = stats;
      } else {
        // Handle the case where no stats are found, e.g., initialize with defaults
        console.log(
          'No character stats found, initializing with default values.'
        );
        this.characterStats = this.getDefaultCharacterStats();
      }
    } catch (error) {
      console.error('Failed to load character stats:', error);
      this.characterStats = this.getDefaultCharacterStats();
      // Optionally initialize with default stats or show an error message
    }
  }

  getDefaultCharacterStats(): CharacterModel {
    // Return a default CharacterModel object
    return {
      name: '',
      stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
        vitality: 0,
        luck: 0,
      },
    };
  }
}
