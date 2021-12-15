import { Component, OnInit } from '@angular/core';

import { IPO } from '../../../models/IPO';
import { IpoService } from 'src/app/services/ipo.service';
import {Router} from '@angular/router';
import {IposComponent} from "../ipos.component";

@Component({
  selector: 'app-create-ipo',
  templateUrl: './create-ipo.component.html',
  styleUrls: ['./create-ipo.component.css']
})
export class CreateIpoComponent implements OnInit {

  ipo: IPO = {
    companyName: '',
    stockExchangeName: '',
    price: 0,
    shares: 0,
    openDateTime: '',
    remarks: ''
  };

  private ipoComp: IposComponent;
  constructor(private ipoService: IpoService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.router.navigate(['/ipos']);
    this.ipoService.addIpo(this.ipo);
    this.ipoComp.ngOnInit();
  }
}
