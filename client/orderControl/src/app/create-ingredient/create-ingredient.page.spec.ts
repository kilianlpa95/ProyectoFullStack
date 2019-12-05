import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateIngredientPage } from './create-ingredient.page';

describe('CreateIngredientPage', () => {
  let component: CreateIngredientPage;
  let fixture: ComponentFixture<CreateIngredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIngredientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateIngredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
