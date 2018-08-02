import { Routes } from '@angular/router'; 
import { authGuard } from './Auth-guard.service';
import { AcessoComponent } from './acesso/acesso.component';
import { AdminComponent } from './admin/admin.component';
import { AdminIndexComponent } from './admin/routes/admin-index/admin-index.component';
import { AdminUsuariosComponent } from './admin/routes/admin-usuarios/admin-usuarios.component';
import { ResetPasswordComponent } from './acesso/reset-password/reset-password.component';

export const ROUTER: Routes = [
    
    { path: '', component: AcessoComponent },
    {path: 'admin', component: AdminComponent, canActivate:[authGuard], children:[
        {path:'', component:AdminIndexComponent},
        { path:'usuarios', component:AdminUsuariosComponent}
    ] },
    {path: 'resetPassoword', component:ResetPasswordComponent }

] 