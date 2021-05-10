import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/profaktura', pathMatch: 'full' },
  { path: 'profaktura', loadChildren: './profaktura/profaktura.module#ProfakturaModule' },
  { path: 'uplatnica', loadChildren: './payment-slip/payment-slip.module#PaymentSlipModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
