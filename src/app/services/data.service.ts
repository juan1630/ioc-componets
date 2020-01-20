import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componentes } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(  private http: HttpClient  ) { }

  getUsers() {

   return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() {
    return this.http.get<Componentes[]>('./assets/data/data.json');
  }

  getAlbumes() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getSuperHeroes() {
    return this.http.get<any[]>('/assets/data/superHeores.json')
    // el dalay espera la cantidad de milisengudos que taradara en ejecutar
    .pipe( delay(2000) );
  }

}
