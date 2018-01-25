import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { SchoolregistrationSharedModule, UserRouteAccessService } from './shared';
import { SchoolregistrationAppRoutingModule} from './app-routing.module';
import { SchoolregistrationHomeModule } from './home/home.module';
import { SchoolregistrationAdminModule } from './admin/admin.module';
import { SchoolregistrationAccountModule } from './account/account.module';
import { SchoolregistrationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        SchoolregistrationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        SchoolregistrationSharedModule,
        SchoolregistrationHomeModule,
        SchoolregistrationAdminModule,
        SchoolregistrationAccountModule,
        SchoolregistrationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class SchoolregistrationAppModule {}
