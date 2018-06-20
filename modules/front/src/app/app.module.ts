import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatSidenavModule, MatToolbarModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './restServices/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, NoopAnimationsModule, MatIconModule, MatToolbarModule ,
    MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSidenavModule,
    DropdownModule,
    PanelMenuModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
