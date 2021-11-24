import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { CollectionPageComponent } from './pages/collection-page/collection-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { FinalPageComponent } from './pages/final-page/final-page.component';

// turns out having the wildcard at the top breaks stuff
// https://stackoverflow.com/questions/48275600/angular-components-not-reloading-on-route-change
const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'collection', component: CollectionPageComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'quiz:collectionid', component: QuizPageComponent },
  { path: 'final', component: FinalPageComponent },
  { path: 'final:rankid', component: FinalPageComponent },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// routingComponents takes care of all the different components needed for different routes
export const routingComponents = [
  MainPageComponent,
  CollectionPageComponent,
  QuizPageComponent,
  FinalPageComponent,
];
