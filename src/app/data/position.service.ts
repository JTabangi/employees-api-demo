import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Position } from './position';

@Injectable()
export class PositionService {

  constructor(private http: HttpClient) { }
  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>('https://obscure-stream-52298.herokuapp.com/positions');
  }
}

