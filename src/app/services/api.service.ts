import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SearchObject, Table, ResultTable } from '../models';


@Injectable()
export class ApiService {
  private API_PATH: string = 'http://dbuwsledt162698:4000/api';

  constructor(private http: Http) {}

  searchTables(query: SearchObject): Observable<Table[]> {
    let params = Object.assign({}, {
      sorta: query.sorta,
      empty: query.showEmpty,
      tname: query.tname.length < 1 ? 'empty' : query.tname,
      fname: query.fname.length < 1 ? 'empty' : query.fname
    })
    return this.http.get(`${this.API_PATH}/search/${params.tname}/${params.fname}/${params.sorta}/${params.empty}`)
      .map(res => res.json() || []);
  }

  queryTable(tableName: string): Observable<ResultTable> {
    return this.http.get(`${this.API_PATH}/query-table/${tableName}`)
      .map(res => res.json() || {});
  }
}