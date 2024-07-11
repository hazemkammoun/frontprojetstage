import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListequipemetComponent } from './listequipemet.component';

describe('ListequipemetComponent', () => {
  let component: ListequipemetComponent;
  let fixture: ComponentFixture<ListequipemetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListequipemetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListequipemetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
