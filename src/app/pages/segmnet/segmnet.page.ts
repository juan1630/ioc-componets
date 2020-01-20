import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segmnet',
  templateUrl: './segmnet.page.html',
  styleUrls: ['./segmnet.page.scss'],
})
export class SegmnetPage implements OnInit {

  superHeroes: Observable<any>;
  publisher = '';

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes =  this.dataService.getSuperHeroes();
  }

  segmentChanged(event) {
    const valorSegmento = event.detail.value;

    if (  valorSegmento === 'todos' ) {
      this.publisher = '';
      return;
    }
    this.publisher = valorSegmento;

  }

}
