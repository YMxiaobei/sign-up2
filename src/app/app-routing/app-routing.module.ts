import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { ContributeComponent } from '../components/contribute/contribute.component';

const routes: Routes = [
	{ path: '', redirectTo: '/contribute', pathMatch: 'full' },
	{ path: 'sign-up', component: SignUpComponent },
	{ path: 'sign-in', component: SignInComponent },
  { path: 'contribute', component: ContributeComponent  }
]

@NgModule({
  imports: [
    RouterModule.forRoot ( routes )
  ],
  exports: [
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
