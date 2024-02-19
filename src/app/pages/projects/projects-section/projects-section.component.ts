import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fade, fadeInView, staggerFade } from 'src/app/animations/animations';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';
import { Arquitectura, ProjectCards } from '../interfaces/project-cards.interface';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
  animations: [
    fadeInView
  ]
})
export class ProjectsSectionComponent implements OnInit {

  @ViewChildren(ProjectCardComponent ,{ read: ElementRef }) projs: any | undefined
  inViewList: Array<boolean> = [];
  colors = HeadingColors.DEFAULT_GRADIENT

  projects: Array<ProjectCards> = [
    {
      projectImg: 'structuresWizImg.png',
      projectName: 'Sistema Estatal de Ingresos',
      projectDescription: 'Sistema para el manejo de los datos vehiculares de los contribuyentes del estado de Durango, generación de tramites de altas, bajas, cambios, replaqueos, concesiones vehiculares entre otros. generación de reportes, contiene un modulo extenso de cobros y validaciones entre los usuarios que lo operan.',
      isProjectLinkPresent: false,
      projectLiveLink: 'https://www.npmjs.com/package/structures-wiz',
      isProjectGithubLinkPresent: false,
      projectGithubLink: 'https://github.com/harsh07bharvada/structures-wiz',
      isOpenSource: false,
      arquitectura: Arquitectura.MICRO,
      tecnologias: [ { nombre: 'Java', logo: '' }, { nombre: 'TypeScript', logo: '' }, { nombre: 'Angular', logo: '' }, { nombre: 'Spring Boot', logo: '' }, { nombre: 'Hibernate', logo: '' }, { nombre: 'Oracle', logo: '' } ]
    },
    {
      projectImg: 'horrorscopeImg.png',
      projectName: 'Sistema de Entrega Recepcion',
      projectDescription: 'Sistema con el cual se pueda llevar el proceso de entrega recepción, en la administración del gobierno del estado de Durango, desde la entrega de una unidad administrativa, hasta secretarias o direcciones gubernamentales, para poder facilitar este proceso a los servidores públicos y generarlo en un menor tiempo ya que cuenta con roles configurables para cada usuario que ingrese al sistema, así mismo cuenta con servicio de correo electrónico para que cada cambio se notifique al o los usuarios involucrados en cada proceso.',
      isProjectLinkPresent: false,
      projectLiveLink: 'https://your-horrorscope.netlify.app/',
      isProjectGithubLinkPresent: false,
      projectGithubLink: 'https://github.com/harsh07bharvada/Horrorscope',
      isOpenSource: false,
      arquitectura: Arquitectura.MONO,
      tecnologias: [ { nombre: 'Java', logo: '' }, { nombre: 'TypeScript', logo: '' }, { nombre: 'Angular', logo: '' }, { nombre: 'Spring Boot', logo: '' }, { nombre: 'Hibernate', logo: '' }, { nombre: 'Oracle', logo: '' } ]

    },
    {
      projectImg: 'clothingStoreImg.png',
      projectName: 'API Durango-Digital',
      projectDescription: 'API Rest. Para el consumo de peticiones HTTP, para la creacion, gestios y cobro de tramites vehiculares, registro civil, impuesto predial y declaraciones mensuales, trimestrales o anuales.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://www.pagos.durango.gob.mx/',
      isProjectGithubLinkPresent: false,
      projectGithubLink: 'https://github.com/harsh07bharvada/Clothing-Store',
      isOpenSource: false,
      arquitectura: Arquitectura.MONO,
      tecnologias: [ { nombre: 'Java', logo: '' }, { nombre: 'Spring Boot', logo: '' }, { nombre: 'Hibernate', logo: '' }, { nombre: 'Oracle', logo: '' } ]

    }, 
    {
      projectImg: 'elektrofyImg.png',
      projectName: 'Registro Unico de Beneficiarios (RUB)',
      projectDescription: 'Sistema para la creacion, supervision y gestion de solicitudes de la poblacion en general.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://www.elektrofy.com/',
      isProjectGithubLinkPresent: true,
      projectGithubLink: 'https://github.com/Elektrofy/Elektrofy',
      isOpenSource: false,
      arquitectura: Arquitectura.MONO,
      tecnologias: [ { nombre: 'Java', logo: '' }, { nombre: 'Spring Boot', logo: '' }, { nombre: 'Hibernate', logo: '' }, { nombre: 'PostgreSQL', logo: '' } ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
    
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    
    this.projs.forEach((v: { nativeElement: { offsetTop: number; }; }, index: string | number) => {
      if (index && v && v.nativeElement.offsetTop <= scrollPosition) {
        this.inViewList[+index] = true;
      }
    })
  }


}
