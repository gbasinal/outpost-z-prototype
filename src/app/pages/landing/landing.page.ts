import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class LandingPage {

  constructor(
    private router : Router
  ) { }



  navigateToGameStart(){
    this.router.navigateByUrl("/character-creation");
  }

}
