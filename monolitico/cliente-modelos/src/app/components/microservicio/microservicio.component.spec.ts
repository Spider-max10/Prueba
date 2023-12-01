import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroservicioComponent } from './microservicio.component';

describe('MicroservicioComponent', () => {
  let component: MicroservicioComponent;
  let fixture: ComponentFixture<MicroservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroservicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
