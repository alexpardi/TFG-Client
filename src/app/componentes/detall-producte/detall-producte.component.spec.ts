import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallProducteComponent } from './detall-producte.component';

describe('DetallProducteComponent', () => {
  let component: DetallProducteComponent;
  let fixture: ComponentFixture<DetallProducteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallProducteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallProducteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
