import { Injectable } from '@angular/core';
import { Napon } from './napon';

@Injectable({
  providedIn: 'root'
})
export class NaponiService {
  naponi: Napon[] = [];

  constructor() {
    this.naponi.push(
      new Napon(5, 6, 7),
      new Napon(10, 11, 12),
      new Napon(15, 16, 17)
    );
  }
}
