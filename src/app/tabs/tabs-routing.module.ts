import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab_data_input',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../data_input/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab_analytics',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../analytics/tab_analytics.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab_news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../news/tab_news.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
