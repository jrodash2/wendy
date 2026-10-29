# Validación individual de Hollywood Bark

Revisión del 29 de octubre de 2026 sobre `main_files/index.html`. Se comprobó GitHub antes de editar: la base actual de `main` era `38a2d6f`.

Las instrucciones escritas más recientes prevalecen sobre el folleto adjunto, que todavía incluye el recargo de daycare, otras restricciones y fechas históricas. No se han vuelto a introducir esos datos.

| # | Requisito | Resultado y evidencia |
|---|---|---|
| 1 | Ubicación | Verificado. Título, metadatos, barra superior, hero, About Wendy, Reviews, Contact y footer usan San Antonio, TX / San Antonio, Texas. Hollywood Park queda únicamente en el descuento para residentes. |
| 2 | Sábado | Verificado en Policies: `Saturday: 11:00 AM–2:00 PM.` |
| 3 | Cancelación | Verificado. Se publica exactamente: `Free cancellation up to 48 hours before drop-off. Cancellations within 48 hours are charged 50% of the reservation.` Sin nota de pendiente. |
| 4 | Descuento de vecinos | Verificado en tarjeta y acordeón de boarding: `Special discount for Hollywood Park residents — ask us for details.` No se anuncia el monto vecinal ni una tarifa pendiente para el segundo perro. Los $45/night visibles corresponden al precio regular del perro adicional, no al descuento vecinal. |
| 5 | Paseos | Verificado. Columnas `Local area` y `Outside local area`. Se conservan los precios de paseos indicados previamente. |
| 6 | Teléfono | Verificado. +1 (281) 908-9671, con enlaces de llamada/SMS correctos. Sin nota `Draft contact number`. |
| 7 | Notas internas | Verificado. Se retiraron las cuatro notas públicas de fotos y reseñas. No se agregaron reseñas ficticias. |
| 8 | Daycare | Verificado. No aparece `Extended day: +$5`, ni se reintroduce desde el folleto. |
| 9 | Festivos | Verificado. Texto completo solicitado: abierto con tarifas festivas; entradas desde viernes; sin entradas/salidas sábado/domingo; lunes festivo 4:00–6:00 PM; pagos no reembolsables si se cancela dentro de 72 h; cerrado Navidad y Año Nuevo. No figura cierre de fines de semana federales. Las ventanas de tarifa festiva siguen en Services & Pricing. |
| 10 | Vigencia de precios | Verificado. `Regular prices valid through December 31, 2026. Holiday rates apply on the dates listed below.` |
| 11 | Inglés | Verificado. `Small groups by design` empieza con mayúscula; `Contact` está capitalizado en ambos menús; se publica `We recommend spayed/neutered dogs for group settings.` |
| 12 | CPR y descuento | Verificado. Se conservaron `Pet CPR & First Aid certified` y el descuento del 10% para militares y primeros respondedores, según la instrucción de la propietaria. |
| 13 | Colores | Verificado en navegador. Azul de marca `#1663B4`, celeste y fondos azules claros en controles, tarjetas, hover, acordeones, decoraciones, preloader, footer y progreso. Las fotografías mantienen sus colores originales. |
| 14 | Logo | Añadido en esta revisión. Árbol negro, perro/gato y nombre en encabezado y footer; no hay círculo naranja. El PNG transparente es una adaptación preparada con IA desde la imagen de referencia, no el archivo maestro/vector original. Para fidelidad exacta, sustituirlo por el original cuando esté disponible. |
| 15 | Clientes regulares | Verificado. Frase visible exacta: `Already part of the pack? Book your next stay by text or Instagram DM.` Incluye enlaces funcionales de SMS e Instagram. |
| 16 | Clientes nuevos | Verificado. Título exacto: `New here? Your first meet & greet is free`. El texto de introducción aclara que corresponde a nuevos perros/clientes. |

## Pruebas ejecutadas

- Comprobaciones de contenido para los 16 puntos, rutas relativas, anclas y recursos locales.
- Chromium/Playwright en 1440, 1024, 768, 390, 360 y 320 px: navegación, acordeones, carrusel, pausa, enlaces de reserva/SMS/Instagram, logo cargado y ausencia de desbordamiento horizontal.
- Movimiento reducido y operación de acordeones con teclado.
- Reajuste del carrusel al cambiar de escritorio a móvil.
- Sin errores de JavaScript, peticiones fallidas ni respuestas HTTP de error en las pruebas de la landing.
- `git diff --check` sin errores.

No se envían reservas durante las pruebas. No se ha confirmado un despliegue público externo. El logo adaptado y las fotografías de plantilla pueden reemplazarse por los originales de marca y fotografías reales cuando se entreguen.


## Actualización posterior: hospedaje y primeros auxilios

Se aplicaron los cinco textos adicionales indicados por la propietaria:

1. La tarjeta Boarding anuncia `Billed per calendar night.`
2. El acordeón de tarifas explica check-in/check-out entre semana, +$25 después del mediodía, +$10 por entrada anticipada con condiciones, noche extra después de las 6 PM, recogida temprana sin descuento y condiciones de sábado/domingo.
3. El acordeón de facturación publica cobro por noche calendario, bloque de limpieza 12–2 PM, citas obligatorias y las nuevas condiciones de recogida tardía.
4. El acordeón de horarios publica entradas 2–6 PM y salidas 10 AM–12 PM de lunes a viernes, por cita.
5. Se conserva `Pet CPR & First Aid certified`; el subtítulo ahora es `Trained to stay calm and act fast in an emergency, so your pup is safe in our hands.`

Se eliminaron de la landing el cobro en periodos de 24 horas, los antiguos recargos de +$20/+$40 por retraso y el horario de entregas matutinas. Los precios regulares por noche y las reglas festivas permanecen como estaban.

Validación de esta actualización: Chromium en 1280 y 390 px, coincidencia de los cinco textos, apertura de acordeones, subtítulo CPR sin recortes, sin desbordamiento horizontal ni errores JavaScript/recursos.
