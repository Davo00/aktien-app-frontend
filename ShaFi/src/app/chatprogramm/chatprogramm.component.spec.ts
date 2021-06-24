import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatprogrammComponent } from './chatprogramm.component';

describe('ChatprogrammComponent', () => {
  let component: ChatprogrammComponent;
  let fixture: ComponentFixture<ChatprogrammComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatprogrammComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatprogrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
