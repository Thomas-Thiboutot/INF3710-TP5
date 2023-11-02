import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinsPageComponent } from './medecins-page.component';

describe('MedecinsPageComponent', () => {
  let component: MedecinsPageComponent;
  let fixture: ComponentFixture<MedecinsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
