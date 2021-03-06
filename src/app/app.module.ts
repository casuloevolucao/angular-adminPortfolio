//package de dev
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ROUTER } from './app.routes';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';

//ngx bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';

//services
import { Auth } from './shared/services/Auth.service';
import { authGuard } from './shared/services/Auth-guard.service';
import { Db } from './shared/services/controlDados.service';

//firebase config
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage'

//components
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { LoginComponent } from './acesso/login/login.component';
import { ResetPasswordComponent } from './acesso/reset-password/reset-password.component';
import { AdminIndexComponent } from './admin/routes/admin-index/admin-index.component';
import { AdminUsuariosComponent } from './admin/routes/admin-usuarios/admin-usuarios.component';
import { AdminNovoUsuarioComponent } from './admin/routes/admin-novo-usuario/admin-novo-usuario.component';
import { AdminEditarUsuarioComponent } from './admin/routes/admin-editar-usuario/admin-editar-usuario.component';
import { AdminPerfilComponent } from './admin/routes/admin-perfil/admin-perfil.component';
import { AdminPageTeamComponent } from './admin/routes/pages/admin-page-team/admin-page-team.component';
import { AdminPagePortfolioComponent } from './admin/routes/pages/admin-page-portfolio/admin-page-portfolio.component';
import { AdminPageAboutComponent } from './admin/routes/pages/admin-page-about/admin-page-about.component';
import { AdminPageCategoriesPortfolioComponent } from './admin/routes/pages/admin-page-categories-portfolio/admin-page-categories-portfolio.component';
import { AdminPageHomeComponent } from './admin/routes/pages/admin-page-home/admin-page-home.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminLeftSideComponent,
    LoginComponent,
    ResetPasswordComponent,
    AdminIndexComponent,
    AdminUsuariosComponent,
    AdminNovoUsuarioComponent,
    AdminEditarUsuarioComponent,
    AdminPerfilComponent,
    AdminPageTeamComponent,
    AdminPagePortfolioComponent,
    AdminPageAboutComponent,
    AdminPageCategoriesPortfolioComponent,
    AdminPageHomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTER),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule
  ],
  providers: [Auth, authGuard, Db],
  bootstrap: [AppComponent]
})
export class AppModule { }