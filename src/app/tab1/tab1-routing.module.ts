import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { HomeComponent } from '../home/home.component';
import { EntreeComponent } from '../entree/entree.component';
import { ForumComponent } from '../forum/forum.component';
import { CalendrierComponent } from '../calendrier/calendrier.component';
import { AlerteComponent } from '../alerte/alerte.component';
import { GuideComponent } from '../guide/guide.component';
import { PoussinComponent } from '../poussin/poussin.component';
import { DetailComponent } from '../detail/detail.component';
import { BilanComponent } from '../bilan/bilan.component';
import { GestionComponent } from '../gestion/gestion.component';
import { RapportComponent } from '../rapport/rapport.component';
import { DetailbilanComponent } from '../detailbilan/detailbilan.component';
import { DetailtacheComponent } from '../detailtache/detailtache.component';
import { ModifierentreeComponent } from '../modifierentree/modifierentree.component';
import { AjoutentreeComponent } from '../ajoutentree/ajoutentree.component';
import { ModifiertachebilanComponent } from '../modifiertachebilan/modifiertachebilan.component';
import { AjoutbilanComponent } from '../ajoutbilan/ajoutbilan.component';
import { AjouttachebilanComponent } from '../ajouttachebilan/ajouttachebilan.component';
import { ModifiertachebilantacheComponent } from '../modifiertachebilantache/modifiertachebilantache.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'entree',
    component: EntreeComponent,
  },
  {
    path: 'poussin',
    component: PoussinComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'bilan',
    component: BilanComponent,
  },
  {
    path: 'gestion',
    component: GestionComponent,
  },
  {
    path: 'detailbilan',
    component: DetailbilanComponent,
  },
  {
    path: 'rapport',
    component: RapportComponent,
  },
  {
    path: 'forum',
    component: ForumComponent,
  },
  {
    path: 'modifiertachebilantache',
    component: ModifiertachebilantacheComponent
  },
  {
    path: 'ajouttachebilan',
    component: AjouttachebilanComponent,
  },
  {
    path: 'calendrier',
    component: CalendrierComponent,
  },
  {
    path: 'ajoutbilan',
    component: AjoutbilanComponent,
  },
  {
    path: 'ajoutentree',
    component: AjoutentreeComponent,
  },
  {
    path: 'modifiertachebilan',
    component: ModifiertachebilanComponent,
  },
  {
    path: 'detailtache',
    component: DetailtacheComponent,
  },
  {
    path: 'modifierentree',
    component: ModifierentreeComponent,
  },
  {
    path: 'alerte',
    component: AlerteComponent,
  },
  {
    path: 'guide',
    component: GuideComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
