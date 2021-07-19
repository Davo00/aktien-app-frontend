import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposeShareDialogComponent } from './propose-share-dialog.component';

describe('ProposeShareDialogComponent', () => {
  let component: ProposeShareDialogComponent;
  let fixture: ComponentFixture<ProposeShareDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposeShareDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposeShareDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
