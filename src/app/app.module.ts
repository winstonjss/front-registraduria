import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { CandidatosService } from './candidatos/candidato.service';
import { UserRoleService } from './services/user-role.service';
import { AuthenticationService } from './services/authentication.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CandidatoCreateEditComponent } from './candidato-create-edit/candidato-create-edit.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PartidosComponent } from './partidos/partidos.component';
import { PartidosCreateEditComponent } from './partidos-create-edit/partidos-create-edit.component';
import { FooterComponent } from './footer/footer.component';
import { FooterUserComponent } from './footer-user/footer-user.component';
import { MesasComponent } from './mesas/mesas.component';
import { MesasCreateEditComponent } from './mesas-create-edit/mesas-create-edit.component';
import { RegistrarVotosComponent } from './registrar-votos/registrar-votos.component';
import { MatSelectModule } from '@angular/material/select';


const routes: Routes=[
  {path:'inicio-sesion',component:InicioSesionComponent},
  {path:'home',component:HomeComponent},
  {path:'candidatos',component:CandidatosComponent},
  {path:'partidos',component:PartidosComponent},
  {path:'mesas',component:MesasComponent},
  {path:'votos',component:RegistrarVotosComponent},
  {path:'', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    NavbarComponent,
    HomeComponent,
    CandidatosComponent,
    CandidatoCreateEditComponent,
    ConfirmDialogComponent,
    PartidosComponent,
    PartidosCreateEditComponent,
    FooterComponent,
    FooterUserComponent,
    MesasComponent,
    MesasCreateEditComponent,
    RegistrarVotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [CandidatosService, UserRoleService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
