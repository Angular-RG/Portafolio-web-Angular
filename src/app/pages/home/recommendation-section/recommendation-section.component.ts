import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { staggerFade } from 'src/app/animations/animations';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';

@Component({
  selector: 'app-recommendation-section',
  templateUrl: './recommendation-section.component.html',
  styleUrls: ['./recommendation-section.component.scss'],
  animations: [
    staggerFade
  ]
})
export class RecommendationSectionComponent implements OnInit {

  inView : boolean = false;
  @ViewChild('recommSec') recommSec: ElementRef | undefined;
  colors = HeadingColors.DEFAULT_GRADIENT

  testimonialDataList: Array<object> = [
    {
      feedback: '"Apasionado desarrollador de software con experiencia en diversos lenguajes y tecnologías. Comprometido con la calidad del código y la resolución eficiente de problemas. Profesional altamente enfocado en la mejora continua, trabajando de forma colaborativa para alcanzar resultados sobresalientes. Siempre en busca de nuevos desafíos y oportunidades para crecer en la industria tecnológica. #DesarrolladorSoftware #Tecnología #InnovaciónApasionado."',
      feedbackBy: 'Luis Angel Flores Galindo (Angular Developer)'
    // },
    // {
    //   feedback: '"I rarely come across a self-motivated talent who stand out like Harsh. Harsh is proactive, result oriented, responsible and technically sound person. Harsh’s ability to troubleshoot and analyse a technical problem was unlike any I’ve seen before."',
    //   feedbackBy: 'Neha Verma'
    // },
    // {
    //   feedback: '"Not many people can be so efficient as Harsh. I enjoyed working with Harsh for one year as full stack developer. I have always been amazed by Harsh’s ability to act in a highly stressful environment."',
    //   feedbackBy: 'Saurabh Srivastava'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  trackByFeedbackBy(index: number, testimonial: any) {
    return testimonial.feedbackBy;
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.recommSec && this.recommSec.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
    }
  }

  
}
