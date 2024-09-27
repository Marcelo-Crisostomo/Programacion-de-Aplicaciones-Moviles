import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from './guards/autenticacion.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'protegida',
    loadChildren: () => import('./protegida/protegida.module').then(m => m.ProtegidaPageModule),
    canActivate: [AutenticacionGuard] // Protegemos esta ruta con el guard.
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AutenticacionGuard] // Ruta protegida por el guard.
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule),
  },
  {
    path: '**', // Ruta para páginas no encontradas.
    loadChildren: () => import('./no-encontrado/no-encontrado.module').then(m => m.NoEncontradoPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
