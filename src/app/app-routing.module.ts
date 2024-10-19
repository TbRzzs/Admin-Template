import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './@views/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'views', loadChildren:() => import('./@views/view-module/view-module.module').then(m => m.ViewModuleModule) },
  {path: 'sidebar', component: SidebarComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
