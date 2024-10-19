import { TestBed } from '@angular/core/testing';

import { I18nServicesService } from './i18n-services.service';

describe('I18nServicesService', () => {
  let service: I18nServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
