# Añadir especies y animaciones

El motor carga especies declaradas en `data.js`; no requiere programar un controlador 3D nuevo por cada animal. Comprueba licencias, anatomía, período y región antes de integrarlo.

1. Obtén un GLB/GLTF redistribuible. Excluye modelos sin licencia y copias de videojuegos cuya licencia no pueda conceder quien las subió. BY-SA obliga a mantener la licencia del modelo derivado; MIT del código no la reemplaza.
2. Abre el modelo en un visor glTF y verifica malla, materiales, orientación, escala, animaciones y texturas. Para tamaño escolar utiliza mallas y texturas ligeras. Empaqueta GLB con recursos embebidos: los modelos actuales no necesitan archivos externos ni decodificadores Draco/KTX.
3. Guarda el GLB en la raíz, junto a `index.html`. Documenta nombre de obra, autor, URL original, copia descargada, licencia, atribución, modificaciones y checksum en `docs/model-credits.json` y `CREDITS.md`.
4. Añade una ficha a `species` en `data.js` con estos campos:

```js
species.example = {
  name: 'Nombre científico verificado',
  reserve: 'reserva-compatible',
  length: 5,                     // longitud aproximada en metros
  feature: 'a long tail', featureES: 'una cola larga',
  part: 'legs', partES: 'patas',
  food: 'plants',               // null si no procede preguntar por dieta
  marine: false,
  model: './example.glb',
  bytes: 123456,                // tamaño REAL; usado por el progreso de carga
  credit: 'Obra · Autor · licencia',
  modelSource: 'URL original comprobada',
  science: 'Fuente científica comprobada',
  hasClips: false               // true SOLO si el GLB realmente tiene clips
};
```

El ejemplo es una plantilla de estructura; no lo pegues como especie ficticia en la lista activa. Sustituye todos los valores por un recurso existente. Esta asignación debe hacerse antes del bucle que genera `encounterQuestions`.

5. Añade su clave al arreglo `species` de una reserva compatible. Si no existe, crea una reserva en `periods` con nombre EN/ES, fecha, región, color y especies. Los portales se generan automáticamente. En la disposición actual caben diez portales de 6 m de separación; adapta su colocación en `makeEnvironment` si añades más.
6. En `world.js`, `spawnPoints` de `data.js` define cuatro posiciones base por reserva. Amplíalo si una reserva incorpora más de cuatro especies. Mantén las posiciones lejos del campamento, dentro de los límites y con suficiente espacio para el radio del animal. Añade las mismas zonas al despeje de árboles/rocas si usas coordenadas especiales.
7. Actualiza los textos de portada, denominadores y documentación cuando cambie el número de especies. Los contadores del diario y HUD usan el catálogo; las metas de las insignias y las misiones específicas deben revisarse. `catalog.json` es una copia informativa, no el archivo activo: regénéralo desde `data.js` si lo conservas.

## Selección de animaciones

`world.js → setPeriod` detecta `Idle` (o el primer clip) y `Walk` / `Slowwalk`. Usa un `AnimationMixer` y un esqueleto independiente por individuo mediante `SkeletonUtils.clone`. Los cuatro modelos anteriores tienen clips; los doce añadidos no.

Solo un clip de marcha válido permite trasladar un animal por su zona. No renombres un clip de ataque como caminar. Los clips actuales de Stegosaurus y Triceratops no usan desplazamiento de raíz; con un recurso distinto comprueba si hay root motion antes de añadir movimiento del contenedor, para no duplicarlo.

Para `eat`, `drink`, `rest` u otra acción:

1. Comprueba que ese clip existe y muestra la acción correcta.
2. Crea la acción con `mixer.clipAction(clip)`.
3. Añádela a los estados en `updateAnimals`, con crossfade y temporizador independiente.
4. Define condiciones adecuadas (plantas / agua, distancia al jugador) y una vuelta a reposo.

No hay animación de marcha artificial para esculturas sin rig. El pequeño efecto de respiración escala el contenedor un 0.3%; el giro lento es artístico, no anatomía articulada.

## Reservas marinas

Las dos reservas marinas activan una superficie de observación transparente sobre el terreno, no un océano físicamente navegable. La posición acuática está configurada en `setPeriod`. Para un ecosistema marino extenso deberás construir fondo y costa propios, añadir navegación segura y ajustar el agua a los modelos; no basta con cambiar `marine`.

## Comprobación antes de publicar

Ejecuta `npm test` y revisa el modelo real en navegador: patas sobre el suelo, cabeza orientada, proporciones a escala del explorador, materiales sin errores, colisiones, fotografía y preguntas correctas. La prueba de Node detecta estructura, recursos embebidos y dimensiones, pero no sustituye una inspección en GPU. Registra las pruebas que realmente hayas hecho.
