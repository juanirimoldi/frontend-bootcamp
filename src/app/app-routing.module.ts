import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './modules/presentation/guards/login-guard.guard';
import { EpicStoriesComponent } from './modules/presentation/components/epic-stories/epic-stories.component';
import { EpicsComponent } from './modules/presentation/components/epics/epics.component';
import { HomeComponent } from './modules/presentation/components/home/home.component';
import { LoginComponent } from './modules/presentation/components/login/login.component';
import { MenuComponent } from './modules/presentation/components/menu/menu.component';
import { ProjectsComponent } from './modules/presentation/components/projects/projects.component';
import { SettingsComponent } from './modules/presentation/components/settings/settings.component';
import { StoriesComponent } from './modules/presentation/components/stories/stories.component';
import { TasksComponent } from './modules/presentation/components/tasks/tasks.component';
import { UserComponent } from './modules/presentation/components/user/user.component';
import { PaginaErrorComponent } from './modules/presentation/components/pagina-error/pagina-error.component';

const routes: Routes = [
		{
		  path: '',
		  component: MenuComponent, 
		  canActivateChild: [LoginGuard],
		  children: [
			{ path: "", component: HomeComponent, pathMatch: "full"},
			{ path: "home", redirectTo: '', pathMatch: "full" },
			{ path: "my-projects", component: ProjectsComponent, pathMatch: "full" },
			{ path: "my-stories", component: StoriesComponent, pathMatch: "full" },
			{ path: "settings", component: SettingsComponent, pathMatch: "full" },
			{ path: "user", component: UserComponent, pathMatch: "full" },
			{ path: "user", component: MenuComponent, pathMatch: "full" },
			{ path: 'my-projects/:project-n', component: EpicsComponent, pathMatch: "full"},
			{ path: 'my-projects/:project-n/:epic-k', component: EpicStoriesComponent, pathMatch: "full"},
			{ path: 'my-projects/:project-n/:epic-k/:story-j', component: TasksComponent, pathMatch: "full"},
			{ path: 'my-stories/:story-j', component: TasksComponent, pathMatch: "full"},
		  ],
		},
		{path: "login", component: LoginComponent, pathMatch: "full" },
		{path: "**", component: PaginaErrorComponent}
	  ];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
