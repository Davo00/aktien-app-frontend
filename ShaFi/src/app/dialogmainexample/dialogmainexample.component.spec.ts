import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogmainexampleComponent } from './dialogmainexample.component';

describe('DialogmainexampleComponent', () => {
  let component: DialogmainexampleComponent;
  let fixture: ComponentFixture<DialogmainexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogmainexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogmainexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
