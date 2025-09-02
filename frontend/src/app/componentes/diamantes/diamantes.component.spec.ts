import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamantesComponent } from './diamantes.component';

describe('DiamantesComponent', () => {
  let component: DiamantesComponent;
  let fixture: ComponentFixture<DiamantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiamantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiamantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
