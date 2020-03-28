import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { DomainHistoryComponent } from './domain-history/domain-history.component';
import { environment as env } from '../environments/environment';


const routes: Routes = [
	{ path: 'results', component: ResultsComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'history/:id', component: DomainHistoryComponent },
	{ path: '', redirectTo: 'search', pathMatch: 'full' },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: !env.production })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
