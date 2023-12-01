import { TestBed } from '@angular/core/testing';

import { ModeloImpresoraService } from './modelo-impresora.service';

describe('ModeloImpresoraService', () => {
  let service: ModeloImpresoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeloImpresoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
