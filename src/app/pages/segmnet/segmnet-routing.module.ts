import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmnetPage } from './segmnet.page';

const routes: Routes = [
  {
    path: '',
    component: SegmnetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmnetPageRoutingModule {}
