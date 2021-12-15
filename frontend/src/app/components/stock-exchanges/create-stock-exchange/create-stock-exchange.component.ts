import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { StockExchange } from '../../../models/StockExchange';
import { StockExchangeService } from '../../../services/stock-exchange.service';


@Component({
  selector: 'app-create-stock-exchange',
  templateUrl: './create-stock-exchange.component.html',
  styleUrls: ['./create-stock-exchange.component.css']
})
export class CreateStockExchangeComponent implements OnInit {

  stockExchange: StockExchange = {
    name: '',
    description: '',
    address: '',
    remarks : '',
  };


  constructor(private stockexchange11: StockExchangeService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
             this.stockexchange11.addStockExchange(this.stockExchange);
  }


}
