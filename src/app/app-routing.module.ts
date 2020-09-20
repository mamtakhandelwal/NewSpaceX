import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceComponent } from './space/space.component';

const routes: Routes = [{
  path:'space',component: SpaceComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
