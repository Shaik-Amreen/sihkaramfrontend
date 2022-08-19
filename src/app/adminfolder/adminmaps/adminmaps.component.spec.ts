import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmapsComponent } from './adminmaps.component';

describe('AdminmapsComponent', () => {
  let component: AdminmapsComponent;
  let fixture: ComponentFixture<AdminmapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
