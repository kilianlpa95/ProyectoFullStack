import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateProductsPage } from './create-products.page';

describe('CreateProductsPage', () => {
  let component: CreateProductsPage;
  let fixture: ComponentFixture<CreateProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
