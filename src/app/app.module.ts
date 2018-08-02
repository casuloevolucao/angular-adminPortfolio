import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { Auth } from './Auth.service';
import { authGuard } from './Auth-guard.service';
import { Db } from './controlDados.service';
import { ROUTER } from './app.routes';
import { environment } from '../environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AcessoComponent } from './acesso/acesso.component';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { ResetPasswordComponent } from './acesso/reset-password/reset-password.component';
import { AdminIndexComponent } from './admin/routes/admin-index/admin-index.component';
import { AdminUsuariosComponent } from './admin/routes/admin-usuarios/admin-usuarios.component';



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
    CadastroComponent,
    ResetPasswordComponent,
    AdminIndexComponent,
    AdminUsuariosComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTER),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [Auth, authGuard, Db, [{provide:LOCALE_ID, setValue:'pt'}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(localePt, 'pt');