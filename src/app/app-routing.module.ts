import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path:"",redirectTo:'/Homepage',pathMatch:'full'},
  {path:'Homepage',component:MainpageComponent,pathMatch:'full',
  children:[
    {path:'',component:HomepageComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
