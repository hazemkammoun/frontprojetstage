import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesalleComponent } from './listesalle.component';

describe('ListesalleComponent', () => {
  let component: ListesalleComponent;
  let fixture: ComponentFixture<ListesalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
