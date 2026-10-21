# Atribuciones y licencias — actualización de mundo abierto

## Código

El código propio conserva MIT, véase `LICENSE`.

Three.js r170, GLTFLoader, BufferGeometryUtils y SkeletonUtils: © three.js authors, MIT. Texto completo: `THREE-LICENSE.txt`.

Fuente: https://github.com/mrdoob/three.js/tree/r170

Se adaptó la ruta de importación de BufferGeometryUtils en GLTFLoader para usar todos los archivos en la misma carpeta. SkeletonUtils clona por separado los esqueletos de cada individuo.

## Modelos incluidos — CC BY 4.0

Todos conservan **Creative Commons Attribution 4.0 International**:
https://creativecommons.org/licenses/by/4.0/

No se aplica la licencia MIT del código a estos modelos. Conserva título, autor, fuentes, enlace de licencia e indicación de modificaciones al redistribuir.

### Tyrannosaurus rex

- Obra: **Animated T-Rex Dinosaur Biting Attack Loop**.
- Autor: **LasquetiSpice**.
- Original: https://sketchfab.com/3d-models/animated-t-rex-dinosaur-biting-attack-loop-5bbcadb7d9274843abb5ada35767dba1
- Copia distribuida por SceneView: https://sceneview.github.io/models/platforms/AnimatedTrex.glb
- Registro: https://sceneview.github.io/credits.html
- Archivo: `trex.glb`.
- Modificación previa conservada: adaptación del material specular-glossiness a metallic-roughness para Three.js r170. Se conservan malla, rig, animación y texturas; cambia el aspecto especular. Escala y colocación ajustadas en ejecución.

### Triceratops

- Obra: **TRICERA**.
- Publicada por **seth the yutyrannus** (slang107123456789).
- La ficha del autor atribuye el modelo original a **rroobboo 999**.
- Original: https://sketchfab.com/3d-models/tricera-6b0695ecb40a40dabd4f118ee4b729cd
- Metadatos de licencia: https://api.sketchfab.com/v3/models/6b0695ecb40a40dabd4f118ee4b729cd
- Archivo: `triceratops.glb`.

### Stegosaurus

- Obra: **STEGO**.
- Publicada por **seth the yutyrannus** (slang107123456789).
- La ficha del autor atribuye el modelo original a **rroobboo 999**.
- Original: https://sketchfab.com/3d-models/stego-b07eb05fa95c413bb928eb2ffbdc9523
- Metadatos de licencia: https://api.sketchfab.com/v3/models/b07eb05fa95c413bb928eb2ffbdc9523
- Archivo: `stegosaurus.glb`.

### Allosaurus

- Obra: **Allosaurus**, publicada por **seth the yutyrannus**.
- Modelo original atribuido por el publicador a **dead tubby's**. La versión del publicador elimina plumas y modifica la animación de reposo, según su descripción. No se presenta esa decisión artística como evidencia científica.
- Versión usada: https://sketchfab.com/3d-models/allosaurus-02e651e39fed47bbaec0aa0546f17fd3
- Original enlazado por el autor: https://sketchfab.com/3d-models/allosaurus-from-unity-a5a9a9c588734f398ecbeb3efc0b5c2e
- Metadatos de licencia de ambas fichas: https://api.sketchfab.com/v3/models/02e651e39fed47bbaec0aa0546f17fd3 y https://api.sketchfab.com/v3/models/a5a9a9c588734f398ecbeb3efc0b5c2e
- Archivo: `allosaurus.glb`.

Los tres nuevos GLB se obtuvieron de las copias públicas de un repositorio educativo; sus metadatos embebidos y las fichas/API de Sketchfab identifican autor y CC BY 4.0:
https://github.com/nrush23/game_programming/tree/main/week1/assets

Archivos de origen: `tricera.glb`, `stego.glb`, `allosaurus.glb`.

Los tres se incluyen sin modificar sus bytes. La aplicación ajusta escala, orientación y posición, clona individuos y selecciona clips de reposo cuando existen. Los autores no patrocinan este proyecto.

## Paisaje, sonidos y ciencia

El terreno y la vegetación son procedurales. El audio ambiental se sintetiza con Web Audio y la voz usa Speech Synthesis. No hay grabaciones auténticas de sonidos de dinosaurios ni se presentan como tales.

Fuentes del Natural History Museum:
- https://www.nhm.ac.uk/discover/dino-directory/triceratops.html
- https://www.nhm.ac.uk/discover/dino-directory/stegosaurus.html
- https://www.nhm.ac.uk/discover/dino-directory/tyrannosaurus.html
- https://www.nhm.ac.uk/discover/dino-directory/allosaurus.html
- https://www.nhm.ac.uk/discover/dino-directory/brachiosaurus.html

Brachiosaurus es únicamente una ficha complementaria. Los cuatro modelos renderizados corresponden a las otras especies.
