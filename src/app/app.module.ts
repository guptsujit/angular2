import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsComponent } from './news/news.component';
import { ContactusFormComponent } from './contactus-form/contactus-form.component';
import { FormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {PaginationDirective} from 'angular2-bootstrap-pagination/directives/pagination.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UsercountComponent } from './usercount/usercount.component';
import { ProductComponent } from './product/product.component';
import { UsertitlePipe } from './userlist/usertitle.pipe';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Home'} },
  { path: 'login', component: LoginComponent , data: {title: 'Login'}},
  { path: 'aboutus', component: AboutusComponent, data: {title: 'Aboutus'} },
  { path: 'contactus',   component: ContactusFormComponent ,data: {title: 'Contactus'}},
  { path: 'signup', component: ReactiveFormComponent,data: {title: 'Signup'} },
  { path: 'contactus/:userid',   component: ContactusFormComponent,data: {title: 'Contactus Update'} },
  { path: 'userlist', component: UserlistComponent,data: {title: 'User list'} },
  { path: 'product', component: ProductComponent, data: {title: 'Product'}},

  { path: '**', redirectTo: 'pagenotfound' },
  { path: '**',  component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    HomeMenuComponent,
    HomeComponent,
    AboutusComponent,
    NewsComponent,
    ContactusFormComponent,
    UserlistComponent,
    PageNotFoundComponent,
    PaginationDirective,
    ReactiveFormComponent,
    UsercountComponent,
    ProductComponent,
    UsertitlePipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)
    ,Ng2SearchPipeModule,Ng2OrderModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
