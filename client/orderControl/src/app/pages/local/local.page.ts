import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService, Product } from '../../services/storage.service';
import { Platform, ToastController, /*List*/ } from '@ionic/angular';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  products: Product[] = [];

  newProduct: Product = <Product>{};

 // @ViewChild('myList')myList: List;

  constructor(private storageService: StorageService,
              private platform: Platform) { 

    this.platform.ready().then(() => {
      this.loadProducts();
    });
  }

  addProduct(){
    this.storageService.addProduct(this.newProduct).then(product => {
      this.newProduct = <Product>{};
      //this.showToast();
      this.loadProducts();
    });
  }

  loadProducts(){
    this.storageService.getProducts().then(products => {
      this.products = products;
    });
  }

  updateProduct(product: Product){
    product.name = `UPDATED: ${product.name}`;

    this.storageService.updateProduct(product).then(product => {
      //this.myList.closeSlidingItems();
      this.loadProducts();
    })
  }

  deleteProduct(product: Product){
    this.storageService.deleteProduct(product.id).then(product => {
      this.loadProducts();
    });
  }

  ngOnInit() {
  }

}
