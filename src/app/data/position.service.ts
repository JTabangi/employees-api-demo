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
  savePosition(position: Position) : Observable<any> {
    return this.http.put<any>('https://obscure-stream-52298.herokuapp.com/position/' + position._id, position);
  }
  getPosition(id) : Observable<Position[]> {
    return this.http.get<Position[]>('https://obscure-stream-52298.herokuapp.com/position/' + id);
  }
}

