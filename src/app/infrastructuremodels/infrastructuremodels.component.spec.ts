import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructuremodelsComponent } from './infrastructuremodels.component';

describe('InfrastructuremodelsComponent', () => {
  let component: InfrastructuremodelsComponent;
  let fixture: ComponentFixture<InfrastructuremodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfrastructuremodelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructuremodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
