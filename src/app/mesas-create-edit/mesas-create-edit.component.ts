import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MesaService } from '../mesas/mesa.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core-service.service';
import { Candidatos } from '../candidatos/candidatos';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mesas-create-edit',
  templateUrl: './mesas-create-edit.component.html',
  styleUrls: ['./mesas-create-edit.component.css']
})
export class MesasCreateEditComponent implements OnInit{
  mesaForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private canService: MesaService,
    private _dialogRef: MatDialogRef<MesasCreateEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.mesaForm = this.fb.group({
      cantidadInscritos: '',
      numeroMesa: ''
    });
  }

  ngOnInit(): void {
    this.mesaForm.patchValue(this.data);
    console.log(this.mesaForm)
  }

  
  onFormSubmit() {
    if (this.mesaForm.valid) {
      if (this.data) {
        this.canService
          .update(this.mesaForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Candidato Actualizado!');
              this._dialogRef.close(true);
              
            },
            error: (err: any) => {
              console.error(err);
              swal.fire({
                title: 'Candidato edidato satisfactoriamente',
                timer: 2000
              })
            },
          });
      } else {
        this.canService.create(this.mesaForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Candidato añadido satisfactoriamente');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
            swal.fire({
              title: 'Candidato creado satisfactoriamente',
              timer: 2000
            })

          },
        });
      }
    }
    window.location.reload();
  }
}
