# Proyecto Angular - Estructura y Guía de Desarrollo

#### Tabla de Contenidos

- [Estructura de Directorios y Archivos](./#estructura-de-directorios-y-archivos)
- [Instalación de Paquetes](./#instalación-de-paquetes)
- [Inicio del Servidor de Desarrollo](./#inicio-del-servidor-de-desarrollo)
- [Compilación](./#compilación)
- [Pruebas Unitarias](./#pruebas-unitarias)
- [Configuración del entorno E2E](./#Configuración-del-entorno-e2e)

**Estructura de Directorios y Archivos**

```markup
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

## 📌 Convenciones de Nomenclatura en Angular

#### 🏗 Componentes

Los nombres de los componentes deben:

- Usar **kebab-case** (letras minúsculas separadas por guiones).
- Terminar en `.component.ts`.
- Ser descriptivos sobre su funcionalidad.

Ejemplos:

```sh
productos-tienda.component.ts
modal-confirmacion.component.ts
```

Nota: Si el componente representa una acción específica (ej. listar, filtrar, actualizar), el **verbo debe ir al final**.

```
productos-listar.component.ts → "Listar" es el verbo y está al final.
pedidos-filtrar.component.ts → "Filtrar" es el verbo y está al final.
```

#### 📂 Carpetas

- Deben nombrarse en **kebab-case**.
- Representan la funcionalidad o entidad que agrupan.

Ejemplo:

```sh
gestion-usuarios/
gestion-productos/
reporte-ventas/
```

#### 📜 Servicios

- Usar **camelCase**.
- Iniciar con un sustantivo que describa su propósito.
- Terminar con `.service.ts`.

Ejemplo:

```sh
producto.service.ts
usuario.service.ts
pedido.service.ts
```

#### 📊 Modelos

- Usar **PascalCase**.
- Terminar con `.model.ts`.

Ejemplo:

```plaintext
Producto.model.ts
Usuario.model.ts
Pedido.model.ts
```

#### 🏛 Interfaces

- Usar **PascalCase**.
- Prefijar con `I`seguido de un sustantivo.

Ejemplo:

```sh
IProducto.interface.ts
IUsuario.interface.ts
IPedido.interface.ts
```

#### 📌 Otros archivos

| Tipo       | Ejemplo                   |
| ---------- | ------------------------- |
| Directivas | `resaltar.directive.ts`   |
| Pipes      | `formatear-fecha.pipe.ts` |
| Guards     | `auth.guard.ts`           |
| Enums      | `estado-pedido.enum.ts`   |
| Módulos    | `ventas.module.ts`        |

### **Instalación de Paquetes**

Ejecuta el siguiente comando para instalar todos los módulos de Node de este proyecto:

```sh
npm install
```

### **Inicio del Servidor de Desarrollo**

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```sh
ng serve
```

### **🔗 Accede a la aplicación**

en [`http://localhost:4200/`](http://localhost:4200/). La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

### **⚡ Generación de Código**

Para generar un nuevo componente, ejecuta:

```sh
ng generate component nombre-del-componente
```

También puedes generar otros elementos:

```sh
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Compilación

Para compilar el proyecto, usa:

```sh
ng build
```

### **Pruebas Unitarias**

```sh
ng test
```

ejecuta las pruebas unitarias en un proyecto Angular utilizando Karma como corredor de pruebas.
Permite verificar el funcionamiento de los componentes, servicios y lógica del código de manera automatizada.

#### **2️⃣ Componente `usuarios.component.ts`**

Este componente usa `UsuariosService` para listar usuarios.

```typescript
import { Component, Input } from "@angular/core";
import { IClientes } from "../../interface/clientes.interface";
import { ClientesService } from "../../services/clientes.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-listado-clientes",
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ClientesService], // Proporciona el servicio
  templateUrl: "./listado-clientes.component.html",
  styleUrl: "./listado-clientes.component.css",
})
export class ListadoClientesComponent {
  @Input() name: string = "Mundo";

  getGreeting(): string {
    return `Hola, ${this.name}!`;
  }

  clientes: IClientes[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {}
}
```

#### 3️⃣ Test `Clientes.component.spec.ts`

Para probar el componente, usamos `HttpTestingController` para simular la API.

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { ListadoClientesComponent } from "./listado-clientes.component";

describe("ListadoClientesComponent", () => {
  let component: ListadoClientesComponent;
  let fixture: ComponentFixture<ListadoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule, // Importamos el módulo HTTP
        ListadoClientesComponent, // ✅ Importamos el componente standalone aquí
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Debe crearse el componente", () => {
    expect(component).toBeTruthy();
    console.log("%c✅ Prueba exitosa: El componente se creó correctamente", "color: green; font-weight: bold;");
  });
  it("Debe devolver el saludo por defecto", () => {
    const resultado = component.getGreeting();
    expect(resultado).toBe("Hola, Mundo!");
    console.log("%c✅ Prueba exitosa: getGreeting() devuelve el saludo por defecto", "color: green; font-weight: bold;");
  });

  it("Debe devolver el saludo con un nombre específico", () => {
    component.name = "Carlos";
    const resultado = component.getGreeting();
    expect(resultado).toBe("Hola, Carlos!");
    console.log("%c✅ Prueba exitosa: getGreeting() devuelve el saludo con un nombre", "color: green; font-weight: bold;");
  });
});
```

#### **4️⃣ Ejecutar las Pruebas**

Para correr los tests, usa el siguiente comando en la terminal:

```sh
ng test
```

### Resultados del Testeo
Resultado a nivel CONSOLA: ![Ejemplo de Documentacion](https://i.ibb.co/5fXw3JM/Capturasfa.png)
Resultado a nivel NAVEGADOR Verificación de estructura correcta: ![Ejemplo de Documentacion](https://i.ibb.co/wqQfr9r/Captura.png)

**📌 Explicación**
- ✅ Prueba la creación del componente: Verifica que ListadoClientesComponent se instancia correctamente.
- ✅ Prueba el método getGreeting por defecto: Confirma que devuelve "Hola, Mundo!" cuando no se asigna un nombre.
- ✅ Prueba el método getGreeting con nombre: Valida que devuelve "Hola, Carlos!" cuando se asigna un nombre.
- ✅ Asegura el funcionamiento correcto: Detecta errores tempranos y garantiza que el componente cumpla con su comportamiento esperado.

### Configuración del entorno E2E

#### 1. Instalación de Playwright
Ejecuta el siguiente comando para agregar Playwright a tu proyecto:

```sh
ng add @angular/playwright
```
Luego, crea el archivo de prueba en `e2e/listado-usuarios.spec.ts`.

---
#### 2. Crear la prueba E2E para el servicio de usuarios

**Servicio `UsuarioService`**

Archivo: `usuario.service.ts`

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {}

  listarUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
```

**Componente `UsuariosComponent`**

Archivo: `usuarios.component.ts`

```typescript
import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../services/usuario.service";

@Component({
  selector: "app-usuarios",
  template: `
    <h2>Lista de Usuarios</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th class="tc">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of usuarios; let i = index">
          <td>{{ i + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td class="tc">
            <button class="btn" (click)="editarUsuario(user)">Editar</button>
            <button class="btn delete" (click)="eliminarUsuario(i)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.listarUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }
}
```

---

#### 3. Crear la prueba E2E

Archivo: `e2e/src/app.e2e-spec.ts`

```typescript
import { test, expect } from "@playwright/test";

test("Debe cargar y mostrar la lista de usuarios en la tabla", async ({ page }) => {
  console.log("\n-------------------------------");
  console.log("🔍 Iniciando prueba: Listado de usuarios");
  console.log("-------------------------------\n");

  // 📌 1. Navegar a la página de usuarios
  await page.goto("http://localhost:4200/listado-usuarios");

  // 📌 2. Esperar a que la tabla de usuarios esté presente
  const tablaUsuarios = page.locator("table tbody tr");
  await tablaUsuarios.first().waitFor(); // Se asegura de que haya al menos un usuario cargado

  // 📌 3. Contar el número total de usuarios en la tabla
  const totalUsuarios = await tablaUsuarios.count();
  console.log(`📌 Número total de usuarios encontrados: ${totalUsuarios}\n`);

  // 📌 4. Listar usuarios en la consola con nombre y correo electrónico
  console.log("👥 Lista de usuarios:");
  for (let i = 0; i < totalUsuarios; i++) {
    const usuarioFila = tablaUsuarios.nth(i);
    const nombre = await usuarioFila.locator("td:nth-child(2)").innerText();
    const email = await usuarioFila.locator("td:nth-child(3)").innerText();
    console.log(`   🔹 Usuario ${i + 1}: ${nombre} | ✉️ ${email}`);
  }
  console.log("");
  
  // 📌 5. Verificar que la tabla tiene usuarios
  expect(totalUsuarios).toBeGreaterThan(0);

  // 📌 6. Validar que el primer usuario tenga datos correctos
  const primerUsuarioNombre = await tablaUsuarios.first().locator("td:nth-child(2)").textContent();
  const primerUsuarioEmail = await tablaUsuarios.first().locator("td:nth-child(3)").textContent();
  const primerUsuarioUsuario = await tablaUsuarios.first().locator("td:nth-child(4)").textContent();

  expect(primerUsuarioNombre).not.toBeNull();
  expect(primerUsuarioEmail).not.toBeNull();
  expect(primerUsuarioUsuario).not.toBeNull();

  console.log("\n✅ Datos del primer usuario:");
  console.log(`   🏷️ Nombre: ${primerUsuarioNombre} | ✉️ Email: ${primerUsuarioEmail} | 🆔 Usuario: ${primerUsuarioUsuario}\n`);

  // 📌 7. Capturar evidencia visual de la tabla
  await page.screenshot({ path: "evidencia-listado-usuarios.png", fullPage: true });
  console.log("📸 Captura de pantalla guardada: evidencia-listado-usuarios.png\n");

  console.log("✅ Prueba completada correctamente\n");
});

test("Debe eliminar un usuario correctamente", async ({ page }) => {
  console.log("\n-------------------------------");
  console.log("🗑️ Iniciando prueba: Eliminación de usuario");
  console.log("-------------------------------\n");

  // 📌 1. Navegar a la página de listado de usuarios
  await page.goto("http://localhost:4200/listado-usuarios");

  // 📌 2. Esperar a que la tabla de usuarios cargue
  await page.waitForSelector("table tbody tr");

  // 📌 3. Contar el número de usuarios antes de eliminar
  const usuariosAntes = await page.locator("table tbody tr").count();
  console.log(`📌 Usuarios antes de eliminar: ${usuariosAntes}\n`);
  expect(usuariosAntes).toBeGreaterThan(0);

  // 📌 4. Hacer clic en el botón "Eliminar" del primer usuario
  await page.locator("table tbody tr:first-child .delete").click();

  // 📌 5. Esperar a que la tabla se actualice
  await page.waitForSelector("table tbody tr", { state: "attached" });

  // 📌 6. Contar el número de usuarios después de eliminar
  const usuariosDespues = await page.locator("table tbody tr").count();
  console.log(`📌 Usuarios después de eliminar: ${usuariosDespues}\n`);
  expect(usuariosDespues).toBeLessThan(usuariosAntes);

  // 📌 7. Capturar evidencia visual de la tabla antes y después de eliminar
  await page.screenshot({ path: "evidencia-listado-usuarios.png", fullPage: true });
  console.log("📸 Captura de pantalla guardada: evidencia-listado-usuarios.png\n");

  await page.screenshot({ path: "evidencia-eliminar-usuario.png", fullPage: true });
  console.log("📸 Captura de pantalla guardada: evidencia-eliminar-usuario.png\n");

  console.log("✅ Prueba completada correctamente\n");
});
```

---

#### 4. Ejecutar las pruebas

Para correr los tests, usa el siguiente comando en la terminal:

Inicia la aplicación en modo desarrollo:

```sh
ng serve
```

Luego, ejecuta la prueba E2E con:

```sh
npx playwright test
```

---

#### 5. Explicación del test

<!--  -->

Resultado a nivel CONSOLA: ![Ejemplo de Documentacion](https://i.ibb.co/F4YcXhwr/teste2e.png)

**🚀 Beneficios de las pruebas E2E**

Las pruebas E2E validan el flujo completo de la aplicación simulando la interacción del usuario.

---

📖 **Recomendación:** Mantén un equilibrio entre **pruebas unitarias** y **pruebas E2E** para garantizar la calidad del código sin afectar la velocidad de desarrollo. 🚀
