import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    NbCardModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    PagesComponent,
    ProductsComponent,
  ],
})
export class PagesModule {
}
