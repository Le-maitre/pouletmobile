import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-poussin',
  templateUrl: './poussin.component.html',
  styleUrls: ['./poussin.component.scss'],
})
export class PoussinComponent  implements OnInit {
  entry: any; // Define the entry variable to hold the information
  entryNom: string = ''; // Variable to hold the entry name

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Fetch the entry information based on the route parameter
    this.route.paramMap.subscribe(params => {
      const entryId = params.get('id'); // Retrieve the entry ID
      const nameParam = params.get('nom'); // Retrieve the entry name parameter
      if (nameParam !== null) {
        this.entryNom = nameParam; // Assign the value if not null
      }
    });
  }
}