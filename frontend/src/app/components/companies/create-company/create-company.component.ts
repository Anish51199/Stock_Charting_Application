import { Component, OnInit } from '@angular/core';

import { Company } from '../../../models/Company';
import { CompanyService } from 'src/app/services/company.service';
import {Router} from '@angular/router';
import {CompaniesComponent} from '../companies.component';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  company: Company = {
    name: '',
    code: '',
    turnover: '',
    ceo: '',
    boardOfDirectors: '',
    sectorName: '',
    description: ''
  };
  private CompanyField: CompaniesComponent ;

  constructor(private companyService: CompanyService,  private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
      this.companyService.addCompany(this.company);
      this.router.navigate(['/companies']);
      this.CompanyField.ngOnInit();
  }
}
