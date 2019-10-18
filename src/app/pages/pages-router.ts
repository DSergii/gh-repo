import { Routes } from '@angular/router';
import { BlocksComponent } from './blocks/blocks.component';
import { PagesComponent } from './pages.component';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';
import {DeliveryResolve} from './detail/detail.resolver';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '', redirectTo: 'blocks', pathMatch: 'full',
      }, {
        path: 'blocks', component: BlocksComponent
      }, {
        path: 'table', component: TableComponent
      }, {
        path: 'detail', component: DetailComponent,
        resolve: {
          owner: DeliveryResolve
        }
      }
    ]
  }
];