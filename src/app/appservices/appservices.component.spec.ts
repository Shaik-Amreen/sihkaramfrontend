import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppservicesComponent } from './appservices.component';

describe('AppservicesComponent', () => {
  let component: AppservicesComponent;
  let fixture: ComponentFixture<AppservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
