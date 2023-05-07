import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CistellComponent } from './cistell.component';

describe('CistellComponent', () => {
  let component: CistellComponent;
  let fixture: ComponentFixture<CistellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CistellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CistellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
