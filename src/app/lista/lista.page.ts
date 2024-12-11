import { Component} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage {

  textoQR: string = ''; // Variable para almacenar el texto del QR

  constructor() { }

  generateQRCode(asignatura: string, sigla: string, sala: number) {
    const fecha = new Date();
    const fechaFormateada = `${fecha.getFullYear()}${('0' + (fecha.getMonth() + 1)).slice(-2)}${('0' + fecha.getDate()).slice(-2)}`; // Formato año/mes/día

    this.textoQR = `Asignatura: ${asignatura}\nSigla: ${sigla}\nFecha: ${fechaFormateada}\nSala: ${sala}`;
  }

}
