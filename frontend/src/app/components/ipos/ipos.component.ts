import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { IPO } from '../../models/IPO';
import { IpoService } from '../../services/ipo.service';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {

  ipos: IPO[];

  constructor(private ipoService: IpoService) { }
  @Output() todoDelete: EventEmitter<IPO> = new EventEmitter();

  ngOnInit(): void {
    this.ipoService.getIpos()
      .subscribe(response => {
        this.ipos = response;
      });
  }

  onDeleteClick(id: string) {
    this.ipoService.deleteIpo(id);
  }

  onClick(ipo: IPO){
    this.todoDelete.emit(ipo);
    const index = this.ipos.indexOf(ipo);
    this.ipos.splice(index, 1);
    this.onDeleteClick(ipo.id);
    console.log('onClick has been triggered');
  }
}
