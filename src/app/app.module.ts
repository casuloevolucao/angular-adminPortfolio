//package de dev
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ROUTER } from './app.routes';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { Auth } from './shared/services/Auth.service';
import { authGuard } from './shared/services/Auth-guard.service';
import { Db } from './shared/services/controlDados.service';

//firebase config
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

//components
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AcessoComponent } from './acesso/acesso.component';
import { LoginComponent } from './acesso/login/login.component';
import { ResetPasswordComponent } from './acesso/reset-password/reset-password.component';
import { AdminIndexComponent } from './admin/routes/admin-index/admin-index.component';
import { AdminUsuariosComponent } from './admin/routes/admin-usuarios/admin-usuarios.component';
import { AdminNovoUsuarioComponent } from './admin/routes/admin-novo-usuario/admin-novo-usuario.component';
import { AdminEditarUsuarioComponent } from './admin/routes/admin-editar-usuario/admin-editar-usuario.component';
import { AdminPerfilComponent } from './admin/routes/admin-perfil/admin-perfil.component';
import { AdminPagesComponent } from './admin/routes/admin-pages/admin-pages.component';
import { AdminPageTeamComponent } from './admin/routes/admin-page-team/admin-page-team.component';
import { AdminPagePortfolioComponent } from './admin/routes/admin-page-portfolio/admin-page-portfolio.component';
import { AdminPageAboutComponent } from './admin/routes/admin-page-about/admin-page-about.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminLeftSideComponent,
    AcessoComponent,
    LoginComponent,
    ResetPasswordComponent,
    AdminIndexComponent,
    AdminUsuariosComponent,
    AdminNovoUsuarioComponent,
    AdminEditarUsuarioComponent,
    AdminPerfilComponent,
    AdminPagesComponent,
    AdminPageTeamComponent,
    AdminPagePortfolioComponent,
    AdminPageAboutComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTER),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [Auth, authGuard, Db],
  bootstrap: [AppComponent]
})
export class AppModule { }