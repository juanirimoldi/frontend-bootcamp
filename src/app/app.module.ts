import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localeEsAr from '@angular/common/locales/es-AR';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Interceptor } from './modules/api-rest/interceptors/interceptor';
import { MaterialModule } from './modules/material/material.module';
import { PresentationModule } from './modules/presentation/presentation.module';


registerLocaleData(localeEsAr, 'es-AR');

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MaterialModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
				deps: [HttpClient]
			}
		}),
		PresentationModule,
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'es-AR' },
		{ provide: HTTP_INTERCEPTORS,
		  useClass: Interceptor,
		  multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
