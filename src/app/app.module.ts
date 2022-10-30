import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { AdminDashComponent } from './pages/admin-dash/admin-dash.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotpwdComponent } from './pages/forgotpwd/forgotpwd.component';
import { ResetpwdComponent } from './pages/resetpwd/resetpwd.component';
import { ReferralComponent } from './pages/referral/referral.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { IncomeComponent } from './pages/income/income.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { IncomeTransComponent } from './pages/income-trans/income-trans.component';
import { ExpensesTransComponent } from './pages/expenses-trans/expenses-trans.component';
import { ReferralTransComponent } from './pages/referral-trans/referral-trans.component';
import { AdmUsersComponent } from './pages/adm-users/adm-users.component';
import { AdmCtrlRewardsComponent } from './pages/adm-ctrl-rewards/adm-ctrl-rewards.component';
import { AdmReferralsComponent } from './pages/adm-referrals/adm-referrals.component';
import { AdmSendmailComponent } from './pages/adm-sendmail/adm-sendmail.component';
import { AdmRewardsComponent } from './pages/adm-rewards/adm-rewards.component';
import { AdmNewsfeedComponent } from './pages/adm-newsfeed/adm-newsfeed.component';
import { AdmDeactivatedUsersComponent } from './pages/adm-deactivated-users/adm-deactivated-users.component';
import { AdmDeactivatedRewardsComponent } from './pages/adm-deactivated-rewards/adm-deactivated-rewards.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { RealitycheckComponent } from './pages/realitycheck/realitycheck.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { TermsComponent } from './pages/terms/terms.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashComponent,
    AdminLoginComponent,
    SignInComponent,
    SignUpComponent,
    ForgotpwdComponent,
    ResetpwdComponent,
    ReferralComponent,
    DashboardComponent,
    MainComponent,
    ProfileComponent,
    IncomeComponent,
    ExpensesComponent,
    IncomeTransComponent,
    ExpensesTransComponent,
    ReferralTransComponent,
    AdmUsersComponent,
    AdmReferralsComponent,
    AdmSendmailComponent,
    AdmRewardsComponent,
    AdmNewsfeedComponent,
    AdmDeactivatedUsersComponent,
    AdmDeactivatedRewardsComponent,
    RewardsComponent,
    RealitycheckComponent,
    VerificationComponent,
    TermsComponent,
    AdmCtrlRewardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({closeButton:true}),
    NgxPaginationModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    CookieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
