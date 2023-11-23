import { Component, OnInit, ViewChild } from '@angular/core';
import { Candidatos } from './candidatos';
import { CandidatosService } from './candidato.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { CandidatoCreateEditComponent } from '../candidato-create-edit/candidato-create-edit.component';
import { CoreService } from '../core-service.service';
import { ConfirmDialogService } from '../confirm-dialog.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css'],
})
export class CandidatosComponent implements OnInit {
  candidatos: Candidatos[];
  isAuthenticated: boolean = false; // Inicializa como falso

  constructor(
    private candidatosService: CandidatosService,
    private _dialog: MatDialog,
    private _canService: CandidatosService,
    private _coreService: CoreService,
    private authService: AuthenticationService,
    private router: Router,
    private confirmDialogService: ConfirmDialogService
  ) {}

  displayedColumns: string[] = [
    'cedula',
    'nombre',
    'apellido',
    'nombrePartido',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getCandidatosList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(CandidatoCreateEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCandidatosList();
        }
      },
    });
  }

  getCandidatosList() {
    this.candidatosService.getCandidatos().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(res)
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteCandidato(id: number) {
    const message = '¿Estás seguro de que deseas eliminar este elemento?';
    const dialogRef = this.confirmDialogService.openConfirmDialog(message);
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this._canService.deleteCandidato(id).subscribe({
          next: (res) => {
            this._coreService.openSnackBar('Candidato Eliminado!', 'Hecho');
            this.getCandidatosList();            
          },
          error: console.log,
        });
      }
      if(result==true){
        window.location.reload();
      }
    });        
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(CandidatoCreateEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCandidatosList();
        }
      },
    });
  }

}
