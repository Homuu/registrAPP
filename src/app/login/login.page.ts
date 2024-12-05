import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  users = [
    { username: 'admin', password: '1234' },
    { username: 'homu', password: 'homu015' },
    { username: 'martin', password: 'martin123' },
   
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
      this.router.navigate(['/inicioalumno']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}