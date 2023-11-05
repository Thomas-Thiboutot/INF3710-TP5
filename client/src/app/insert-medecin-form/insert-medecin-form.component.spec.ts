import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMedecinFormComponent } from './insert-medecin-form.component';

describe('InsertMedecinFormComponent', () => {
  let component: InsertMedecinFormComponent;
  let fixture: ComponentFixture<InsertMedecinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMedecinFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMedecinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
