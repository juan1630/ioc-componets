import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() {
    this.customPickerOptions = {
      buttons:[{
        text: 'save',
        handler: ( evento ) => { console.log(evento); }
      }, {
        text: 'Log',
        handler: () => {
          console.log('click');
          return false;
        }
      }]
    }
  }

  ngOnInit() {
  }

  cambioFecha(event) {
    console.log(event);
    console.log( 'Date', new Date( event.detail.value ) );
  }

}
