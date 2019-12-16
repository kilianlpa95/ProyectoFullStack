import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})

export class ProductPage implements OnInit {

  products: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getProducts();
  }

  ionRefresh(event) {
      setTimeout(() => {
        this.getProducts();
        event.target.complete();
      }, 500);
  }

  doRefresh() {
    this.getProducts();
  }

  getProducts() {
    this.apiService.getProducts().subscribe(
      data => {
        this.products = data['data'];
        // console.log(data['data']);
      }, (error) => {
        console.error(error);
      }
    );
  }
}
