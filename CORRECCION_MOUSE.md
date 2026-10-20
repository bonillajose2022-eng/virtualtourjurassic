# Corrección del mouse — v4.0.1

Parche para Jurassic English Open World v4, entregado en esta conversación.

1. Extrae este ZIP.
2. En tu repositorio de GitHub reemplaza en la RAÍZ estos cuatro archivos: index.html, style.css, script.js y world.js. No reemplaces ni borres los modelos, assets o data.js.
3. Confirma el cambio, espera la publicación de Pages y recarga la página con Ctrl+F5.
4. Inicia / continúa la aventura, cierra la introducción y pulsa Activar mouse, o haz clic en el paisaje. Mueve el mouse para mirar. Escape libera el cursor y abre el menú.
5. Si el navegador bloquea la captura, mantén pulsado el botón izquierdo y arrastra sobre el paisaje para mirar. En táctil se conserva el arrastre.

El parche mantiene la misma clave y estructura de guardado. No reinicia el progreso.

Qué cambia: el lienzo 3D deja de estar detrás del fondo; el HUD deja pasar clics salvo en sus controles. El mouse capturado se lee mediante mousemove del documento; se evita contar dos veces el mismo movimiento. Se conserva arrastre cuando la captura falla, se cancelan arrastres al pausar y se añade un botón explícito para activar el mouse. Las URLs de módulos y estilos usan v4.0.1 para renovar la caché.

Validación: dos pruebas de regresión en Node/JSDOM aprobadas: flujo de actividades existente y control de cámara (captura simulada, captura rechazada, arrastre táctil, pausa y reglas CSS de interacción). Sintaxis de los módulos comprobada. No se ejecutó QA visual WebGL en un navegador real ni se modificó la publicación de GitHub desde aquí.
