## Información sobre la PreEntrega2

En la PreEntrega2, se hizo uso del paquete Mongoose y MongoDB Atlas para la persistencia de la información. Se agregó la carpeta DAO que contiene los manejadores tanto para el funcionamiento con archivos como para la funcionalidad con MongoDB. De esta forma, conviven ambos sistemas de persistencia. Además, en la carpeta `dao/models`, se dejaron los Schemas que representan cada entidad involucrada, en este caso, Product, Message y Cart.

A continuación, se detallan los endpoints de la API:

- **POST**     http://localhost:8080/api/cart
- **GET**      http://localhost:8080/api/cart/:cid
- **POST**     http://localhost:8080/api/cart/:cid/:pid
- **DELETE**   http://localhost:8080/api/cart/:cid/:pid
- **DELETE**   http://localhost:8080/api/cart/:cid
- **PUT**      http://localhost:8080/api/cart/:cid/:pid

```json
{
	"quantity": 4
}
```

- **PUT**      http://localhost:8080/api/cart/:cid   

```json 
[
	{ "_id": "6513307d03d6bf40717b4a31", "quantity": 7 },
	{ "_id": "6513305003d6bf40717b4a2d", "quantity": 6 },
	{ "_id": "6513306803d6bf40717b4a2f", "quantity": 5 }
]
```

### Endpoint para administrar los productos:

- **POST**     http://localhost:8080/api/products
- **GET**      http://localhost:8080/api/products
- **GET**      http://localhost:8080/api/products/:id
- **PUT**      http://localhost:8080/api/products/:id
- **DELETE**   http://localhost:8080/api/products/:id

Para los casos de POST y PUT, se necesita pasar los datos en formato JSON en el body de la solicitud. A continuación, se muestra una estructura de ejemplo:

```json
{
  "title": "Test",
  "description": "Test",
  "price": 100,
  "code": "ABC001",
  "stock": 1,
  "status": true,
  "thumbnail": "url imagen"
}
```

### URL de las diferentes vistas

- **GET**      http://localhost:8080/view/products
- **GET**      http://localhost:8080/view/products/:pid
- **GET**      http://localhost:8080/view/cart/:cid
- **GET**      http://localhost:8080/view/realtimeproducts
- **GET**      http://localhost:8080/view/chat

### Algunas aclaraciones

En la vista de products deje la posibilidad de agregar al carrito los productos, al darle agregar al carrito va a solicitar 
el CID correspondiente al carrito, luego con la url cart/:cid se pueden ver los productos agregados, ademas deje la posibilidad 
de paginar.