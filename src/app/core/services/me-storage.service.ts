import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService, isStorageAvailable } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class MeStorageService {

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
  ) {
  }

  hasItem(key: string): boolean {
    if (this.isLocalStorageAvailable()) {
      return this.storage.has(key);
    }
    return false;
  }

  setItem<T>(key: string, value: T): void {
    if (this.isLocalStorageAvailable()) {
      this.storage.set(key, value);
    }
  }

  getItem<T>(key: string): T | null {
    if (this.isLocalStorageAvailable()) {
      return this.storage.get(key);
    }
    return null;
  }

  removeItem(key: string): void {
    if (this.isLocalStorageAvailable()) {
      this.storage.remove(key);
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
        if (typeof localStorage as any !== 'undefined') {
          return isStorageAvailable(localStorage);
        }
    } catch {
      console.error('Web storage isn\'t available.');
    }
    return false;
  }
}
