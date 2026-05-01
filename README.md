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
un componente para el publicar un Post en la pagina principal




Axios:
getProductos: obtiene los productos de la url del catalogo y los devuelve (filtrandolos por si contienen o no el string de entrada en su titulo)
getProductoById: obtiene un producto por id y lo devuelve


Paginas:
Pagina '/login': para logarse o si es necesario crear una cuenta
Pagina '/': una lista de posts y la habilidad de enviar un post
Pagina '/profile/[id]' saca el perfil de un usuario
Pagina '/post/[id]' saca un post y los comentarios de este


