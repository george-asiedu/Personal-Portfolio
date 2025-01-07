import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadChildren: () => import('./portfolio/portfolio.module')
        .then(m => m.PortfolioModule) 
    }
];
