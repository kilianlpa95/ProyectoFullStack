import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateIngredientPageRoutingModule } from './create-ingredient-routing.module';

import { CreateIngredientPage } from './create-ingredient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateIngredientPageRoutingModule
  ],
  declarations: [CreateIngredientPage]
})
export class CreateIngredientPageModule {}
