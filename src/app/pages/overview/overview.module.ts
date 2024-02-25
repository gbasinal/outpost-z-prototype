
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { OverviewPage } from './overview.page';
import { CharacterProfilePage } from './character-profile/character-profile.page';
import { ExplorationPage } from './exploration/exploration.page';
import { BaseManagementPage } from './base-management/base-management.page';
import { ResourceManagementPage } from './resource-management/resource-management.page';
import { CharacterProfileModule } from './character-profile/character-profile.module';

@NgModule({
  declarations: [
    OverviewPage,
    ExplorationPage,
    BaseManagementPage,
    ResourceManagementPage,

  ],
  imports: [
    CommonModule,
    IonicModule,
    CharacterProfileModule,
    IonicModule.forRoot({}),
    RouterModule.forChild([
      {
        path: '',
        component: OverviewPage,
        children: [
          { path: 'profile', component: CharacterProfilePage },
          { path: 'explore', component: ExplorationPage },
          { path: 'base', component: BaseManagementPage },
          { path: 'resource', component: ResourceManagementPage },
          { path: '', redirectTo: 'profile', pathMatch: 'full' }
        ]
      }
    ])
  ]
})
export class OverviewModule { }
