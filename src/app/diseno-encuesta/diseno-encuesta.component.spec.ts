import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoEncuestaComponent } from './diseno-encuesta.component';

describe('DisenoEncuestaComponent', () => {
  let component: DisenoEncuestaComponent;
  let fixture: ComponentFixture<DisenoEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenoEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenoEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
