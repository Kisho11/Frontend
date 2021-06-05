import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';

import { CroptableComponent } from './croptable/croptable.component';
import { AboutComponent } from './Profile/about.component';
import { AnoComponent } from './ano/ano.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreatemodComponent } from './createmod/createmod.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { SelectformComponent } from './Cropform/selectform/selectform.component';
import { SeedingComponent } from './Cropform/seeding/seeding.component';
import { AdultComponent } from './Cropform/adult/adult.component';
import { FloweringComponent } from './Cropform/flowering/flowering.component';
import { HarvestComponent } from './Cropform/harvest/harvest.component';
import { PostharvestComponent } from './Cropform/postharvest/postharvest.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'croptable',
        component: CroptableComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'ano',
        component: AnoComponent
    },
    {
        path: 'contactus',
        component: ContactusComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'createmod',
        component:CreatemodComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'ab/admin',
        component: CreatemodComponent
    },
    {
        path: 'abc/admin',
        component: AnoComponent
    },
    {
        path: 'viewuser',
        component: ViewuserComponent
    },
    {
        path : "selectform",
        component : SelectformComponent
    },
    {
        path : "seeding",
        component : SeedingComponent
    },

    {
        path : "adult",
        component : AdultComponent
    },
    {
        path : "flowering",
        component : FloweringComponent
    },
    {
        path : "harvest",
        component : HarvestComponent
    },
    {
        path : "postharvest",
        component : PostharvestComponent
    },
    {
        path : "search",
        component : SearchComponent
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
