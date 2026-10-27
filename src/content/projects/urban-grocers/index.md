
---
title: "Urban Grocers — Pruebas de API"
description: "Validación de una API para comprobar el comportamiento de solicitudes."
date: 2026-10-23
repoURL: "https://github.com/Joel-DQ/qa-project-Urban-Grocers-app-es"
---

## Objetivo

Comprobar que la API responda correctamente ante diferentes valores enviados en las solicitudes para crear kits de productos.

## Actividades

- Diseño de casos de prueba para distintos valores del parámetro `name`.
- Validación de datos válidos e inválidos.
- Comprobación del comportamiento ante valores vacíos, caracteres especiales y diferentes longitudes.
- Revisión de respuestas para identificar posibles errores.

## Resultados

- Casos de prueba ejecutados: 9.
- Defectos identificados: 4.

## Defecto destacado

**Problema:** La API aceptaba valores que debían validarse, incluidos valores nulos, valores que excedían la longitud permitida y datos numéricos.

**Impacto potencial:** La aceptación de entradas no válidas puede provocar inconsistencias en los datos y un comportamiento inesperado del servicio.

## Tecnologías

Python, Pytest y pruebas de API REST.

## Repositorio

[Consultar el código fuente en GitHub](https://github.com/Joel-DQ/qa-project-Urban-Grocers-app-es)
