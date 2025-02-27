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

## 📦 Instalación de Paquetes

Ejecuta el siguiente comando para instalar todos los módulos de Node de este proyecto:

```sh
npm install
```

## 🌍 Inicio del Servidor de Desarrollo

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```sh
ng serve
```

🔗 Accede a la aplicación en [`http://localhost:4200/`](http://localhost:4200/). La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

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

## 🧪 Pruebas en Angular

### 📌 Pruebas Unitarias

Para ejecutar las pruebas unitarias en el proyecto, usa el siguiente comando:

```sh
ng test
```

Este comando ejecutará las pruebas utilizando **Karma** como test runner y **Jasmine** como framework de pruebas.

#### ✅ Objetivo de las pruebas unitarias

Las pruebas unitarias permiten validar el correcto funcionamiento de cada componente, servicio o función de forma aislada. Sus principales beneficios incluyen:

- 🔹 **Detección temprana de errores:** Identifica fallos en etapas iniciales del desarrollo.
- 🔹 **Mayor estabilidad:** Evita que cambios en el código afecten funcionalidades previas.
- 🔹 **Mantenimiento y escalabilidad:** Facilita la refactorización del código sin introducir errores.

#### 🔍 Tipos de pruebas unitarias en Angular

Las pruebas unitarias pueden clasificarse en diferentes categorías según su propósito:

- ✅ **Pruebas de funciones y métodos:** Validan que las funciones devuelvan los resultados esperados.
- ✅ **Pruebas de componentes:** Verifican la renderización, cambios en el estado y eventos del componente.
- ✅ **Pruebas de servicios:** Evalúan la lógica de negocio y la comunicación con APIs externas.
- ✅ **Pruebas de eventos y directivas:** Confirman el comportamiento de interacciones en la UI.

---

### 🏆 Pruebas End-to-End (E2E)

Para ejecutar pruebas de extremo a extremo, usa:

```sh
ng e2e
```

> **Nota:** Asegúrate de haber instalado un paquete de pruebas E2E, como **Cypress** o **Protractor**, antes de ejecutar este comando.

#### 🚀 Beneficios de las pruebas E2E

Las pruebas E2E validan el flujo completo de la aplicación simulando la interacción del usuario. Sus ventajas incluyen:

- 🔹 **Simulación de escenarios reales de uso.**
- 🔹 **Detección de errores en la integración entre componentes y servicios.**
- 🔹 **Garantía de estabilidad en la navegación y experiencia del usuario.**

---

📖 **Recomendación:** Mantén un equilibrio entre **pruebas unitarias** y **pruebas E2E** para garantizar la calidad del código sin afectar la velocidad de desarrollo. 🚀
