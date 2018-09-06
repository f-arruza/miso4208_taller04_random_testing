# TALLER 4: Random Testing.

## Cypress
![alt text](cypress/images/cypress01.png)

## Gremlins
En esta sección del taller se solicita realizar cambios de comportamiento en la librería **Gremlins.js**, por tanto, fue necesario publicar en un servidor local (Web Server for Chrome) el recurso **__gremlins.min.js__**, ver imagen 1.
![Imagen 1](gremlins/images/gremlins01.png)

Dicho recurso se referenció en la implementación de **Test**, ver imagen 2.
![Imagen 2](gremlins/images/gremlins02.png)

Después de realizar las modificaciones en el código de la librería **Gremlins.js** es necesario construir nuevamente el recurso **__gremlins.min.js__** utilizando el comando:
> make build

![Imagen 3](gremlins/images/gremlins03.png)

Ejecución de la prueba, ver imagen 4.
![Imagen 4](gremlins/images/gremlins04.png)

## UI/Application Exerciser Monkey en Android
### Glucosio App
> ./adb shell monkey -p org.glucosio.android -v 10000

El inicio demora unos segundos mientras termina de cargar el archivo.

![alt text](monkey_mobile/monkey_glucosio.gif)
