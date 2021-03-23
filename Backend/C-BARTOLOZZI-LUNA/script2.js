class UserClass {
    constructor(nombre, apellido, libros, mascotas){
      this.nombre = (nombre == undefined || nombre == "") ? "Lucia" : nombre;
      this.apellido = (apellido  == undefined || apellido == "") ? "Perez" : apellido;
      this.libros = (libros == undefined) ? libros = [] : libros;
      this.mascotas = (mascotas == undefined) ? mascotas = [] : mascotas;
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota){
        return this.mascotas.push(mascota);
    }

    getMascotas(){
        return this.mascotas.length;
    }

    addBook(titulo,autoria){
        const books = {titulo:titulo, autoria:autoria};
        this.libros.push(books);
    }

    getBooks(){
        const titulos = [];
        this.libros.forEach(libro => {
            titulos.push(libro.titulo)
        });
        return titulos;
    }
}


//Declaración de instancia de la clase User
const desafioLuna = new UserClass(
    "Luna",
    "Bartolozzi",
    [
      { titulo: "Harry potter 1", autoria: " J. K. Rowling" },
      { titulo: "Harry poter 2", autoria: " J. K. Rowling" }
    ],
    ["china", "pepi"]
)

const empty = new UserClass()


const informacionWeb=document.querySelector(".informacion");


//Resolución del ejercicio


//Con Clases de javascript
console.log('\n');
console.warn("Ejercicio realizado con Clases de Javascript")
console.log(`El nombre completo del user es ${desafioLuna.getFullName()}`);
desafioLuna.addMascota("crazy");
console.log(`La cantidad actualizada de mascotas de la persona es ${desafioLuna.getMascotas()}`);

desafioLuna.addBook("Harry poter 3"," J. K. Rowling");
console.log("Lista completa de sus libros favoritos:")
console.log(desafioLuna.getBooks())


console.log('\n');
console.log("Datos completos de la persona agregada: ")
console.log(desafioLuna)
console.log("Datos completos de una persona sin datos: ")
console.log(empty)


//Mostrar info en el front-end con clases

function mostrarDatosClases() {

    const info=document.createElement('div');
    info.innerHTML= `
    <h1>Desafio clases</h1>
    <ul>
        <li>El nombre completo del user es ${desafioLuna.getFullName()}</li>
        <li>La cantidad actualizada de mascotas de la persona es ${desafioLuna.getMascotas()}</li>
        <li>Lista completa de sus libros favoritos: ${desafioLuna.getBooks()}</li>
    </ul>`;
    informacionWeb.appendChild(info);
}
mostrarDatosClases();