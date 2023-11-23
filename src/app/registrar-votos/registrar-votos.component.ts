import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { CandidatosService } from '../candidatos/candidato.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core-service.service';
import { Candidatos } from '../candidatos/candidatos';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { VotosService } from './votos.service';


@Component({
  selector: 'app-registrar-votos',
  templateUrl: './registrar-votos.component.html',
  styleUrls: ['./registrar-votos.component.css']
})
export class RegistrarVotosComponent {

  opciones = [
    { valor: 'opcion1', etiqueta: 'Nulo' },
    { valor: 'opcion2', etiqueta: 'Blanco' },
    { valor: 'opcion3', etiqueta: 'No Marcado' },
    // Agrega más opciones según sea necesario
  ];
  opcionesSeleccionadas: string = '';
  candidatoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private canService: VotosService,
    private _coreService: CoreService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.candidatoForm = this.fb.group({
      claseVoto: '',
      candidato: '',
      cantidadVotos: ''
    });
  }

  onFormSubmit() {
    if (this.candidatoForm.valid) {
      console.log('Opciones seleccionadas:', this.opcionesSeleccionadas);
        this.canService.create(this.candidatoForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Candidato añadido satisfactoriamente');
           // this._dialogRef.close(true);
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
  
}

