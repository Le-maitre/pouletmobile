import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { EntreeComponent } from '../entree/entree.component';
import { HomeComponent } from '../home/home.component';
import { PoussinComponent } from '../poussin/poussin.component';
import { DetailComponent } from '../detail/detail.component';
import { BilanComponent } from '../bilan/bilan.component';
import { GestionComponent } from '../gestion/gestion.component';
import { DetailbilanComponent } from '../detailbilan/detailbilan.component';
import { DetailtacheComponent } from '../detailtache/detailtache.component';
import { ModifierentreeComponent } from '../modifierentree/modifierentree.component';
import { AjoutentreeComponent } from '../ajoutentree/ajoutentree.component';
import { ModifiertachebilanComponent } from '../modifiertachebilan/modifiertachebilan.component';
import { AjoutbilanComponent } from '../ajoutbilan/ajoutbilan.component';
import { AjouttachebilanComponent } from '../ajouttachebilan/ajouttachebilan.component';
import { ModifiertachebilantacheComponent } from '../modifiertachebilantache/modifiertachebilantache.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page,HomeComponent,PoussinComponent,DetailComponent,BilanComponent,GestionComponent,DetailbilanComponent,
  DetailtacheComponent,ModifierentreeComponent,AjoutentreeComponent,ModifiertachebilanComponent,
AjoutbilanComponent,AjouttachebilanComponent,ModifiertachebilantacheComponent]
})
export class Tab1PageModule {}
