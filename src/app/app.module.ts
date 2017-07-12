import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';

import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ValidationComponent } from './components/validation/validation.component';
import { ContributeComponent } from './components/contribute/contribute.component';
import { ContributeInfoComponent } from './components/contribute-info/contribute-info.component';
import { ClassifyVTypeComponent } from './components/classify-v-type/classify-v-type.component';
import { ImgCutOutComponent } from './components/img-cut-out/img-cut-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    ValidationComponent,
    ContributeComponent,
    ContributeInfoComponent,
    ClassifyVTypeComponent,
    ImgCutOutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FileUploadModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
