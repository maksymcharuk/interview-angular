import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private namespace = 's';

  constructor() {}

  getItem(key: string): string | null {
    return window.localStorage.getItem(`${this.namespace}_${key}`);
  }

  setItem(key: string, value: string) {
    window.localStorage.setItem(`${this.namespace}_${key}`, value);
  }

  removeItem(key: string) {
    window.localStorage.removeItem(`${this.namespace}_${key}`);
  }

  clear() {
    window.localStorage.clear();
  }
}
