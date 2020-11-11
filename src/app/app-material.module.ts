import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const modules = [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatTableModule, FlexLayoutModule, MatFormFieldModule,
                 MatInputModule, MatGridListModule, MatDividerModule, MatSelectModule, MatTooltipModule, MatSnackBarModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class AppMaterialModule { }
