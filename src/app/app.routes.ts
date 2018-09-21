import { Routes } from '@angular/router'; 
import { authGuard } from './shared/services/Auth-guard.service';
import { AcessoComponent } from './acesso/acesso.component';
import { AdminComponent } from './admin/admin.component';
import { AdminIndexComponent } from './admin/routes/admin-index/admin-index.component';
import { AdminUsuariosComponent } from './admin/routes/admin-usuarios/admin-usuarios.component';
import { ResetPasswordComponent } from './acesso/reset-password/reset-password.component';
import { AdminNovoUsuarioComponent } from './admin/routes/admin-novo-usuario/admin-novo-usuario.component';
import { AdminEditarUsuarioComponent } from './admin/routes/admin-editar-usuario/admin-editar-usuario.component';
import { AdminPerfilComponent } from './admin/routes/admin-perfil/admin-perfil.component';
import { AdminPageTeamComponent } from './admin/routes/admin-page-team/admin-page-team.component';
import { AdminPagePortfolioComponent } from './admin/routes/admin-page-portfolio/admin-page-portfolio.component';
import { AdminPageAboutComponent } from './admin/routes/admin-page-about/admin-page-about.component';

export const ROUTER: Routes = [
    
    {path: '', component: AcessoComponent },
    {path: 'admin', component: AdminComponent, canActivate:[authGuard], children:[
        {path:'', component:AdminIndexComponent},
        {path:'usuarios', component:AdminUsuariosComponent},
        {path: 'novoUsuario', component: AdminNovoUsuarioComponent},
        {path: 'editarUsuario', component: AdminEditarUsuarioComponent},
        {path: 'perfil', component: AdminPerfilComponent},
        {path: 'page-team', component: AdminPageTeamComponent},
        {path: 'page-portfolio', component: AdminPagePortfolioComponent},
        {path: 'page-about', component: AdminPageAboutComponent} 

    ] },
    {path: 'resetPassoword', component:ResetPasswordComponent }

] 