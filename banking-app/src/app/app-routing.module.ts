import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CheckBalanceComponent } from './check-balance/check-balance/check-balance.component';
import { WithdrawFormComponent } from './withdraw-form/withdraw-form/withdraw-form.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money/transfer-money.component';
import { DepositFormComponent } from './deposit-form/deposit-form/deposit-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', redirectTo: '/user-login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'customer-login', component: CustomerLoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'customer-registration', component: CustomerRegistrationComponent},

  { path: 'check-balance', component: CheckBalanceComponent},
  { path: 'withdraw-form', component: WithdrawFormComponent},
  { path: 'transfer-money', component: TransferMoneyComponent},
  { path: 'deposit-form', component: DepositFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
