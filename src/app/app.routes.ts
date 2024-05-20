import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ToDoComponent } from './to-do/to-do.component';
import { authGuard } from './auth.guard';
import { MainlayoutComponent } from './layouts/mainLayout/mainLayout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
        canActivate: [authGuard],
      },
      {
        path: 'to-do',
        component: ToDoComponent,
        title: 'ToDo',
        canActivate: [authGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: '**', component: PageNotFoundComponent, title: 'Page Not Found' },
];
