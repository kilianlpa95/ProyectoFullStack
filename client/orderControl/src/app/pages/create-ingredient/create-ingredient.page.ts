import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Ingredient } from '../../models/ingredient';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.page.html',
  styleUrls: ['./create-ingredient.page.scss'],
})
export class CreateIngredientPage implements OnInit {

  ingform: FormGroup;
  pageTitle: string;
  buttonColor: string;
  validationMessages = {
    ingname: [
      { type: 'required', message: 'Name is required.' },
      { type: 'minlength', message: 'Ingredient name must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Ingredient name cannot be more than 25 characters long.' },
    ],
    ingdesc: [
      { type: 'minlength', message: 'Description must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Description cannot be more than 200 characters long.' },
    ],
    ingprice: [
      { type: 'required', message: 'Price is required.' }
    ],
    ingimage: [
      { type: 'required', message: 'Image URL is required.' },
      { type: 'maxlength', message: 'Image URL cannot be more than 500 characters long.' },
    ]
  };

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private toast: ToastController,
              private colorService: ColorService) { }

  ingredient: Ingredient;
  paramIngredient: any;
  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.chargeUpdate();
    this.buttonColor = this.colorService.getColor();
    // this.chargeForm();
    // this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.route.snapshot.paramMap.get('id'));
    // console.log(this.id);
  }

  async chargeUpdate() {

    this.ingform = this.formBuilder.group({
      ingname: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      ingdesc: new FormControl('', Validators.compose([
        Validators.maxLength(200),
        Validators.minLength(5)
      ])),
      ingprice: new FormControl('', Validators.compose([
        Validators.required
      ])),
      ingimage: new FormControl('', Validators.compose([
        Validators.maxLength(500),
        Validators.required
      ]))
    });
    if (this.id) {
      await this.apiService.getIngredient(this.id).subscribe(
        data => {
          this.paramIngredient = data;
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
      this.ingform.patchValue({
        ingname: this.paramIngredient.name,
        ingprice: this.paramIngredient.price,
        ingdesc: this.paramIngredient.description,
        ingimage: this.paramIngredient.imgurl
      });
    }
  }

  addIngredient(values) {
    if (this.id == null) {
      this.ingredient = {
        name: values.ingname,
        price: values.ingprice,
        description: values.ingdesc,
        imgurl: values.ingimage
      };

      this.apiService.addIngredient(this.ingredient).subscribe(
        data => {
          this.ingredient = data['data'];
          this.toast.create({
            message: 'Ingredient created successfully',
            duration: 3000
          }).then((toastData) => {
            toastData.present();
          });
          this.router.navigate(['/ingredient']);
        }, (error) => {
          console.error(error);
        }
      );
    } else {
      this.ingredient = {
        name: values.ingname,
        price: values.ingprice,
        description: values.ingdesc,
        imgurl: values.ingimage
      };

      this.apiService.updateIngredient(this.ingredient, this.id).subscribe(
        data => {
          this.ingredient = data['data'];
          this.toast.create({
            message: 'Updated successfully',
            duration: 3000
          }).then((toastData) => {
            toastData.present();
          });
          this.router.navigate(['/ingredient']);
        }, (error) => {
          console.error(error);
        }
      );
    }
  }
}
