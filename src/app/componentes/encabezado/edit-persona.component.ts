import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css'],
})
export class EditPersonaComponent implements OnInit {
  persona: persona = null;
  constructor(private personaService: PersonaService, private router: Router,private activateRouter:ActivatedRoute,public imageService:ImageService ) {}

  ngOnInit(): void {
    const id=this.activateRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        alert('error al traer la persona');
        this.router.navigate(['']);
      }
    );
  }
  onUpdate():void {
    const id=this.activateRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    this.personaService.update(id,this.persona).subscribe(data=>{
      this.router.navigate(['']);
    },err=>{
      alert("error al modificar persona");
      this.router.navigate(['']);
    })

  }
  uploadimage($event: any) {
    const id=this.activateRouter.snapshot.params['id'];
    const name= "perfil_"+id;
    this.imageService.uploadimage($event,name);
  }
}
