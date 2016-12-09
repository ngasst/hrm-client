import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SearchObject, Table } from '../models';


@Injectable()
export class ApiService {
  private API_PATH: string = 'http://127.0.0.1:4000/api';

  constructor(private http: Http) {}

  searchTables(query: SearchObject): Observable<Table[]> {
    return this.http.post(`${this.API_PATH}/search`, query)
      .map(res => res.json() || []);
  }

  retrieveTableData(tableName: string): Observable<Table> {
    return this.http.get(`${this.API_PATH}/query/${tableName}`)
      .map(res => res.json());
  }
}