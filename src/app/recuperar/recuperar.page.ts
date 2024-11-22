import { Component} from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {

  showPassword: boolean = false;

  constructor() {}


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
