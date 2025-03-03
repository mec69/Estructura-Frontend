import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ListadoClientesComponent } from './listado-clientes.component';

describe('ListadoClientesComponent', () => {
  let component: ListadoClientesComponent;
  let fixture: ComponentFixture<ListadoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule, // Importamos el módulo HTTP
        ListadoClientesComponent // ✅ Importamos el componente standalone aquí
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
    console.log('%c✅ Prueba exitosa: El componente se creó correctamente', 'color: green; font-weight: bold;');
  });
  it('Debe devolver el saludo por defecto', () => {
    const resultado = component.getGreeting();
    expect(resultado).toBe('Hola, Mundo!');
    console.log('%c✅ Prueba exitosa: getGreeting() devuelve el saludo por defecto', 'color: green; font-weight: bold;');
  });

  it('Debe devolver el saludo con un nombre específico', () => {
    component.name = 'Carlos';
    const resultado = component.getGreeting();
    expect(resultado).toBe('Hola, Carlos!');
    console.log('%c✅ Prueba exitosa: getGreeting() devuelve el saludo con un nombre', 'color: green; font-weight: bold;');
  });

});
