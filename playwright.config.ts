import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e', // Carpeta donde están las pruebas
  fullyParallel: true, // Ejecutar pruebas en paralelo
  forbidOnly: !!process.env['CI'], // Evitar pruebas "only" en CI
  retries: process.env['CI'] ? 2 : 0, // Reintentos en CI
  workers: process.env['CI'] ? 1 : undefined, // Número de workers en CI
  reporter: [
    ['html', { outputFolder: 'playwright-report' }], // Generar informe HTML
    ['list'], // Mostrar resultados en la consola
  ],
  use: {
    baseURL: 'http://localhost:4200', // URL base de tu aplicación Angular
    headless: true, // Ejecutar en modo sin cabeza (headless)
    trace: 'on-first-retry', // Habilitar trazas para depuración
    screenshot: 'only-on-failure', // Capturar pantallas solo en fallos
    video: 'retain-on-failure', // Grabar video solo en fallos
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
    ,
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  // Opcional: Configurar un servidor local para ejecutar la aplicación antes de las pruebas
  webServer: {
    command: 'npm start', // Comando para iniciar la aplicación Angular
    url: 'http://localhost:4200', // URL de la aplicación
    reuseExistingServer: !process.env['CI'], // Reutilizar servidor en desarrollo
    timeout: 120 * 1000, // Tiempo de espera para que el servidor esté listo
  },
});
