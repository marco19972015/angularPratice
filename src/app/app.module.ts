import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SearchComponent } from './parent/search/search.component';
import { ProductComponent } from './parent/product/product.component';
import { FilterComponent } from './parent/filter/filter.component';
import { ProductDetailComponent } from './parent/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SearchComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
