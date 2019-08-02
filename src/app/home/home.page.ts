import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name = '';
  radioClock = '';
  radioTrain = '';
  radioWork = '';
  select;

  constructor(private router: Router) {}
  Submit() {
    if (this.select === 'radioClock') {
      this.router.navigate(['clock'], {queryParams: {name: this.name, radioClock: this.radioClock, }});
    }
    if (this.select === 'radioTrain') {
      this.router.navigate(['train'], {queryParams: {name: this.name, radioTrain: this.radioTrain, }});
    }
    if (this.select === 'radioWork') {
      this.router.navigate(['work'], {queryParams: {name: this.name, radioWork: this.radioWork, }});
    }
  }

}
