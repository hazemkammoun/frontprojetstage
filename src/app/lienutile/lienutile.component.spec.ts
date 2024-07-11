import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienutileComponent } from './lienutile.component';

describe('LienutileComponent', () => {
  let component: LienutileComponent;
  let fixture: ComponentFixture<LienutileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienutileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LienutileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
