import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../ingredient';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getIngredients(){
    return this.http.get('http://localhost:40000/api/ingredients');
  }

  getIngredient(id){
    return this.http.get<any[]>('http://localhost:40000/api/ingredients/' + id);
  }

  deleteIngredient(id){
    return this.http.delete('http://localhost:40000/api/ingredients/' + id);
  }

  addIngredient(ingredient: any){
    return this.http.post<Ingredient>('http://localhost:40000/api/ingredients', ingredient);
  }
}
