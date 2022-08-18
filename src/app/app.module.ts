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
// import { ContactusComponent } from './contactus/contactus.component';
import { WorkwithusComponent } from './workwithus/workwithus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DonationsComponent } from './donations/donations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContractsComponent } from './adminfolder/contracts/contracts.component';
import { AdmindonationsComponent } from './adminfolder/admindonations/admindonations.component';
import { AdminfeedbackComponent } from './adminfolder/adminfeedback/adminfeedback.component';
import { JobapplicationsComponent } from './adminfolder/jobapplications/jobapplications.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
// import { ModalComponent } from './modal/modal.component';
// import { CarouselModule } from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    PaymentGatewayComponent,
    MainpageComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    AppservicesComponent,
    MapsComponent,
    LocalanalysisComponent,
    InfrastructuremodelsComponent,
    // ContactusComponent,
    WorkwithusComponent,
    FeedbackComponent,
    DonationsComponent,
    ContractsComponent,
    AdmindonationsComponent,
    AdminfeedbackComponent,
    JobapplicationsComponent,
    // ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CarouselModule,
    // MdbModalModule,
    GooglePayButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
