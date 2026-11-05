export {};

// Interface para objetos 
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad?: number; // Opcional
  readonly createdAt: Date; // Solo lectura
}

const user: Usuario = {
  id: 1,
  nombre: "Maria",
  email: "maria@example.com",
  createdAt: new Date(),
};

// Type alias 
type ID = string | number;
let miId: ID = "ABC123";

// Extender interfaces 
interface Empleado extends Usuario {
  legajo: string;
  salario: number;
}

const empleado: Empleado = {
  id: 2,
  nombre: "Luis",
  email: "luis@example.com",
  createdAt: new Date(),
  legajo: "A123",
  salario: 50000,
};

console.log("Usuario:", user);
console.log("ID Type:", miId);
console.log("Empleado:", empleado);