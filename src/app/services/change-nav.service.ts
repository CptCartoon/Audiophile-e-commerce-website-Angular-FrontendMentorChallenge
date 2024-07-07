import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangeNavService {
  productNav: boolean = false;
  productNavChange = new Subject<boolean>();
  constructor() {}

  changeNav() {
    this.productNav = !this.productNav;
    this.productNavChange.next(this.productNav);
  }
}
