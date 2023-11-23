import { Component, OnInit, ViewChild } from '@angular/core';
import { Votos } from '../registrar-votos/votos';
import { VotosService } from '../registrar-votos/votos.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { CoreService } from '../core-service.service';
import { ConfirmDialogService } from '../confirm-dialog.service';

@Component({
  selector: 'app-listar-votos',
  templateUrl: './listar-votos.component.html',
  styleUrls: ['./listar-votos.component.css']
})
export class ListarVotosComponent implements OnInit{

  votos: Votos[];
  isAuthenticated: boolean = false; // Inicializa como falso

  constructor(
    private votosService: VotosService,
    private _dialog: MatDialog,
    private _canService: VotosService,
    private _coreService: CoreService,
    private authService: AuthenticationService,
    private router: Router,
    private confirmDialogService: ConfirmDialogService
  ) {}

  displayedColumns: string[] = [
    'claseVoto',
    'candidato',
    'partido',
    'cantidadVotos'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getCandidatosList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(ListarVotosComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCandidatosList();
        }
      },
    });
  }

  getCandidatosList() {
    this.votosService.getCandidatos().subscribe({
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
}
