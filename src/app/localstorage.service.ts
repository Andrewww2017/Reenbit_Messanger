import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  emitChatIdSubject(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string) {
    try {
        const data = localStorage.getItem(key);
      return JSON.parse(data ? data : '');
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
