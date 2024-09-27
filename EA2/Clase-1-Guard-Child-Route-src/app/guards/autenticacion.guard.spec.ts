import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autenticacionGuard } from './autenticacion.guard';

describe('autenticacionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => autenticacionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
