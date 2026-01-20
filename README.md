# FootballHub - La Liga 2024/2025

Proyecto para el módulo optativo: Web + Git/GitHub.

## Integrantes
- Nombre 1
- Nombre 2
- (Opcional) Nombre 3

## Tema
La Liga (España). Web dinámica con:
- Equipos (buscador + filtro por ciudad)
- Tabla de clasificación (ordenación por puntos y goles)
- Partidos (filtros por fecha y equipo)
- Formulario de contacto (validación en JavaScript)

## Páginas
- `index.html`: portada, estadísticas animadas y enlace a La Liga
- `pages/equipos.html`: listado de equipos con filtros dinámicos
- `pages/tabla.html`: clasificación con ordenación
- `pages/partidos.html`: calendario con filtros
- `pages/contacto.html`: formulario con validación

## JSON
- `data/equipos.json`: equipos de La Liga 24/25 (ejemplo)
- `data/tabla.json`: clasificación simulada de La Liga 24/25
- `data/partidos.json`: partidos de ejemplo de La Liga 24/25

## API
API propia en Node/Express:

- `GET /api/equipos`
- `GET /api/tabla`
- `GET /api/partidos`

Los datos se basan en la competición real, pero no son oficiales.

## Ramas y Git (plan seguido)
- `main`: versión estable
- `feature/ui`: maquetación, CSS y animaciones
- `feature/api`: API Node/Express + JSON
- `feature/filters`: buscadores, filtros y ordenaciones

Requisitos:
- Mínimo 20 commits
- Mínimo 3 ramas
- Mínimo 3 merges
- 1 conflicto resuelto (documentado aquí)
- Tags:
  - `v1.0`: primera versión funcional (web estática + JSON)
  - `v2.0`: versión dinámica con API, animaciones y filtros

## Conflicto resuelto
Conflicto en `js/ui.js` entre ramas `feature/ui` y `feature/filters` al integrar
la lógica de renderizado con los nuevos filtros. Se resolvió manteniendo la
estructura de componentes y añadiendo las funciones de filtrado.

## Puesta en marcha

```bash
npm install
npm start
```
```bash
API: http://localhost:3000/api
Web: abrir index.html con Live Server o similar.
```