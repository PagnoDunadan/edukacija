import { Component } from '@angular/core';
import { NaponiService } from './shared/naponi.service';
import { Napon } from './shared/napon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  naponi: Napon[];
  selectedNaponIndex: number;
  calculatedValue: number;

  constructor(private naponiService: NaponiService) {
    this.naponi = naponiService.naponi;
    console.log('AppComponent naponiService:', this.naponi);
  }

  onSelectionChange(newValue: string) {
    this.selectedNaponIndex = parseInt(newValue, 10);
    const u = this.naponi[this.selectedNaponIndex].U;
    const r = this.naponi[this.selectedNaponIndex].R;
    const c = this.naponi[this.selectedNaponIndex].C;
    this.calculatedValue = u + r + c;
  }

}
