# Academia de Dibujo Digital — Landing Page Automatizada con n8n

Proyecto universitario enfocado en automatización de marketing digital utilizando tecnologías web y flujos automatizados con n8n.

La aplicación permite captar estudiantes interesados en cursos de dibujo digital mediante una landing page conectada a servicios externos como Google Sheets y Gmail.

---

# Descripción del proyecto

Este sistema funciona como una plataforma de captación de leads para una academia de dibujo digital.

Los usuarios pueden:

- Consultar información de cursos
- Seleccionar modalidad de estudio
- Solicitar información mediante un formulario
- Recibir una respuesta automática por correo

Toda la información enviada es procesada automáticamente mediante n8n.

---

# Tecnologías utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript

## Automatización

- n8n
- Webhooks

## Servicios externos

- Google Sheets
- Gmail

## Despliegue

- GitHub
- Vercel

---

# Funcionalidades

## Landing Page Informativa

Página principal con:

- Información sobre cursos
- Modalidades de estudio
- Cards informativas
- Navegación entre páginas

---

## Formulario de Captación

El sistema permite registrar:

- Nombre
- Correo electrónico
- Teléfono
- Empresa o negocio
- Curso de interés
- Modalidad seleccionada

---

## Automatización con n8n

Cuando el usuario envía el formulario:

1. La landing envía los datos mediante un webhook.
2. n8n recibe la información.
3. Los datos se almacenan automáticamente en Google Sheets.
4. Se envía un correo automático al usuario.

---

# Estructura del proyecto

---

````txt
/
│
├── index.html
├── inicio.html
├── style.css
├── script.js
│
├── imagenes/
│   ├── dibujo-basico.jpg
│   ├── anime.jpg
│   ├── digital.jpg
│   ├── ilustracion.jpg
│   ├── virtual.jpg
│   └── presencial.jpg
``` presencial.jpg

````

# Flujo del sistema

```txt
Usuario
↓
Landing Page
↓
Webhook n8n
↓
Google Sheets
↓
Correo automático Gmail
```
