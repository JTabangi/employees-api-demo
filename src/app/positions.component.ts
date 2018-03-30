import { Component, OnInit } from '@angular/core';
import { Position } from './data/position';
import { PositionService } from './data/position.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions: Position[];
  getPositionsSub: any;
  loadingError: boolean = false;
  constructor(private posService: PositionService) { }
  ngOnInit() {
    this.getPositionsSub = this.posService.getPositions().subscribe(positions => this.positions = positions, err => this.loadingError = true);
  }
  ngOnDestroy() {
    if (this.getPositionsSub)
      this.getPositionsSub.unsubscribe();
  }
}
