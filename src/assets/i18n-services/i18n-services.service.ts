import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class I18nServicesService {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }

  translateKey(key: string): Observable<string> {
    return this.translate.get(key);
  }
}
