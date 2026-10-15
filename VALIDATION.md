# Validación de la primera versión

## Ejecutado en este entorno

- `node --check` en los módulos propios y dependencias JavaScript locales: sin errores de sintaxis.
- `npm test`: **9 pruebas aprobadas**, 0 fallidas.
- Banco final: 25 preguntas únicas; cinco en cada categoría; todas las claves corresponden a opciones existentes. La prueba recorre opciones correctas e incorrectas.
- Corrección escrita: admite mayúsculas, espacios, apóstrofos tipográficos y punto final opcional; rechaza “doesn't eats”.
- Simulación DOM con JSDOM, sin motor gráfico: inicio, selector español, descubrimiento, retroalimentación de error, las cuatro misiones iniciales, desbloqueo de zonas, evaluación de 24/25, repetición de 25/25, nombre guardado, ajustes, diario e insignia. Se comprobó que repetir respuestas correctas no duplica XP.
- Persistencia: serialización/deserialización de progreso y resultados, recuperación de versión obsoleta y campos de colección inválidos; almacenamiento local comprobado dentro de la simulación DOM. No es una recarga real de un navegador.
- Rutas: todos los recursos locales declarados existen. No hay rutas absolutas desde `/` para recursos de la página. La simulación usa una URL con prefijo de repositorio, como GitHub Pages.
- Modelo GLB: cabecera y tamaño correctos, animación existente, imágenes embebidas y material compatible con la versión incluida del cargador. Se inspeccionó visualmente la textura base extraída; no se ejecutó renderizado 3D.
- PDF: comprobadas sus referencias de bytes; un PDF de muestra con imagen JPEG se abrió con `pdfinfo`, que lo identificó como PDF 1.4, una página, A4 horizontal, sin cifrado. No equivale a comprobar la descarga ni la composición del certificado en un navegador.
- Empaquetado: ZIP sin `node_modules`, sin enlaces simbólicos y con dependencias locales, modelo, licencias, código completo y documentación.

## Implementado, pendiente de probar en dispositivos reales

No hubo un navegador de pruebas habilitado para este entorno. No se ejecutaron Chrome, Safari, Firefox, un móvil, una tableta ni un visor. Por tanto, lo siguiente **no se declara validado**:

- Apariencia final, encuadre del T. rex, orientación y tamaño del modelo en pantalla.
- Renderizado WebGL, GPU, consumo de memoria, FPS, sombras, iluminación y animación.
- Gestos táctiles y captura de mouse reales.
- Layout responsive en 360/390 px, orientación horizontal, zoom de texto y ausencia de superposiciones.
- Voces disponibles, audio en iOS/Android y políticas de reproducción del navegador.
- Texto exacto y descarga del certificado PDF generado desde canvas.
- Publicación real en GitHub Pages o acceso por una URL propia.
- Prueba manual de lector de pantalla. Hay controles HTML, foco visible, etiquetas, diálogos y modo alternativo; no se certifica conformidad WCAG.

## Revisión manual recomendada antes de usarlo en clase

1. Publicar el contenido de la carpeta en un repositorio de prueba y abrir la URL de Pages.
2. Confirmar carga del T. rex en portada; comenzar y comprobar que zona 1 muestra ficha sin modelo y el período adecuado.
3. Usar WASD/flechas y arrastrar el espacio libre del paisaje. Observar el anillo; abrir con E cerca de él o con Observar desde lejos.
4. Completar zona 1 y verificar que el T. rex aparece en zona 2; responder correctamente y confirmar desbloqueo de animación.
5. Cambiar entre Stegosaurus/Triceratops y leer las etiquetas temporales. No deben coexistir como contemporáneos.
6. Cambiar a español; las instrucciones cambian, las preguntas principales siguen en inglés.
7. Responder incorrectamente y leer la explicación; completar zona 3 mediante corrección escrita.
8. Cerrar/reabrir la pestaña a mitad de una misión y de la evaluación; comprobar continuidad y XP.
9. Completar las 25 preguntas, revisar errores, escribir “José Muñoz” y descargar el PDF. Abrirlo y comprobar nombre, fecha y resultado.
10. Repetir en teléfono y tableta, vertical/horizontal, calidad baja/alta y movimiento desactivado. Comprobar desplazamiento, botones y audio.
11. Activar modo de campo; completar todo mediante Tab/Enter y teclado. Probar con almacenamiento bloqueado y con fallo de WebGL.
12. Revisar la consola y Network: no debe haber 404 de archivos propios. Comprobar la misma URL desde otro dispositivo.

## Limitaciones deliberadas

- Solo T. rex tiene modelo 3D incluido. Las otras especies tienen respaldo de fichas, explícito en pantalla.
- Entorno procedural, sin fotorrealismo completo, ecosistemas escaneados ni cinco mapas únicos.
- El ciclo modifica lentamente la luz solar; no simula astronomía, cielo volumétrico ni clima.
- La animación incluida es una mordida artística; no hay locomoción esquelética de caminata.
- Sin WebXR ni soporte validado para visores.
- Sin backend, identificación de alumnos, panel docente o sincronización. El resultado local puede modificarse en el navegador y no sirve como examen supervisado.
