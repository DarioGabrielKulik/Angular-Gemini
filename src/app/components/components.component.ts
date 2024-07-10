import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {
  apiKey = 'AIzaSyD9xGTfHkSgmEdCATNrPevg35fzkUPLFAY'; // Remplaza tu apikey
  ingresarTexto: string | undefined;
  texto: any | undefined;
  constructor(private apiService: ServicesService) {}

  onSubmit() {
    const requestBody = { contents: [{ parts: [{ text: this.ingresarTexto }] }] };
    this.apiService.generateContent(this.apiKey, requestBody)
      .subscribe(response => { 
        this.texto = response.candidates[0].content.parts[0].text;
      });
  }
}
