import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.page.html',
  styleUrls: ['./ingredient-details.page.scss'],
})

export class IngredientDetailsPage implements OnInit {

  ingredient: any[] = [];

  id = this.route.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute,
              private toast: ToastController) { }

  ngOnInit() {
    this.getIngredient();
  }

  async getIngredient() {
    // console.log(this.route.snapshot.paramMap.get('id'));
    await this.apiService.getIngredient(this.route.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.ingredient = data;
        // console.log(data);
        // console.log(this.ingredient);
        // console.log(this.ingredient['name']);
      }, (error) => {
        console.error(error);
      }
    );
  }

  presentAlertConfirm(id: any) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Are you sure?!';
    alert.message = '<strong>You\'re going to delete this ingredient</strong>!';
    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary'
      }, {
        text: 'Delete',
        handler: () => {
          this.deleteIngredient(id);
        }
      }
    ];
    document.body.appendChild(alert);
    return alert.present();
  }

  async deleteIngredient(id: any) {
    this.toast.create({
      message: 'Ingredient deleted successfully',
      duration: 3000
    }).then((toastData) => {
      toastData.present();
    });
    await this.apiService.deleteIngredient(id)
      .subscribe(res => {
        this.router.navigate(['/ingredient']);
      }, err => {
        console.log(err);
      });
  }

  async updateIngredient(id: any) {
    this.router.navigate(['/create-ingredient/' + id]);
  }
}
