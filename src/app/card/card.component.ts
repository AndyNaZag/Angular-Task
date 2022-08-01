import { Component, Input, OnInit } from '@angular/core';

import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() 
  data!: Product;

  email = faEnvelope;  

  constructor() { }

  ngOnInit(): void {
  }

}
