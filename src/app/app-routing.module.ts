import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './wizard/components/main/main.component';
import { WizardModule } from './wizard/wizard.module';


const routes: Routes = [

  { path: '', component: MainComponent },
  { path: '**', component: MainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false }),
    WizardModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
