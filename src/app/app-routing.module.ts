import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindonationsComponent } from './adminfolder/admindonations/admindonations.component';
import { AdminfeedbackComponent } from './adminfolder/adminfeedback/adminfeedback.component';
import { AdminmapsComponent } from './adminfolder/adminmaps/adminmaps.component';
import { ContractsComponent } from './adminfolder/contracts/contracts.component';
import { JobapplicationsComponent } from './adminfolder/jobapplications/jobapplications.component';
import { AppservicesComponent } from './appservices/appservices.component';
// import { ContactusComponent } from './contactus/contactus.component';
import { DonationsComponent } from './donations/donations.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfrastructuremodelsComponent } from './infrastructuremodels/infrastructuremodels.component';
import { LocalanalysisComponent } from './localanalysis/localanalysis.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MapsComponent } from './maps/maps.component';
import { WorkwithusComponent } from './workwithus/workwithus.component';

const routes: Routes = [
  { path: '', redirectTo: '/sih/homepage', pathMatch: 'full' },
  {
    path: 'sih',
    component: MainpageComponent,
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: HomepageComponent, pathMatch: 'full' },
      { path: 'services', component: AppservicesComponent, pathMatch: 'full' },
      // { path: 'contactus', component: ContactusComponent, pathMatch: 'full' },
      { path: 'feedback', component: FeedbackComponent, pathMatch: 'full' },
      { path: 'workwithus', component: WorkwithusComponent, pathMatch: 'full' },
      { path: 'donations', component: DonationsComponent, pathMatch: 'full' },
      {
        path: 'infrastructure',
        component: InfrastructuremodelsComponent,
        pathMatch: 'full',
      },
      {
        path: 'localanalysis',
        component: LocalanalysisComponent,
        pathMatch: 'full',
      },
      { path: 'maps', component: MapsComponent, pathMatch: 'full' },
    ],
  },
  {
    path: 'sih/admin',
    component: MainpageComponent,
    children: [
      { path: '', redirectTo: 'adminhomepage', pathMatch: 'full' },
      { path: 'adminhomepage', component: HomepageComponent, pathMatch: 'full' },
      {
        path: 'admindonations',
        component: AdmindonationsComponent,
        pathMatch: 'full',
      },
      {
        path: 'feedbacks',
        component: AdminfeedbackComponent,
        pathMatch: 'full',
      },
      { path: 'contracts', component: ContractsComponent, pathMatch: 'full' },
      {
        path: 'jobapplications',
        component: JobapplicationsComponent,
        pathMatch: 'full',
      },
      {
        path: 'adminmaps',
        component:AdminmapsComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
