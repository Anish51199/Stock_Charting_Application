import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../models/Company';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { StockExchange } from '../models/StockExchange';

// const BACKEND_URL = environment.apiUrl + '/stock-exchange-service/stockExchanges/';

@Injectable({providedIn: 'root'})
export class StockExchangeService {

  url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8085/stockExchanges/';
  }

  getStockExchanges(): Observable<StockExchange[]> {
    return this.http.get<StockExchange[]>(this.url);
  }

  getStockExchange(id: string): Observable<StockExchange> {
    return this.http.get<StockExchange>(this.url + id);
  }

  getStockExchangeCompanies(id: string): Observable<Company[]> {
    return this.http.get<Company[]>(this.url + id + "/companies");
  }

  // tslint:disable-next-line:typedef
  addStockExchange(stockExchange: StockExchange) {
    this.http.post<StockExchange>(this.url, stockExchange)
      .subscribe((responseData) => {
        this.router.navigate(['/stock-exchanges']);
      });
  }

  // tslint:disable-next-line:typedef
  updateStockExchange(stockExchange: StockExchange) {
    this.http.put(this.url, stockExchange)
      .subscribe(response => {
        this.router.navigate(['/stock-exchanges']);
      });
  }

  // tslint:disable-next-line:typedef
  deleteStockExchange(id: string) {
    this.http.delete(this.url + id)
      .subscribe(response => {
        this.router.navigate(['/stock-exchanges']);
      });
  }
}

