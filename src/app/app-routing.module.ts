import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';



const ROUTES: Routes = [
  { path: ':id', component: PostComponent },
  { path: '', component: AddPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
