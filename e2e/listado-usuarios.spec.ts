import { test, expect } from '@playwright/test';

test('debe cargar y mostrar la lista de usuarios', async ({ page }) => {
    await page.goto('/listado-usuarios'); // Ajusta la ruta según tu aplicación
    await page.waitForSelector('.lista-usuarios'); // Ajusta el selector según tu HTML

    const usuarios = await page.$$eval('.lista-usuarios .usuario', (elements) =>
        elements.map((el) => el.textContent?.trim())
    );

    expect(usuarios.length).toBeGreaterThan(0);
    expect(usuarios[0]).toBeTruthy();
    console.log('Usuarios cargados:', usuarios);
});