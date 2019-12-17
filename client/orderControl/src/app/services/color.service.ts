import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  color: string;

  setColor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}
