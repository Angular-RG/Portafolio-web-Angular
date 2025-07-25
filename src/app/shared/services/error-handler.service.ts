import { Injectable, ErrorHandler } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AppError {
  id: string;
  message: string;
  type: 'error' | 'warning' | 'info' | 'success';
  timestamp: Date;
  details?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  private errorsSubject = new BehaviorSubject<AppError[]>([]);
  private errorCount = 0;

  constructor() { }

  handleError(error: any): void {
    console.error('Global error handler:', error);
    
    const appError: AppError = {
      id: `error_${++this.errorCount}`,
      message: this.extractErrorMessage(error),
      type: 'error',
      timestamp: new Date(),
      details: error
    };

    this.addError(appError);
  }

  get errors$(): Observable<AppError[]> {
    return this.errorsSubject.asObservable();
  }

  addError(error: AppError): void {
    const currentErrors = this.errorsSubject.value;
    this.errorsSubject.next([...currentErrors, error]);

    // Auto-remove error after 5 seconds for non-critical errors
    if (error.type !== 'error') {
      setTimeout(() => {
        this.removeError(error.id);
      }, 5000);
    }
  }

  removeError(errorId: string): void {
    const currentErrors = this.errorsSubject.value;
    const filteredErrors = currentErrors.filter(error => error.id !== errorId);
    this.errorsSubject.next(filteredErrors);
  }

  clearAllErrors(): void {
    this.errorsSubject.next([]);
  }

  showSuccess(message: string): void {
    const successError: AppError = {
      id: `success_${++this.errorCount}`,
      message,
      type: 'success',
      timestamp: new Date()
    };
    this.addError(successError);
  }

  showWarning(message: string): void {
    const warningError: AppError = {
      id: `warning_${++this.errorCount}`,
      message,
      type: 'warning',
      timestamp: new Date()
    };
    this.addError(warningError);
  }

  showInfo(message: string): void {
    const infoError: AppError = {
      id: `info_${++this.errorCount}`,
      message,
      type: 'info',
      timestamp: new Date()
    };
    this.addError(infoError);
  }

  private extractErrorMessage(error: any): string {
    if (error?.message) {
      return error.message;
    }
    
    if (error?.error?.message) {
      return error.error.message;
    }
    
    if (typeof error === 'string') {
      return error;
    }
    
    return 'An unexpected error occurred';
  }
}
