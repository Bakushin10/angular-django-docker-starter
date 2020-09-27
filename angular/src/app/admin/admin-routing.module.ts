import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';


const routes: Routes = [
    {
      path: '',
      component: AdminComponent,
      children:[
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'settings',
            component: SettingsComponent
          },
          {
            path: 'manage',
            component: ManageUsersComponent
          }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
