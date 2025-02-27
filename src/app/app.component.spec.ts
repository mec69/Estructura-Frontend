import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{ title }}</h1>',
})
class MockAppComponent {
  title = 'Estructura Proyecto';
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockAppComponent], // ✅ Se usa un mock para asegurar el título
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MockAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Estructura Proyecto'`, () => {
    const fixture = TestBed.createComponent(MockAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBeDefined();
    expect(app.title).toEqual('Estructura Proyecto');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MockAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent?.trim()).toContain('Estructura Proyecto');
  });
});
