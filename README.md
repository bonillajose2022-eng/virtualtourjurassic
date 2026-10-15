# Jurassic English VR — Mundo abierto, salto y ayuda en español

Actualización 3 / versión 2.0. Proyecto estático para el repositorio `virtualtourjurassic`, sin backend, claves ni servicios de pago. **Todos los archivos de ejecución están en la misma carpeta**, como quedaron en el repositorio del usuario; no se necesitan carpetas `vendor` ni `models`.

## Cambios incluidos

- Mundo explorable de aproximadamente **470 metros de diámetro**, con bosque, colinas, rocas, río, lago, cascada ilustrativa, puentes y estación de campo. Es un mapa delimitado, no un mundo infinito.
- Caminar, correr, mirar y **saltar con gravedad y aterrizaje**. No se permite un segundo salto en el aire.
- Colisión básica con árboles y rocas. El río es superficial y se puede cruzar. Los puentes son elementos ambientales; no hay simulación de natación, escalada ni física compleja de cuerpos.
- **Cuatro especies con modelos texturizados y animaciones:** Triceratops, T. rex, Stegosaurus y Allosaurus. Son modelos GLB reales con mallas, texturas y rig/animaciones, no dinosaurios creados con primitivas como sustitutos.
- Varios individuos por época: 3 Triceratops y 2 T. rex en Cretácico; 3 Stegosaurus y 2 Allosaurus en Jurásico. Se cargan cinco individuos por época, no todos los modelos a la vez.
- Dos expediciones temporales sobre la misma base de terreno. El selector cambia los dinosaurios y el ambiente; evita mezclar especies de épocas distintas. El terreno es ilustrativo, no una reconstrucción regional exacta.
- Los animales usan animaciones disponibles, principalmente de reposo. No hay inteligencia artificial de manadas ni caminatas autónomas por todo el mapa. El T. rex conserva su animación artística de mordida.
- Preguntas que aparecen **automáticamente al acercarse a un dinosaurio**. El juego se pausa mientras se responde. Se puede cerrar el panel para mirar al animal de cerca y seguir explorando.
- Tras cerrar un encuentro no se repite el panel constantemente: es necesario alejarse y volver. Las cuatro preguntas de cada especie se pueden repetir sin duplicar XP.
- **Nivel A1 / inicial:** frases cortas y dos opciones. Cada pregunta incluye, antes de responder, traducción y pista en español, incluso con la interfaz en inglés. La retroalimentación explica la respuesta en ambos idiomas.
- Navegación libre, sin bloquear partes del mapa por los cuestionarios. Los cinco botones de zona son atajos opcionales. La evaluación final mantiene 25 preguntas, ahora más sencillas y con ayuda.
- Minimap con flecha del jugador, puntos de dinosaurios, río y estación. Botón para ocultar/mostrar paneles.
- XP, descubrimientos, diario, selección de idioma, ajustes y certificado PDF conservados. Brachiosaurus permanece como **ficha complementaria**, sin modelo 3D; no se cuenta entre las cuatro especies renderizadas.

## Actualizar el repositorio actual

1. Descarga y **extrae** el ZIP. No subas el ZIP como sustituto de los archivos.
2. Abre `https://github.com/bonillajose2022-eng/virtualtourjurassic`.
3. Pulsa **Add file → Upload files** y arrastra todos los archivos extraídos a la raíz del repositorio. Confirma reemplazar los existentes. Los nuevos GLB, `SkeletonUtils.js` y `physics.js` deben quedar junto a `index.html`.
4. Pulsa **Commit changes**. Mantén Pages configurado en `main`, `/(root)`.
5. Cuando termine la publicación, abre `https://bonillajose2022-eng.github.io/virtualtourjurassic/` y recarga con **Ctrl + F5**.

La aplicación usa un identificador de versión en los módulos para solicitar los archivos nuevos. La primera apertura de esta actualización vuelve a intentar el modo 3D, conserva XP, nombre, ajustes y descubrimientos, y prepara una evaluación final nueva porque las preguntas cambiaron. El resultado anterior se conserva localmente en `previousResult`; no se modifica su calificación para hacerla pasar por una evaluación nueva.

Si la página muestra un error de modelo, verifica que se hayan subido `triceratops.glb`, `stegosaurus.glb`, `allosaurus.glb` y `trex.glb`. Si solo se suben los JavaScript sin los GLB, no aparecerán las nuevas especies.

## Controles

| Acción | Computador | Celular / tableta |
| --- | --- | --- |
| Caminar | WASD o flechas | Flechas en pantalla |
| Mirar | Arrastrar el paisaje; captura opcional del mouse | Arrastrar el área libre |
| Saltar | Barra espaciadora o botón JUMP / SALTAR | Botón SALTAR |
| Correr | Mantener Shift o activar RUN | Activar CORRER |
| Encuentro | Acercarse; preguntas automáticas | Acercarse; preguntas automáticas |
| Interactuar | E o botón Observar | Botón Observar |
| Cambiar de época | Selector superior; E cerca del portal de destino | Selector superior; Observar cerca del portal |
| Revisar información | Diario de campo | Diario de campo |

Haz clic sobre el paisaje para enfocarlo antes de usar Espacio. Mientras un botón tiene foco, conserva su activación normal; el salto táctil también está disponible en computador. Esc cierra un diálogo o libera el mouse capturado.

## Contenido educativo

`data.js` contiene las fichas, `periods`, el banco final y `encounterQuestions`. Cada pregunta sencilla tiene:

- `prompt`: oración o pregunta en inglés;
- `translation`: traducción visible en español;
- `hint`: pista en español antes de responder;
- `options`: dos opciones;
- `answer`: índice correcto, A=0 y B=1;
- `explain`: explicación en inglés y en español.

Para cambiar el nivel, edita la sección “Open-world update” de `data.js`. La sección histórica inicial se conserva por compatibilidad; la capa A1 reemplaza el banco al cargar el módulo. No elimines las explicaciones ni cambies las 25 preguntas sin adaptar el certificado y el puntaje.

La práctica utiliza Present Simple como descripción de museo de hechos generales. No implica que estos dinosaurios no avianos vivan hoy. Los hechos de Allosaurus se basan en el Natural History Museum; su ficha enlaza la fuente. Colores, sonidos y movimientos exactos son reconstrucciones artísticas.

## Archivos principales

| Archivo | Función |
| --- | --- |
| `index.html`, `style.css` | Interfaz y HUD responsive |
| `script.js` | Encuentros, preguntas, idiomas, progreso y audio |
| `world.js` | Terreno, entorno, instancias y cámara |
| `physics.js` | Salto, movimiento, colisiones y control de proximidad |
| `data.js` | Dinosaurios, épocas y contenido A1 |
| `certificate.js` | Certificado PDF local |
| `three.module.js`, `GLTFLoader.js`, `BufferGeometryUtils.js`, `SkeletonUtils.js` | Three.js local, carga y clonación de esqueletos |
| `*.glb` | Los cuatro modelos incluidos |
| `test_*.mjs` | Pruebas de desarrollo; no se usan para jugar |
| `CREDITS.md`, `LICENSE`, `THREE-LICENSE.txt` | Atribuciones y licencias |

## Probar en local y desarrollar

El sitio no requiere instalación de Node. Para abrirlo localmente sirve la carpeta por HTTP, por ejemplo:

```bash
python -m http.server 8000
```

Abre `http://localhost:8000`. Evita abrir `index.html` con doble clic, porque los módulos y GLB necesitan HTTP.

Solo para las pruebas automáticas:

```bash
npm ci
npm test
```

El ZIP incluye las dependencias del navegador. Las dependencias de desarrollo se descargan únicamente al ejecutar `npm ci`.

## Límites y validación

Se ejecutaron **10 pruebas automáticas**, incluido el parseo real de los cuatro GLB y clonación de esqueletos en Node. Se probaron salto, límites, colisión básica, encuentros que no se repiten, preguntas A1, ayudas españolas, flujo DOM, evaluación final y XP sin duplicación. Lee `VALIDATION.md`.

No hay un navegador gráfico habilitado para pruebas en este entorno. No se comprobó visualmente esta nueva versión en móvil, GPU o navegador real, ni se publicó el cambio en GitHub desde esta conversación. Deben verificarse encuadres, FPS, tacto y descarga del certificado después de subirla.

El nombre conserva “VR”, pero se trata de exploración 3D convencional: **no se implementan sesiones WebXR con visor**. El paisaje procedural no es fotorrealismo completo. El progreso es local al navegador y no se sincroniza entre dispositivos.
