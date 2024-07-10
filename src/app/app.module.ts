import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie.service';
import { BootstrapSamplesComponent } from './boostrap-examples/bootstrap-samples/bootstrap-samples.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from './CustomPipe';
import { LoginComponent } from './login/login.component';
import { TagComponent } from './tag/tag.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TagServiceService } from './tag/tag-service.service';
import { AppErrorHandler } from './tag/app-error-handler';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestModalComponent } from './test-modal/test-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MovieComponent,
    BootstrapSamplesComponent,
    LoginComponent,
    TagComponent,
    ChangePasswordComponent,
    NotFoundComponent,
    TestModalComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule,CustomPipe,ReactiveFormsModule,HttpClientModule,
  RouterModule.forRoot([
    {path:'login',component: LoginComponent},
    {path:'movie/:id/:movieTitle',component:MovieComponent},
    {path:'tag',component:TagComponent},
    
    {path:'**',component:NotFoundComponent}
  ])],
  providers: [MovieService,TagServiceService,{provide:ErrorHandler,useClass:AppErrorHandler}],
  bootstrap: [AppComponent],
})
export class AppModule {}
