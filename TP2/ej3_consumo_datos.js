/*
    1. Consumo de Datos desde una API:
    ○ Crea una función llamada obtenerUsuarios que haga una petición
    HTTP a la API https://jsonplaceholder.typicode.com/users usando
    fetch. Luego, imprime en la consola la lista de usuarios obtenida.
*/

const requestURL = "https://jsonplaceholder.typicode.com/users"

function obtenerUsuarios(){
    return fetch(requestURL)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            return data
        })
}

/*
    2. Procesamiento de Datos de una API:
    ○ Usando la función obtenerUsuarios, crea otra función llamada
    imprimirNombresDeUsuarios que filtre y muestre solo los nombres
    de los usuarios.
*/

function imprimirNombresDeUsuarios(){
    obtenerUsuarios()
        .then(data => {
            const nombres = data.map(usuario => usuario.name)
            console.log(nombres)
        })
}   

imprimirNombresDeUsuarios()

/*
    3. Autenticación Simulada:
    ○ Crea una función llamada autenticarUsuario que tome un objeto
    credenciales con usuario y contraseña, y verifique si coinciden con
    un usuario predefinido. La función debe devolver true si la
    autenticación es exitosa y false en caso contrario.
*/

function autenticarUsuario(credenciales) {
    return obtenerUsuarios().then(usuarios => {
        const usuarioEncontrado = usuarios.find(usuario => {
            return usuario.username === credenciales.usuario && usuario.address.geo.lat 
            === credenciales.contraseña
        })
        return !!usuarioEncontrado
    })
}

const credenciales = {
    usuario: "Bret",
    contraseña: "-37.3159"
}

autenticarUsuario(credenciales).then(resultado => {
    console.log(resultado)
})

/*
    4. Transformación de Datos:
    ○ Crea una función llamada mapearUsuarios que tome un array de
    usuarios obtenidos de la API y devuelva un nuevo array con solo las
    propiedades nombre y email de cada usuario.
*/

function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => {
        return {
            nombre: usuario.name,
            email: usuario.email
        }
    })
}

obtenerUsuarios().then(usuarios => {
    const usuariosMapeados = mapearUsuarios(usuarios)
    console.log(usuariosMapeados)
})

/*
    5. Validación de Formularios:
    ○ Crea una función llamada validarFormulario que tome un objeto con
    los campos nombre, email y password. La función debe devolver true
    si todos los campos están presentes y no están vacíos, y false en caso
    contrario.
*/

function validarFormulario(usuario) {
    return (
        usuario.name !== undefined &&
        usuario.email !== undefined &&
        usuario.name.trim() !== "" &&
        usuario.email.trim() !== ""
    )
}

obtenerUsuarios().then(usuarios => {
    usuarios.forEach(usuario => {
        if (validarFormulario(usuario)) {
            console.log("Usuario valido:", usuario)
        } else {
            console.log("Usuario invalido:", usuario)
        }
    })
})

/*
    6. Paginación de Datos:
    ○ Crea una función llamada obtenerPagina que tome un array de
    datos y un número de página. La función debe devolver los
    elementos correspondientes a esa página, asumiendo que cada
    página tiene 5 elementos.
*/

function obtenerPagina(datos, pagina) {
    const elementosPorPagina = 5
    const inicio = (pagina - 1) * elementosPorPagina
    const fin = inicio + elementosPorPagina
    return datos.slice(inicio, fin)
}

obtenerUsuarios().then(usuarios => {
    const pagina = 2
    const paginaUsuarios = obtenerPagina(usuarios, pagina)
    console.log("Usuarios de la pagina", pagina, ":", paginaUsuarios)
})

/*
    7. Envío de Datos a una API:
    ○ Crea una función llamada enviarDatos que tome un objeto data y
    haga una petición POST a la API
    https://jsonplaceholder.typicode.com/posts. La función debe
    imprimir la respuesta de la API.
*/

function enviarDatos(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log('Respuesta de la API:', data))
    .catch(error => console.error('Error:', error))
}

const data = {
    title: 'Titulo',
    body: 'Contenido',
    userId: 1
}

enviarDatos(data)

/*
    8. Búsqueda de Usuarios:
    ○ Crea una función llamada buscarUsuarioPorEmail que tome un array
    de usuarios y un email como parámetros, y devuelva el usuario que
    coincida con el email proporcionado. Usa el método find para
    implementarlo.
*/

function buscarUsuarioPorEmail(email) {
    return obtenerUsuarios()
        .then(usuarios => usuarios.find(usuario => usuario.email === email))
}

const emailABuscar = 'Sincere@april.biz'
buscarUsuarioPorEmail(emailABuscar)
    .then(usuarioEncontrado => {
        if (usuarioEncontrado) {
            console.log(`Usuario encontrado: ${usuarioEncontrado.name} (${usuarioEncontrado.email})`)
        } else {
            console.log(`No se encontro un usuario con el email ${emailABuscar}`)
        }
})
.catch(error => console.error('Error:', error))

/* 
    9. Generación de Token de Autenticación:
    ○ Crea una función llamada generarToken que tome un objeto usuario
    y devuelva un token JWT simulado como una cadena. Puedes usar
    una función como btoa (Base64) para simular la generación del
    token.
*/

function generarToken(usuario) {
    const payload = {
        id: usuario.id,
        name: usuario.name,
        email: usuario.email
    }

    const token = `${btoa(JSON.stringify(payload))}.${btoa('clave secreta')}.${btoa('expira en una hora')}`

    return token
}

obtenerUsuarios()
    .then(usuarios => usuarios.find(usuario => usuario.email === emailABuscar))
    .then(usuarioEncontrado => {
        if (usuarioEncontrado) {
            const token = generarToken(usuarioEncontrado)
            console.log(`Token generado para ${usuarioEncontrado.name}: ${token}`)
        } else {
            console.log(`No se encontro un usuario con el email ${emailABuscar}`)
        }
})
.catch(error => console.error('Error:', error))

/*
    10. Actualización de Información del Usuario:
    ○ Crea una función llamada actualizarUsuario que tome un objeto
    usuario y una lista de cambios a aplicar. La función debe retornar el
    usuario con las propiedades actualizadas.
*/

function actualizarUsuario(usuario, cambios) {
    Object.keys(cambios).forEach(key => {
        usuario[key] = cambios[key]
    })
    return usuario
}

obtenerUsuarios()
    .then(usuarios => usuarios.find(usuario => usuario.email === emailABuscar))
    .then(usuarioEncontrado => {
        if (usuarioEncontrado) {
            const cambios = {
            name: 'Actualizacion',
            phone: '342232145'
            }
            const usuarioActualizado = actualizarUsuario(usuarioEncontrado, cambios)
            console.log(`Usuario actualizado: ${JSON.stringify(usuarioActualizado, null, 2)}`)
        } else {
            console.log(`No se encontro un usuario con el email ${emailABuscar}`)
        }
})
.catch(error => console.error('Error:', error))