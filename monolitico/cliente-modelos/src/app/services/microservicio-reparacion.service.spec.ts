import { TestBed } from '@angular/core/testing';

import { MicroservicioReparacionService } from './microservicio-reparacion.service';

describe('MicroservicioReparacionService', () => {
  let service: MicroservicioReparacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroservicioReparacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
