import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {}

  generateContent(apiKey: string, requestBody: any):Observable <any> {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(url, requestBody, { headers });
  }
}
