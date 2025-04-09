export interface Face {
    faceNumber: number;
    image?: string; // Opcional porque en el backend `required: false`
}

export interface Dice {
    _id?: string;    // Opcional, lo agrega MongoDB
    name: string;
    faceQty: number;
    faces: Face[];
}