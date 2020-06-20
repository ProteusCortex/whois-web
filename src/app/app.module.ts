import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ApiModule } from './api/api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainHistoryComponent } from './domain-history/domain-history.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		ResultsComponent,
		NotFoundComponent,
		SearchComponent,
		DomainHistoryComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		ReactiveFormsModule,
		FontAwesomeModule,
		ApiModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	// constructor(library: FaIconLibrary) {
	// 	library.addIconPacks(fas);
	// }
}
