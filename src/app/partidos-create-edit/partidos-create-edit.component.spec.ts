import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosCreateEditComponent } from './partidos-create-edit.component';

describe('PartidosCreateEditComponent', () => {
  let component: PartidosCreateEditComponent;
  let fixture: ComponentFixture<PartidosCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidosCreateEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidosCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
