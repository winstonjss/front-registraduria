import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PartidoService } from '../partidos/partido.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core-service.service';
import { Candidatos } from '../candidatos/candidatos';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-partidos-create-edit',
  templateUrl: './partidos-create-edit.component.html',
  styleUrls: ['./partidos-create-edit.component.css']
})
export class PartidosCreateEditComponent implements OnInit{

  partidoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private canService: PartidoService,
    private _dialogRef: MatDialogRef<PartidosCreateEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.partidoForm = this.fb.group({
      lema: '',
      nombre: '',
      cantidadInscritos: '',
      numeroPartido: '',
    });
  }
  ngOnInit(): void {
    this.partidoForm.patchValue(this.data);
    console.log(this.partidoForm)
  }

  
  onFormSubmit() {
    if (this.partidoForm.valid) {
      if (this.data) {
        this.canService
          .update(this.partidoForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Partido Actualizado!');
              this._dialogRef.close(true);
              
            },
            error: (err: any) => {
              console.error(err);
              swal.fire({
                title: 'Partido edidato satisfactoriamente',
                timer: 2000
              })
            },
          });
      } else {
        this.canService.create(this.partidoForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Partido añadido satisfactoriamente');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
            swal.fire({
              title: 'Partido creado satisfactoriamente',
              timer: 2000
            })

          },
        });
      }
    }
    window.location.reload();
  }
}
