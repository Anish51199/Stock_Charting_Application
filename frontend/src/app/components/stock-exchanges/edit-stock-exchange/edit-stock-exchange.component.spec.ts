import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStockExchangeComponent } from './edit-stock-exchange.component';

describe('EditStockExchangeComponent', () => {
  let component: EditStockExchangeComponent;
  let fixture: ComponentFixture<EditStockExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStockExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStockExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
