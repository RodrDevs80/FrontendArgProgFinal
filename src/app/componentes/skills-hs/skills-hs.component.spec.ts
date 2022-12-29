import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsHSComponent } from './skills-hs.component';

describe('SkillsHSComponent', () => {
  let component: SkillsHSComponent;
  let fixture: ComponentFixture<SkillsHSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsHSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
