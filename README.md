# JURASSIC ENGLISH VR: Open World Adventure

Versión 4.0.2. Proyecto estático para GitHub Pages. Se revisó y amplió el paquete anterior `Jurassic_Mundo_Abierto_v2.zip`. Se mantienen la clave de guardado local, XP, descubrimientos compatibles y las 25 preguntas A1 con sus identificadores. **Esta entrega no modifica automáticamente el repositorio ni su página publicada.**

La experiencia principal es caminar por una reserva de unos 470 m de diámetro, observar animales y encontrar actividades opcionales. Ninguna respuesta desbloquea o bloquea el desplazamiento. «VR» forma parte del nombre: no hay soporte WebXR con visor.

## Publicar en GitHub Pages

1. Descomprime `Jurassic_Completo_Animales_v4_0_2.zip`.
2. Sube **todo su contenido a la raíz del repositorio**, manteniendo `docs`; los dieciséis modelos GLB van junto a `index.html`. `index.html` debe quedar directamente en la raíz, no dentro de una carpeta adicional. No subas el ZIP como si fuera la aplicación.
3. En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**. Si tu rama se llama de otra forma, selecciona esa rama.
4. Espera la publicación y abre la URL que muestre GitHub. Para tu repositorio actual sería `https://bonillajose2022-eng.github.io/virtualtourjurassic/`, siempre que mantengas ese nombre y configuración. No se ha comprobado ni actualizado esa publicación desde esta entrega.
5. Recarga con Ctrl+F5 después de actualizar. Conserva los dieciséis GLB: si falta uno, el juego informa el fallo; no lo sustituye por un animal geométrico.

Se incluye `.nojekyll`; con GitHub Desktop o Git se conserva también este archivo. No necesitas instalar Node para publicar. No subas `node_modules`. El juego usa rutas relativas, dependencias locales y ningún backend, clave o servicio de pago. GitHub Pages está disponible para repositorios públicos con GitHub Free; el código no necesita una plataforma de pago.

Referencia oficial de publicación: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site .

Para probar en tu computador, dentro de la carpeta extraída ejecuta `python -m http.server 8000` y abre `http://localhost:8000`. No abras el HTML por doble clic: los módulos y GLB requieren HTTP. Esto no es un instalador offline; la voz depende del navegador.

## Empezar a jugar

Pulsa **Iniciar / Continuar aventura**. Usa **Ver animal** para colocarte en un punto de observación seguro. El HUD muestra cuántos modelos se cargaron; los fallos aparecen en un panel con nombres de archivo y botón de reintento. Se cargan los modelos de tu reserva. Cierra la introducción y sigue el tutorial: caminar, saltar, abrir el mapa y encontrar un animal. Haz clic en el paisaje para capturar el cursor; si el navegador no permite capturarlo, arrastra para mirar.

| Acción | Computador | Pantalla táctil |
| --- | --- | --- |
| Caminar | W A S D o flechas | Joystick izquierdo |
| Mirar | Mouse; arrastrar si no se captura | Arrastrar el paisaje fuera del joystick |
| Correr | Mantener Shift o activar Correr | Activar Correr |
| Saltar | Espacio | Saltar |
| Interactuar | E | Observar |
| Fotografiar | C o Foto | Foto |
| Mapa completo | M | Mapa |
| Pausa / liberar cursor | Escape | Menú |
| Desatascarse | Menú → Regresar al campamento | Igual |

Solo se salta desde el suelo. Un panel pausa movimiento y animación. El primer encuentro se abre una sola vez por especie y guardado, estando en tierra; después usa E. Puedes cerrarlo y seguir caminando. En Ajustes, **Observación tranquila** desactiva esa apertura automática y reduce la velocidad de marcha de los animales animados. No hay persecuciones en ningún modo.

## Reservas y especies realmente incluidas

Las reservas son expediciones separadas por tiempo y región. Comparten una base procedural ilustrativa; no son reconstrucciones paleobotánicas exactas. Las fechas son aproximadas, no una afirmación de que todos los taxones de una formación coexistieran durante toda su extensión temporal.

| Reserva | Fecha aproximada | Región | Modelos incluidos |
| --- | --- | --- | --- |
| Morrison | Jurásico tardío, ~150 Ma | Oeste de Norteamérica | Stegosaurus, Allosaurus, Brachiosaurus |
| Hell Creek | Cretácico tardío, ~67 Ma | Montana / Dakotas | Triceratops, Tyrannosaurus rex, Ankylosaurus, Pachycephalosaurus |
| Kem Kem | Cretácico tardío, ~97 Ma | Marruecos | Spinosaurus |
| Yixian | Cretácico temprano, ~125 Ma | Liaoning, China | Sinosauropteryx, Beipiaosaurus |
| Nemegt | Cretácico tardío, ~70 Ma | Mongolia | Gallimimus |
| Kayenta | Jurásico temprano, ~190–184 Ma | Arizona | Dilophosaurus |
| Costa jurásica | Jurásico temprano, ~195 Ma | Dorset, Inglaterra | Plesiosaurus |
| Maastricht | Cretácico tardío, ~67 Ma | Países Bajos | Mosasaurio (género no determinado) |
| Horseshoe Canyon | Cretácico tardío, ~71 Ma | Alberta, Canadá | Albertosaurus |
| Nuevo México | Cretácico tardío, ~75 Ma | Cuenca de San Juan | Pentaceratops |

**16 archivos GLB diferentes: 14 dinosaurios, Plesiosaurus y un mosasaurio de género no determinado. Hay 15 taxones identificados a nivel de género; el mosasaurio genérico no se cuenta como una especie identificada.** No se cuentan fichas, fósiles, árboles o señales como animales. Plesiosaurus y los mosasaurios no son dinosaurios. No hay mamuts, félidos dientes de sable ni animales cenozoicos mezclados en estas reservas.

De la lista orientativa no están incluidos: **Diplodocus, Apatosaurus, Ceratosaurus, Parasaurolophus, Edmontosaurus, Velociraptor y pterosaurios**. Las especies adicionales de esta entrega son Sinosauropteryx, Beipiaosaurus, Gallimimus, Dilophosaurus, Albertosaurus y Pentaceratops; se identifican por su propio modelo. No se rebautiza otro dinosaurio como Velociraptor. Para añadirlo, exige un modelo emplumado de tamaño apropiado, con licencia comprobada y reserva del Cretácico tardío de Mongolia.

Fuentes científicas y matices: [docs/SCIENCE.md](docs/SCIENCE.md). Créditos completos: [CREDITS.md](CREDITS.md).

## Actividades y recompensas

- **Animal Encounter:** primera actividad por proximidad; al menos cinco preguntas por especie (93 en total), con inglés A1, dos opciones, pista previa en español, traducción opcional, escucha y explicación bilingüe. Los errores permiten reintentar sin penalización.
- **Observe and Choose:** la quinta actividad de cada especie pide identificar una característica visible; no está aislada como una pantalla principal diferente.
- **Photo Safari:** centra al animal a menos de 65 m y pulsa Foto. Se guarda una miniatura local por especie, actualizable y descargable. Fotografiar varias veces la misma especie no repite XP. La selección usa dirección y distancia; no hay validación de oclusión por árboles.
- **Track Detective:** selecciona la misión, sigue las tres huellas doradas en orden con E y observa la especie del final. Las huellas son pistas artísticas, no moldes reales. Cambiar de reserva reinicia una ruta incompleta.
- **Listen and Find:** selecciona la misión, escucha o lee la descripción y encuentra al animal de esa reserva. El texto y la pista española quedan disponibles; no depende exclusivamente del audio.
- **Fossil Discovery:** encuentra el ámbar en la cueva (-70, 15), pulsa E y completa la actividad. Es un objeto ilustrativo de resina fosilizada.
- **Explorer Journal:** se completa al observar animales. Leer una ficha ya descubierta no concede nuevos XP.
- **Nature Missions:** fotografiar tres especies, observar un herbívoro, fotografiar un animal de reserva de río/mar y fotografiar un cuello largo. Cada objetivo muestra contador y recompensa; se puede seleccionar como misión activa.

Un descubrimiento da 15 XP; una pregunta correcta nueva, 10 XP; una primera fotografía por especie, 15 XP. Las siete misiones dan sus recompensas una sola vez. Repetir la evaluación conserva las recompensas obtenidas.

## Evaluación y certificado

Las 25 preguntas A1 se distribuyen en **cinco estaciones de cinco preguntas**: Verb to Be, afirmaciones, negaciones, preguntas y características. Sigue el sendero con postes azules que parte del campamento; las estaciones aparecen en el mapa. E abre la estación cercana. Al terminar una, vuelve al mundo y camina a la siguiente. No se teletransporta al estudiante entre cuestionarios.

Se guarda la primera respuesta de cada pregunta de evaluación. Se muestran respuesta correcta y explicación, incluso después de un error. En los encuentros de práctica sí se puede reintentar hasta acertar. Al finalizar: aciertos, errores, recomendaciones, revisión completa y certificado PDF con nombre, fecha y resultado. Se conserva el resultado anterior al repetir. El certificado es un reconocimiento local de aprendizaje, no una acreditación oficial.

En modo de campo puedes abrir cada estación mediante una lista accesible. Este acceso alternativo no bloquea ni sustituye el recorrido 3D.

## Guardado y actualización

El progreso se guarda en `localStorage`, clave `jurassic-english-vr-v1`. La versión nueva migra el estado anterior sin borrar XP, nombre, descubrimientos o respuestas compatibles. Conserva campos históricos no usados en el HUD para no perder información. El guardado no se comparte entre dominios, perfiles ni dispositivos.

Antes de cambiar de dominio o equipo usa **Menú → Exportar progreso**. Luego **Importar progreso** recupera un JSON después de confirmar el reemplazo. Reiniciar requiere confirmación. No se puede recuperar un guardado borrado si no se exportó. Si se llena el almacenamiento, el HUD informa que el guardado no está disponible; exporta el progreso antes de liberar espacio o reiniciar.

## Arquitectura y edición

| Archivo / carpeta | Responsabilidad |
| --- | --- |
| `index.html`, `style.css` | Interfaz responsive, HUD, joystick y diálogos |
| `script.js` | Actividades, diario, fotografías, audio, mapa y guardado |
| `world.js` | Three.js, terreno, carga, instancias, estados de animales y render |
| `physics.js` | Movimiento, salto, colisiones, alturas y puerta de proximidad |
| `data.js` | Especies, reservas, misiones, preguntas de encuentro y migración |
| `assessment-bank.js` | 25 preguntas finales con identificadores estables |
| `certificate.js` | Canvas y PDF local, sin librería PDF externa |
| `*.glb` | Los dieciséis modelos, incluidos con sus bytes |
| `three.module.js`, `GLTFLoader.js`, `SkeletonUtils.js`, `BufferGeometryUtils.js` | Dependencias locales del navegador |
| `docs/` | Guías, ciencia, licencias y evidencia de recursos |
| `test_*.mjs`, `package*.json` | Pruebas de desarrollo; no se necesitan para jugar |

Guías: [editar preguntas](docs/EDITAR_PREGUNTAS.md) y [añadir especies / animaciones](docs/ANADIR_ESPECIES.md).

## Funciones implementadas y límites reales

| Área | Estado |
| --- | --- |
| Exploración, carrera, salto, límites, colisión con obstáculos/animales y regreso al campamento | Implementados; física simple de altura y círculos, sin motor de cuerpos rígidos |
| Quince taxones identificados y un mosasaurio, diez reservas, varios individuos de modelos animados | Integrados; al cargar Medium/High se duplican los cuatro modelos con clips, Low mantiene al menos uno de cada especie |
| Animación | Cuatro especies con clips. Stegosaurus y Triceratops tienen marcha. Allosaurus tiene reposo y T. rex un ciclo artístico de mordida sin daño |
| Doce modelos nuevos | Sin rig ni marcha. Respiración por escala muy sutil y giro lento; **no** se simula caminar deslizando una escultura |
| Texturas y aspecto | Mezcla de cuatro modelos texturizados anteriores, modelos ligeros y esculturas con color de vértice / material. No se ofrece calidad uniforme de producción ni fotorrealismo |
| Comer y beber | No hay un sistema completo de alimentación o bebida; no se inventan clips ausentes |
| Grupos | Individuos con estados y tiempos independientes; no hay simulación científica de manadas |
| Agua y cuevas | Río/lago/cascada ilustrativos, superficie de observación marina y entrada de cueva; sin natación, buceo, corriente o exploración subterránea extensa |
| Proximidad y actividades | Primera apertura por especie, solo en tierra, cierre libre, práctica manual posterior |
| Mapa | Jugador, campamento, portales, ruta final, lugares y objetivo activo; zonas de búsqueda hasta descubrir animales |
| Accesibilidad | EN/ES, controles grandes, menús por teclado, voz y subtítulos, volumen, reducción de movimiento, modo tranquilo y modo de campo explícito |
| Rendimiento | Instancias de vegetación, calidad, menos sombras en táctil, carga secuencial con bytes reales y liberación de modelos al viajar; sin LOD geométrico de dinosaurios ni FPS garantizados |
| Pterosaurios, insectos animados y Velociraptor | Pendientes, no se muestran como incluidos |
| Validación | Pruebas automáticas y PDF renderizado; **sin QA WebGL en navegador, FPS ni dispositivo táctil físico** |

Para ejecutar las pruebas: `npm ci` y `npm test`. Resultado y pendientes: [VALIDATION.md](VALIDATION.md).
