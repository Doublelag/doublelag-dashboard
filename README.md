# 💰 Doublelag — Dashboard de Ingresos

Dashboard de seguimiento de ingresos mensuales (YouTube AdSense, afiliados y cualquier otra fuente), pensado para creadores de contenido autónomos en España.

**En vivo:** https://doublelag.github.io/doublelag-dashboard/

## Características

- 📊 **Gráficos interactivos** — ingresos mensuales apilados por fuente, media móvil de 3 meses, vista en € o en % de reparto.
- 📈 **Tendencia y previsión** — proyección del mes en curso y previsión a 3 meses por regresión lineal.
- 📅 **Detalle diario** — últimos 90 días con media de 7 días.
- 🎯 **Objetivos** — mensual y anual con barras de progreso y proyección.
- 🧾 **Resumen fiscal trimestral** — bruto, gastos deducibles y neto por trimestre (útil para los modelos 130/303), con "hucha fiscal" configurable.
- ✏️ **Edición completa en la web** — añade/edita meses, gastos, notas y fuentes sin tocar código. Borrado con deshacer.
- ⬆⬇ **Importación/exportación** — backup JSON, CSV para Excel y **importación del CSV diario de YouTube Studio** (recalcula los meses automáticamente).
- 🌙/☀️ **Tema oscuro y claro**.
- 📱 **PWA** — instalable y funciona offline.

## Privacidad

Todos los datos se guardan **únicamente en tu navegador** (localStorage). No hay servidor ni analítica. Exporta el backup JSON de vez en cuando.

## Desarrollo

Es un único `index.html` sin build. Para probar en local:

```
python -m http.server 8731
# http://localhost:8731
```
