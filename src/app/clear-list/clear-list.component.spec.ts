import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearListComponent } from './clear-list.component';

describe('ClearListComponent', () => {
  let component: ClearListComponent;
  let fixture: ComponentFixture<ClearListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearListComponent]
    });
    fixture = TestBed.createComponent(ClearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
