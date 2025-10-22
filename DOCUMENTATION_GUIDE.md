# AI Documentation Guide for Moodify Project

## Project Overview

The Moodify project is an emotion-based music recommendation system. The application analyzes facial expressions to detect emotions and provides personalized music recommendations based on detected moods. The frontend uses Next.js with Fumadocs for documentation, and the backend provides a comprehensive REST API for emotion detection and music recommendations.

## Information Needed for Documentation

### 1. Documentation Técnica

#### 1.1 Descripción del entorno de desarrollo
- Frameworks, librerías y versiones usadas
- Versión de Node.js: 20.x o superior
- Versión de Next.js: 15.5.4
- Versión de React: 19.2.0
- Librerías principales:
  - fumadocs-core: 15.8.5
  - fumadocs-mdx: 12.0.3
  - fumadocs-openapi: 9.5.1
  - fumadocs-ui: 15.8.5
  - lucide-react: 0.544.0
  - shiki: 3.13.0
- Preprocesador CSS: Tailwind CSS v4.1.14
- Tipado: TypeScript 5.9.3
- Servidor: Next.js App Router

#### 1.2 Instrucciones para desplegar la aplicación
- **Ambiente local:**
  - Clonar el repositorio
  - Instalar dependencias: `pnpm install`
  - Configurar variables de entorno
  - Ejecutar en modo desarrollo: `pnpm dev`
  - Acceder a http://localhost:3000

- **Ambiente de producción en la nube:**
  - Configurar variables de entorno para producción
  - Variables requeridas: NEXTAUTH_SECRET, NEXTAUTH_URL, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, DATABASE_URL
  - Desplegar en plataformas como Vercel, Netlify o AWS
  - Configurar base de datos (PostgreSQL recomendado)
  - Configurar integración con Spotify API

#### 1.3 Estructura del proyecto y organización del código fuente
- `/app` - Rutas y componentes de la aplicación Next.js
- `/content/docs` - Contenido de documentación en MDX
- `/lib` - Lógica compartida y configuraciones
- `/node_modules` - Dependencias del proyecto
- `/public` - Archivos estáticos
- `/scripts` - Scripts de utilidad
- Archivos de configuración: `next.config.mjs`, `package.json`, `tsconfig.json`, `source.config.ts`, `postcss.config.mjs`

#### 1.4 Repositorio(s) de código fuente
- URL del repositorio: https://github.com/josegarcia/moodify-fumadocs
- Ramas: main, develop
- Convención de commits: seguir estándar conventional commits

#### 1.5 Diagrama de arquitectura
- Cliente web: Next.js 15 con React 19
- Framework de documentación: Fumadocs
- API de backend: Endpoints REST para autenticación, perfiles de usuario, historial, analíticas, recomendaciones
- Servicios de terceros: 
  - Spotify API para recomendaciones de música
  - NextAuth.js para autenticación
  - Base de datos (PostgreSQL) para almacenamiento de usuarios, historial y preferencias
- Servicios de nube para despliegue (Vercel, AWS, etc.)

### 2. Manual de Usuario

#### 2.1 Indicaciones claras sobre cómo utilizar cada funcionalidad
- Registro e inicio de sesión
- Detección de emociones
- Recomendaciones de música
- Historial de análisis
- Configuración del perfil de usuario
- Visualización de analíticas

#### 2.2 Capturas de pantalla
- Pantalla de inicio de sesión
- Interfaz de detección de emociones
- Resultados de análisis de emociones
- Recomendaciones de música
- Panel de historial
- Perfil de usuario
- Visualización de analíticas

## Content Structure for Documentation Folders

### `/content/docs/introduccion/`
- Archivo `index.mdx`: Introducción general al proyecto
- Archivo `que-es.mdx`: ¿Qué es Moodify?
- Archivo `caracteristicas.mdx`: Características principales
- Archivo `casos-uso.mdx`: Casos de uso y beneficios

### `/content/docs/guia-inicio/`
- Archivo `instalacion.mdx`: Instrucciones de instalación
- Archivo `configuracion.mdx`: Configuración inicial
- Archivo `primeros-pasos.mdx`: Primeros pasos para nuevos usuarios
- Archivo `variables-entorno.mdx`: Variables de entorno requeridas

### `/content/docs/arquitectura/`
- Archivo `estructura-proyecto.mdx`: Estructura del proyecto y organización del código
- Archivo `patrones-diseño.mdx`: Patrones de diseño utilizados
- Archivo `diagrama-arquitectura.mdx`: Diagrama y explicación de la arquitectura
- Archivo `tecnologias.mdx`: Tecnologías y frameworks utilizados

### `/content/docs/api-reference/`
- Archivo `introduccion.mdx`: Introducción a la API
- Archivo `autenticacion.mdx`: Documentación de endpoints de autenticación
- Archivo `usuarios.mdx`: Documentación de endpoints de usuarios
- Archivo `recomendaciones.mdx`: Documentación de endpoints de recomendaciones
- Archivo `historial.mdx`: Documentación de endpoints de historial
- Archivo `analiticas.mdx`: Documentación de endpoints de analíticas
- Archivo `busqueda.mdx`: Documentación de endpoints de búsqueda
- Archivo `otros.mdx`: Otros endpoints

### `/content/docs/manual-usuario/`
- Archivo `inicio-sesion.mdx`: Cómo iniciar sesión
- Archivo `deteccion-emociones.mdx`: Cómo usar la detección de emociones
- Archivo `recomendaciones.mdx`: Cómo obtener recomendaciones de música
- Archivo `historial.mdx`: Cómo ver y gestionar el historial
- Archivo `perfil.mdx`: Cómo gestionar el perfil de usuario
- Archivo `analiticas.mdx`: Cómo interpretar las analíticas
- Archivo `solucion-problemas.mdx`: Solución de problemas comunes

### `/content/docs/desarrollo/`
- Archivo `guia-desarrollo.mdx`: Guía para desarrolladores
- Archivo `convenciones.mdx`: Convenciones de código
- Archivo `pruebas.mdx`: Pruebas y validación
- Archivo `contribucion.mdx`: Cómo contribuir al proyecto
- Archivo `despliegue.mdx`: Proceso de despliegue

## Content Requirements for Each Documentation Section

### Introducción
- Descripción clara del propósito del proyecto
- Beneficios y casos de uso
- Audiencia objetivo
- Características principales

### Guía de Inicio
- Pasos detallados para configurar el entorno
- Requisitos previos
- Configuración de variables de entorno
- Ejemplos prácticos

### Arquitectura
- Diagrama visual de la arquitectura
- Explicación de cada componente
- Tecnologías utilizadas
- Patrones de diseño implementados
- Decisiones de arquitectura

### API Reference
- Documentación técnica precisa
- Ejemplos de peticiones y respuestas
- Códigos de estado
- Parámetros requeridos y opcionales
- Esquemas de datos
- Criterios de autenticación

### Manual de Usuario
- Instrucciones paso a paso
- Capturas de pantalla (simuladas o descritas)
- Escenarios de uso comunes
- Solución de problemas
- Mejores prácticas

### Desarrollo
- Guía para nuevos desarrolladores
- Convenciones y estándares
- Proceso de contribución
- Configuración de entorno de desarrollo
- Proceso de testing

## Additional Context from Codebase

### API Information
- API Title: Moodify API
- API Version: 1.0.0
- Description: REST API for emotion-based music recommendation system
- Supported emotions: happy, sad, angry, surprised, neutral, fear, disgust
- Authentication: Bearer tokens via NextAuth.js and cookie-based auth
- Features: Facial emotion detection, Spotify-powered music recommendations, Advanced analytics, Secure authentication

### Main Endpoints
- Authentication: `/auth/login`, `/auth/register`
- Health check: `/health`
- User profile: `/user/profile`
- History: `/history`
- Analytics: `/history/analytics`
- Recommendations: `/recommendations`, `/music/recommendations`
- Music search: `/music/search`, `/music/tracks/{trackId}`

### Project Technology Stack
- Frontend: Next.js 15 with App Router
- Framework: Fumadocs for documentation
- Styling: Tailwind CSS
- Icons: Lucide React
- OpenAPI Integration: fumadocs-openapi
- Server-side: Next.js API Routes
- Authentication: NextAuth.js
- Music Integration: Spotify API
- Code Highlighting: Shiki

This guide provides the AI with comprehensive information about the Moodify project to create detailed and accurate documentation across all specified content directories.