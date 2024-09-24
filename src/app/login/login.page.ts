import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,
  FormControl,
  Validators,
  FormBuilder} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) { 
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required)
    })

  }
  
  

  ngOnInit() {
  }

  

}