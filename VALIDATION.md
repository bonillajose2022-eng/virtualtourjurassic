# Validación — mundo abierto / actualización 3

## Comprobado automáticamente

**10 pruebas aprobadas, 0 fallidas.**

1. Salto: elevación, altura máxima aproximada de 1.6 m, rechazo de doble salto en el aire y aterrizaje sin hundimiento.
2. Movimiento: caminar a 6 m/s, correr a 11 m/s, diagonal normalizada y límite radial del mapa a 235 m.
3. Colisiones básicas contra círculos de obstáculos y altura de terreno finita en el mapa.
4. Proximidad: encuentro cercano, ausencia de reapertura continua y rearme después de alejarse.
5. Cuatro especies renderizadas, rutas locales existentes, separación Jurásico/Cretácico y créditos por modelo.
6. Banco A1: 25 preguntas, cinco por categoría, dos opciones, claves correctas, traducción y pista española en todas. Cuatro preguntas adicionales por especie.
7. Hidratación del progreso: nombre, XP, descubrimientos y ajustes previos se conservan.
8. Resolución de dependencias locales planas en HTML y módulos.
9. Parseo de los **cuatro GLB con GLTFLoader real en Node**, imágenes embebidas, geometría y animaciones existentes, dimensiones finitas y esqueletos clonados independientemente. La decodificación de imágenes se simuló para esta prueba; no se subieron texturas a una GPU.
10. Flujo DOM con JSDOM: navegación sin bloqueos, encuentro en modo de campo, pista española antes de responder con interfaz inglesa, respuesta incorrecta/correcta, XP único, cambio de época, cambio a español, evaluación final 25/25 y repetición sin duplicación de XP.

También se ejecutó `node --check` en todos los módulos propios y de Three.js incluidos, y se verificó la integridad del ZIP.

## Límites de las pruebas

No hay navegador gráfico habilitado para QA en este entorno. No se ejecutó renderizado WebGL ni se probó una pantalla táctil física. No se afirma haber comprobado FPS, encuadres, apariencia del modelo animado en pantalla, descarga del certificado, voces o composición responsive en un teléfono real.

El salto y el evento de proximidad se comprobaron mediante las mismas funciones puras que utiliza el motor, pero los gestos y su sensación en juego deben revisarse después de publicar.

La entrega es una actualización descargable: el repositorio de GitHub y su página publicada no se han modificado desde aquí.

## Prueba manual después de subir

- Abrir la página con Ctrl + F5 y verificar que no hay 404 de recursos propios.
- Caminar con WASD, mirar arrastrando, saltar con Espacio y correr con Shift.
- Observar varios individuos de Triceratops y T. rex; cambiar al Jurásico y encontrar Stegosaurus y Allosaurus.
- Acercarse a cada especie: la pregunta debe aparecer con traducción y pista en español. Cerrar el panel no debe reabrirlo inmediatamente.
- Alejarse y volver; repetir una pregunta correcta no debe aumentar otra vez los XP.
- Probar los botones táctiles en móvil vertical y horizontal. Si hay poco rendimiento, usar calidad Low.
- Cambiar a modo de campo y comprobar que siguen disponibles preguntas, diario y evaluación.
- Revisar el PDF con un nombre con tildes y comprobar que el progreso persiste tras recargar.
