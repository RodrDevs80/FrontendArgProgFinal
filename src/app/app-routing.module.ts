import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditPersonaComponent } from './componentes/encabezado/edit-persona.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExprienciaComponent } from './componentes/experiencia/new-expriencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditSkillComponent } from './componentes/skills-hs/edit-skill.component';
import { NewSkillComponent } from './componentes/skills-hs/new-skill.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component:NewExprienciaComponent},
  {path:'editexp/:id',component:EditExperienciaComponent},
  {path:'nuevaedu',component:NeweducacionComponent},
  {path:'editedu/:id',component:EditeducacionComponent},
  {path:'nuevaskill',component:NewSkillComponent},
  {path:'editskill/:id',component:EditSkillComponent},
  {path:'nuevopro',component:NewProyectoComponent},
  {path:'editpro/:id',component:EditProyectoComponent},
  {path:'editper/:id',component:EditPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
