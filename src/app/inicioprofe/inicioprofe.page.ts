import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicioprofe',
  templateUrl: './inicioprofe.page.html',
  styleUrls: ['./inicioprofe.page.scss'],
})
export class InicioprofePage implements OnInit {
  currentDate: string = '';  // Variable para la fecha
  greeting: string = '';  // Variable para el saludo

  constructor() {}

  ngOnInit() {
    const date = new Date();

    // Obtener la hora actual
    const hours = date.getHours();

    // Determinar el saludo según la hora
    if (hours >= 6 && hours < 12) {
      this.greeting = 'Buenos días';
    } else if (hours >= 12 && hours < 18) {
      this.greeting = 'Buenas tardes';
    } else {
      this.greeting = 'Buenas noches';
    }

    // Formatear la fecha actual
    this.currentDate = date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}