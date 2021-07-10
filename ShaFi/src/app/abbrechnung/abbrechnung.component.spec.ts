import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbrechnungComponent } from './abbrechnung.component';

describe('AbbrechnungComponent', () => {
  let component: AbbrechnungComponent;
  let fixture: ComponentFixture<AbbrechnungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbrechnungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbrechnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
