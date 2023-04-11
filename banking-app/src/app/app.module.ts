import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { WithdrawFormComponent } from './withdraw-form/withdraw-form/withdraw-form.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money/transfer-money.component';
import { DepositFormComponent } from './deposit-form/deposit-form/deposit-form.component';
import { CheckBalanceComponent } from './check-balance/check-balance/check-balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgbCarousel, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    HeaderComponent,
    FooterComponent,
    AddCustomerComponent,
    DeleteCustomerComponent,
    RegisterComponent,
    LogoutComponent,
    CustomerRegistrationComponent,
    
    WithdrawFormComponent,
    TransferMoneyComponent,
    DepositFormComponent,
    CheckBalanceComponent,
    DashboardComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarousel,
    NgbCarouselModule
    // FormsModule,
    // ReactiveFormsModule

  ],
  providers: [
    
    // AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
