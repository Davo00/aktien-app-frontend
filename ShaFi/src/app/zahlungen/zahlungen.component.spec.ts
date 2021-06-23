import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahlungenComponent } from './zahlungen.component';

describe('ZahlungenComponent', () => {
  let component: ZahlungenComponent;
  let fixture: ComponentFixture<ZahlungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahlungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahlungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
