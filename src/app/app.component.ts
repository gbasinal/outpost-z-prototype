import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonTabs, IonApp, IonRouterOutlet,IonTabBar,IonTabButton,IonIcon, CommonModule],
})
export class AppComponent {
  showTabs : boolean = false;
  constructor(
    private router: Router
  ) {

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      
      this.showTabs = event.urlAfterRedirects.includes('/overview/');
    });
  }
  

  goToNextPage(page : string){
    this.router.navigateByUrl('/overview/'+page);
  }

}
