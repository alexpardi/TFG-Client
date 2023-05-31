import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntesFrequentsComponent } from './preguntes-frequents.component';

describe('PreguntesFrequentsComponent', () => {
  let component: PreguntesFrequentsComponent;
  let fixture: ComponentFixture<PreguntesFrequentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntesFrequentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntesFrequentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
