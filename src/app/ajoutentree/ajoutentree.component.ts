import { Component, OnInit } from '@angular/core';
import { UserentriesService } from '../userentries.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ajoutentree',
  templateUrl: './ajoutentree.component.html',
  styleUrls: ['./ajoutentree.component.scss'],
})
export class AjoutentreeComponent  implements OnInit {
  formData: any = {};

  constructor(
    private userentriesService: UserentriesService,
    private router: Router
  ) {}

  addEntry() {
    const userId = 1; // Replace with the actual user ID
    this.userentriesService.addEntry(userId, this.formData).subscribe(
      (response) => {
        console.log('Entry added successfully:', response);

        // Show alert for confirmation
        window.alert('Entrée ajoutée avec succès !');

        // Navigate to '/entree' path after a delay (here, using setTimeout as an example)
        setTimeout(() => {
          this.router.navigate(['/entree']);
        }, 2000); // Change the delay as needed
      },
      (error) => {
        console.error('Error adding entry:', error);
        // Handle error: Show an error message to the user or perform appropriate actions.
      }
    );
  }

  ngOnInit() {}

}
