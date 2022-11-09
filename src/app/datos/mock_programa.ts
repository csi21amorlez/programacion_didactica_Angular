import { Tema } from '../tema';
//Constante en la que guardamos los diferentes objetos de tipo programacion para poder trabajar con ellos

export const TEMAS: Tema[] = [
  {
    tema: 1,
    titulo: 'Introduccion a TypeScript',
    objetivos: [
      'Iniciarse en TypeScript',
      'Ser capaz de transpilar un programa',
      'Instalar y configurar VSCode',
    ],
  },

  {
    tema: 2,
    titulo: 'Introducción a Angular',
    objetivos: [
      'Instalar Node y AngularCLI',
      'Conocer los comando de Angular CLI',
      'Instalar y configurar VSCode',
    ],
  },

  {
    tema: 3,
    titulo: 'Primera app Angular',
    objetivos: [
      'Crear una aplicacion con Angular',
      'Terminar el Tour of Heroes',
    ],
  },
];
