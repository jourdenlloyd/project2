import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BecomeWalkerComponent } from './become-walker/become-walker.component';
import { FrontScreenComponent } from './front-screen/front-screen.component';

export const HomeRoutes: Route[] = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full',
        component: HomeComponent,
        children: [
            { path: 'home', component: FrontScreenComponent},
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
            { path: 'becomewalker', component: BecomeWalkerComponent },

        ]
    }
];
