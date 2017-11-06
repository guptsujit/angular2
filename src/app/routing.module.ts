import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsComponent } from './news/news.component';
import { ContactusFormComponent } from './contactus-form/contactus-form.component';
import { UserlistComponent } from './userlist/userlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationDirective } from 'angular2-bootstrap-pagination/directives/pagination.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UsercountComponent } from './usercount/usercount.component';
import { ProductComponent } from './product/product.component';
import { UsertitlePipe } from './userlist/usertitle.pipe';
import { LoginComponent } from './login/login.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { AuthguardGuard } from './login/authguard.guard';
import { AuthService } from './service/auth.service';
const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'aboutus', component: AboutusComponent, data: { title: 'Aboutus' }, children: [{ path: 'aboutus', component: LeftmenuComponent }] },
  { path: 'contactus', component: ContactusFormComponent, data: { title: 'Contactus' } },
  { path: 'signup', component: ReactiveFormComponent, data: { title: 'Signup' } },
  { path: 'contactus/:userid', component: ContactusFormComponent, data: { title: 'Contactus Update' } },
  { path: 'userlist', component: UserlistComponent, data: { title: 'User list' }, canActivate: [AuthguardGuard]},
  { path: 'product', component: ProductComponent, data: { title: 'Product' } },
  { path: '**', redirectTo: 'pagenotfound' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ], exports: [RouterModule],
  declarations: [AboutusComponent,LeftmenuComponent,HomeComponent,PageNotFoundComponent],
  providers: [AuthguardGuard,AuthService],
})
export class RoutingModule { }
export const routingComponents = [
  UsersComponent, HeaderComponent, FooterComponent,HomeMenuComponent, NewsComponent,
  ContactusFormComponent, UserlistComponent, UsercountComponent, ProductComponent,
  UsertitlePipe, LoginComponent, ReactiveFormComponent

];
