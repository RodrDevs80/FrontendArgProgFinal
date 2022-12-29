import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills-hs',
  templateUrl: './skills-hs.component.html',
  styleUrls: ['./skills-hs.component.css']
})
export class SkillsHSComponent implements OnInit {
  isLogged = false;
   skill: Skill[] = [];
  constructor(
    private skillService: SkillService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarSkill(): void {
    this.skillService.lista().subscribe((data) => {
      this.skill = data;

    });

  }

  delete(id?:number){
    if(id!=undefined){
     this.skillService.delete(id).subscribe(data=>{
       alert("Se elimino correctamente!!!")
       this.cargarSkill();
     },err=>{
       alert("No se pudo eliminar!!!");
     })
    }
   }

}
