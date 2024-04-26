import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListsComponent } from './Features/Categories/category-lists/category-lists.component';
import { AddCategoryComponent } from './Features/Categories/add-category/add-category.component';

const routes: Routes = [
  {
    path:'admin/categories',
    component :CategoryListsComponent
  },
  {
    path:'admin/categories/add',
    component :AddCategoryComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
