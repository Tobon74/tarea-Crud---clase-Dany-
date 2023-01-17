function guardar(){
    let name = document.getElementById(`textotxt`).value
    let mail = document.getElementById(`correotxt`).value
    let commit = document.getElementById(`comentariotxt`).value

    let inputValue =({
        "nombre": name,
        "correo": mail,
        "comentario": commit,
    })
    let datos = JSON.parse(localStorage.getItem(`Usuarios`)) ? JSON.parse(localStorage.getItem(`Usuarios`)) : 
    []
    datos.push(inputValue)
    console.log(JSON.stringify(datos))
    localStorage.setItem(`Usuarios`, JSON.stringify(datos))

    document.getElementById(`textotxt`).value =``
    document.getElementById(`correotxt`).value =``
    document.getElementById(`comentariotxt`).value =``
 render()
}
function render(){
    console.log(localStorage.getItem(`Usuarios`))
    let lista = document.getElementById(`lista`)
    let datos = JSON.parse(localStorage.getItem(`Usuarios`)) ? JSON.parse(localStorage.getItem(`Usuarios`)) : 
    []
    lista.innerHTML =`
    <table>
    <thead>
    <th>Nombre</th>
    <th>Correo</th>
    <th>Comentario</th>
    </thead>
    </table>
    `
    datos.forEach((element,index) => {
        console.log(index)
        lista.innerHTML = `
        <td> ${element.nombre}</td>
        <td>${element.correo} </td>
        <td> ${element.comentario}</td>
        <td><button onclick="edit()">Editar </button> </td>
        <td><button onclick="borrar(${index})">Borrar </button> </td>
        `
    });

}
function borrar(position){
    let datos = JSON.parse(localStorage.getItem(`Usuarios`)) ? JSON.parse(localStorage.getItem(`Usuarios`)) : 
    []
    console.log(datos.splice(position,1))
    console.log(JSON.stringify(datos))
    localStorage.setItem(`Usuarios`,JSON.stringify(datos))
    render()
    console.log(`borrado`)


}

function edit(){
    let lista = document.getElementById(`lista`)
    let datos = JSON.parse(localStorage.getItem(`Usuarios`)) ? JSON.parse(localStorage.getItem(`Usuarios`)) : 
    []
    datos.forEach(el =>{
        lista.innerHTML = `
    <table>
    <thead>
    <th>Nombre</th>
    <th>Correo</th>
    <th>Comentario</th>
    </thead>
    <tbody>
    <td><input placeholder=" ${el.nombre}" id="nombredit"></td>
    <td><input placeholder=" ${el.correo}" id="correoedit"></td>
    <td><input placeholder=" ${el.comentario}" id="comentarioedit"></td>
    <td><button onclick="reguardar()">Guardar</button> </td>
    <td><button onclick="cerrar(this)">Borrar </button> </td>
    </tbody>
    </table>
    `
})
}

function reguardar(element){
    let nombre = document.getElementById(`nombredit`).value
    let mail2 = document.getElementById(`correoedit`).value 
    let coment = document.getElementById(`comentarioedit`).value

    let reinputValue = ({
        "nombre": nombre,
        "correo": mail2,
        "comentario": coment,
    })
    let datos = JSON.parse(localStorage.getItem(`Usuarios`)) ? JSON.parse(localStorage.getItem(`Usuarios`)) : 
    []
    console.log(reinputValue)
    datos.push(reinputValue)
    console.log(JSON.stringify(datos))
    datos.splice(element,1)
    console.log(datos)
    localStorage.setItem(`Usuarios`,JSON.stringify(datos))
    render()
}

function cerrar(e){
    e.parentElement.parentElement.remove()
}
render()