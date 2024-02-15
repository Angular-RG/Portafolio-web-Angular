import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { staggerFade } from 'src/app/animations/animations';
import { IconSize } from 'src/app/constants/icon-size.constants';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';

@Component({
  selector: 'app-technologies-section',
  templateUrl: './technologies-section.component.html',
  styleUrls: ['./technologies-section.component.scss'],
  animations: [
    staggerFade
  ]
})
export class TechnologiesSectionComponent implements OnInit {

  inView : boolean = false;
  @ViewChild('techUsed') techUsed: ElementRef | undefined;

  colors = HeadingColors.DEFAULT_GRADIENT
  sizeXXL = IconSize.XXL;
  
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.techUsed && this.techUsed.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
    }
  }
  
}
