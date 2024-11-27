/**
 * @author Martín Marín
 */

/**
 * Ejercicio 1
 * Crear una clase para un sistema de gestión de usuarios para iniciar/cerrar sesión y actualizar sus perfiles
 */
function User(name, email, pass){
    this.name = name;
    this.email = email; //Variables públicas
    let _pass = pass; //Variable privada

    //Methods:
    this.login = function(email, pass){
        if(this.email === email && this.pass === pass){
            return `Welcome ${this.name}`;
        }
        return "Invalid credentials";
    }

    this.update = function(newEmail){
        this.email = newEmail;
        return `Email updated successfully to ${newEmail}`;
    }
}

//Ejemplo de uso:
const user1 = new User('jacques', 'jacques@gmail.com', 'password');
const app = document.getElementById('app');

function renderUser(){
    app.innerHTML = `
        <h2>Welcome ${user1.name}</h2>
        <p>${user1.email}</p>
        <button>Login</button>
    `;
}

//Clases
class UserClass{
    //Variables:
    name;
    email;
    #pass;

    //Builder
    constructor(name, email, pass){
        this.name = name;
        this.email = email; //Variables públicas
        this.#pass = pass; //Variable privada
    }
    //Methods:
    login(email, pass){
        if(this.email === email && this.#pass === pass){
            return `Welcome ${this.name}`;
        }
        return "Invalid credentials";
    }

    update(newEmail){
        this.email = newEmail;
        return `Email updated successfully to ${newEmail}`;
    }
}

const user2 = new UserClass('user2', 'user@example.com', 'password');

/**
 * Ejercicio 2
 */