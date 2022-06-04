import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import FaltaUdf from '../model/faltaudf';
import { FaltaServiceService } from '../service/faltaservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  faltas!: Observable<FaltaUdf[]>;
  numbers: Number[] = [];
  displayedColumns = ["ra","nome","data1","data2","data3","data4","data5","data6","data7","data8","data9","data10","data11","data12","data13","data14","data15","data16","data17","data18","data19","data20","totalFaltas"];


  constructor(private faltaService: FaltaServiceService, private activate: ActivatedRoute, private router: Router) { 
    this.numbers = Array(20).fill([]).map((x,i)=>i);
  }

  ngOnInit(): void {
    let id = this.activate.snapshot.paramMap.get('id');
    this.faltas = this.faltaService.getFaltasByUDF(id!);
  }

  return(){
    this.router.navigate(['falta']);
  }
}
