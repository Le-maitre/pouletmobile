import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss'],
})
export class RapportComponent  implements OnInit {


  investedAmount: number = 5000;
  deadChicks: number = 10;
  realizedProfit: number = 2000;

  constructor() {}

  ngOnInit() {
  }
  
 
}