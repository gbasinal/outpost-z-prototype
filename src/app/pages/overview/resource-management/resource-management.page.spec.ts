import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceManagementPage } from './resource-management.page';

describe('ResourceManagementPage', () => {
  let component: ResourceManagementPage;
  let fixture: ComponentFixture<ResourceManagementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResourceManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
