import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppservicesComponent } from './appservices/appservices.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DonationsComponent } from './donations/donations.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfrastructuremodelsComponent } from './infrastructuremodels/infrastructuremodels.component';
import { LocalanalysisComponent } from './localanalysis/localanalysis.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MapsComponent } from './maps/maps.component';
import { WorkwithusComponent } from './workwithus/workwithus.component';

const routes: Routes = [
  { path: "", redirectTo: '/sih/homepage', pathMatch: 'full' },
  {
    path: 'sih', component: MainpageComponent,
    children: [
      { path: "", redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: HomepageComponent, pathMatch: 'full' },
      { path: 'services', component: AppservicesComponent, pathMatch: "full" },
      { path: 'contactus', component: ContactusComponent, pathMatch: "full" },
      { path: 'feedback', component: FeedbackComponent, pathMatch: "full" },
      { path: 'workwithus', component: WorkwithusComponent, pathMatch: "full" },
      { path: 'donations', component: DonationsComponent, pathMatch: "full" },
      { path: 'infrastructure', component: InfrastructuremodelsComponent, pathMatch: "full" },
      { path: 'localanalysis', component: LocalanalysisComponent, pathMatch: "full" },
      { path: 'maps', component: MapsComponent, pathMatch: "full" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
