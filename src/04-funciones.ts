export {};

// Función básica 
function sumar(a: number, b: number): number {
  return a + b;
}
console.log("Suma:", sumar(2, 3));

// Parámetro opcional 
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
console.log(saludar("Ana"));
console.log(saludar("Ana", "Pérez"));

// Parámetro por defecto 
function crear(nombre: string, rol: string = "USER"): void {
  console.log(`Usuario ${nombre} con rol ${rol}`);
}
crear("Luis");
crear("María", "ADMIN");