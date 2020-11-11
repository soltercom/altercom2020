import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request/request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';



@NgModule({
  declarations: [RequestComponent],
    imports: [
        CommonModule,
        RequestRoutingModule,
        ReactiveFormsModule,
        AppMaterialModule
    ]
})
export class RequestModule { }
