import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BecomeWalkerComponent } from './become-walker/become-walker.component';

export const HomeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
            { path: 'becomewalker', component: BecomeWalkerComponent },

        ]
    }
];
