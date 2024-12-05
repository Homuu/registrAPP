import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginprofe',
  templateUrl: './loginprofe.page.html',
  styleUrls: ['./loginprofe.page.scss'],
})
export class LoginprofePage {

  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  users = [
    { username: 'admin', password: '1234' },
    { username: 'homu', password: 'homu123' },
    { username: 'profe', password: 'profe123' },
   
  ];

  constructor(private navCtrl: NavController, private router: Router) {}
  

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    console.log('Ingresado:', this.username, this.password);
  
    const user = this.users.find(
      (u) => u.username === this.username && u.password === this.password
    );
  
    if (user) {
      console.log('Usuario encontrado:', user);
      sessionStorage.setItem('username', this.username);
      sessionStorage.setItem('password', this.password);
  
      // Redirige a la página de inicio
      this.router.navigate(['/inicioprofe']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
