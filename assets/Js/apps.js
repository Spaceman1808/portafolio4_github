const botonCart = document.getElementById('cart-btn');
const botonCard = document.getElementById('btn-card');
const listaProductos = document.querySelector('.lista-productos');
const listaCarrito = document.querySelector('.lista-carrito');



window.addEventListener('DOMContentLoaded', () =>{
    loadJson();
})
listaProductos.addEventListener('click', purchaseProductos);

function loadJson(){
    fetch ("index.json")
    .then(response => response.json())
    .then(data=>{
        let html="";
        data.forEach(product => {

            html+= `
                <div class="col-lg-4 col-md-6 col-sm mt-5">
                    <div class="card text-center clase-imagen">
                        <img src="${product.imagen}" alt="imagen planner enfermera">
                        <div class="card-body">
                            <h5 class="card-title nombre-tarjeta">${product.titulo}</h5>
                            <p class="card-text">${product.descripcion}</p>
                            <h6> $${product.precio} </h6>
                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#planner-enf">Ver más</button>
                                <input type="button" class="btn btn-outline-primary" id="btn-card" value="Agregar al carro">
                            </div>
                        </div>
                    </div>
                </div>
            
            `;
        });

        listaProductos.innerHTML=html; 
    })
    .catch(error=>
        alert("usa live server!"))
}

function purchaseProductos(e){
    if (e.target.classList.contains('añadir-al-carro')) {
        let producto= e.target.parentElement;
        getProductInfo(producto);
    }
}

function getProductInfo(producto){
    let infoProducto={
        imagen: producto.querySelector('.clase-imagen img').src,
        titulo: producto.querySelector('.nombre-tarjeta').textContent,
        precio:producto.querySelector('.precio-producto').textContent,
    }
    addTolistaCarrito(infoProducto);
}

function añadirAlCarro(producto) {
    const cartItem = document.querySelector('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML=`
    <img src="${product.imagen}" alt="imagen del producto">                                        
    <div class=>
        <h3>${product.titulo}</h3>
        <span>$${product.precio}</span>

    </div>
    <button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
            <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
        </svg>
    </button>
    `;
    listaCarrito.appendChild(cartItem);

    
}