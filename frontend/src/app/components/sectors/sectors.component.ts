import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Sector } from '../../models/Sector';
import { SectorService } from '../../services/sector.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {

  sectors: Sector[];

  constructor(private sectorService: SectorService) { }
  @Output() todoDelete: EventEmitter<Sector> = new EventEmitter();
  ngOnInit(): void {
    this.sectorService.getSectors()
      .subscribe(response => {
        this.sectors = response;
      });
  }

  onDeleteClick(id: string) {
    this.sectorService.deleteSector(id);
  }

  onClick(sector: Sector){
    this.todoDelete.emit(sector);
    const index = this.sectors.indexOf(sector);
    this.sectors.splice(index, 1);
    this.onDeleteClick(sector.id);
    console.log('onClick has been triggered');
  }
}
