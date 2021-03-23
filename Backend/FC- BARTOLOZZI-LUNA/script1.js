// Declaración de funciones constructoras
function UserFunction(nombre, apellido, libros, mascotas){
    this.nombre = (nombre == undefined || nombre == "") ? "John" : nombre;
    this.apellido = (apellido  == undefined || apellido == "") ? "Doe" : apellido;
    this.libros = (libros == undefined) ? libros = [] : libros;
    this.mascotas = (mascotas == undefined) ? mascotas = [] : mascotas;
}

UserFunction.prototype.getFullName = function () {
    return `${this.nombre} ${this.apellido}`
}

UserFunction.prototype.addMascota = function (mascota) {
    return this.mascotas.push(mascota);
}

UserFunction.prototype.getMascotas = function () {
    return this.mascotas.length;
}

UserFunction.prototype.addBook = function (titulo,autoria) {
    const books = {titulo:titulo, autoria:autoria};
    return this.libros.push(books);
}

UserFunction.prototype.getBooks = function () {
    const titulos = [];
    this.libros.forEach(libro => {
        titulos.push(libro.titulo)
    });
    return titulos;
}


//Declaración de instancia de la función constructora
const desafioLuna = new UserFunction(
    "Luna",
    "Bartolozzi",
    [
      { titulo: "Harry potter 4", autoria: " J. K. Rowling" },
      { titulo: "Harry potter 5", autoria: " J. K. Rowling" }
    ],
    ["china", "pepi"]
)


const empty = new UserFunction()


const informacionWeb=document.querySelector(".informacion");


//Resolución del ejercicio

//Con funciones constructoras
console.warn("Ejercicio realizado con Funciones Constructoras")
console.log(`El nombre completo del user es ${desafioLuna.getFullName()}`)
desafioLuna.addMascota("crazy");
console.log(`La cantidad actualizada de mascotas de la persona es ${desafioLuna.getMascotas()}`);
desafioLuna.addBook("Harry potter 7", " J. K. Rowling");
console.log("Lista completa de sus libros favoritos:")
console.log(desafioLuna.getBooks());

console.log('\n');
console.log("Datos completos de la persona agregada: ")
console.log(desafioLuna)




//Mostrar info en el front-end con funciones constructoras

function mostrarDatosFuncion() {

    const info=document.createElement('div');
    info.innerHTML= `
    <h1>  Desafio Funciones Constructoras </h1>
    <ul>
        <li>El nombre completo del user es ${desafioLuna.getFullName()}</li>
        <li>La cantidad actualizada de mascotas de la persona es ${desafioLuna.getMascotas()}</li>
        <li>Lista completa de sus libros favoritos: ${desafioLuna.getBooks()}</li>
    </ul>`;
    informacionWeb.appendChild(info);
}
mostrarDatosFuncion();