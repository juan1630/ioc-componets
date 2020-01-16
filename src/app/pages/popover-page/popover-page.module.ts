import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPagePageRoutingModule } from './popover-page-routing.module';

import { PopoverPagePage } from './popover-page.page';
import { PopInfoComponent } from '../../components/pop-info/pop-info.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  entryComponents: [
    PopInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PopoverPagePage]
})
export class PopoverPagePageModule {}
