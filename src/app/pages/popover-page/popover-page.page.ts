import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopInfoComponent } from '../../components/pop-info/pop-info.component';

@Component({
  selector: 'app-popover-page',
  templateUrl: './popover-page.page.html',
  styleUrls: ['./popover-page.page.scss'],
})
export class PopoverPagePage implements OnInit {

  constructor(  private popOverCtrl: PopoverController ) { }

  ngOnInit() {
  }

 async mostrarPop( event ) {
    const popOver = await this.popOverCtrl.create({
      component: PopInfoComponent,
      event,
      // le indicamos que componente disparo el evento
      mode: 'ios',
      // especificamos el estilo que tedra en ambos sistemas operativos
      backdropDismiss: false
      // le decimos que por fuerza debe de interaptuar con el pop over
    });

    await popOver.present();

    const { data } = await popOver.onDidDismiss();

    console.log('padre', data);
  }

}
