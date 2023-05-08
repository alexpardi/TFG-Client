import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplegablesComponent } from './desplegables.component';

describe('DesplegablesComponent', () => {
  let component: DesplegablesComponent;
  let fixture: ComponentFixture<DesplegablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesplegablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesplegablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
