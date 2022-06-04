import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinaService } from 'src/app/shared/disciplina.service';
import Disciplina from 'src/app/shared/model/disciplina';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _disciplinas: Disciplina[] = [];

   selected: string = '';

  constructor(private disciplinaService: DisciplinaService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.disciplinaService.getAllDisciplinas().subscribe(x=>{
      this._disciplinas = x;
    })
  }
  get disciplinas(): Disciplina[]{
    return this._disciplinas;
  } 

  public cadastrar() {
    this._router.navigate(['form',this.selected], {relativeTo: this.route});
  }

  public relatorio(){
    this._router.navigate(['list', this.selected], {relativeTo: this.route});
  }
}
