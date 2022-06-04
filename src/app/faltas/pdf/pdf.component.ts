import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FaltaServiceService } from '../service/faltaservice.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  pdfSrc: string = '';

  constructor(private faltaService: FaltaServiceService, private active: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let id = this.active.snapshot.paramMap.get('id');
    this.faltaService.getPdf(id!).subscribe(x=>{
      let objectURL = URL.createObjectURL(x);
      this.pdfSrc = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(objectURL))!;
    });
  }

}
