import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
	{ path: 'results', component: ResultsComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
