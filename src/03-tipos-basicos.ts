export {};

// Primitivos 
let nombre: string = "Marcos";
let edad: number = 30;
let activo: boolean = true;

// Arrays 
let numeros: number[] = [1, 2, 3];
let nombres: string[] = ["Ana", "Luis"];

// Tuplas 
let usuario: [string, number] = ["Juan", 25];

// Inferencia de tipos 
let ciudad = "Formosa"; // TypeScript infiere string
// ciudad = 42; // Error

console.log("Nombre:", nombre);
console.log("Array de números:", numeros);
console.log("Tupla de usuario:", usuario);
console.log("Ciudad inferida:", ciudad);