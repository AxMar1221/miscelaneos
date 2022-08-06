import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./app/components/home/home.component";
import { DetailUserComponent } from "./app/components/user/detail-user.component";
import { EditUserComponent } from "./app/components/user/edit-user.component";
import { NewUserComponent } from "./app/components/user/new-user.component";
import { UserComponent } from './app/components/user/user.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'user/:id',
        component: UserComponent,
        children: [
            { path: 'new', component: NewUserComponent },
            { path: 'edit', component: EditUserComponent },
            { path: 'detail', component: DetailUserComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'new' }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);