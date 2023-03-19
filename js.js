
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