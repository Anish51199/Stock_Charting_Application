import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Company } from '../../models/Company';
import { CompanyService } from '../../services/company.service';
import {StockExchange} from '../../models/StockExchange';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) { }
  @Output() todoDelete: EventEmitter<Company> = new EventEmitter();
  ngOnInit(): void {
    this.companyService.getCompanies()
      .subscribe((response) => {
        this.companies = response;
      });
  }

  // tslint:disable-next-line:typedef
  onDeleteClick(id: string) {
    this.companyService.deleteCompany(id);
  }

  // tslint:disable-next-line:typedef
  onClick(company: Company){
    this.todoDelete.emit(company);
    const index = this.companies.indexOf(company);
    this.companies.splice(index, 1);
    this.onDeleteClick(company.id);
    console.log('onClick has been triggered');
  }

}
