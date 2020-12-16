# ChangingLifeQuotesAPI
API that generates famous life quotes and their respective images

## IMPORTANTE
- Crear un archivo .env en la raíz del proyecto con los valores enviados al correo para así poder probar la API

## Ejecución
- Para ejecutarla, correr uno de los comandos "npm start" o "node app/index.js"

## Documentación
- https://documenter.getpostman.com/view/5707571/TVsrDTds

## Otras notas importantes
- La API usa una cluster gratuito en MongoDB Atlas para almacenar los quotes y los links de las imagenes
- La API suministrada y que se usa para generar las random quotes es freemium, se cuenta con una suscripción que permite usar solo 50 peticiones, de estas se habrán usado entre 20 y 30 para probar.
- El API usada para generar las URL de las imagenes es bannerbear, la cual permite usar 100 peticiones. Se usarón entre 20 y 30 para probar.
