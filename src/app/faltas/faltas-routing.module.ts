import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "form/:id", component: FormComponent},
  {path: "list/:id",component: ListComponent},
  {path: "pdf/:id", component: PdfComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaltasRoutingModule { }
