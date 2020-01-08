import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor( public alertCtrl: AlertController ) {
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [ {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log(' Botono cancelar');
        }
      },
      {
        text: 'OK',
        cssClass: 'secondary',
        handler: () => {
          console.log('Boton OK');
        }
      }]
    });

    await alert.present();
  }


  async presentAlertPrompt() {
    const alertPrompt = await this.alertCtrl.create({
      header: 'Prompt!',
      subHeader: 'Ingresa tu nombre: ',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Ingresa tu nombre: '
        }],
        buttons: [
          {
          text: 'Ok',
          handler: ( data ) => {

            console.log('Confirm Ok', data);

            this.titulo = data.txtNombre;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

            console.log('Confirm Ok');
          }
        }]
      });

    await alertPrompt.present();
  }



}
