
# Frontend - Event Logger Application

## Descripción

Este es el frontend de la aplicación **Event Logger**, desarrollado con **Angular** (o cualquier otro framework que uses, por ejemplo, React) y diseñado para interactuar con la API del backend, mostrando los eventos registrados y permitiendo la creación de nuevos eventos.

## Requisitos Previos

- **Node.js (v16 o superior)**: [Descargar aquí](https://nodejs.org/)
- **NPM** o **Yarn**: Gestor de paquetes para instalar las dependencias.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/marianaph6/EventLogger.FrontEnd
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o si usas yarn
   yarn install
   ```

4. Ejecuta la aplicación:
   ```bash
   npm run serve
   # o si usas yarn
   yarn serve
   ```

5. La aplicación estará disponible en `http://localhost:4200`.

## Funcionalidades

- **Ver Eventos**: Muestra la lista de todos los eventos almacenados en el backend.
- **Filtrar Eventos**: Permite filtrar eventos por tipo y rango de fechas.
- **Crear Eventos**: Formulario para agregar nuevos eventos a la base de datos.

## Consideraciones de Diseño

- **Componentización**: La aplicación está dividida en componentes modulares para facilitar la escalabilidad y el mantenimiento.
- **Interacción con el Backend**: Se realiza mediante llamadas HTTP utilizando **Axios** o el API Fetch de JavaScript.
- **Validaciones**: El formulario de creación de eventos incluye validaciones para asegurar que los campos requeridos estén completos.

## Scripts Disponibles

- `npm run serve`: Compila y sirve la aplicación en modo desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Ejecuta el linter para verificar el código.

## Deploy

Para desplegar la aplicación, puedes utilizar plataformas como **Netlify**, **Vercel**, o desplegar el build estático en un servidor.

1. Compila para producción:
   ```bash
   npm run build
   ```

2. El contenido generado estará en la carpeta `dist`, el cual puedes subir a cualquier servidor estático o plataforma de hosting.

## Consideraciones de Implementación

- **Rendimiento**: Se optimizó el código para asegurar tiempos de carga rápidos utilizando técnicas como lazy-loading de componentes.
- **Accesibilidad**: Se ha prestado atención a la accesibilidad, asegurando que la aplicación sea utilizable para todos los usuarios, independientemente de las capacidades.

## Contribuir

Si deseas contribuir a cualquiera de las partes de la aplicación (backend o frontend):

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección de errores (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

¡Gracias por utilizar Event Logger! Para cualquier duda o consulta, no dudes en crear un issue en el repositorio o contactarnos.
