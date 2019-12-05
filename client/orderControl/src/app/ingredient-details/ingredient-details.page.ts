import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.page.html',
  styleUrls: ['./ingredient-details.page.scss'],
})
export class IngredientDetailsPage implements OnInit {

  ingredient: any[] = [];

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //this.getIngredient();
    console.log(this.route.snapshot.paramMap.get('id'));
    this.userService.getIngredient(this.route.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.ingredient = data;
        console.log(data);
        console.log(this.ingredient);
        //console.log(this.ingredient['name']);
      }, (error) => {
        console.error(error);
      }
    )
  }

  async getIngredient(){
  }
}
