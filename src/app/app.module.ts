import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TVComponent } from './tv/tv.component';
import { NonfoundComponent } from './nonfound/nonfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TVComponent,
    NonfoundComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    MoviedetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
