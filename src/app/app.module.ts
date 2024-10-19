import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewModuleModule } from './@views/view-module/view-module.module';  // Importa el módulo que contiene ButtonsComponent
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { I18nServicesService } from '../assets/i18n-services/i18n-services.service';
import { SidebarComponent } from './@views/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NavSidebarComponent } from './@views/nav-sidebar/nav-sidebar.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModuleModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      defaultLanguage: 'es',
      useDefaultLang: true
    })
  ],
  providers: [
    provideClientHydration(),
    I18nServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
