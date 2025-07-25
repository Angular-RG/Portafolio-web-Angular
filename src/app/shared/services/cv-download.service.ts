import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvDownloadService {

  constructor() { }

  downloadCV(format: 'pdf' | 'doc' = 'pdf'): Observable<boolean> {
    // Simulate CV generation and download
    return new Observable(observer => {
      // Create a sample CV data
      const cvData = this.generateCVData();
      
      // Create blob and download
      const blob = new Blob([cvData], { 
        type: format === 'pdf' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
      });
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Hector_Adrian_Roman_CV.${format}`;
      
      // Simulate download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      // Simulate async operation
      setTimeout(() => {
        observer.next(true);
        observer.complete();
      }, 1000);
    });
  }

  private generateCVData(): string {
    return `
HÉCTOR ADRIÁN ROMÁN
Senior Full Stack Web Developer
Email: hectorr9577@gmail.com
LinkedIn: https://www.linkedin.com/in/hector-adrian-roman79509/
GitHub: https://github.com/HectorARG

PROFESSIONAL SUMMARY
Senior Full Stack Developer with 4+ years of experience specializing in Angular, Spring Boot, and enterprise-grade applications. Proven track record in government digital transformation projects and municipal systems development.

TECHNICAL SKILLS
Frontend: Angular (4+ years), TypeScript (4+ years), PrimeNG (2+ years), Tailwind CSS (2+ years)
Backend: Spring Boot (3+ years), Java (3+ years), Spring Security (3+ years), Spring Data (3+ years)
Databases: Oracle (3+ years), PostgreSQL (2+ years), Redis (1+ years), MongoDB (1+ years)
Cloud & Tools: AWS (2+ years), Docker (2+ years), Git (4+ years), Jira (4+ years), SonarQube (2+ years)

PROFESSIONAL EXPERIENCE
Senior Full Stack Developer | CETIC - Durango Government | 2020 - Present
• Led development of government digital transformation initiatives
• Architected and implemented microservices-based solutions
• Managed full-stack development using Angular and Spring Boot
• Collaborated with cross-functional teams to deliver high-impact projects

PROJECTS
Government Digital Systems: Developed comprehensive municipal management systems
API Development: Created robust REST APIs for government services
Enterprise Applications: Built scalable web applications for public sector

CERTIFICATIONS & ACHIEVEMENTS
• Oracle Certified Java Developer
• AWS Solutions Architect Associate
• Agile Development Methodologies
• Code Quality and Security Best Practices
    `.trim();
  }

  previewCV(): Observable<string> {
    // Return CV data for preview
    return of(this.generateCVData()).pipe(delay(500));
  }

  getCVFormats(): string[] {
    return ['pdf', 'doc'];
  }
}
