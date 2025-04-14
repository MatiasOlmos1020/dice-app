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

    async uploadImage(file: File, diceName: string, faceNumber: number): Promise<{ faceNumber: number; image: string }> {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('diceName', diceName);
        formData.append('faceNumber', faceNumber.toString());
    
        const response = await lastValueFrom(
            this.http.post<{ imageUrl: string, faceNumber: number }>(`${this.apiUrl}/images`, formData)
        );
    
        if (!response.imageUrl) {
            throw new Error('No se recibió la URL de la imagen desde el servidor');
        }
    
        return {
            faceNumber: response.faceNumber,
            image: response.imageUrl
        };
    }
    
}