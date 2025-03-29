import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'find-hotels',
        loadComponent: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:63402/remoteEntry.js',
            exposedModule: './Component'
          }).then(m => m.AppComponent)
    },
    {
        path: 'account-management',
        loadComponent: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:63414/remoteEntry.js',
            exposedModule: './Component'
          }).then(m => m.AppComponent)
    },
];
