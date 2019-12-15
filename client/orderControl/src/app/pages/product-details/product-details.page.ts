import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})

export class ProductDetailsPage implements OnInit {

  product: any[] = [];

  id = this.route.snapshot.paramMap.get('id');

  constructor(private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute,
              private toast: ToastController) { }

  ngOnInit() {
    this.getProduct();
  }

  async getProduct() {
    // console.log(this.route.snapshot.paramMap.get('id'));
    await this.apiService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.product = data;
      }, (error) => {
        console.error(error);
      }
    );
  }

  presentAlertConfirm(id: any) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Are you sure?!';
    alert.message = '<strong>You\'re going to delete this product</strong>!';
    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary'
      }, {
        text: 'Delete',
        handler: () => {
          this.deleteProduct(id);
        }
      }
    ];
    document.body.appendChild(alert);
    return alert.present();
  }

  async deleteProduct(id: any) {
    this.toast.create({
      message: 'Product deleted successfully',
      duration: 3000
    }).then((toastData) => {
      toastData.present();
    });
    await this.apiService.deleteProduct(id)
      .subscribe(res => {
        this.router.navigate(['/product']);
      }, err => {
        console.log(err);
      });
  }

  async updateProduct(id: any) {
    this.router.navigate(['/create-product/' + id]);
  }
}
