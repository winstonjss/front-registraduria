import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoCreateEditComponent } from './candidato-create-edit.component';

describe('CandidatoCreateEditComponent', () => {
  let component: CandidatoCreateEditComponent;
  let fixture: ComponentFixture<CandidatoCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoCreateEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
