import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PdfviewComponent } from './components/pdfview/pdfview.component';
import { PlayComponent } from './components/play/play.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UploadComponent } from './components/upload/upload.component';
import { VediosComponent } from './components/vedios/vedios.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [{ path: 'vedio', component: VediosComponent },
    { path: 'books', component: BooksComponent },
    {path:'profile',component:ProfileComponent},
    {path:'upload',component:UploadComponent},
    {path:'play',component:PlayComponent},
    {path:'pdf',component:PdfviewComponent},
    { path: '', redirectTo: '/user/books', pathMatch: 'full' }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
