import { test, expect } from '@playwright/test';

test('Debe cargar y mostrar la lista de usuarios', async ({ page }) => {
    // 📌 Ir a la página de listado de usuarios
    await page.goto('http://localhost:4200/listado-usuarios');

    // 📌 Esperar a que el botón de cargar usuarios esté visible y hacer clic en él
    const boton = page.locator('button', { hasText: 'Cargar Usuarios' });
    await expect(boton).toBeVisible();
    await boton.click();

    // 📌 Esperar que se carguen los usuarios en la lista
    const listaUsuarios = page.locator('#user-list li');
    await listaUsuarios.first().waitFor(); // Espera a que al menos un usuario cargue

    // 📌 Verificar que la lista de usuarios no esté vacía
    const userCount = await listaUsuarios.count();
    expect(userCount).toBeGreaterThan(0);

    // 📌 Verificar que el primer usuario tiene un nombre válido
    const firstUser = await listaUsuarios.first().textContent();
    expect(firstUser).not.toBeNull();
    expect(firstUser?.trim().length).toBeGreaterThan(0);

    // 📌 Registrar usuarios cargados en consola
    const usuarios = await listaUsuarios.allTextContents();
    console.log('Usuarios cargados:', usuarios);

    // 📌 Capturar una pantalla en caso de fallo
    await page.screenshot({ path: 'evidencia-listado-usuarios.png', fullPage: true });
});
