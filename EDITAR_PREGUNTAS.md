# Editar preguntas sin cambiar el motor

Abre `data.js` con un editor de texto. `encounterQuestions` se genera a partir de cada ficha `species`. Cada especie obtiene cinco actividades sobre is, has, are, does + have y una característica visible; si su dieta es suficientemente clara, obtiene una sexta sobre eats. Para una pregunta distinta, después del bucle añade o reemplaza una entrada del arreglo de esa especie.

Ejemplo:

```js
encounterQuestions.triceratops.push(question(
  'triceratops-three-horns-v1', // ID único y estable
  'affirmative',
  'The Triceratops ___ three horns.',
  'El Triceratops tiene tres cuernos.',
  ['has', 'have'],
  0, // A = 0, B = 1
  'Con it usamos has.',
  'Use has with it.',
  'Con it usamos has.'
));
```

Conserva siempre traducción, pista previa y ambas explicaciones. Mantén las frases y opciones en inglés. No uses una pregunta cuya respuesta dependa de una conducta no implementada o de un color científico desconocido. Colores o poses visibles solo son válidos si aclaras que describen el modelo artístico.

No cambies el ID de una pregunta sin motivo: `enc:ID` determina si ya otorgó XP. Si cambias su contenido o respuesta de forma incompatible, crea un ID nuevo y prepara una migración. No alteres simplemente el número de respuesta de una pregunta ya evaluada sin versionar el banco.

## Evaluación final

`assessment-bank.js` contiene un arreglo de 25 objetos. Los campos son los mismos que en una pregunta de encuentro: id, group, prompt, translation, options, answer, hint y explain.

Conserva cinco por cada group: `be`, `affirmative`, `negative`, `questions` y `science`. `stations` en `data.js` vincula estos grupos al sendero del mundo. Los 25 identificadores actuales se mantienen desde la versión anterior para conservar resultados compatibles.

Si necesitas más o menos preguntas, adapta también `script.js` (comprobación de 25 respuestas, resultados y contadores) y `certificate.js` (denominador 25). Para un banco incompatible, conserva el resultado anterior en `previousResult`, vacía respuestas solo con una migración explícita y no borres XP generales.

## Comprobar

Ejecuta `npm ci` una vez y `npm test` tras cambios. Comprueba además en navegador: abrir encuentro, mostrar pista, contestar mal, reintentar, acertar, escuchar, cerrar, seguir caminando y repetir sin duplicar recompensa.
