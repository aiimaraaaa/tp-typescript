# Trabajo Práctico Integrador: Investigación en TypeScript

## Tema 1: ¿Qué es TypeScript?

- **¿Qué es TypeScript y quién lo desarrolla?**
  TypeScript es un superconjunto de JavaScript desarrollado por Microsoft. Esto significa que todo código JavaScript válido es también TypeScript válido. Le agrega tipado estático opcional, lo que permite detectar errores antes de ejecutar el código.

- **¿Qué diferencias tiene con JavaScript?**
  La principal diferencia es que TypeScript tiene tipos estáticos (como `string`, `number`), mientras que JavaScript es de tipado dinámico. Además, TypeScript debe compilarse a JavaScript para ejecutarse, ya que los navegadores y Node.js no entienden TypeScript directamente.

- **¿Qué ventajas ofrece?**
  Detecta errores mientras se escribe el código, mejora el autocompletado y la refactorización en el editor, hace el código más mantenible y escalable, y los tipos funcionan como documentación del propio código.

- **¿Cuál es su versión actual?**
  la versión actual es TypeScript 7, lanzada el 8 de julio de 2026. Es una reescritura completa del compilador en Go, unas 10 veces más rápida.

## Tema 2: Crear y ejecutar un proyecto

- **¿Cómo se instala TypeScript en un proyecto?**
  Se instala localmente con `npm i -D typescript`. También se recomienda instalar `@types/node` (para que TypeScript entienda las APIs de Node.js) y `tsx` (para ejecutar archivos `.ts` fácilmente).

- **¿Para qué sirve el archivo `tsconfig.json`?**
  Es el archivo de configuración del proyecto. Le indica a TypeScript qué archivos incluir (`include`), qué tan estricto ser (`strict`) y cómo generar el JavaScript final (`outDir`, `target`, `module`).

- **¿Qué hace el comando `tsc`?**
  Es el compilador oficial de TypeScript. Verifica los tipos de todo el código y genera los archivos `.js` en la carpeta de salida (`dist/`). Es la única herramienta que realmente verifica los tipos.

- **¿Qué diferencia hay entre ejecutar un archivo con `tsc`, `tsx` y `node`?**
  - `tsc`: No ejecuta, solo verifica tipos y compila a JavaScript.
  - `tsx`: Ejecuta archivos `.ts` directamente, sin verificar tipos (transpila al vuelo).
  - `node archivo.ts`: Node.js 24+ puede ejecutar `.ts` borrando los tipos (type stripping), pero no verifica tipos y tiene limitaciones (no soporta `enum`).

## Tema 3: Tipos básicos

- **¿Qué son los tipos `string`, `number` y `boolean`?**
  Son los tipos primitivos para texto (`string`), números (`number`) y valores lógicos (`boolean`: `true`/`false`).

- **¿Cómo se declara un array con tipo?**
  Se declara con el tipo del elemento seguido de `[]`. Ejemplo: `let numeros: number[] = [1, 2, 3];`.

- **¿Qué es un tipo unión?**
  Es un tipo que permite que una variable sea de uno u otro tipo. Se usa el operador `|`. Ejemplo: `let id: string | number = "ABC123";`.

- **¿Por qué se recomienda evitar `any`?**
  Porque `any` desactiva la verificación de tipos para esa variable, anulando todas las ventajas de TypeScript. Es como decirle al compilador "no revises esto".

## Tema 4: Funciones

- **¿Cómo se indican los tipos de los parámetros?**
  Se escribe el nombre del parámetro seguido de dos puntos y el tipo. Ejemplo: `function sumar(a: number, b: number)`.

- **¿Cómo se indica el tipo de retorno?**
  Se escribe después de los paréntesis de la función, antes del cuerpo. Ejemplo: `function sumar(a: number, b: number): number { ... }`. Si no devuelve nada, se usa `: void`.

- **¿Qué es un parámetro opcional?**
  Es un parámetro que puede no enviarse al llamar a la función. Se indica con `?` después del nombre. Ejemplo: `function saludar(nombre: string, apellido?: string)`.

- **¿Qué es un parámetro por defecto?**
  Es un parámetro que toma un valor predeterminado si no se envía. Ejemplo: `function crear(nombre: string, rol: string = "USER")`.

## Tema 5: Interfaces y type

- **¿Qué es una interfaz y para qué sirve?**
  Es una forma de describir la "forma" de un objeto (qué propiedades y métodos tiene). Sirve para tipar objetos y clases, y se puede extender con `extends`.

- **¿Qué es un type?**
  Es un alias para cualquier tipo. Sirve para crear uniones (`type ID = string | number`), tipos literales (`type Rol = "ADMIN" | "USER"`) o formas de objetos.

- **¿Cómo se declara una propiedad opcional?**
  Se usa `?` después del nombre de la propiedad. Ejemplo: `interface Usuario { edad?: number; }`.

- **¿Cuándo conviene usar cada uno?**
  - `interface`: Para estructuras de objetos y clases, especialmente cuando se necesita extender.
  - `type`: Para uniones, intersecciones y alias de tipos primitivos o literales.

## Tema 6: Enums y tipos literales

- **¿Qué es un enum?**
  Es una forma de dar nombres a un conjunto de valores (numéricos o de texto). Ejemplo: `enum Rol { ADMIN, USER, GUEST }`.

- **¿Qué es un tipo literal?**
  Es un tipo que solo permite un valor específico. Ejemplo: `type Direccion = "Norte" | "Sur" | "Este" | "Oeste";`.

- **¿En qué se parecen y en qué se diferencian?**
  Ambos restringen los valores posibles. Se diferencian en que `enum` crea un objeto real en JavaScript (con un mapeo entre nombres y valores), mientras que el tipo literal es puramente un tipo de TypeScript (se borra al compilar).

- **¿En qué situaciones se puede usar cada uno?**
  - `enum`: Para conjuntos fijos de constantes con nombre (roles, estados).
  - Tipo literal: Para restringir valores a una lista específica (ej. "activo" | "inactivo").

## Fuentes consultadas

- Guía teórica-práctica "Introducción a TypeScript".
- Documentación oficial de TypeScript: https://www.typescriptlang.org/docs/
