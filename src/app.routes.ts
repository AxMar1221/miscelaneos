import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./app/components/home/home.component";
import { UserComponent } from './app/components/user/user.component';
import { USERS_ROUTES } from "./app/components/user/user.routes";


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'user/:id',
        component: UserComponent,
        children: USERS_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);