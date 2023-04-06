

document.getElementById("formulario").addEventListener("submit", buscar);
document.getElementById("boton1").addEventListener("click",negro)



function negro(){
    
 const negro = fotos.filter((fotos)=>{
return fotos.color == "false";

 });
 dibujar(negro);


 
 


 
    const arreglo_filtrado = fotos.name((Paisaje)=>{
        return fotos.name == "Paisaje";
    });

    dibujar(arreglo_filtrado);
}





function personas(evt){
    evt.preventDefault();
    const arreglo_filtrado2 = fotos.name((Personas)=>{
        return fotos.name == "Personas";
    });

    dibujar(arreglo_filtrado2);
}







//  evt.preventDefault parametro que trae informacion del evento que lo dispara

function buscar(evt){
    evt.preventDefault();
    let foto_buscar = document.getElementById("busqueda").value;
    const auxiliafiltro = fotos.filter((fotos)=>{

    return fotos.name == foto_buscar
    });
dibujar (auxiliafiltro);
    }

//filter localiza elementos dentro de un arreglo, somete el arreglo a cierta condicion


function dibujar(fotos_filtro){
    document.querySelector("#contenedor").innerHTML="";
    fotos_filtro.forEach((fotos, i)=>{
            document.querySelector("#contenedor").innerHTML+=`<div class="col-3">
            <div class="card mb-5">
                <img src="${fotos.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${fotos.observaciones}</h5>
                    <p class="card-text">Categoría: ${fotos.name}</p>
                    <p class="card-text">Autor: ${fotos.autor}</p>
                    <p class="card-text">Año: ${fotos.año}</p>
           
                </div>
            </div>
        </div>`;
    })
}


// si dibuja todas las fotos
dibujar(fotos);

