import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeEquipementComponent } from './demande-equipement.component';

describe('DemandeEquipementComponent', () => {
  let component: DemandeEquipementComponent;
  let fixture: ComponentFixture<DemandeEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeEquipementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
