import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componentes } from '../interfaces/interfaces';

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

}
