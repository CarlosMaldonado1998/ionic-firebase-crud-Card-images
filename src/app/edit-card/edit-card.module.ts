import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCardPageRoutingModule } from './edit-card-routing.module';

import { EditCardPage } from './edit-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditCardPageRoutingModule
  ],
  declarations: [EditCardPage]
})
export class EditCardPageModule {}
