import { Component, OnInit, ViewChild } from '@angular/core';
import { Candidatos } from './candidatos';
import { CandidatosService } from './candidato.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

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
    private authService: AuthenticationService,
    private router: Router
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
    this.getEmployeeList();
    this.isAuthenticated = this.authService.obtenerSession() || false;
    console.log(this.authService.obtenerSession());

    if (!this.isAuthenticated) {
      // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
      this.router.navigate(['inicio-sesion']);
    }
  }

  /*openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }*/

  getEmployeeList() {
    this.candidatosService.getCandidatos().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
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
  /*
  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(EmpAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }
*/
}
