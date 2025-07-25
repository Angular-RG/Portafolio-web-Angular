import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private loadingStates = new Map<string, boolean>();

  constructor() { }

  // Global loading state
  get isLoading$(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  get isLoading(): boolean {
    return this.loadingSubject.value;
  }

  setLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  // Component-specific loading states
  setComponentLoading(component: string, loading: boolean): void {
    this.loadingStates.set(component, loading);
    this.updateGlobalLoadingState();
  }

  getComponentLoading(component: string): boolean {
    return this.loadingStates.get(component) || false;
  }

  isComponentLoading$(component: string): Observable<boolean> {
    return new BehaviorSubject<boolean>(this.getComponentLoading(component)).asObservable();
  }

  private updateGlobalLoadingState(): void {
    const hasLoadingComponents = Array.from(this.loadingStates.values()).some(loading => loading);
    this.loadingSubject.next(hasLoadingComponents);
  }

  // Utility method to wrap async operations
  async withLoading<T>(operation: () => Promise<T>, component?: string): Promise<T> {
    try {
      if (component) {
        this.setComponentLoading(component, true);
      } else {
        this.setLoading(true);
      }
      
      const result = await operation();
      return result;
    } catch (error) {
      throw error;
    } finally {
      if (component) {
        this.setComponentLoading(component, false);
      } else {
        this.setLoading(false);
      }
    }
  }
}
