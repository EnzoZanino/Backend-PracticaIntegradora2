### CoderHouse---Backend_JS_55610
Repo con los tps y trabajo final del curso de Back-End de "Coder House" 2024

# Práctica de integración sobre tu ecommerce
## Consigna
- Continuar sobre el proyecto que has trabajado para tu ecommerce y configurar los siguientes elementos:

## Aspectos a incluir
- Crear un modelo User el cual contará con los campos:
  * first_name:String,
  * last_name:String,
  * email:String (único)
  * age:Number,
  * password:String(Hash)
  * cart:Id con referencia a Carts
  * role:String(default:’user’)

- Desarrollar las estrategias de Passport para que funcionen con este modelo de usuarios
- Modificar el sistema de login del usuario para poder trabajar con session o con jwt (a tu elección). 
- (Sólo para jwt) desarrollar una estrategia “current” para extraer la cookie que contiene el token para obtener el usuario asociado a dicho token, en caso de tener el token, devolver al usuario asociado al token, caso contrario devolver un error de passport, utilizar un extractor de cookie.
- Agregar al router /api/sessions/ la ruta /current, la cual utilizará el modelo de sesión que estés utilizando, para poder devolver en una respuesta el usuario actual.

## Formato de entrega
- Link al repositorio de Github, el cual debe contar con todo el proyecto.
- No incluir node_modules

## Dependencias agregadas al desafio

```javascript
  "dependencies": {
      (...)
      "jsonwebtoken": "^9.0.2",
    }
```

