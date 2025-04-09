import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { lastValueFrom } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ImageService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    async uploadImage(file: File): Promise<string> {
        const formData = new FormData();
        formData.append('image', file);

        const response = await lastValueFrom(
            this.http.post<{ url?: string }>(`${this.apiUrl}/images`, formData)
        );
        
        if (!response.url) {
            throw new Error('No se recibió la URL de la imagen desde el servidor');
        }
        console.log(response);
        return response.url;
    }
}