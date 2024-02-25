import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseManagementPage } from './base-management.page';

describe('BaseManagementPage', () => {
  let component: BaseManagementPage;
  let fixture: ComponentFixture<BaseManagementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaseManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
