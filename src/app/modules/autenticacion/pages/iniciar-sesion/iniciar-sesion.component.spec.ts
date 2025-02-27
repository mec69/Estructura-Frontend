import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IniciarSesionComponent } from './iniciar-sesion.component';
import { IniciarsSesionService } from '../../service/iniciasesion.service';

describe('IniciarSesionComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Usa HttpClientTestingModule en pruebas
      providers: [IniciarsSesionService],
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(IniciarSesionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
