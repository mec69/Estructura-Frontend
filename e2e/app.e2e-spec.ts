import { test, expect } from '@playwright/test';

test('Carga y muestra la lista de usuarios', async ({ page }) => {
    // Ir a la aplicación Angular en localhost:4200
    await page.goto('http://localhost:4200/');

    // ✅ Validar que la página tenga algún título válido
    const title = await page.title();
    console.log(`Título de la página: ${title}`);
    expect(title.length).toBeGreaterThan(0); // Asegurar que el título no esté vacío

    // Esperar que el botón "Cargar Usuarios" esté visible y hacer clic en él
    const boton = page.getByRole('button', { name: 'Cargar Usuarios' });
    await expect(boton).toBeVisible();
    await boton.click();

    // Esperar a que se cargue la lista de usuarios
    const listaUsuarios = page.locator('#user-list li');
    await expect(listaUsuarios).not.toHaveCount(0); // Verifica que haya usuarios
});
