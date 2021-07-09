import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSiteComponent } from './error-site.component';

describe('ErrorSiteComponent', () => {
  let component: ErrorSiteComponent;
  let fixture: ComponentFixture<ErrorSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
