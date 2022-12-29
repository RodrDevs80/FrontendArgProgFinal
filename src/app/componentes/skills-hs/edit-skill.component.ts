import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skill = null;

  constructor(
    private skillService:SkillService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        alert('Error al modificar el skill!!!');
        this.router.navigate(['']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar el skill!!!');
        this.router.navigate(['']);
      }
    );
  }

}
