import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.page.html',
  styleUrls: ['./ingredient.page.scss'],
})

export class IngredientPage implements OnInit {

  ingredients: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getIngredients();
  }

  ionRefresh(event) {
      setTimeout(() => {
        this.getIngredients();
        event.target.complete();
      }, 500);
  }

  doRefresh() {
    this.getIngredients();
  }

  getIngredients() {
    this.apiService.getIngredients().subscribe(
      data => {
        this.ingredients = data['data'];
        // console.log(data['data']);
      }, (error) => {
        console.error(error);
      }
    );
  }
}
