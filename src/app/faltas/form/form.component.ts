import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DisciplinaService } from 'src/app/shared/disciplina.service';
import { MatriculaService } from 'src/app/shared/matricula.service';
import Disciplina from 'src/app/shared/model/disciplina';
import Matricula from 'src/app/shared/model/matricula';
import { Falta } from '../model/falta';
import FaltaSave from '../model/faltasave';
import { FaltaServiceService } from '../service/faltaservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  private id: string | null = null;
  disciplina!: Disciplina;
  matriculas!: Matricula[];
  reactiveForm = this.formBuilder.group({
    date: ['', Validators.required],
    faltas: new FormArray([])
  });
  constructor(private active: ActivatedRoute, private disciplinaService: DisciplinaService, private matriculaService: MatriculaService,  private formBuilder: FormBuilder, private faltaService: FaltaServiceService) {
    
  }

  ngOnInit(): void {
      this.id = this.active.snapshot.paramMap.get('id');
      this.disciplinaService.getDisciplina(this.id!).subscribe(x=>{
        this.disciplina = x;
      });
      this.matriculaService.getMatriculas(this.id!).subscribe(x=>{
        this.matriculas = x;
        this.matriculas.forEach(x =>{
          this.t.push(this.formBuilder.group({
            nome: new FormControl({value: x.nomeAluno, disabled:true}),
            aluno: new FormControl({value: x.raAluno, disabled: true}),
            falta: new FormControl(0),
          }));
        });
      });
  }

  get t() { return this.reactiveForm.controls.faltas as FormArray; }
  get f(){ return this.t.controls as FormGroup[]};
  
  submit(){
    console.log(this.reactiveForm.getRawValue());
    let result = this.reactiveForm.getRawValue();
    let y: FaltaSave[] = result.faltas.map((x:any)=>{
      return {date: result.date, presenca: x.falta, ra: x.aluno, codigoDisciplina: this.id}
    });
    this.faltaService.saveFaltas(y).subscribe(x=>console.log(x));
  }
}
