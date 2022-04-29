import { MaterialModule } from './../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LabelComponent } from './components/label/label.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StoriesComponent } from './components/stories/stories.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserComponent } from './components/user/user.component';
import { EpicsComponent } from './components/epics/epics.component';
import { EpicStoriesComponent } from './components/epic-stories/epic-stories.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskDialogComponent } from './components/add-task-dialog/add-task-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteTaskDialogComponent } from './components/delete-task-dialog/delete-task-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';

@NgModule({
	declarations: [
	LabelComponent,
	HomeComponent,
	ProjectsComponent,
	SettingsComponent,
	StoriesComponent,
	MenuComponent,
	UserComponent,
	EpicsComponent,
	EpicStoriesComponent,
	TasksComponent,
	TaskItemComponent,
	AddTaskDialogComponent,
	DeleteTaskDialogComponent,
	LoginComponent,
	PaginaErrorComponent,],
	imports: [
		AppRoutingModule,
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
		ReactiveFormsModule
	],
	exports: [
		FlexLayoutModule,
		MaterialModule,
		MenuComponent,
		LoginComponent
	]
})
export class PresentationModule {
}
