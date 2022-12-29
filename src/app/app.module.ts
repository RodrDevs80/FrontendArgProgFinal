import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsHSComponent } from './componentes/skills-hs/skills-hs.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExprienciaComponent } from './componentes/experiencia/new-expriencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { EditSkillComponent } from './componentes/skills-hs/edit-skill.component';
import { NewSkillComponent } from './componentes/skills-hs/new-skill.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditPersonaComponent } from './componentes/encabezado/edit-persona.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsHSComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NewExprienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditProyectoComponent,
    EditSkillComponent,
    NewSkillComponent,
    NewProyectoComponent,
    EditPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
