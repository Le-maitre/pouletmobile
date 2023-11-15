import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.scss'],
})
export class EntreeComponent  implements OnInit {
  activeMenu: string | null = null;

  // Sample data, replace with your actual data
  entrees = [
    { id: 1, name: 'Lot 1' },
    { id: 2, name: 'Lot 2' },
    { id: 3, name: 'Lot 3' },
    { id: 4, name: 'Lot 4' },
    // Add more entries as needed
  ];

  constructor(private alertController: AlertController, private navCtrl: NavController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Method to show options menu
  async showOptionsMenu(entree: any) {
    this.activeMenu = entree.id;
    const alert = await this.alertController.create({
      header: 'Options',
      buttons: [
        {
          text: 'Supprimer l\'entrée',
          handler: () => {
            this.deleteEntree(entree);
          },
        },
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            this.hideOptionsMenu();
          },
        },
      ],
    });
    await alert.present();
  }

  // Method to hide options menu
  hideOptionsMenu() {
    this.activeMenu = null;
  }

  // Method to delete an entry
  deleteEntree(entree: any) {
    // Add logic to delete the entry, you might want to confirm with another alert
    this.entrees = this.entrees.filter(e => e !== entree);
    this.hideOptionsMenu();
  }
 // Method to navigate to Poussin component with details
 navigateToPoussin(entree: any) {
  // Assuming 'poussin' is the route for the Poussin component, pass the entree details
  this.navCtrl.navigateForward(['/poussin', { lotInfo: entree }]);
}
}
