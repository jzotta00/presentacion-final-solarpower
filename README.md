# SolarPower Energy · Presentación de defensa del TPP (FIUBA 2026)

Deck web (Next.js) para la defensa del Trabajo Profesional. Cada slide indica la sección del informe
que la respalda y la fuente original con fecha. Los recuadros punteados "Pendiente" marcan datos que
faltan pegar; no hay datos inventados.

## Correr en local
    npm install
    npm run dev        # http://localhost:3000

Teclas: flechas o espacio para avanzar, G para el índice, Home/End para ir al principio o al final.
El canvas es fijo de 1280x720 y se escala al tamaño de la pantalla, así el layout es idéntico en
cualquier proyector.

## Dónde está cada cosa
- components/deck/slides-00-apertura.tsx ... slides-07-cierre.tsx: cuerpo de la presentación, un archivo por bloque.
- components/deck/slides-08-anexo-a.tsx y slides-09-anexo-b.tsx: anexo.
- components/deck/primitives.tsx: componentes (Slide, Table, Bars, Lines, ArgentinaMap, Pendiente, etc.).
- components/deck/argentina-map-data.ts: límites provinciales (Natural Earth, dominio público).
- public/figuras/: las 21 figuras del informe, nombradas por número de figura.

## Publicar
Con `npm run build` genera estático; se puede desplegar en Vercel o servir con `npm start`.
