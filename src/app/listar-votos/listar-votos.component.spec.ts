import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVotosComponent } from './listar-votos.component';

describe('ListarVotosComponent', () => {
  let component: ListarVotosComponent;
  let fixture: ComponentFixture<ListarVotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
