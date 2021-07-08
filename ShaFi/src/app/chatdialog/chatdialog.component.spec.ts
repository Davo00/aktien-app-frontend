import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatdialogComponent } from './chatdialog.component';

describe('ChatdialogComponent', () => {
  let component: ChatdialogComponent;
  let fixture: ComponentFixture<ChatdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
