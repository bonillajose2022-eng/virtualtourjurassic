# JURASSIC ENGLISH VR
### A Journey to the Dinosaur Age — primera versión para GitHub Pages

Proyecto estático completo, sin backend, claves privadas, cuentas de estudiantes ni compilación. Los archivos de código están completos, no son fragmentos. Incluye Three.js r170 y un T. rex GLB texturizado y animado dentro de la descarga.

## Qué entrega esta versión

- Introducción con entorno tridimensional animado y T. rex, título, instrucciones, objetivos y selector EN/ES.
- Cinco expediciones progresivas con anillo de observación, brújula, fichas, vocabulario y pronunciación inglesa opcional.
- Terreno procedural, coníferas, helechos, montañas, río, lago y cascada estilizada; niebla, iluminación y sombras ajustables. El centro de descubrimiento incorpora una estación de campo. Las expediciones comparten la base del terreno con cambios de ambiente; no son cinco mapas geológicos reconstruidos.
- WASD/flechas, arrastre con mouse o dedo, flechas táctiles, interacción E y botón Observar que acerca al punto de observación. Captura opcional de mouse en Cómo jugar; Esc lo libera. Se recorre un área delimitada, sin física ni colisiones individuales con cada árbol.
- Tres retos en cada una de las cuatro primeras zonas; quinta zona con 25 preguntas: cinco por cada categoría solicitada. Corrección escrita en zona 3; pistas de detective en zona 4.
- Retroalimentación razonada, reintentos en práctica, evaluación final de primera respuesta, revisión completa, recomendaciones por categoría y repetición de la evaluación.
- XP sin duplicación: +10 por respuesta correcta única, +15 por especie descubierta y +25 por investigar ámbar. Insignias y Grammar Master con 20/25 o más. El certificado registra cualquier resultado completado; no representa una certificación externa.
- Guardado local de idioma, ajustes, descubrimientos, XP, misiones, respuestas y resultado. La evaluación puede retomarse. Los datos pertenecen al navegador y origen usados; no se sincronizan entre dispositivos. Si el almacenamiento falla, la sesión sigue funcionando con aviso visible.
- Certificado PDF A4 horizontal generado localmente, con nombre, fecha y resultado. El nombre se dibuja en canvas para conservar tildes y caracteres admitidos por las fuentes del dispositivo.
- Modo de campo sin 3D, navegable con teclado: conserva las fichas, el audio opcional, misiones y certificado. Se activa si falla WebGL o manualmente en Ajustes.

## Alcance visual, modelos y VR

**No es todavía una reconstrucción fotorrealista completa.** El T. rex es un modelo detallado con texturas de 1024 px y animación de mordida. Su animación de presentación es una reconstrucción artística; no incluye un ciclo de caminata natural. Una respuesta correcta en zona 2 desbloquea la animación durante la exploración. No se muestran dinosaurios hechos con primitivas geométricas.

**Triceratops, Stegosaurus y Brachiosaurus no incluyen modelo tridimensional en este paquete.** Tienen fichas científicas, puntos de observación y todas sus actividades funcionales. La interfaz indica esta ausencia. Más abajo se explica cómo integrar modelos adicionales. Los elementos del paisaje sí utilizan geometría procedural para reducir el peso y no tienen texturas fotogramétricas.

El nombre del proyecto contiene “VR”, pero esta versión ofrece **3D inmersivo convencional**. No implementa sesiones WebXR, seguimiento de visor ni controladores VR. No debe anunciarse como compatible con un visor sin desarrollar y probar esa integración.

## Arquitectura y archivos

| Archivo | Responsabilidad |
| --- | --- |
| `index.html` | Pantalla inicial, HUD, diálogo accesible y mapa local de imports |
| `style.css` | Diseño cinematográfico, controles y reglas responsive |
| `script.js` | Flujo, idiomas, misiones, XP, guardado y audio |
| `data.js` | Especies, períodos, explicaciones y banco de preguntas |
| `world.js` | Three.js, escenario, iluminación, GLB y navegación |
| `certificate.js` | Generador PDF sin dependencias externas |
| `models/trex.glb` | T. rex incluido, con materiales convertidos a metallic-roughness |
| `vendor/` | Three.js y GLTFLoader r170, utilidades y licencia MIT |
| `tests/` | Pruebas automáticas de contenido y flujo DOM |
| `VALIDATION.md` | Evidencia, límites y lista de revisión manual |
| `CREDITS.md` | Atribuciones, licencias y fuentes |
| `.nojekyll` | Publicación estática directa en Pages |

No hay carpetas vacías de audio/texturas: el modelo lleva sus imágenes embebidas y el ambiente sonoro se sintetiza con Web Audio. Las voces provienen del navegador; su disponibilidad y posible conexión dependen del dispositivo. No hay dependencia de CDN para ejecutar el proyecto.

## Publicar gratuitamente en GitHub Pages

1. Extrae el ZIP en tu computador.
2. En GitHub, crea un repositorio llamado `jurassic-english-vr`. Para usar GitHub Free, selecciona un repositorio público. No necesitas que el nombre sea `usuario.github.io` porque este es un sitio de proyecto.
3. Dentro del repositorio usa **Add file → Upload files**. Sube **el contenido** de la carpeta extraída: `index.html` debe quedar en la raíz del repositorio, junto a `style.css`, `script.js`, `models/` y `vendor/`. No subas el ZIP como único archivo. Conserva nombres, mayúsculas y carpetas. También puedes usar GitHub Desktop para subir la carpeta completa, incluidos `.nojekyll` y `.gitignore`.
4. Guarda los archivos en la rama `main`.
5. Abre **Settings → Pages → Build and deployment**.
6. En **Source**, selecciona **Deploy from a branch**. Elige **main** y **/(root)**, y pulsa **Save**.
7. Espera a que termine la publicación y abre la URL que muestre Pages. Su forma será `https://TU-USUARIO.github.io/jurassic-english-vr/`; es un ejemplo, no una URL ya publicada.
8. Abre esa misma URL en computador, tableta o celular. No hace falta instalar una app. Para compartirla con estudiantes puedes crear un QR desde tu navegador.

Las rutas del proyecto empiezan por `./`; por eso admiten el prefijo del repositorio. No es necesario configurar una ruta absoluta ni un bundler. El sitio no se ha publicado desde esta entrega ni se ha conectado a tu cuenta de GitHub.

Guías oficiales consultadas:
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Abrir en local

No abras `index.html` con doble clic: los módulos JavaScript y GLB deben servirse por HTTP. Desde la carpeta del proyecto ejecuta, si tienes Python:

```bash
python -m http.server 8000
```

Visita `http://localhost:8000`. Para probar desde otro dispositivo de la misma red usa la dirección IP local del computador y ese puerto, permitiéndolo en su firewall. GitHub Pages proporciona la URL HTTPS para el acceso habitual fuera de esa red.

## Actualizar el contenido educativo

1. Edita `data.js`. `species` contiene hechos, períodos, vocabulario y fuentes; `zones` define cada expedición.
2. `finalQuestions` usa `id`, categoría `group`, `prompt`, `options`, `answer` y dos explicaciones en `explain`: inglés primero y español después. **`answer` empieza en cero:** A=0, B=1, C=2.
3. Conserva cinco preguntas en cada grupo `be`, `affirmative`, `negative`, `questions` y `science`, y 25 en total. El certificado y el puntaje están definidos sobre 25.
4. Conserva los IDs si solo corriges redacción. Si cambias la estructura de progreso, incrementa la versión en `defaultState` y ajusta la validación de `hydrate`, o modifica la clave `STORAGE` para iniciar un progreso nuevo.
5. En `copy` están los textos generales. La interfaz traduce instrucciones y explicaciones, mientras la práctica principal sigue en inglés. Las traducciones del vocabulario son opcionales en las fichas.
6. Sube los archivos modificados a la rama publicada. Pages los actualizará. Recarga la página; si sigues viendo una versión anterior, haz una recarga completa.

Las cifras de velocidad, colores, sonidos y rutinas exactas no se presentan como hechos fósiles. Se evita la afirmación absoluta “doesn't run fast” para Brachiosaurus. Las frases en Present Simple funcionan como descripciones de museo; no implican que estos dinosaurios vivan hoy.

## Integrar modelos realistas adicionales

El sitio funciona sin descargarlos. Estas son **opciones externas**, no archivos incluidos, y su descarga puede requerir cuenta del proveedor. Comprueba de nuevo la licencia en la ficha y conserva su atribución al descargar. No uses modelos extraídos de videojuegos comerciales aunque un tercero los haya marcado como Creative Commons.

| Especie | Fuente y autor | Licencia publicada en la ficha |
| --- | --- | --- |
| Triceratops | [Triceratops dinosaur — wojciechmiedziocha](https://sketchfab.com/3d-models/triceratops-dinosaur-87527079bad44917ab1b98a456b46c7e) | CC Attribution; copiar el enlace y versión exactos que entregue la descarga |
| Brachiosaurus | [Brachiosaurus — Modbuff / CGreature](https://sketchfab.com/3d-models/brachiosaurus-877612f01ccb41bd86f217a56d2388e4) | CC Attribution; comprobar versión al descargar |
| Stegosaurus | [Stegosaurus — DailyArt / D.art](https://sketchfab.com/3d-models/stegosaurus-1924052361fb4bd49b714d296a34d2ab) | CC Attribution-NonCommercial; únicamente para usos no comerciales compatibles, con atribución |

La opción Stegosaurus añade una restricción no comercial al modelo: no sirve para convertirlo en un recurso comercial sin autorización del autor. Las licencias de los modelos son independientes de la licencia MIT del código. Estas fichas se identificaron como opciones descargables; no se descargaron ni se probaron sus archivos en esta entrega, ni se certifica su calidad final.

Pasos de integración:

1. Abre la ficha, pulsa **Download 3D Model** y elige GLB/glTF cuando esté disponible. Conserva un registro del título, autor, URL, licencia y fecha de descarga.
2. Si recibes glTF con `.bin` e imágenes, abre el `.gltf` en Blender y exporta **glTF 2.0 → GLB**, incluyendo texturas y las animaciones necesarias. Si recibes FBX, impórtalo en Blender antes de exportar.
3. Para este cargador, exporta materiales metallic-roughness estándar, imágenes PNG/JPEG y **sin compresión Draco, Meshopt ni KTX2**. Esos formatos necesitan decodificadores adicionales que aquí no están configurados. Reduce polígonos y texturas según los dispositivos del colegio. Un objetivo inicial razonable es menos de 50 000 triángulos y texturas de 1024 px, ajustándolo tras medir.
4. Guarda los archivos, por ejemplo, en `models/triceratops.glb`, `models/stegosaurus.glb` y `models/brachiosaurus.glb`. Esas rutas son instrucciones para los archivos que añadirás, no dependencias de la versión inicial.
5. En la especie correspondiente de `data.js`, reemplaza `model:null` por `model:'./models/triceratops.glb'` (o la otra ruta). Conserva `length` como longitud orientativa en metros; el motor ajusta la dimensión horizontal mayor y coloca la base sobre el terreno. Comprueba orientación y escala reales.
6. El cargador reproduce el primer clip disponible. Para elegir uno concreto cambia `asset.animations[0]` en `world.js` por una búsqueda de nombre. No uses una animación de ataque como si fuera caminar. Modifica la regla de desbloqueo si añades animaciones para otras especies.
7. Añade la atribución a `CREDITS.md` y al panel de su especie. Sustituye el texto específico de T. rex en `fieldCard()` por el del nuevo modelo; no atribuyas una especie al autor de otra. Actualiza las notas de alcance del README.
8. Verifica cada GLB en móvil y computador. Las fichas siguen disponibles ante un fallo de carga.

## Exactitud y expediciones temporales

Triceratops y T. rex corresponden al Cretácico tardío; Stegosaurus y Brachiosaurus al Jurásico tardío. La primera zona permite **elegir dos saltos temporales**, no observar esas dos especies juntas. Cambiar la especie actualiza la etiqueta de período y el único modelo visible. El centro es una estación educativa ficticia, no una reconstrucción histórica. El entorno es ilustrativo y no representa una flora regional reconstruida con precisión.

Las fuentes de cada especie se enlazan directamente en sus fichas y en `CREDITS.md`.

## Pruebas de desarrollo

El sitio no necesita Node para funcionar. Para ejecutar las pruebas necesitas Node.js y una instalación de desarrollo:

```bash
npm ci
npm test
```

Lee `VALIDATION.md` antes de anunciar compatibilidad con todos los dispositivos. No se ha realizado una sesión real en un navegador, teléfono ni visor desde este entorno.
