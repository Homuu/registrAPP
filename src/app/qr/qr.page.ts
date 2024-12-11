import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  texto: string = '';  // Variable para almacenar la fecha formateada

  constructor() { }

  ngOnInit() {
  }

  // Función que se ejecuta cuando el usuario hace clic en el botón
  generateQRCode() {
    const currentDate = new Date();

    // Obtenemos el año, mes y día en el formato 'año/mes/día'
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');  // Mes entre 01-12
    const day = currentDate.getDate().toString().padStart(2, '0');  // Día entre 01-31

    // Combinamos en formato 'año/mes/día'
    this.texto = `${year}/${month}/${day}`;
  }
}
