import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindonationsComponent } from './admindonations.component';

describe('AdmindonationsComponent', () => {
  let component: AdmindonationsComponent;
  let fixture: ComponentFixture<AdmindonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindonationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
