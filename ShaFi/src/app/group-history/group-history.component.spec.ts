import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupHistoryComponent } from './group-history.component';

describe('GroupHistoryComponent', () => {
  let component: GroupHistoryComponent;
  let fixture: ComponentFixture<GroupHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
