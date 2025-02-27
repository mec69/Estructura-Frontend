# 🌟 Proyecto Angular - Estructura y Guía de Desarrollo

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) versión **18.2.4**.

---

## 📁 Estructura de Directorios y Archivos

```scss📁 node_modules/  # Dependencias del proyecto instaladas mediante npm
📁 public/  # Archivos públicos que se sirven directamente
📁 src/  # Código fuente de la aplicación
├── 📁 app/  # Carpeta principal de la aplicación Angular
│   ├── 📁 core/  # Funcionalidades centrales y compartidas
│   │   ├── 📁 components/  # Componentes reutilizables
│   │   │   ├── 📁 cargando/  # Componente para mostrar un estado de carga
│   │   │   ├── 📁 mensaje-error/  # Componente para mostrar mensajes de error
│   │   │   ├── 📁 mensaje-exitoso/  # Componente para mostrar mensajes de éxito
│   │   ├── 📁 interface/  # Interfaces utilizadas en la aplicación
│   │   │   ├── 📄 funciones.interface.ts  # Definiciones de interfaces para funciones
│   │   │   ├── 📄 validaciones.interface.ts  # Definiciones de interfaces para validaciones
│   │   ├── 📁 pipe/  # Pipes personalizados
│   │   │   ├── 📄 formatoFecha.pipe.ts  # Pipe para formatear fechas
│   │   ├── 📁 service/  # Servicios compartidos en la aplicación
│   │   │   ├── 📄 funciones.service.ts  # Servicio para funciones comunes
│   │   │   ├── 📄 validaciones.service.ts  # Servicio para validaciones
│   ├── 📁 layout/  # Componentes relacionados con el diseño
│   │   ├── 📁 pagina-principal/  # Componentes de la página principal
│   │   ├── 📁 pagina-secundaria/  # Componentes de la página secundaria
│   ├── 📁 modules/  # Módulos funcionales de la aplicación
│   │   ├── 📁 autenticacion/  # Módulo de autenticación
│   │   │   ├── 📁 guard/  # Guards para proteger rutas
│   │   │   ├── 📁 interface/  # Interfaces relacionadas con autenticación
│   │   │   ├── 📁 pages/  # Páginas de inicio de sesión y registro
│   │   │   ├── 📁 service/  # Servicios para autenticación
│   │   ├── 📁 clientes/  # Módulo para gestión de clientes
│   │   │   ├── 📁 interface/  # Interfaces relacionadas con clientes
│   │   │   ├── 📁 pages/  # Páginas de clientes
│   │   │   ├── 📁 services/  # Servicios relacionados con clientes
│   │   ├── 📁 usuarios/  # Módulo para gestión de usuarios
│   ├── 📁 shared/  # Componentes compartidos en toda la aplicación
│   │   ├── 📁 footer/  # Componente del pie de página
│   │   ├── 📁 header/  # Componente de la cabecera
│   │   ├── 📁 sidebar/  # Componente de la barra lateral
│   ├── 📄 app.component.css  # Estilos del componente principal
│   ├── 📄 app.component.html  # Plantilla HTML del componente principal
│   ├── 📄 app.component.spec.ts  # Pruebas unitarias del componente principal
│   ├── 📄 app.component.ts  # Lógica del componente principal
│   ├── 📄 app.config.ts  # Configuración de la aplicación
📁 assets/  # Archivos estáticos como imágenes y fuentes
│   ├── 📁 img/  # Carpeta de imágenes generales
│   ├── 📁 svg/  # Carpeta de íconos en formato SVG
📁 environments/  # Configuración para diferentes entornos (desarrollo, producción)
📄 favicon.ico  # Ícono de la aplicación
📄 index.html  # Archivo principal HTML de la aplicación
📄 main.ts  # Punto de entrada principal de la aplicación
📄 styles.css  # Archivo de estilos globales
⚙️ .editorconfig  # Configuración estándar para mantener el formato del código
⚙️ .gitignore  # Lista de archivos y carpetas que Git debe ignorar
📄 angular.json  # Configuración principal del proyecto Angular
📄 package-lock.json  # Archivo que asegura la consistencia de las dependencias
📄 package.json  # Archivo con las dependencias y scripts del proyecto
📄 README.md  # Documentación del proyecto
📄 tsconfig.app.json  # Configuración de TypeScript específica para la aplicación
📄 tsconfig.json  # Configuración global de TypeScript
📄 tsconfig.spec.json  # Configuración TypeScript para pruebas unitarias

```

## 🚀 Servidor de Desarrollo

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```sh
ng serve
```

Accede a la aplicación en [`http://localhost:4200/`](http://localhost:4200/). La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

---

## ⚡ Generación de Código

Para generar un nuevo componente, ejecuta:

```sh
ng generate component nombre-del-componente
```

También puedes generar otros elementos:

```sh
ng generate directive|pipe|service|class|guard|interface|enum|module
```

---

## 🏗️ Compilación

Para compilar el proyecto, usa:

```sh
ng build
```

Los archivos compilados se almacenarán en el directorio `dist/`.

---

## ✅ Pruebas Unitarias

Ejecuta las pruebas unitarias con:

```sh
ng test
```

Utiliza el framework [Karma](https://karma-runner.github.io).

---

## 🔍 Pruebas End-to-End

Para ejecutar pruebas e2e:

```sh
ng e2e
```

Para utilizar este comando, asegúrate de haber instalado un paquete de pruebas e2e.

---

## 📖 Más Ayuda

Para obtener más ayuda sobre Angular CLI, usa:

```sh
ng help
```

O visita la página oficial de Angular CLI: [Resumen y referencia de comandos](https://angular.dev/tools/cli).

---

✨ _¡Feliz desarrollo con Angular! 🚀_
