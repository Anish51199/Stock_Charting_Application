import { Component, OnInit } from '@angular/core';

import { Sector } from '../../../models/Sector';
import { SectorService } from '../../../services/sector.service';
import {Router} from '@angular/router';
import {SectorsComponent} from '../sectors.component';

@Component({
  selector: 'app-create-sector',
  templateUrl: './create-sector.component.html',
  styleUrls: ['./create-sector.component.css']
})
export class CreateSectorComponent implements OnInit {

  sector: Sector = {
    name: '',
    description: ''
  };

  constructor(private sectorService: SectorService, private router: Router) { }
  private  secCons: SectorsComponent;
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.router.navigate(['/sectors']);
    this.sectorService.addSector(this.sector);
    this.secCons.ngOnInit();
  }
}
