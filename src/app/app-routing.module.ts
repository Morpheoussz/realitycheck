import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*** Components ***/

// Admin
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashComponent } from './pages/admin-dash/admin-dash.component';
import { AdmUsersComponent } from './pages/adm-users/adm-users.component';
import { AdmReferralsComponent } from './pages/adm-referrals/adm-referrals.component';
import { AdmSendmailComponent } from './pages/adm-sendmail/adm-sendmail.component';
import { AdmRewardsComponent } from './pages/adm-rewards/adm-rewards.component';
import { AdmNewsfeedComponent } from './pages/adm-newsfeed/adm-newsfeed.component';
import { AdmCtrlRewardsComponent } from './pages/adm-ctrl-rewards/adm-ctrl-rewards.component';
import { AdmDeactivatedUsersComponent } from './pages/adm-deactivated-users/adm-deactivated-users.component';
import { AdmDeactivatedRewardsComponent } from './pages/adm-deactivated-rewards/adm-deactivated-rewards.component';


// Users
import { RealitycheckComponent } from './pages/realitycheck/realitycheck.component';
import { TermsComponent } from './pages/terms/terms.component';


import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { VerificationComponent } from './pages/verification/verification.component';

import { ReferralComponent } from './pages/referral/referral.component';

import { ForgotpwdComponent } from './pages/forgotpwd/forgotpwd.component';
import { ResetpwdComponent } from './pages/resetpwd/resetpwd.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { IncomeComponent } from './pages/income/income.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { RewardsComponent } from './pages/rewards/rewards.component';


import { IncomeTransComponent } from './pages/income-trans/income-trans.component';
import { ExpensesTransComponent } from './pages/expenses-trans/expenses-trans.component';
import { ReferralTransComponent } from './pages/referral-trans/referral-trans.component';
// Resolvers

import { AdminresolverService } from './resolvers/adminresolver.service';
import { AdmusersresolverService } from './resolvers/admusersresolver.service';
import { AdmrewardsresolverService } from './resolvers/admrewardsresolver.service';
import { AdmdeactivatedusersresolverService } from './resolvers/admdeactivatedusersresolver.service';
import { AdmdeactivatedrewardsresolverService } from './resolvers/admdeactivatedrewardsresolver.service';
import { AdmreferralsresolverService } from './resolvers/admreferralsresolver.service';

import { ResetpwdresolverService } from './resolvers/resetpwdresolver.service';
import { EmailverificationresolverService } from './resolvers/emailverificationresolver.service';
import { ReferralsignupresolverService } from './resolvers/referralsignupresolver.service';

import { DashboardresolverService } from './resolvers/dashboardresolver.service';
import { MainresolverService } from './resolvers/mainresolver.service';
import { ReferralresolverService } from './resolvers/referralresolver.service';
import { TranshistoryresolverService } from './resolvers/transhistoryresolver.service';
import { ProfileresolverService } from './resolvers/profileresolver.service';

// Automatically executes

const routes: Routes = [

  { path : '', component : RealitycheckComponent },// , resolve:{ siteres : SiteresolverService }
  { path : 'sign-in', component : SignInComponent },
  { path : 'sign-up', component : SignUpComponent },
  { path : 'terms', component : TermsComponent },

  { path : 'ref/:id', component : ReferralComponent, },//resolve:{ refff : ReferralsignupresolverService }

  { path : 'forgot-password', component : ForgotpwdComponent, },//resolve:{ siteres : SiteresolverService }
  { path : 'reset-password/:idi', component : ResetpwdComponent, },//resolve:{ respass : ResetpwdresolverService, siteres : SiteresolverService  } 

  { path : 'activate-account/:idi', component: VerificationComponent, }, //resolve:{ activate : EmailverificationresolverService, siteres : SiteresolverService }

  // Admin
  { path : 'realitymanagerdatacenter', component : AdminLoginComponent },
  { path : 'omegarealitymangerdata', component : AdminDashComponent,
    children:[
      { path : '', component : AdmUsersComponent},//  resolve:{ admusers : AdmusersresolverService}
      { path : 'deactivated-users', component : AdmDeactivatedUsersComponent },//resolve:{ admdeausers : AdmdeactivatedusersresolverService}
      { path : 'adm-referrals', component : AdmReferralsComponent },
      { path : 'ctr-rewards', component : AdmCtrlRewardsComponent },
      { path : 'adm-rewards', component : AdmRewardsComponent },//  resolve:{ admrew : AdmrewardsresolverService }
      { path : 'deactivated-rewards', component : AdmDeactivatedRewardsComponent, },// resolve:{ admderew : AdmdeactivatedrewardsresolverService }
      { path : 'adm-newsfeed', component : AdmNewsfeedComponent },

      { path : 'sendmail', component : AdmSendmailComponent},
      
    ], 
  },// resolve:{ admdash : AdminresolverService }

  // Users

  { path : 'dashboard', component : DashboardComponent,

    children:[

      { path : '', component: MainComponent, },// resolve: { main : DashboardmainresolverService }
      { path : 'profile', component : ProfileComponent, },//resolve:{ pro : ProfileresolverService }
      { path : 'income', component : IncomeComponent, },
      { path : 'expenses', component : ExpensesComponent, },
      { path : 'rewards', component : RewardsComponent },
      { path : 'referrals', component : ReferralTransComponent, },//resolve:{ referres : ReferralresolverService }
      { path : 'income-trans', component : IncomeTransComponent },
      { path : 'expenses-trans', component : ExpensesTransComponent }

    ]
    ,resolve:{ } //dash : DashboardresolverService, siteres : SiteresolverService 
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
