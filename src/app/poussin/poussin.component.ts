import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-poussin',
  templateUrl: './poussin.component.html',
  styleUrls: ['./poussin.component.scss'],
})
export class PoussinComponent  implements OnInit {
  lotInfo: any;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params['lotInfo']) {
        this.lotInfo = JSON.parse(params['lotInfo']);
      }
    });
  }ngOnInit(): void {
  }
}