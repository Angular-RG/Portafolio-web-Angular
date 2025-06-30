# Portafolio Web Angular - Héctor Saavedra

[![Angular](https://img.shields.io/badge/Angular-16-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/hectorsaavedra/portfolio)

Un portafolio web moderno y responsivo desarrollado en Angular que muestra mis habilidades como desarrollador Full Stack, proyectos destacados y experiencia profesional.

## 🚀 Características

### ✨ Nuevo y Mejorado
- **Componentes Dinámicos**: Implementación de `*ngFor` en todas las secciones principales
- **Filtros Inteligentes**: Sistema de filtrado por categorías en tecnologías y proyectos
- **Búsqueda Avanzada**: Funcionalidad de búsqueda en tiempo real
- **Interfaces TypeScript**: Tipado fuerte para mejor mantenibilidad
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Fluidas**: Transiciones y efectos visuales atractivos

### 🎯 Secciones Principales
1. **Tecnologías y Skills**
   - Filtrado por categorías (Frontend, Backend, Database, Tools, Cloud)
   - Barras de progreso de proficiencia
   - Años de experiencia por tecnología
   - Badges informativos

2. **Proyectos**
   - Filtros por tipo (Gobierno Digital, Sistemas Municipales, APIs)
   - Búsqueda por nombre, descripción o tecnología
   - Enlaces a proyectos en vivo
   - Badges de arquitectura y tecnologías

3. **Testimonios**
   - Sistema de valoración con estrellas
   - Filtro de testimonios destacados
   - Enlaces a perfiles de LinkedIn
   - Avatares generados dinámicamente

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Angular 16**: Framework principal
- **TypeScript**: Lenguaje de desarrollo
- **Tailwind CSS**: Framework de estilos
- **Angular Animations**: Para transiciones suaves

### Backend (Proyectos destacados)
- **Java**: Lenguaje principal backend
- **Spring Boot**: Framework para microservicios
- **Hibernate**: ORM para manejo de datos

### Bases de Datos
- **Oracle**: Sistema principal en proyectos gubernamentales
- **PostgreSQL**: Para proyectos municipales
- **MongoDB**: Proyectos NoSQL

### Herramientas y Cloud
- **AWS**: Servicios en la nube
- **Docker**: Contenedorización
- **Git**: Control de versiones

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── animations/           # Animaciones personalizadas
│   ├── components/          # Componentes compartidos
│   ├── constants/           # Constantes del proyecto
│   ├── pages/               # Páginas principales
│   │   ├── home/
│   │   │   ├── technologies-section/  # Sección de tecnologías con filtros
│   │   │   ├── recommendation-section/ # Testimonios con ratings
│   │   │   └── ...
│   │   └── projects/
│   │       └── projects-section/      # Proyectos con búsqueda y filtros
│   ├── shared/
│   │   ├── interfaces/      # Interfaces TypeScript
│   │   ├── components/      # Componentes reutilizables
│   │   └── ...
│   └── util/               # Utilidades
├── assets/                 # Recursos estáticos
└── environments/          # Configuraciones de entorno
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn
- Angular CLI

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/hectorsaavedra/portfolio-angular.git

# Navegar al directorio
cd portfolio-angular

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
ng serve

# Compilar para producción
ng build
```

### Scripts Disponibles
```bash
npm start          # Servidor de desarrollo
npm run build      # Compilación de producción
npm run test       # Ejecutar pruebas
npm run lint       # Análisis de código
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: Gradientes de Indigo a Purple
- **Secundario**: Grises con acentos de color
- **Estados**: Verde (éxito), Rojo (error), Amarillo (advertencia)

### Responsividad
- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Grid System**: CSS Grid y Flexbox

### Accesibilidad
- **Contraste**: Ratios WCAG AAA
- **Navegación**: Soporte para teclado
- **Semántica**: HTML5 semántico

## 📊 Métricas de Rendimiento

- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔧 Configuración Avanzada

### Variables de Entorno
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'https://api.example.com',
  // ... otras configuraciones
};
```

### Personalización de Tailwind
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Colores personalizados
      }
    }
  }
};
```

## 📈 Mejoras Implementadas

### V2.0 - Noviembre 2024
- ✅ Implementación de `*ngFor` en todas las secciones
- ✅ Sistema de filtros y búsqueda
- ✅ Interfaces TypeScript mejoradas
- ✅ Componentes más modulares
- ✅ Mejor experiencia de usuario
- ✅ Optimización de rendimiento

### Próximas Mejoras
- 🔄 Modo oscuro/claro
- 🔄 Internacionalización (i18n)
- 🔄 Progressive Web App (PWA)
- 🔄 Blog integrado
- 🔄 Sistema de comentarios

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Héctor Saavedra**
- Email: [tu-email@example.com](mailto:tu-email@example.com)
- LinkedIn: [Tu LinkedIn](https://linkedin.com/in/tu-perfil)
- GitHub: [Tu GitHub](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- Angular Team por el excelente framework
- Tailwind CSS por el sistema de diseño
- Comunidad de desarrolladores por la inspiración

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella!

**Estado del Proyecto**: ✅ Activo y en desarrollo
**Última Actualización**: Noviembre 2024
