# BikeShop - AppCommerce 

Este es un proyecto de ecommerce básico que se utiliza para el curso de React. La aplicación permite ver una lista de productos y servicios de tienda y realizar compras en línea. Los productos y las órdenes de compra se almacenan en Firebase.

## Tecnologías utilizadas

Vite
React
React Router
Firebase

## Funcionalidades

Ver una lista de productos disponibles
Agregar productos al carrito de compras
Ver el carrito de compras
Eliminar productos del carrito de compras
Vaciar el carrito de compras
Realizar una orden de compra
Descontar stock a medida que se opera con las funciones

(extra)
Formulario de contacto para enviar mensajes a la bdd

## Instalación
Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:
Clona el repositorio a tu máquina local.
Abre una terminal en el directorio del proyecto.
Ejecuta el comando npm install para instalar las dependencias.
Ejecuta el comando npm run dev para iniciar la aplicación.
Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en acción.

## Configuración de Firebase
Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:
Crea una cuenta en Firebase y crea un nuevo proyecto.
En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.