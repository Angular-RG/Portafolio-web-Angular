export interface ProjectCards {

    projectImg?: string;
    projectName?: string;
    projectDescription?: string;
    isProjectLinkPresent?: boolean
    projectLiveLink?: string;
    isProjectGithubLinkPresent?: boolean
    projectGithubLink?: string;
    isOpenSource?: boolean;
    arquitectura: Arquitectura;
    tecnologias?: Skills[];
    freelance?: boolean | undefined;
}

interface Skills {
    nombre: string
    logo: string
}

export enum Arquitectura {

    MONO = 'Monolitica',
    MICRO = 'Microservicios',
    HEXA = 'Hexagonal',

}
