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
  {path:"",redirectTo:'/homepage',pathMatch:'full'},
  {path:'homepage',component:MainpageComponent,
  children:[
    {path:'',component:HomepageComponent,pathMatch:'full'},
    {path:'services',component:AppservicesComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'workwithus',component:WorkwithusComponent},
    {path:'donations',component:DonationsComponent},
    {path:'infrastructure',component:InfrastructuremodelsComponent},
    {path:'localanalysis',component:LocalanalysisComponent},
    {path:'maps',component:MapsComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
