import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", redirectTo:"falta", pathMatch:'full'},
  {path: "falta", loadChildren: ()=>import('./faltas/faltas.module').then(m=>m.FaltasModule)},
  {path: "nota", loadChildren:()=>import('./notas/notas.module').then(m=>m.NotasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
