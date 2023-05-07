import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciUsuariComponent } from './inici-usuari.component';

describe('IniciUsuariComponent', () => {
  let component: IniciUsuariComponent;
  let fixture: ComponentFixture<IniciUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciUsuariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
