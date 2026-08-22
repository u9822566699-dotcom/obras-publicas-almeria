PWA - Obras Públicas Almería
============================

Contenido
---------
index.html                 Aplicación web/PWA (HTML + CSS + JavaScript original).
manifest.webmanifest      Configuración de instalación como PWA.
sw.js                     Service Worker para caché y funcionamiento con conectividad intermitente.
icons/                    Iconos de instalación.
backend_Code.gs           Backend original de Google Apps Script; NO se ejecuta dentro de la PWA.

Importante
----------
La PWA mantiene la conexión con el mismo Google Apps Script que ya usaba el HTML.
El backend sigue siendo Google Apps Script + Google Sheets + MailApp.

Para probar en el PC
--------------------
No abras index.html con doble clic. Las PWA necesitan HTTP/HTTPS.
En la carpeta de la PWA ejecuta, por ejemplo:

  python -m http.server 8080

Y abre:
  http://localhost:8080

Para instalarla en Android
--------------------------
Publica esta carpeta en un hosting HTTPS (por ejemplo, GitHub Pages, Netlify o similar).
Después abre la URL en Chrome/Android y usa “Instalar aplicación” / “Añadir a pantalla de inicio”.

El archivo backend_Code.gs debe seguir desplegado como aplicación web en Google Apps Script.
