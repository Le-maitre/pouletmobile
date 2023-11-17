import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserentriesService } from '../userentries.service';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.scss'],
})
export class EntreeComponent  implements OnInit {
  userEntries: any[] = []; // Assuming your entries are of type 'any[]'

  constructor(private userentriesService: UserentriesService) {}

  ngOnInit() {
    // Assuming you have the user ID available, replace 'userId' with the actual user ID
    const userId = 1; // Replace this with the actual user ID
    this.userentriesService.getUserEntries(userId).subscribe(
      (entries: any[]) => {
        this.userEntries = entries;
      },
      (error) => {
        console.error('Error fetching user entries:', error);
      }
    );
  }
}