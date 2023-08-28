# E-commerce 

![E-commerce cover
](https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64db23711db2143195ab6162/screenshot_2023-08-15-07-04-21-0000.png)

Proyecto de comercio electrónico diseñado especialmente para la tienda GeekMobile. En esta solución implementada en React, he creado una experiencia de compra en línea que refleja la pasión por la tecnología.

**Características Clave:**

-   Amplio catálogo de productos que abarcan desde dispositivos tecnológicos hasta artículos de colección.
-   Integración de la pasarela de pago de **PayPal** para una experiencia de compra segura y confiable.
-   Diseño intuitivo que facilita la navegación, selección de productos y proceso de pago.

## Demo

Ver la [demo](https://geekmobile.netlify.app)

Back-end [demo](demo)


##	Instalación

Clonar e instalar el proyecto:

```sh 
$ git clone https://github.com/diegosiac/E-commerce.git
$ cd project
$ npm install
```
Para utilizar este proyecto necesitar tener el Back-End del proyecto:

Back-end [Repositorio](https://github.com/diegosiac/E-commerce-API)

## Setup
Cree un archivo .env que incluya:
```sh 
VITE_API_URL=

VITE_GOOGLE_URL=https://maps.googleapis.com/maps/api

VITE_GOOGLE_KEY=
```

Cree un archivo .cypress.env.json que incluya:
```json
{
  "API_URL": "",
  "SECRET_AUTH_ADMIN": "",
  "EMAIL_ADMIN": "",
  "PASSWORD_ADMIN": "",
  "API_KEY_MAPS": "",
  "API_URL_MAPS":"https://maps.googleapis.com/maps/api/geocode/json",
  "PAYPAL_URL": "https://www.sandbox.paypal.com",
  "PAYPAL_EMAIL": "",
  "PAYPAL_PASSWORD": ""
}
```

## Iniciar desarrollo
```sh 
$ npm run dev
```
## Ejecutar compilación para producción
```sh 
$ npm run build
```
## Ejecutar pruebas unitarias
```sh 
$ npm run test
```
## Ejecutar pruebas 2E2
```sh 
$ npm run cypress:open
```
## Recursos necesarios para este proyecto

 - Maps Google Apis
	 - [Docs](https://developers.google.com/maps/documentation/geocoding)
