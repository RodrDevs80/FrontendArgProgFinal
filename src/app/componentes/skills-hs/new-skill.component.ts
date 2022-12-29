import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreS: string;
  porcentaje: string;
  constructor(
    private skillService: SkillService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onCreate(): void {
    const avance:string="width:"+this.porcentaje+"%";
    const skill = new Skill(this.nombreS,avance);
    this.skillService.save(skill).subscribe(
      (data) => {
        alert('Nueva Skill añadida!!!');
        this.router.navigate(['']);
      },
      (err) => {
        alert('No se pudo agregar!!!');
        this.router.navigate(['']);
      }
    );
  }
}
