import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'user',
  loadChildren: ()=>import('./user/user.module').then(mod=>mod.UserModule)
},
{
  path:'student',
  loadChildren: ()=>import('./student/student.module').then(mod=>mod.StudentModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
