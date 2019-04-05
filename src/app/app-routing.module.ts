import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'signup1', loadChildren: './signup1/signup1.module#Signup1PageModule' },
  { path: 'picture', loadChildren: './picture/picture.module#PicturePageModule' },
  { path: 'signup1', loadChildren: './signup1/signup1.module#Signup1PageModule' },
  { path: 'signup2', loadChildren: './signup2/signup2.module#Signup2PageModule' },
  { path: 'signup3', loadChildren: './signup3/signup3.module#Signup3PageModule' },
  { path: 'signup4', loadChildren: './signup4/signup4.module#Signup4PageModule' },
  { path: 'audio', loadChildren: './audio/audio.module#AudioPageModule' },
  { path: 'signup4', loadChildren: './signup4/signup4.module#Signup4PageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'signup5', loadChildren: './signup5/signup5.module#Signup5PageModule' },  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'reports', loadChildren: './reports/reports.module#ReportsPageModule' },
  { path: 'appointment', loadChildren: './appointment/appointment.module#AppointmentPageModule' },
  { path: 'appointments', loadChildren: './appointments/appointments.module#AppointmentsPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'firstaid', loadChildren: './firstaid/firstaid.module#FirstaidPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
