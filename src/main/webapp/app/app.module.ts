import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { GatewayMicroServiceAppSharedModule, UserRouteAccessService } from './shared';
import { GatewayMicroServiceAppHomeModule } from './home/home.module';
import { GatewayMicroServiceAppAdminModule } from './admin/admin.module';
import { GatewayMicroServiceAppAccountModule } from './account/account.module';
import { GatewayMicroServiceAppEntityModule } from './entities/entity.module';

import { LayoutRoutingModule } from './layouts';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

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
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        GatewayMicroServiceAppSharedModule,
        GatewayMicroServiceAppHomeModule,
        GatewayMicroServiceAppAdminModule,
        GatewayMicroServiceAppAccountModule,
        GatewayMicroServiceAppEntityModule
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
export class GatewayMicroServiceAppAppModule {}
