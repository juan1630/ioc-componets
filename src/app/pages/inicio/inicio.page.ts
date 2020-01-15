import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componentes } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componentes[]>;

  constructor( private menuCtl: MenuController, private dataService: DataService   ) { }

  ngOnInit() {

    this.componentes =  this.dataService.getMenuOpts();
  }

  toggleMenu() {
    this.menuCtl.toggle();

  }

}

