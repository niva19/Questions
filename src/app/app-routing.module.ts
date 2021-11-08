import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionPageComponent } from './questionsPage/questionsPage.component'
import { DetailPageComponent } from './detailPage/detailpage.component'

const routes: Routes = [
  { path: 'questions', component: QuestionPageComponent },
  { path: 'detail', component: DetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [QuestionPageComponent, DetailPageComponent]