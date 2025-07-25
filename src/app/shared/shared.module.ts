import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { IconComponent } from './icon/icon.component';
import { HeadingComponent } from './heading/heading.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProcessInfoComponent } from './process-info/process-info.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { RouterModule } from '@angular/router';
import { ChipsComponent } from './chips/chips.component';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SmoothScrollDirective } from './directives/smooth-scroll.directive';
import { IntersectionObserverDirective } from './directives/intersection-observer.directive';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';


@NgModule({
  declarations: [
    CustomButtonComponent,
    IconComponent,
    HeadingComponent,
    SubHeadingComponent,
    NavbarComponent,
    ProcessInfoComponent,
    TestimonialCardComponent,
    ChipsComponent,
    SkeletonLoaderComponent,
    SmoothScrollDirective,
    IntersectionObserverDirective,
    ToastNotificationComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    TestimonialCardComponent,
    ProcessInfoComponent,
    NavbarComponent,
    SubHeadingComponent,
    HeadingComponent,
    CustomButtonComponent,
    IconComponent,
    ChipsComponent,
    SkeletonLoaderComponent,
    SmoothScrollDirective,
    IntersectionObserverDirective,
    ToastNotificationComponent
  ]
})
export class SharedModule { }
