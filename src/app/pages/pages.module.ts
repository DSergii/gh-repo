import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { BlocksComponent } from './blocks/blocks.component';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { routes } from './pages-router';
import { HttpClientModule } from '@angular/common/http';
import { RepoSearchService } from './services/repo-search.service';
import { DeliveryResolve } from './detail/detail.resolver';
import { UnsubscriberService } from './services/unsubscriber.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavigationComponent,
    BlocksComponent,
    TableComponent,
    DetailComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    RepoSearchService,
    DeliveryResolve,
    UnsubscriberService
  ]
})
export class PagesModule { }
