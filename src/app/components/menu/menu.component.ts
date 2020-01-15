import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componentes } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  componentes: Observable <Componentes[]>;

  constructor( private dataService: DataService  ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

}
