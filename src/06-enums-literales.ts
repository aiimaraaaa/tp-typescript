export {};

// Enum 
enum Rol {
  ADMIN,
  USER,
  GUEST
}

function asignarRol(rol: Rol): void {
  console.log(`Rol asignado: ${rol}`);
}
asignarRol(Rol.ADMIN);

// Tipo literal 
type Estado = "activo" | "inactivo";
let estadoActual: Estado = "activo";
console.log("Estado:", estadoActual);