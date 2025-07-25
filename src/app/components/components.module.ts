import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ContactSectionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule
  ],
  exports:[
    ContactSectionComponent,
  ]
})
export class ComponentsModule { }
