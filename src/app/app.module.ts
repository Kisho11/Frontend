import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { CroptableComponent } from './croptable/croptable.component';
import { AboutComponent } from './Profile/about.component';
import { AnoComponent } from './ano/ano.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreatemodComponent } from './createmod/createmod.component';
import { ArticleComponent } from './article/article.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { TableComponent } from './table/table.component';
import { SeedingComponent } from './Cropform/seeding/seeding.component';
import { AdultComponent } from './Cropform/adult/adult.component';
import { FloweringComponent } from './Cropform/flowering/flowering.component';
import { HarvestComponent } from './Cropform/harvest/harvest.component';
import { PostharvestComponent } from './Cropform/postharvest/postharvest.component';
import { SelectformComponent } from './Cropform/selectform/selectform.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    CroptableComponent,
    AboutComponent,
    AnoComponent,
    ContactusComponent,
    CreatemodComponent,
    ArticleComponent,
    ViewuserComponent,
    TableComponent,
    SeedingComponent,
    AdultComponent,
    FloweringComponent,
    HarvestComponent,
    PostharvestComponent,
    SelectformComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
