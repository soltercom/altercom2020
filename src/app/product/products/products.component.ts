import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../products.service';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit, OnDestroy {

  search = new FormControl('');
  products: IProduct[] = [];
  private columnNumber = 1;
  search$ = this.search.valueChanges.pipe(debounceTime(300));
  private subs = new SubSink();

  constructor(private productsService: ProductsService, private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    const breakpoints$ = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .pipe(
        map(result => result.breakpoints)
      );

    this.subs.sink = breakpoints$.pipe(filter(b => b[Breakpoints.XSmall])).subscribe(() => this.setProducts(1));
    this.subs.sink = breakpoints$.pipe(filter(b => b[Breakpoints.Small])).subscribe(() => this.setProducts(1));
    this.subs.sink = breakpoints$.pipe(filter(b => b[Breakpoints.Medium])).subscribe(() => this.setProducts(2));
    this.subs.sink = breakpoints$.pipe(filter(b => b[Breakpoints.Large])).subscribe(() => this.setProducts(2));
    this.subs.sink = breakpoints$.pipe(filter(b => b[Breakpoints.XLarge])).subscribe(() => this.setProducts(3));

    this.onSearch();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onSearch(): any {
    this.subs.sink = this.search$.subscribe(search => this.setProducts(null, search));
  }

  setProducts(columnNumber?: number, search?: string): void {
    if (!!columnNumber) {
      this.columnNumber = columnNumber;
    }
    this.products = this.productsService.getProducts(this.columnNumber, search);
  }

}
