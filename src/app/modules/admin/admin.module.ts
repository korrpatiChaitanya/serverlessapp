import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BooksComponent } from './components/books/books.component';
import { VediosComponent } from './components/vedios/vedios.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UploadComponent } from './components/upload/upload.component';
import { PlayComponent } from './components/play/play.component';
import { PdfviewComponent } from './components/pdfview/pdfview.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    VediosComponent,
    ProfileComponent,
    UploadComponent,
    PlayComponent,
    PdfviewComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    PdfViewerModule,
 
   

  ]
})
export class AdminModule { }
