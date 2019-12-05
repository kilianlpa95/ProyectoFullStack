import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.page.html',
  styleUrls: ['./ingredient.page.scss'],
})

export class IngredientPage implements OnInit {

  ingredients: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.userService.getIngredients().subscribe(
      data => {
        this.ingredients = data['data'];
        console.log(data['data']);
      }, (error) => {
        console.error(error);
      }
    )
  }
/* Pasarlo a página create poner funcionalidad boton plus
  addIngredient(){
    this.userService.addIngredient().subscribe(
      data => {
        this.ingredients = data['data'];
        console.log(data['data']);
      }, (error) => {
        console.error(error);
      }
    )
  }*/
}
