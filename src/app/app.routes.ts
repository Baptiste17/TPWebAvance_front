import {Routes} from '@angular/router';
import {GestionComponent} from './components/gestion/gestion.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {OnduleursComponent} from './components/gestion/onduleurs/onduleurs.component';
import {PiecesComponent} from './components/gestion/pieces/pieces.component';

export const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "gestion", component: GestionComponent,
    children: [
      { path: 'onduleurs', component: OnduleursComponent },
      { path: 'pieces', component: PiecesComponent },
      { path: "**", redirectTo: 'onduleurs'}
    ]},
  {path: "**", redirectTo: "dashboard"}
];
