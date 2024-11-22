import { Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { LayoutComponent } from '../../pages/layout/layout.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AboutComponent } from '../../pages/about/about.component';
import { ContactFormComponent } from '../../pages/contact-form/contact-form.component';
import { TermsConditionComponent } from '../../pages/terms-condition/terms-condition.component';



export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'contact-form',
        component:ContactFormComponent
    },
    {
        path:'terms-condition',
        component:TermsConditionComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            }
        ]
    }
];
