
---
title: "API Stand Tests — Validación de API"
description: "Proyecto de pruebas de API enfocado en validar el parámetro firstName."
date: 2026-10-23
repoURL: "https://github.com/Joel-DQ/api_stand_tests"
---

## Objetivo

Validar el comportamiento de una API al recibir solicitudes para crear usuarios, prestando atención al parámetro `firstName`.

## Actividades

- Preparación de casos de prueba para solicitudes de creación de usuarios.
- Validación del parámetro `firstName`.
- Ejecución de pruebas automatizadas.
- Revisión de las respuestas de la API.

## Resultados

- Casos de prueba ejecutados: 10.
- Defectos identificados: 5.

## Defecto destacado

Identifiqué fallas en la validación de los límites y tipos de datos aceptados por la API. Estos comportamientos pueden permitir entradas inválidas y generar inconsistencias en el registro de usuarios.

## Tecnologías

Python, Pytest y pruebas de API REST.

## Repositorio

[Consultar el código fuente en GitHub](https://github.com/Joel-DQ/api_stand_tests)
