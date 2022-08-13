import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppservicesComponent } from './appservices/appservices.component';
import { MapsComponent } from './maps/maps.component';
import { LocalanalysisComponent } from './localanalysis/localanalysis.component';
import { InfrastructuremodelsComponent } from './infrastructuremodels/infrastructuremodels.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WorkwithusComponent } from './workwithus/workwithus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DonationsComponent } from './donations/donations.component';
// import { CarouselModule } from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    AppservicesComponent,
    MapsComponent,
    LocalanalysisComponent,
    InfrastructuremodelsComponent,
    ContactusComponent,
    WorkwithusComponent,
    FeedbackComponent,
    DonationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
