import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.page.html',
  styleUrls: ['./ingredient-details.page.scss'],
})
export class IngredientDetailsPage implements OnInit {

  constructor(private route: Router, private userService: UserService) { }

  ingredient: Ingredient = { id: null, name: '', price: null, description: '', imgurl: '' };

  ngOnInit() {
    this.userService.getIngredients().subscribe(
      res => {
        this.ingredient = res;
        console.log(data['data']);
      }, (error) => {
        console.error(error);
      }
    )
  }



  async getMillUser() {
      await this.api.getIngredient(this.route.snapshot.paramMap.get('id'))
        .subscribe(res => {
          console.log(res);
          this.millUser = res;
          this.isLoadingResults = false;
        }, err => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }
  }

}
