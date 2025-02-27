# Proyecto Angular - Estructura y Guía de Desarrollo

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) versión **18.2.4**.

***

## 📁 Estructura de Directorios y Archivos

<pre class="language-scss📁"><code class="lang-scss📁">📁 src/  # Código fuente de la aplicación
├── 📁 app/  # Carpeta principal de la aplicación Angular
│   ├── 📁 core/  # Funcionalidades centrales y compartidas
│   │   ├── 📁 components/  # Componentes reutilizables
│   │   │   ├── 📁 cargando/  # Componente para mostrar un estado de carga
│   │   │   │   ├── 📄 cargando.component.css
│   │   │   │   ├── 📄 cargando.component.html
│   │   │   │   ├── 📄 cargando.component.spec.ts
│   │   │   │   ├── 📄 cargando.component.ts
│   │   │   ├── 📁 mensaje-error/  # Componente para mostrar mensajes de error
│   │   │   │   ├── 📄 mensaje-error.component.css
│   │   │   │   ├── 📄 mensaje-error.component.html
│   │   │   │   ├── 📄 mensaje-error.component.spec.ts
│   │   │   │   ├── 📄 mensaje-error.component.ts
│   │   │   ├── 📁 mensaje-exitoso/  # Componente para mostrar mensajes de éxito
│   │   │   │   ├── 📄 mensaje-exitoso.component.css
│   │   │   │   ├── 📄 mensaje-exitoso.component.html
│   │   │   │   ├── 📄 mensaje-exitoso.component.spec.ts
│   │   │   │   ├── 📄 mensaje-exitoso.component.ts
│   │   ├── 📁 interface/  # Interfaces utilizadas en la aplicación
│   │   │   ├── 📄 funciones.interface.ts  # Definiciones de interfaces para funciones
│   │   │   ├── 📄 validaciones.interface.ts  # Definiciones de interfaces para validaciones
│   │   ├── 📁 model/  # Contiene .env model
│   │   │   ├── 📄 env.model.ts  # Archivo .env
│   │   ├── 📁 pipe/  # Pipes personalizados
│   │   │   ├── 📄 formatoFecha.pipe.ts  # Pipe para formatear fechas
│   │   ├── 📁 service/  # Servicios compartidos en la aplicación
│   │   │   ├── 📄 funciones.service.ts  # Servicio para funciones comunes
│   │   │   ├── 📄 validaciones.service.ts  # Servicio para validaciones
│   ├── 📁 layout/  # Componentes relacionados con el diseño
│   │   ├── 📁 pagina-principal/  # Componentes de la página principal
│   │   │   ├── 📄 pagina-principal.component.css  # 
│   │   │   ├── 📄 pagina-principal.component.html  # 
│   │   │   ├── 📄 pagina-principal.component.spec.ts  # 
│   │   │   ├── 📄 pagina-principal.component.ts  # 
│   │   ├── 📁 pagina-secundaria/  # Componentes de la página secundaria
│   │   │   ├── 📄 pagina-secundaria.component.css  # 
│   │   │   ├── 📄 pagina-secundaria.component.html  # 
│   │   │   ├── 📄 pagina-secundaria.component.spec.ts  # 
│   │   │   ├── 📄 pagina-secundaria.component.ts  # 
│   ├── 📁 modules/  # Módulos funcionales de la aplicación
│   │   ├── 📁 autenticacion/  # Módulo de autenticación
│   │   │   ├── 📁 guard/  # Guards para proteger rutas
│   │   │   │   ├── 📄 inicio-sesion.guard.ts
│   │   │   │   ├── 📄 registrate.guard.ts
│   │   │   ├── 📁 interface/  # Interfaces relacionadas con autenticación
│   │   │   │   ├── 📄 inicio-sesion.interface.ts
│   │   │   │   ├── 📄 registrate.interface.ts
│   │   │   ├── 📁 pages/  # Páginas de inicio de sesión y registro
│   │   │   │   ├── 📁 iniciar-sesion
│   │   │   │   │   ├── 📄 inicio-sesion.component.css
│   │   │   │   │   ├── 📄 inicio-sesion.component.html
│   │   │   │   │   ├── 📄 inicio-sesion.component.spec.ts
│   │   │   │   │   ├── 📄 inicio-sesion.component.ts
│   │   │   │   ├── 📁 olvidaste-contrasenia
│   │   │   │   │   ├── 📄 olvidaste-contrasenia.component.css
│   │   │   │   │   ├── 📄 olvidaste-contrasenia.component.html
│   │   │   │   │   ├── 📄 olvidaste-contrasenia.component.spec.ts
│   │   │   │   │   ├── 📄 olvidaste-contrasenia.component.ts
│   │   │   │   ├── 📁 registrate
│   │   │   │   │   ├── 📄 registrate.interface.css
│   │   │   │   │   ├── 📄 registrate.interface.html
│   │   │   │   │   ├── 📄 registrate.interface.spec.ts
│   │   │   │   │   ├── 📄 registrate.interface.ts
│   │   │   ├── 📁 service/  # Servicios para autenticación
│   │   │   │   │   ├── 📄 inniciasesion.service.ts
│   │   │   │   │   ├── 📄 registrate.service.ts
│   │   ├── 📁 clientes/  # Módulo para gestión de clientes
│   │   │   ├── 📁 interface/  # Interfaces relacionadas con clientes
│   │   │   │   ├── 📄 clientes.interface.ts
│   │   │   ├── 📁 pages/  # Páginas de clientes
│   │   │   │   ├── 📁 agregar-clientes
│   │   │   │   │   ├── 📄 agregar-clientes.component.css
│   │   │   │   │   ├── 📄 agregar-clientes.component.html
│   │   │   │   │   ├── 📄 agregar-clientes.component.spec.ts
│   │   │   │   │   ├── 📄 agregar-clientes.component.ts
│   │   │   │   ├── 📁 listado-clientes
│   │   │   │   │   ├── 📄 listado-clientes.component.css
│   │   │   │   │   ├── 📄 listado-clientes.component.html
│   │   │   │   │   ├── 📄 listado-clientes.component.spec.ts
│   │   │   │   │   ├── 📄 listado-clientes.component.ts
│   │   │   ├── 📁 services/  # Servicios relacionados con clientes
│   │   │   │   ├── 📄 clientes.service.ts
│   │   ├── 📁 usuarios/  # Módulo para gestión de usuarios
│   │   │   ├── 📁 interface/  # Interfaces relacionadas con usuarios
│   │   │   │   ├── 📄 usuario.interface.ts
│   │   │   ├── 📁 pages/  # Páginas de usuarios
│   │   │   │   ├── 📁 listado-usuario
│   │   │   │   │   ├── 📄 listado-usuario.component.css
│   │   │   │   │   ├── 📄 listado-usuario.component.html
│   │   │   │   │   ├── 📄 listado-usuario.component.spec.ts
│   │   │   │   │   ├── 📄 listado-usuario.component.ts
│   │   │   │   ├── 📁 agregar-usuario
│   │   │   │   │   ├── 📄 agregar-usuario.component.css
│   │   │   │   │   ├── 📄 agregar-usuario.component.html
│   │   │   │   │   ├── 📄 agregar-usuario.component.spec.ts
│   │   │   │   │   ├── 📄 agregar-usuario.component.ts
│   │   │   ├── 📁 services/  # Servicios relacionados con usuarios
│   │   │   │   ├── 📄 usuarios.service.ts
│   ├── 📁 shared/  # Componentes compartidos en toda la aplicación
│   │   ├── 📁 footer/  # Componente del pie de página
<strong>│   │   │   ├── 📄 footer.component.css
</strong>│   │   │   ├── 📄 footer.component.html
│   │   │   ├── 📄 footer.component.spec.ts
│   │   │   ├── 📄 footer.component.ts
│   │   ├── 📁 header/  # Componente de la cabecera
│   │   │   ├── 📄 header.component.css
│   │   │   ├── 📄 header.component.html
│   │   │   ├── 📄 header.component.spec.ts
│   │   │   ├── 📄 header.component.ts
│   │   ├── 📁 sidebar/  # Componente de la barra lateral
│   │   │   ├── 📄 sidebar.component.css
│   │   │   ├── 📄 sidebar.component.html
│   │   │   ├── 📄 sidebar.component.spec.ts
│   │   │   ├── 📄 sidebar.component.ts
│   ├── 📄 app.component.css  # Estilos del componente principal
│   ├── 📄 app.component.html  # Plantilla HTML del componente principal
│   ├── 📄 app.component.spec.ts  # Pruebas unitarias del componente principal
│   ├── 📄 app.component.ts  # Lógica del componente principal
│   ├── 📄 app.config.ts  # Configuración de la aplicación
📁 assets/  # Archivos estáticos como imágenes y fuentes
│   ├── 📁 img/  # Carpeta de imágenes generales
│   ├── 📁 svg/  # Carpeta de íconos en formato SVG
📁 environments/  # Configuración para diferentes entornos (desarrollo, producción)
│   ├── 📄 enviroment.prod.ts
│   ├── 📄 enviroment.ts
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
📄 SUMMARY.md  # Documentación del proyecto
📄 tsconfig.app.json  # Configuración de TypeScript específica para la aplicación
📄 tsconfig.json  # Configuración global de TypeScript
📄 tsconfig.spec.json  # Configuración TypeScript para pruebas unitarias

</code></pre>

## 🚀 Servidor de Desarrollo

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```sh
ng serve
```

Accede a la aplicación en [`http://localhost:4200/`](http://localhost:4200/). La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

***

## ⚡ Generación de Código

Para generar un nuevo componente, ejecuta:

```sh
ng generate component nombre-del-componente
```

También puedes generar otros elementos:

```sh
ng generate directive|pipe|service|class|guard|interface|enum|module
```

***

## 🏗️ Compilación

Para compilar el proyecto, usa:

```sh
ng build
```

Los archivos compilados se almacenarán en el directorio `dist/`.

***

## ✅ Pruebas Unitarias

Ejecuta las pruebas unitarias con:

```sh
ng test
```

Utiliza el framework [Karma](https://karma-runner.github.io).

***

## 🔍 Pruebas End-to-End

Para ejecutar pruebas e2e:

```sh
ng e2e
```

Para utilizar este comando, asegúrate de haber instalado un paquete de pruebas e2e.

***

## 📖 Más Ayuda

Para obtener más ayuda sobre Angular CLI, usa:

```sh
ng help
```

O visita la página oficial de Angular CLI: [Resumen y referencia de comandos](https://angular.dev/tools/cli).

***

✨ _¡Feliz desarrollo con Angular! 🚀_
