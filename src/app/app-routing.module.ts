import { AuthGuard } from './auth.guard';
import { NonfoundComponent } from './nonfound/nonfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TVComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"movies",canActivate:[AuthGuard],component:MoviesComponent},
   { path:"tv",canActivate:[AuthGuard],component:TVComponent},
   { path:"moviedtdetails/:type/:id",canActivate:[AuthGuard],component:MoviedetailsComponent},
   {path:"register" , component:RegisterComponent},
   {path:"login",component:LoginComponent},
   {path:"**", component:NonfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
