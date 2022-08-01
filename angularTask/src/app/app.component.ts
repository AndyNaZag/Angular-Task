import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './product.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SearcherComponent } from './searcher/searcher.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTask';

  searchNumber: any;
  
   
  productList: Product[] = [
    {
      partNumber: 10000,
      series: 'Lorem ipsum dolor sit amet',
      dualSize: 'Lorem ipsum dolor sit amet',
      pressureRange: 'Lorem ipsum dolor sit amet',
      connections: 'Lorem ipsum dolor sit amet',
      connectionLoc: 'Lorem ipsum dolor sit amet',
      accuracy: 'Lorem ipsum dolor sit amet',
      caseMaterial: 'Lorem ipsum dolor sit amet',
      weightingParts: 'Lorem ipsum dolor sit amet',
      fill: 'Lorem ipsum dolor sit amet',
    },
    {
      partNumber: 10001,
      series: 'Lorem ipsum dolor sit amet',
      dualSize: 'Lorem ipsum dolor sit amet',
      pressureRange: 'Lorem ipsum dolor sit amet',
      connections: 'Lorem ipsum dolor sit amet',
      connectionLoc: 'Lorem ipsum dolor sit amet',
      accuracy: 'Lorem ipsum dolor sit amet',
      caseMaterial: 'Lorem ipsum dolor sit amet',
      weightingParts: 'Lorem ipsum dolor sit amet',
      fill: 'Lorem ipsum dolor sit amet',
    },
    {
      partNumber: 10002,
      series: 'Lorem ipsum dolor sit amet',
      dualSize: 'Lorem ipsum dolor sit amet',
      pressureRange: 'Lorem ipsum dolor sit amet',
      connections: 'Lorem ipsum dolor sit amet',
      connectionLoc: 'Lorem ipsum dolor sit amet',
      accuracy: 'Lorem ipsum dolor sit amet',
      caseMaterial: 'Lorem ipsum dolor sit amet',
      weightingParts: 'Lorem ipsum dolor sit amet',
      fill: 'Lorem ipsum dolor sit amet',
    },
    {
      partNumber: 10003,
      series: 'Lorem ipsum dolor sit amet',
      dualSize: 'Lorem ipsum dolor sit amet',
      pressureRange: 'Lorem ipsum dolor sit amet',
      connections: 'Lorem ipsum dolor sit amet',
      connectionLoc: 'Lorem ipsum dolor sit amet',
      accuracy: 'Lorem ipsum dolor sit amet',
      caseMaterial: 'Lorem ipsum dolor sit amet',
      weightingParts: 'Lorem ipsum dolor sit amet',
      fill: 'Lorem ipsum dolor sit amet',
    },
    {
      partNumber: 10004,
      series: 'Lorem ipsum dolor sit amet',
      dualSize: 'Lorem ipsum dolor sit amet',
      pressureRange: 'Lorem ipsum dolor sit amet',
      connections: 'Lorem ipsum dolor sit amet',
      connectionLoc: 'Lorem ipsum dolor sit amet',
      accuracy: 'Lorem ipsum dolor sit amet',
      caseMaterial: 'Lorem ipsum dolor sit amet',
      weightingParts: 'Lorem ipsum dolor sit amet',
      fill: 'Lorem ipsum dolor sit amet',
    },
    {
      partNumber: 10005,
      series: 'Lorem ipsum dolor sit amet',
      dualSize: 'Lorem ipsum dolor sit amet',
      pressureRange: 'Lorem ipsum dolor sit amet',
      connections: 'Lorem ipsum dolor sit amet',
      connectionLoc: 'Lorem ipsum dolor sit amet',
      accuracy: 'Lorem ipsum dolor sit amet',
      caseMaterial: 'Lorem ipsum dolor sit amet',
      weightingParts: 'Lorem ipsum dolor sit amet',
      fill: 'Lorem ipsum dolor sit amet',
    },
    {
      partNumber: 10006,
      series: 'Lorem ipsum dolor sit amet',
      dualSize: 'Lorem ipsum dolor sit amet',
      pressureRange: 'Lorem ipsum dolor sit amet',
      connections: 'Lorem ipsum dolor sit amet',
      connectionLoc: 'Lorem ipsum dolor sit amet',
      accuracy: 'Lorem ipsum dolor sit amet',
      caseMaterial: 'Lorem ipsum dolor sit amet',
      weightingParts: 'Lorem ipsum dolor sit amet',
      fill: 'Lorem ipsum dolor sit amet',
    },
    {
      partNumber: 10007,
      series: 'Lorem ipsum dolor sit amet',
      dualSize: 'Lorem ipsum dolor sit amet',
      pressureRange: 'Lorem ipsum dolor sit amet',
      connections: 'Lorem ipsum dolor sit amet',
      connectionLoc: 'Lorem ipsum dolor sit amet',
      accuracy: 'Lorem ipsum dolor sit amet',
      caseMaterial: 'Lorem ipsum dolor sit amet',
      weightingParts: 'Lorem ipsum dolor sit amet',
      fill: 'Lorem ipsum dolor sit amet',
    },
    {
      partNumber: 10008,
      series: 'Lorem ipsum dolor sit amet',
      dualSize: 'Lorem ipsum dolor sit amet',
      pressureRange: 'Lorem ipsum dolor sit amet',
      connections: 'Lorem ipsum dolor sit amet',
      connectionLoc: 'Lorem ipsum dolor sit amet',
      accuracy: 'Lorem ipsum dolor sit amet',
      caseMaterial: 'Lorem ipsum dolor sit amet',
      weightingParts: 'Lorem ipsum dolor sit amet',
      fill: 'Lorem ipsum dolor sit amet',
    },
    {
      partNumber: 10009,
      series: 'Lorem ipsum dolor sit amet',
      dualSize: 'Lorem ipsum dolor sit amet',
      pressureRange: 'Lorem ipsum dolor sit amet',
      connections: 'Lorem ipsum dolor sit amet',
      connectionLoc: 'Lorem ipsum dolor sit amet',
      accuracy: 'Lorem ipsum dolor sit amet',
      caseMaterial: 'Lorem ipsum dolor sit amet',
      weightingParts: 'Lorem ipsum dolor sit amet',
      fill: 'Lorem ipsum dolor sit amet',
    },

  ]

  pageSlice = this.productList.slice(0, 4);

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.productList.length) 
    {
      endIndex = this.productList.length;
    }
    this.pageSlice = this.productList.slice(startIndex, endIndex);
  }
}
