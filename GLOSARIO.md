# Glosario de Términos de TypeScript

1. **TypeScript**: Un superconjunto de JavaScript que le agrega tipos estáticos para detectar errores antes de ejecutar.

    let mensaje: string = "Hola TypeScript";

2. **Tipado estático**: Significa que los tipos de las variables se conocen y se revisan antes de que el programa corra.

    let edad: number = 30; // Si le pongo "treinta", da error

3. **tsc (Compilador)**: Es la herramienta oficial de TypeScript. Su trabajo es verificar que los tipos estén bien y traducir el código TypeScript a JavaScript puro para que pueda ejecutarse.

    npm run build // Este comando ejecuta tsc

4. **tsx**: Es una herramienta que ejecuta archivos TypeScript directamente sin compilarlos antes y sin verificar los tipos. Es súper útil para probar rápido en desarrollo.

    npx tsx src/01-introduccion.ts

5. **Interfaz (interface)**: Es como un "molde" que describe la forma que debe tener un objeto (qué propiedades tiene y de qué tipo son).

    interface Usuario {
      id: number;
      nombre: string;
    }

6. **Type (Alias)**: Es un nombre nuevo que le damos a un tipo de dato existente para que sea más fácil de leer o para crear combinaciones de tipos.

    type ID = string | number;

7. **Tipo Unión (|)**: Permite que una variable pueda aceptar más de un tipo de dato. Se usa la barra vertical.

    let id: string | number = "ABC123"; // Puede ser string o number

8. **Enum**: Es una forma de agrupar un conjunto de valores fijos (constantes) dándoles un nombre. Sirve para representar opciones que no cambian, como los estados de un pedido.

    enum Rol { ADMIN, USER, GUEST }

9. **Tipo Literal**: Es un tipo que obliga a que la variable tenga exactamente un valor específico de una lista cerrada. Si intentás poner otro valor, da error.

    type Direccion = "Norte" | "Sur";
    let miDireccion: Direccion = "Norte";

10. **Parámetro Opcional (?)**: Es un parámetro que no es obligatorio pasarle a una función. Se marca con un signo de pregunta y si no lo pasás, simplemente no se usa.

    function saludar(nombre: string, apellido?: string) { ... }

11. **any**: Es un tipo que le dice a TypeScript que deje de revisar esa variable (acepta cualquier cosa). Se recomienda evitarlo porque anula las ventajas del lenguaje.

    let dato: any = "Hola"; // No da error aunque después le pongas un número

12. **void**: Es un tipo de retorno que se usa en las funciones para indicar que no devuelven ningún valor (solo ejecutan una acción).

    function log(mensaje: string): void {
      console.log(mensaje);
    }