# Proyecto Angular - Estructura y Guía de Desarrollo

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) versión **18.2.4**.

***

## 📁 Estructura de Directorios y Archivos

```scss📁
📁 src/  # Código fuente de la aplicación
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
│   │   │   │   │   ├── 📄 inicia-sesion.service.ts
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
│   │   │   ├── 📄 footer.component.css
│   │   │   ├── 📄 footer.component.html
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

```

## **Convenciones de Nombres**

Para estandarizar la nomenclatura en el equipo, se debe seguir un patrón claro para cada tipo de archivo.

### **Componentes**

Los nombres de componentes deben:

* **Iniciar con un sustantivo y terminar con `.component.ts`**.
* Estar en **español** si todo el equipo usa este idioma.
* Usar **UpperCamelCase** en la clase y **kebab-case** en los archivos.

Ejemplo correcto:

````typescript
export class FormularioContactoComponent { }
```arar la lógica en **módulos independientes** para mejorar la mantenibilidad y carga diferida (*lazy loading*).
- Usar `core/` p
````

formulario-contacto.component.ts

````

Si el componente representa una acción específica (ej. modal, lista, tabla), el verbo debe **ir al final**.
Ejemplos:

productos-listar.component.ts
confirmacion-modal.component.ts
pedidos-filtrar.component.ts


### **2.2. Servicios**
Los servicios deben:
- Usar el **sufijo `.service.ts`**.
- Iniciar con un sustantivo que describa su propósito.

Ejemplo correcto:
```typescript
export class AutenticacionService { }
````

```
autenticacion.service.ts
```

### **Interfaces y Modelos de Datos**

Las interfaces deben:

* Usar el sufijo `.interface.ts`.
* Usar **UpperCamelCase** en el nombre de la clase.

Ejemplo correcto:

```typescript
export interface IUsuario {
  id: number;
  nombre: string;
}
```

```
usuario.interface.ts
```

### **Guards**

Los guards deben:

* Usar el sufijo `.guard.ts`.
* Iniciar con un sustantivo.

Ejemplo correcto:

```typescript
export class AuthGuard implements CanActivate { }
```

```
auth.guard.ts
```

### **Pipes y Directivas**

* **Pipes:** Usar el sufijo `.pipe.ts` y el nombre en singular.
* **Directivas:** Usar el sufijo `.directive.ts`.

Ejemplo correcto para pipe:

```typescript
export class FechaPipe implements PipeTransform { }
```

```
fecha.pipe.ts
```

Ejemplo correcto para directiva:

```typescript
export class ResaltarDirective { }
```

```
resaltar.directive.ts
```

### **Módulos**

Los módulos deben:

* Usar el sufijo `.module.ts`.
* Usar **UpperCamelCase** para el nombre de la clase.

Ejemplo correcto:

```typescript
@NgModule({
  declarations: [FormularioContactoComponent],
  imports: [CommonModule],
  exports: [FormularioContactoComponent]
})
export class ContactoModule { }
```

```
contacto.module.ts
```

## **Reglas Generales para Nombres en Español**

1. **Usar nombres claros y sin abreviaciones ambiguas.** ✅ `lista-productos.component.ts`\
   ❌ `lst-prod.comp.ts` (abreviaciones no recomendadas)
2. **Evitar tildes, ñ y caracteres especiales.** ✅ `anio.pipe.ts`\
   ❌ `año.pipe.ts` (evitar la "ñ" para compatibilidad)
3. **Mantener nombres consistentes en todos los módulos.** ✅ `pedido.service.ts`\
   ❌ `pedido-helper.service.ts` (inconsistencia)
4. **No mezclar idiomas en nombres de archivos.** ✅ `tabla-productos.component.ts`\
   ❌ `product-table.component.ts` (si el resto del código está en español)

## **Uso de `core/` y `shared/`**

* `core/`: Contiene servicios y módulos **globales**.
* `shared/`: Contiene componentes reutilizables que **no dependen de la aplicación**.

📌 **Ejemplo de `core/`**

```
core/
 ├── services/
 │   ├── autenticacion.service.ts
 │   ├── notificaciones.service.ts
 ├── guards/
 │   ├── auth.guard.ts
```

📌 **Ejemplo de `shared/`**

```
shared/
 ├── components/
 │   ├── boton-primario/
 │   │   ├── boton-primario.component.ts
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

## 🧪 Pruebas en Angular

### 📌 Pruebas Unitarias

Para ejecutar las pruebas unitarias en el proyecto, usa el siguiente comando:

```sh
ng test
```

Este comando ejecutará las pruebas utilizando **Karma** como test runner y **Jasmine** como framework de pruebas.

#### ✅ Objetivo de las pruebas unitarias

Las pruebas unitarias permiten validar el correcto funcionamiento de cada componente, servicio o función de forma aislada. Sus principales beneficios incluyen:

* 🔹 **Detección temprana de errores:** Identifica fallos en etapas iniciales del desarrollo.
* 🔹 **Mayor estabilidad:** Evita que cambios en el código afecten funcionalidades previas.
* 🔹 **Mantenimiento y escalabilidad:** Facilita la refactorización del código sin introducir errores.

#### 🔍 Tipos de pruebas unitarias en Angular

Las pruebas unitarias pueden clasificarse en diferentes categorías según su propósito:

* ✅ **Pruebas de funciones y métodos:** Validan que las funciones devuelvan los resultados esperados.
* ✅ **Pruebas de componentes:** Verifican la renderización, cambios en el estado y eventos del componente.
* ✅ **Pruebas de servicios:** Evalúan la lógica de negocio y la comunicación con APIs externas.
* ✅ **Pruebas de eventos y directivas:** Confirman el comportamiento de interacciones en la UI.

***

### 🏆 Pruebas End-to-End (E2E)

Para ejecutar pruebas de extremo a extremo, usa:

```sh
ng e2e
```

> **Nota:** Asegúrate de haber instalado un paquete de pruebas E2E, como **Cypress** o **Protractor**, antes de ejecutar este comando.

#### 🚀 Beneficios de las pruebas E2E

Las pruebas E2E validan el flujo completo de la aplicación simulando la interacción del usuario. Sus ventajas incluyen:

* 🔹 **Simulación de escenarios reales de uso.**
* 🔹 **Detección de errores en la integración entre componentes y servicios.**
* 🔹 **Garantía de estabilidad en la navegación y experiencia del usuario.**

***

📖 **Recomendación:** Mantén un equilibrio entre **pruebas unitarias** y **pruebas E2E** para garantizar la calidad del código sin afectar la velocidad de desarrollo. 🚀
