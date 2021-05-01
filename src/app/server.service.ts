import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

    constructor(private http: HttpClient) {
    }

    private async request(method: string, url: string, data?: any) {

      const result = this.http.request(method, url, {
        body: data,
        responseType: 'json',
        observe: 'body',
        headers: {
          Authorization: `Bearer`
        }
      });
      return new Promise((resolve, reject) => {
        result.subscribe(resolve, reject);
      });
    }

    getAllUsers() {
        return this.request('GET', `${environment.serverUrl}/event/all`);
    }

    getEvents() {
      return this.request('GET', `${environment.serverUrl}/event`);
    }

    createEvent(event: any) {
      return this.request('POST', `${environment.serverUrl}/event`, event);
    }

    updateEvent(event: any) {
      return this.request('PUT', `${environment.serverUrl}/event/${event.id}`, event);
    }

    deleteEvent(event: any) {
      return this.request('DELETE', `${environment.serverUrl}/event/${event.id}`);
    }
}