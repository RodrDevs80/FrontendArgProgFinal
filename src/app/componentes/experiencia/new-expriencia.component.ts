import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-expriencia',
  templateUrl: './new-expriencia.component.html',
  styleUrls: ['./new-expriencia.component.css'],
})
export class NewExprienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      (data) => {
        alert('Experiencia añadida!!!');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Ocurrio un error!!!');
        this.router.navigate(['']);
      }
    );
  }
}
