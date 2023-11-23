import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarVotosComponent } from './registrar-votos.component';

describe('RegistrarVotosComponent', () => {
  let component: RegistrarVotosComponent;
  let fixture: ComponentFixture<RegistrarVotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarVotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarVotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
