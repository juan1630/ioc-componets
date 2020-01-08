import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( private actionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {
  }


  // async nos regresa una promesa
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      backdropDismiss: false,
      // esta funcion no permite que el menu se desaga dando click en alguna otra parte de la pantalla
      // fuerza a elegir alguna opcion
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          // el role se aprecia mas en ios, ya que es el boton de elimar y sale en color rojo
          console.log('Delete clicked');
          // esta funcion se dispara al hacer click en el boton
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
