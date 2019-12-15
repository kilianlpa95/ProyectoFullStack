import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientDetailsPageRoutingModule } from './ingredient-details-routing.module';

import { IngredientDetailsPage } from './ingredient-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientDetailsPageRoutingModule
  ],
  declarations: [IngredientDetailsPage]
})
export class IngredientDetailsPageModule {}
