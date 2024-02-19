export const ProcessInfoTypeConfig = {
    RESEARCH: {
        iconType: 'BEAKER',
        headingText: 'Investigación y Estrategia',
        subHeadingText:'Pregunta Primero.',
        descriptionText: 'Antes de comenzar a desarrollar, siempre me aseguro de saber qué necesita hacerse y qué tengo que aprender para empezar con buen pie. Luego viene el proceso de desglosar el trabajo en tareas atómicas y asegurarme de que el orden y las estimaciones de las tareas sean perfectos.'
    },
    DESIGN: {
        iconType: 'LIGHT_BULB',
        headingText: 'Lluvia de Ideas y Diseño',
        subHeadingText:'Resolución de Problemas.',
        descriptionText: 'En este paso, tomo cada tarea atómica y busco el mejor enfoque para abordar el problema. Discuto múltiples ideas con los miembros del equipo y creo un diseño preliminar tanto para tareas de front-end como de back-end.'
    },
    DEV: {
        iconType: 'CODE',
        headingText: 'Desarrollo',
        subHeadingText:'Dando Vida a las Ideas.',
        descriptionText:'Este paso se trata de ejecutar las tareas atómicas establecidas en los pasos anteriores.'
    },
    QA: {
        iconType: 'CHECK_SHIELD',
        headingText: 'Calidad',
        subHeadingText:'Pruebas. ',
        descriptionText:'Este paso involucra pruebas unitarias así como pruebas de integración de la funcionalidad. Aún estoy trabajando en aprender a escribir casos de prueba automatizados.'
    }
}

export enum ProcessInfoTypes {
    RESEARCH = 'RESEARCH',
    DESIGN = 'DESIGN',
    DEV = 'DEV',
    QA = 'QA'
}