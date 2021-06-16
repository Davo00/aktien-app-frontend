import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahlungsblockComponent } from './zahlungsblock.component';

describe('ZahlungsblockComponent', () => {
  let component: ZahlungsblockComponent;
  let fixture: ComponentFixture<ZahlungsblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahlungsblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahlungsblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
