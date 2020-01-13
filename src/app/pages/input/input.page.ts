import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  usuario = {
    email: '',
    password: ''
  };

  constructor() { }

  name: string;

  ngOnInit() {
  }

  onSubmitTamplate() {
    console.log('form submit');
    console.log(this.usuario);
  }

}
