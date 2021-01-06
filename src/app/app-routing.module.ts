import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './skeleton/body/calendar/calendar.component';
import { IndexComponent } from './skeleton/body/index/index.component';
import { LoginComponent } from './skeleton/body/login/login.component';
import { RegisterComponent } from './skeleton/body/register/register.component';
import { FooterComponent } from './skeleton/footer/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },{
    path: 'calendar',
    component: CalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
