import { Component, OnInit } from '@angular/core';
import {StockExchange} from '../../../models/StockExchange';
import {StockExchangeService} from '../../../services/stock-exchange.service';

@Component({
  selector: 'app-edit-stock-exchange',
  templateUrl: './edit-stock-exchange.component.html',
  styleUrls: ['./edit-stock-exchange.component.css']
})
export class EditStockExchangeComponent implements OnInit {

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
    this.stockexchange11.updateStockExchange(this.stockExchange);
  }

}
