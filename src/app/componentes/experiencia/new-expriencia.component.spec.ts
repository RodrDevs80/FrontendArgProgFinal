import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExprienciaComponent } from './new-expriencia.component';

describe('NewExprienciaComponent', () => {
  let component: NewExprienciaComponent;
  let fixture: ComponentFixture<NewExprienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExprienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExprienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
