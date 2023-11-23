import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CandidatosService } from '../candidatos/candidato.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core-service.service';
import { Candidatos } from '../candidatos/candidatos';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-candidato-create-edit',
  templateUrl: './candidato-create-edit.component.html',
  styleUrls: ['./candidato-create-edit.component.css']
})
export class CandidatoCreateEditComponent implements OnInit{
  candidatoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private canService: CandidatosService,
    private _dialogRef: MatDialogRef<CandidatoCreateEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.candidatoForm = this.fb.group({
      cedula: '',
      nombre: '',
      apellido: '',
      idPartido: '',
    });
  }

  ngOnInit(): void {
    this.candidatoForm.patchValue(this.data);
    console.log(this.candidatoForm)
  }

  
  onFormSubmit() {
    if (this.candidatoForm.valid) {
      if (this.data) {
        this.canService
          .update(this.candidatoForm.value)
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
        this.canService.create(this.candidatoForm.value).subscribe({
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

