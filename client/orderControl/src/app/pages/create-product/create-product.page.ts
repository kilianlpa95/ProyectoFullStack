import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {

  prodform: FormGroup;
  pageTitle: string;
  validationMessages = {
    prodname: [
      { type: 'required', message: 'Name is required.' },
      { type: 'minlength', message: 'Product name must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Product name cannot be more than 25 characters long.' },
    ],
    proddesc: [
      { type: 'minlength', message: 'Description must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Description cannot be more than 200 characters long.' },
    ],
    prodprice: [
      { type: 'required', message: 'Price is required.' }
    ],
    prodimage: [
      { type: 'required', message: 'Image URL is required.' },
      { type: 'maxlength', message: 'Image URL cannot be more than 500 characters long.' },
    ]
  };

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private toast: ToastController) { }

  product: Product;
  paramProduct: any;
  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.chargeUpdate();
  }

  async chargeUpdate() {

    this.prodform = this.formBuilder.group({
      prodname: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      proddesc: new FormControl('', Validators.compose([
        Validators.maxLength(200),
        Validators.minLength(5)
      ])),
      prodprice: new FormControl('', Validators.compose([
        Validators.required
      ])),
      prodimage: new FormControl('', Validators.compose([
        Validators.maxLength(500),
        Validators.required
      ]))
    });
    if (this.id) {
      await this.apiService.getProduct(this.id).subscribe(
        data => {
          this.paramProduct = data;
          this.chargeForm();
        }, (error) => {
          console.error(error);
        }
      );
    } else {
      this.pageTitle = 'Create';
    }
  }

  chargeForm() {
    if (this.id) {
      this.pageTitle = 'Update';
      this.prodform.patchValue({
        prodname: this.paramProduct.name,
        prodprice: this.paramProduct.price,
        proddesc: this.paramProduct.description,
        prodimage: this.paramProduct.imgurl
      });
    }
  }

  addProduct(values) {
    if (this.id == null) {
      this.product = {
        name: values.prodname,
        price: values.prodprice,
        description: values.proddesc,
        imgurl: values.prodimage
      };

      this.apiService.addProduct(this.product).subscribe(
        data => {
          this.product = data['data'];
        }, (error) => {
          console.error(error);
        }
      );
      this.toast.create({
        message: 'Product created successfully',
        duration: 3000
      }).then((toastData) => {
        toastData.present();
      });
      this.router.navigate(['/product']);
    } else {
      this.product = {
        name: values.prodname,
        price: values.prodprice,
        description: values.proddesc,
        imgurl: values.prodimage
      };

      this.apiService.updateProduct(this.product, this.id).subscribe(
        data => {
          this.product = data['data'];
        }, (error) => {
          console.error(error);
        }
      );
      this.toast.create({
        message: 'Updated successfully',
        duration: 3000
      }).then((toastData) => {
        toastData.present();
      });
      this.router.navigate(['/product']);
    }
  }
}
