# Versión 4.0.2 — archivos de animales

Se verificaron peticiones HTTP reales al sitio publicado: varios GLB nuevos devolvían 404. Los recursos locales se reorganizaron en la raíz. Once pruebas completas aprobaron antes del ajuste final de focusAnimal; las siete pruebas de rutas/motor aprobaron después de añadir la comprobación de distancia segura y orientación hacia un animal. Se mantiene pendiente QA visual WebGL. Consulta LEEME_PRIMERO.md.

# Parche 4.0.1 — cámara y mouse

Se ejecutaron dos pruebas de regresión: test_mouse.mjs y test_flow.mjs. Ambas aprobaron. Se verificaron eventos simulados de mouse capturado, arrastre sin captura, rechazo de permisos, arrastre táctil, pausa y reglas CSS de entrada. No se ejecutó un navegador real. El informe siguiente conserva el resultado de la entrega 4.0 anterior al parche.

# Validación de la entrega 4.0

## Ejecutado

**10 pruebas automatizadas aprobadas, 0 fallidas**, con Node y JSDOM. Las pruebas de Three.js crean escenas y geometría reales, pero no un contexto WebGL ni una GPU. La decodificación de imágenes GLB se simula para el parseo en Node; no se afirma que esa prueba verifique texturas en pantalla.

1. Movimiento: caminar, correr, diagonal normalizada, avance analógico y límites del terreno mediante las funciones usadas por el motor.
2. Salto: gravedad, altura, rechazo de doble salto, aterrizaje a nivel del suelo y colisiones circulares con obstáculos.
3. Encuentros: puerta de proximidad, cierre sin reapertura continua y rearme tras alejarse. El motor solo solicita encuentros automáticos estando en suelo; la integración con salto y entrada táctil queda pendiente en navegador.
4. Datos: 16 recursos animales distintos (15 taxones a nivel de género y un mosasaurio sin género asignado), al menos cinco preguntas con ayudas y explicaciones por entrada, 25 preguntas finales en cinco grupos, pertenencia a diez reservas.
5. Migración: conserva XP, nombre, ajustes y respuestas compatibles de versión 1. Reintentar una respuesta incorrecta no penaliza; repetir una correcta o recompensa no aumenta XP otra vez.
6. Modelos: parseo real de los 16 GLB con GLTFLoader, mallas presentes, dimensiones finitas, recursos embebidos, bytes coincidentes con el catálogo, hashes diferentes y esqueletos de clones independientes cuando hay rig.
7. Reservas: carga de las diez mediante el método real `setPeriod`, selección correcta de animales, escala normalizada, aparición fuera del campamento, reducción de duplicados en Low, simulación de estados, actualización de huellas y liberación de recursos al cambiar.
8. DOM: inicio explícito de modo de campo, cierre y continuación, error / acierto, pista española, EN/ES, misiones, fósil, cambio de reserva, recorrido lógico de las cinco estaciones, evaluación 25/25, recuperación de estado y repetición sin duplicar XP. JSDOM no pinta la interfaz ni verifica diseño responsive.
9. Rutas: enlaces y módulos locales resueltos bajo un prefijo de repositorio de GitHub Pages; `.nojekyll` presente. Los GLB se comprueban además en la prueba de modelos.
10. Certificado: se ejecutó el generador real con Canvas de Node, nombre con tildes, resultado 23/25, PDF A4 horizontal, tabla xref válida y nombre de descarga. Se corrigió un fallo anterior que omitía dibujar el nombre. Se renderizó el PDF de prueba con Poppler y se inspeccionó visualmente: nombre, fecha y resultado legibles, sin recortes. El PDF de prueba no es un certificado del usuario y no se incluye en el juego.

También se comprueba sintaxis de todos los módulos propios y la integridad del ZIP. Las comprobaciones locales no constituyen una publicación en GitHub.

## Pendiente de prueba real en navegador

No hubo un navegador compatible habilitado para QA de este proyecto en este entorno. **No se ha ejecutado renderizado WebGL, ni se ha validado apariencia o rendimiento en computador / teléfono.** Tampoco se ha subido este paquete al repositorio del usuario.

- Inicio y carga 3D con GPU: aspecto de cada modelo, orientación, materiales, iluminación y cámaras.
- FPS, memoria al viajar repetidamente y comportamiento en equipos escolares.
- Sensación de WASD, captura del mouse, Escape, carrera, salto y colisiones al explorar físicamente todo el terreno.
- Joystick y arrastre simultáneo con botones de salto / foto en una pantalla táctil real.
- Proximidad durante un salto; apertura única por especie, cierre y práctica posterior con E.
- Fotografía, selección del animal según encuadre, actualización del álbum y descarga real de JPG.
- Pistas y voces instaladas, volumen, subtítulos, reducción de movimiento y modo tranquilo.
- Persistencia después de recargar el navegador; exportación/importación entre dominios o dispositivos.
- Descarga real del PDF desde un navegador, especialmente Safari/iOS.
- Diseño responsive en 390×844, 768×1024 y 1366×768. Existen reglas CSS para estas clases de pantalla; no equivalen a una comprobación visual ejecutada.
- Error de WebGL/contexto perdido: mensaje con elección explícita de Reintentar 3D o modo de campo.
- Publicación real en GitHub Pages y caché después de reemplazar una versión antigua.

## Lista manual recomendada después de publicar

1. Inicia aventura y observa los cuatro animales de Hell Creek; cambia a Morrison y luego a las ocho reservas restantes.
2. Camina, corre, salta, acércate durante un salto, cierra la actividad y confirma que puedes seguir caminando. Vuelve con E.
3. Cambia calidad y repite viajes. Comprueba que no hay colisiones con vegetación invisible y usa regresar al campamento.
4. Haz fotos, sigue tres huellas en orden, busca el animal de una descripción, investiga la cueva y revisa misiones/diario.
5. Termina cinco estaciones; recarga a mitad del proceso; completa y descarga un certificado con tu nombre.
6. Repite preguntas, fotos y evaluación: verifica que las recompensas ya obtenidas no se repiten.
7. Haz lo mismo en modo de campo, teniendo en cuenta que allí no hay exploración ni fotografía 3D.

Registra navegador, versión, dispositivo, errores y FPS de esa revisión antes de afirmar compatibilidad comprobada con tus equipos.
