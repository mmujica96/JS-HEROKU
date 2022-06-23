
//crear funccion flecha
ejecutarCodigo = () =>{
    //alert('Hola, mundo!')
    let elemento = document.getElementById('titulo1')
    elemento.textContent = 'Album de fotos'

    let textHTML = `
    <span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>
    `
    
    //se obtiene un arreglo con la obtencion de la clase
    let arreglo = document.getElementsByClassName('text-muted')
    elemento = arreglo[1];
    elemento.innerHTML = textHTML;

    //obtencion de elementos  por etiquetas, se obtiene un arreglo
    arreglo = document.getElementsByTagName('p')
    //se obtiene el elemento en una posicion en especifico
    elemento = arreglo[2]
    //se setea los atributos (actual,  por actualizado)
    elemento.setAttribute('class','d-none')
    //paso simplificado arreglo[2].setAttribute('class','d-none')

    arregloFoto= [ 
        { url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camino'},
        { url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'energia'},
        { url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'papá'},
        { url: 'https://images.unsplash.com/photo-1653934004892-1399fb4444c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', alt: ''},
        { url: 'https://images.unsplash.com/photo-1654026633377-d8d55a494481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', alt: ''},
        { url: 'https://images.unsplash.com/photo-1653917215257-40db75a62dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: ''},
        { url: 'https://images.unsplash.com/photo-1653874403269-f4f0dba02f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: ''},
        { url: 'https://images.unsplash.com/photo-1653578705644-3672f965f009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: ''},
        { url: 'https://images.unsplash.com/photo-1653908836785-b519864cca16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: ''} ];

   
    //por selector avanzado
    const arreglosvg = document.querySelectorAll("div >svg");
    
    for( let i=0; i <arreglosvg.length; i++){
        const img = document.createElement('img');
        img.setAttribute('src', arregloFoto[i].url);
        arreglosvg[i].replaceWith(img);
    }
}

//llamar a la funcion
ejecutarCodigo()