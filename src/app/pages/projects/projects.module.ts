import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../components/components.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ProjectsSectionComponent, ProjectCardComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    ComponentsModule,
    TranslateModule
  ]
})
export class ProjectsModule { }
