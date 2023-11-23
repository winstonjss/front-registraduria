import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasCreateEditComponent } from './mesas-create-edit.component';

describe('MesasCreateEditComponent', () => {
  let component: MesasCreateEditComponent;
  let fixture: ComponentFixture<MesasCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesasCreateEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesasCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
