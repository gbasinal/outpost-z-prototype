import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterProfilePage } from './character-profile.page';

describe('CharacterProfilePage', () => {
  let component: CharacterProfilePage;
  let fixture: ComponentFixture<CharacterProfilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharacterProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
