import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatSnackBarModule,
		MatCardModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatButtonModule,
		MatGridListModule,
		MatDialogModule,
		MatExpansionModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatInputModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatDatepickerModule,
		MatNativeDateModule
	],
	exports: [
		MatSnackBarModule,
		MatToolbarModule,
		MatCardModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatButtonModule,
		MatGridListModule,
		MatDialogModule,
		MatExpansionModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatInputModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatDatepickerModule,
		MatNativeDateModule
	]
})
export class MaterialModule {
}
