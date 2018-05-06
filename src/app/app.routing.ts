import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { BlacklistComponent } from './components/blacklist.component';
import { BlacklistAddComponent } from './components/addblacklist.component';
import { AbuseComponent } from './components/abuses.component';
import { AbuseAddComponent } from './components/addabuse.component';
import { AbuseDetailComponent } from './components/abuse-detail.component';
import { AbuseEditComponent } from './components/abuse-edit.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'blacklist', component: BlacklistComponent},
	{path: 'add-blacklist', component: BlacklistAddComponent},
	{path: 'abuses', component: AbuseComponent},
	{path: 'add-abuses', component: AbuseAddComponent},
	{path: 'abuse/:id', component: AbuseDetailComponent},
	{path: 'abuse-edit/:id', component: AbuseEditComponent},
	{path: '**',component: ErrorComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);