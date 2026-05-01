paso 1:
npm install
paso 2:
npm run dev
paso 3:
abrir la url que te viene por consola, viene en el modo Local: http://localhost:...
suele ser: http://localhost:3000/

Tipos:
se han creado tipos para los requests y response de la Api (Post, Comentario, retweet, ... )

Componentes:
Un componente para el layout (cuando se hace un login se guarda el usuario en un token que se usa aquí)
Un componente para el login usando estado para decidr si se inicia sesion o se crea, solo cambia lo que hace el boton de crear y enseña o esconde el campo de nombre
Un componente para listar los posts, con un gap, y las acciones like, retweet ...
un componente para el Post en la pagina principal




Axios:
getProductos: obtiene los productos de la url del catalogo y los devuelve (filtrandolos por si contienen o no el string de entrada en su titulo)
getProductoById: obtiene un producto por id y lo devuelve

contexto:
listaContext: He creado un contexto useLista, que contiene, lista: un array de string, addToList/deleteFromList que añaden y eliminan valores de lista, y checkList, que mira si un elemento es parte de la lista, hay unos useffect que se usan para guardar el valor de lista en local storage.
Se ha inyectado en el layout, 
lo usan:
Favoritos: como parametro de entrada a ListaProductos: Para rellenar con los favoritos si está vacio
layoutC: para el numero de favoritos en el boton,
 

Paginas:
Pagina '/'  Como se requiere una lista inicial y que se actualiza cada vez que se haga una busqueda, se usa un useEfect con un estado ligado al valor del input (se cambia el estado al dar al boton de Buscar). La primera vez que se ejecuta, el estado de la lista está a null y se usa para obtener la primera lista usando getProductos. Tiene una instancia del componente ListaProductos.

Pagina '/producto/[id]' Hace una busqueda por id del producto usando [id] como parametro, y le pasa el resultado a una instancia del componente ProductoCard.

Pagina '/favoritos' Crea una instancia de ListaProductos con array vacio como entrada.


