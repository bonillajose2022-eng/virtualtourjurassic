# Atribuciones y fuentes

## Código

Código original del proyecto: licencia MIT, véase `LICENSE`.

Three.js r170, GLTFLoader y BufferGeometryUtils: © three.js authors, MIT. El texto original está en `vendor/THREE-LICENSE.txt`.
- https://github.com/mrdoob/three.js/tree/r170
- https://threejs.org/docs/

Se cambió únicamente la ruta local de importación de BufferGeometryUtils en GLTFLoader para conservar una carpeta vendor sencilla.

## T. rex incluido

**Animated T-Rex Dinosaur Biting Attack Loop** — **LasquetiSpice**.

- Obra original: https://sketchfab.com/3d-models/animated-t-rex-dinosaur-biting-attack-loop-5bbcadb7d9274843abb5ada35767dba1
- Licencia: **Creative Commons Attribution 4.0 International (CC BY 4.0)**.
- Términos: https://creativecommons.org/licenses/by/4.0/
- Copia GLB distribuida por SceneView: https://sceneview.github.io/models/platforms/AnimatedTrex.glb
- Registro público de atribución: https://sceneview.github.io/credits.html
- Catálogo: https://github.com/sceneview/sceneview/blob/main/assets/catalog.json

Cambios realizados: sustitución de la extensión de material antigua `KHR_materials_pbrSpecularGlossiness` por un material glTF metallic-roughness, conservando textura diffuse/base color, normal y oclusión, con metallic=0 y roughness=0.85. La textura de brillo original sigue embebida pero no se usa. Esto adapta el archivo a Three.js r170 y puede cambiar su apariencia especular. No se modificaron malla, rig ni animación. La aplicación ajusta escala, posición y orientación al cargarlo. El autor no patrocina este proyecto.

El modelo conserva CC BY 4.0: la licencia MIT del código no lo reemplaza. Al redistribuir, conserva esta atribución, enlace de licencia e indicación de cambios.

## Paisaje y audio

Paisaje creado mediante geometría procedural en `world.js`. Es ilustrativo y no procede de un escaneo paleobotánico. El viento y los tonos ambientales se generan con Web Audio; no son grabaciones auténticas de dinosaurios. La voz usa Speech Synthesis del navegador. Sin música ni archivos sonoros externos.

## Fuentes científicas

Natural History Museum, Londres:
- Triceratops: https://www.nhm.ac.uk/discover/dino-directory/triceratops.html
- Stegosaurus: https://www.nhm.ac.uk/discover/dino-directory/stegosaurus.html
- Tyrannosaurus: https://www.nhm.ac.uk/discover/dino-directory/tyrannosaurus.html
- Brachiosaurus: https://www.nhm.ac.uk/discover/dino-directory/brachiosaurus.html

Se usaron como referencia de hechos generales; no se copiaron fotografías, ilustraciones ni textos extensos del museo. Los rangos de fechas son aproximados y pueden revisarse con nuevas investigaciones. El material educativo distingue rasgos respaldados por fósiles de colores, sonidos, movimientos y ambientación artísticos.

## Modelos opcionales no incluidos

Las opciones externas, autores, licencias publicadas y pasos de integración se detallan en README.md. No forman parte del ZIP ni de los recursos solicitados durante la ejecución inicial.
