import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalanalysisComponent } from './localanalysis.component';

describe('LocalanalysisComponent', () => {
  let component: LocalanalysisComponent;
  let fixture: ComponentFixture<LocalanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
