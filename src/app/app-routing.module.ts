import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {  
    path: '', component: IndexComponent
  },
  {
    path: 'index', component: IndexComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'status', component: StatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
