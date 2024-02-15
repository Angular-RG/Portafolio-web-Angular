import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { staggerFade } from 'src/app/animations/animations';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';
import { ProcessInfoTypes } from 'src/app/shared/process-info/process-info-types.model';

@Component({
  selector: 'app-dev-process-section',
  templateUrl: './dev-process-section.component.html',
  styleUrls: ['./dev-process-section.component.scss'],
  animations: [
    staggerFade
  ]
})
export class DevProcessSectionComponent implements OnInit {

  inView : boolean = false;
  @ViewChild('devProcess') devProcess: ElementRef | undefined;
  colors = HeadingColors.DEFAULT_GRADIENT
  research = ProcessInfoTypes.RESEARCH
  desing = ProcessInfoTypes.DESIGN
  dev = ProcessInfoTypes.DEV
  qa = ProcessInfoTypes.QA
  
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.devProcess && this.devProcess.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
    }
  }

}
