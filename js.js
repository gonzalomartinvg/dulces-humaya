
//PRODUCTOS

//Objeto

const productos = {
    
  "producto1":[

      {
          "nombre": "Dulce de leche tradicional",

          "imagen": "IMAGENES/Productos/Producto1.png",

          "texto": "Elaboración artesanal de principio a fin, con un sabor intenso, receta tradicional.",

          "presentacion": "Presentación en frasco de vidrio de 580gr.",

          "url": "",
      }

  ],

  "producto2":[

      {
          "nombre": "Dulce de leche sin azúcar",

          "imagen": "IMAGENES/Productos/Producto2.png",

          "texto": "Elaboración artesanal para cuidar tu silueta sin renunciar a nada, endulzado naturalmente con stevia",

          "presentacion": "Presentación en frasco de vidrio de 580gr y 280gr.",

          "url": "",
      }

  ],

  "producto3":[

      {
        "nombre": "Dulce choconutt",

        "imagen": "IMAGENES/Productos/Producto3.png",

        "texto": "Elaboración artesanal para el capricho dulce, combinación de dulce de leche, chocolate y pasta de avellanas. Una delicia única.",

        "presentacion": "Presentación en frasco de vidrio de 280gr.",

        "url": "ilha-grande.html",
      }

  ],

  "producto4":[

      {
          "nombre": "Alfajores de maicena",

          "imagen": "IMAGENES/Productos/Producto4bis.png",

          "texto": "Alfajores de dulce con coco rallado, relleno con 2cm de pura dulzura. Pudiendo elegir entre dulce de leche tradicional, light o choconutt.",

          "presentacion": "Presentación en caja de 6 y 12 alfajores",

          "url": "",
      }

  ]

}

//Funciones

for (prop in productos){

  let contenedorTodosLosProductos = document.querySelector(".contenedorProductos");

  nombreProducto = (productos[prop][0].nombre);
  imagenProducto= (productos[prop][0].imagen);
  textoProducto= (productos[prop][0].texto);
  presentacionProducto= (productos[prop][0].presentacion);
  urlProducto= (productos[prop][0].url);

  const divAutogenerado = document.createElement("div");
  const contenidoAutoGenerado = //Las `` siguientes se utilizan para hacer un html literal

  `
    <img class="imagenProducto" src="${imagenProducto}" alt="Imagen producto">
    <h2 class="tituloProducto">${nombreProducto}</h2>
    <p class="textoProducto">${textoProducto}</p>
    <p class="textoPresentacion">${presentacionProducto}</p>
    <a class="botonMasInfoProducto" href="${urlProducto}">+info</a>
  `
  ; 

  divAutogenerado.innerHTML = contenidoAutoGenerado;

  divAutogenerado.classList.add("tarjetaProducto");

  contenedorTodosLosProductos.append(divAutogenerado);
}

//RECETAS

//Movimiento scroll del apartado de recetas

const wrapper = document.querySelector('.wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})

//COMENTARIOS

//Objeto

const comentarios = {
    
  "comentario0":[
      {

          "numero": "0",

          "nombre": "Micaela Odriozola",

          "imagen": "IMAGENES/comentarios/micaela-comentario.png",

          "comentario": "El mejor dulce de leche de Argentina, combina con todas mis recetas.",

          "estrellas": "IMAGENES/comentarios/estrellas-5.png"  
      }
      
  ],

  "comentario1":[
      {
          "numero": "1",

          "nombre": "Antonio Artacho",

          "imagen": "IMAGENES/comentarios/antonio-comentario.png",

          "comentario": "Buenísima la atención en el local, pude probar todos los dulces y opté por llevarme el coconutt. Una delicia.",

          "estrellas": "IMAGENES/comentarios/estrellas-5.png"  
      }
      
  ],

  "comentario2":[
      {
          "numero": "2",

          "nombre": "Sabrina Diaz",

          "imagen": "IMAGENES/comentarios/sabrina-comentario.png",

          "comentario": "Excelente atención de manera personal. Riquísimos los alfajores.",

          "estrellas": "IMAGENES/comentarios/estrellas-5.png" 
      }
      
  ],

  "comentario3":[
      {
          "numero": "3",

          "nombre": "Giuliana Paladino",

          "imagen": "IMAGENES/comentarios/giuliana-comentario.png",

          "comentario": "Excelente atención y muy buenos precios.",

          "estrellas": "IMAGENES/comentarios/estrellas-5.png"  
      }
      
  ],

  "comentario4":[
      {
          "numero": "4",

          "nombre": "Marco Gonzalez",

          "imagen": "IMAGENES/comentarios/marco-comentario.png",

          "comentario": "Una opción muy buena para hacer más ricas las recetas del día a día.",

          "estrellas": "IMAGENES/comentarios/estrellas-5.png" 
      }
      
  ],

}

//Selectores

let anterior = document.querySelector(".anterior");
let proximo = document.querySelector(".proximo");

let contador = 0; //Indica que comentario se debe mostrar en la página

//Funciones

function mostrarDatos(a){
  
  function chequearDatos (b){

  let contenedorAutogeneradorDeComentarios = document.querySelector(".contenedor-autogenerador-de-comentarios"); //Seleccionamos el div donde vamos a introducir

  contenedorAutogeneradorDeComentarios.innerHTML = "" //Borramos el div ya existente dentro del contenedor

  const divCreadoComentario = document.createElement("div"); //Creamos el div nuevo a introducir en el contenedor
              
  const contenidoAutoGeneradoComentario = //Generamos el contenido del div. Las `` siguientes se utilizan para hacer un html literal- El parametro "a" corresponde a la clase que india si el div con el comentario ingresa o sale, es decir, da la animación.
                  `
                  
                  <div class="contenedor-comentario-micro ${a}">
                      <div class="contenedor-foto-y-nombre">
                          <img class="imagen-profile" src="${b[0].imagen}" alt="estrellas de puntuación">
                          <h2 class="nombre">${b[0].nombre}</h2>
                      </div>
                      <img class="estrellas" src="${b[0].estrellas}" alt="estrellas de puntuación">
                      <p class="comentario">${b[0].comentario}</p>
                  </div>
              
              
                  `; 

  divCreadoComentario.innerHTML = contenidoAutoGeneradoComentario; //Le atribuimos el html al div.

  contenedorAutogeneradorDeComentarios.append(divCreadoComentario); //Se lo adjudicamos a la sección autogenerada

  }

  //Con los siguientes condicionales indicamos que información de comentario tiene que tomar
  
  if (contador == 0){
      chequearDatos(comentarios.comentario0)
  }
  
  if (contador == 1){
      chequearDatos(comentarios.comentario1);
  }
  
  if (contador == 2){
      chequearDatos(comentarios.comentario2);
  }
  
  if (contador == 3){
      chequearDatos(comentarios.comentario3);
  }
  
  if (contador == 4){
      chequearDatos(comentarios.comentario4);
  }
}

mostrarDatos(); //La ejecutamos para que apenas abrimos la página funcione con el 0

//FUNCIONES ANTERIOR Y PRÓXIMO

proximo.addEventListener ("click", suma1);

function suma1(){

  if (contador == 4){
      contador = 0;
  }

  else{
      contador += 1;
  }

  mostrarDatos("contenedor-comentario-micro-ingresa");
}

anterior.addEventListener ("click", resta1);

function resta1(){

  if (contador == 0){
      contador = 4;
  }

  else{
      contador -= 1;
  }

  mostrarDatos("contenedor-comentario-micro-sale");
}
