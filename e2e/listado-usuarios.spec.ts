

import { test, expect } from '@playwright/test';

test('Debe cargar y mostrar la lista de usuarios en la tabla', async ({ page }) => {
    console.log('\n-------------------------------');
    console.log('🔍 Iniciando prueba: Listado de usuarios');
    console.log('-------------------------------\n');

    // 📌 1. Navegar a la página de usuarios
    await page.goto('http://localhost:4200/listado-usuarios');

    // 📌 2. Esperar a que la tabla de usuarios esté presente
    const tablaUsuarios = page.locator('table tbody tr');
    await tablaUsuarios.first().waitFor(); // Se asegura de que haya al menos un usuario cargado

    // 📌 3. Contar el número total de usuarios en la tabla
    const totalUsuarios = await tablaUsuarios.count();
    console.log(`📌 Número total de usuarios encontrados: ${totalUsuarios}\n`);

    // 📌 4. Listar usuarios en la consola con nombre y correo electrónico
    console.log('👥 Lista de usuarios:');
    for (let i = 0; i < totalUsuarios; i++) {
        const usuarioFila = tablaUsuarios.nth(i);
        const nombre = await usuarioFila.locator('td:nth-child(2)').innerText();
        const email = await usuarioFila.locator('td:nth-child(3)').innerText();
        console.log(`   🔹 Usuario ${i + 1}: ${nombre} | ✉️ ${email}`);
    }
    console.log('');

    // 📌 5. Verificar que la tabla tiene usuarios
    expect(totalUsuarios).toBeGreaterThan(0);

    // 📌 6. Validar que el primer usuario tenga datos correctos
    const primerUsuarioNombre = await tablaUsuarios.first().locator('td:nth-child(2)').textContent();
    const primerUsuarioEmail = await tablaUsuarios.first().locator('td:nth-child(3)').textContent();
    const primerUsuarioUsuario = await tablaUsuarios.first().locator('td:nth-child(4)').textContent();

    expect(primerUsuarioNombre).not.toBeNull();
    expect(primerUsuarioEmail).not.toBeNull();
    expect(primerUsuarioUsuario).not.toBeNull();

    console.log('\n✅ Datos del primer usuario:');
    console.log(`   🏷️ Nombre: ${primerUsuarioNombre} | ✉️ Email: ${primerUsuarioEmail} | 🆔 Usuario: ${primerUsuarioUsuario}\n`);

    // 📌 7. Capturar evidencia visual de la tabla
    await page.screenshot({ path: 'evidencia-listado-usuarios.png', fullPage: true });
    console.log('📸 Captura de pantalla guardada: evidencia-listado-usuarios.png\n');

    console.log('✅ Prueba completada correctamente\n');
});




test('Debe eliminar un usuario correctamente', async ({ page }) => {
    console.log('\n-------------------------------');
    console.log('🗑️ Iniciando prueba: Eliminación de usuario');
    console.log('-------------------------------\n');

    // 📌 1. Navegar a la página de listado de usuarios
    await page.goto('http://localhost:4200/listado-usuarios');

    // 📌 2. Esperar a que la tabla de usuarios cargue
    await page.waitForSelector('table tbody tr');

    // 📌 3. Contar el número de usuarios antes de eliminar
    const usuariosAntes = await page.locator('table tbody tr').count();
    console.log(`📌 Usuarios antes de eliminar: ${usuariosAntes}\n`);
    expect(usuariosAntes).toBeGreaterThan(0);

    // 📌 4. Hacer clic en el botón "Eliminar" del primer usuario
    await page.locator('table tbody tr:first-child .delete').click();

    // 📌 5. Esperar a que la tabla se actualice
    await page.waitForSelector('table tbody tr', { state: 'attached' });

    // 📌 6. Contar el número de usuarios después de eliminar
    const usuariosDespues = await page.locator('table tbody tr').count();
    console.log(`📌 Usuarios después de eliminar: ${usuariosDespues}\n`);
    expect(usuariosDespues).toBeLessThan(usuariosAntes);

    // 📌 7. Capturar evidencia visual de la tabla antes y después de eliminar
    await page.screenshot({ path: 'evidencia-listado-usuarios.png', fullPage: true });
    console.log('📸 Captura de pantalla guardada: evidencia-listado-usuarios.png\n');

    await page.screenshot({ path: 'evidencia-eliminar-usuario.png', fullPage: true });
    console.log('📸 Captura de pantalla guardada: evidencia-eliminar-usuario.png\n');

    console.log('✅ Prueba completada correctamente\n');
});