import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompresAnteriorsComponent } from './compres-anteriors.component';

describe('CompresAnteriorsComponent', () => {
  let component: CompresAnteriorsComponent;
  let fixture: ComponentFixture<CompresAnteriorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompresAnteriorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompresAnteriorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
