import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { StockExchange } from '../../models/StockExchange';
import { StockExchangeService } from '../../services/stock-exchange.service';

@Component({
  selector: 'app-stock-exchanges',
  templateUrl: './stock-exchanges.component.html',
  styleUrls: ['./stock-exchanges.component.css']
})
export class StockExchangesComponent implements OnInit {

  stockExchanges: StockExchange[];

  constructor(private stockExchangeService: StockExchangeService) { }

  ngOnInit(): void {
    this.stockExchangeService.getStockExchanges()
      .subscribe(response => {
        this.stockExchanges = response;
      });
  }

  // tslint:disable-next-line:typedef
  onDeleteClick(id: string) {
    this.stockExchangeService.deleteStockExchange(id);
  }
  @Output() todoDelete: EventEmitter<StockExchange> = new EventEmitter();

  // tslint:disable-next-line:typedef
  onClick(stockExchange: StockExchange){
    this.todoDelete.emit(stockExchange);
    const index = this.stockExchanges.indexOf(stockExchange);
    this.stockExchanges.splice(index, 1);
    this.onDeleteClick(stockExchange.id);
    console.log('onClick has been triggered');
  }

  // deleteTodo(stockExchange: StockExchange){
  //   console.log(todo);
  //
  // }
}
