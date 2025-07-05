import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { AboutSectionComponent } from './about-section/about-section.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AboutSectionComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    ComponentsModule,
    TranslateModule
  ]
})
export class AboutModule { }
