import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    // CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
