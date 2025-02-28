// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ListadoUsuariosComponent } from './listado-usuarios.component';
// import { UserService } from '../../service/usuarios.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { lastValueFrom } from 'rxjs';

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000; // ⏳ Aumenta timeout a 30 segundos

// describe('ListadoUsuariosComponent - Prueba con API Real', () => {
//   let component: ListadoUsuariosComponent;
//   let fixture: ComponentFixture<ListadoUsuariosComponent>;
//   let userService: UserService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         ListadoUsuariosComponent, // ✅ Se importa como standalone
//         HttpClientTestingModule,  // ✅ Permite pruebas HTTP
//       ],
//       providers: [UserService]
//     }).compileComponents();

//     fixture = TestBed.createComponent(ListadoUsuariosComponent);
//     component = fixture.componentInstance;
//     userService = TestBed.inject(UserService);
//   });

//   it('debería obtener usuarios reales desde la API', async () => {
//     const startTime = performance.now();

//     try {
//       const usuarios = await lastValueFrom(userService.getUsers()); // ✅ Manejo correcto de observables

//       const endTime = performance.now();
//       const responseTime = endTime - startTime;

//       console.log('📄 Usuarios recibidos:', usuarios);
//       console.log('⏳ Tiempo de respuesta:', responseTime.toFixed(2), 'ms');

//       expect(usuarios).toBeTruthy(); // ✅ Verifica que la API devolvió algo
//       expect(Array.isArray(usuarios)).toBeTrue(); // ✅ Confirma que sea un array
//       expect(usuarios.length).toBeGreaterThan(0); // ✅ Confirma que haya datos

//     } catch (error) {
//       fail(`Error al obtener usuarios: ${error}`);
//     }
//   });
// });
