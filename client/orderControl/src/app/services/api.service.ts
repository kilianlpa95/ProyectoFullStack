import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../models/ingredient';
import { Product } from '../models/product';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getIngredients() {
    return this.http.get('http://localhost:40000/api/ingredients');
  }

  getIngredient(id) {
    return this.http.get<any[]>('http://localhost:40000/api/ingredients/' + id);
  }

  deleteIngredient(id) {
    return this.http.delete('http://localhost:40000/api/ingredients/' + id);
  }

  addIngredient(ingredient: any) {
    return this.http.post<Ingredient>('http://localhost:40000/api/ingredients', ingredient);
  }

  updateIngredient(ingredient: any, id) {
    return this.http.put<Ingredient>('http://localhost:40000/api/ingredients/' + id, ingredient);
  }

  getProducts() {
    return this.http.get('http://localhost:40000/api/products');
  }

  getProduct(id) {
    return this.http.get<any[]>('http://localhost:40000/api/products/' + id);
  }

  deleteProduct(id) {
    return this.http.delete('http://localhost:40000/api/products/' + id);
  }

  addProduct(product: any) {
    return this.http.post<Product>('http://localhost:40000/api/products', product);
  }

  updateProduct(product: any, id) {
    return this.http.put<Product>('http://localhost:40000/api/products/' + id, product);
  }

  getUsername(username) {
    return this.http.get<any[]>('http://localhost:40000/api/users/username/' + username);
  }

  getUsers() {
    return this.http.get<any[]>('http://localhost:40000/api/users');
  }

  addUser(user: any) {
    return this.http.post<User[]>('http://localhost:40000/api/users', user);
  }

  login(userName, userPassword, user: any) {
    return this.http.post<User[]>('http://localhost:40000/api/users/' + userName + '/' + userPassword, user);
  }
}
