import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SandboxModule } from './sandbox';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';
import { reducer } from './reducers';
import { TablesEffects } from './effects/tables';

export const APP_IMPORTS = [
    CommonModule,
    BrowserModule,
    MaterialModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(TablesEffects),
    SandboxModule,
    ReactiveFormsModule
]