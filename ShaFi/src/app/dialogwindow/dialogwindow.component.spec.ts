import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogwindowComponent } from './dialogwindow.component';

describe('DialogwindowComponent', () => {
  let component: DialogwindowComponent;
  let fixture: ComponentFixture<DialogwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogwindowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
