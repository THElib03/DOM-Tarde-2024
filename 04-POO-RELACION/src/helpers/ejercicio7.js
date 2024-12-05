/**
 * @author Martín Marín
 */

const api = import.meta.env.VITE_URL;

export function User(id, name, email, role){
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;

    User.prototype.info = function(){
        console.log(`
            ID: ${this.id}
            Name: ${this.name}
            Email: ${this.email}
            Role: ${this.role}
        `);
    }
}

function ManageUsers(){
    ManageUsers.prototype.fetchUsers = async function(){
        try{
            const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!userResponse.ok){
                throw new Error(`HTTP error! status: ${userResponse.status}`);
            }

            const userData = await JSON.parse(userResponse.json);
            DataTransfer.map(( {id, name, email} ) => {
                return User(id, name, email, 'user');
            });
        }
        catch(error){
            console.error("Error fetching users:", error);
        }
    }

    ManageUsers.prototype.saveUsers = function(){
        localStorage.setItem('users', JSON.stringify(this.users))
    }

    ManageUsers.prototype.loadUsers = function(){
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        if(storedUsers){
            storedUsers.map(user => new User(user.id, user.name, user.email, user.role));
        }
    }
}

export class UserClass{
    constructor(id, name, email, role){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    info(){
        return `
            ID: ${this.id} |
            Name: ${this.name} |
            Email: ${this.email} |
            Role: ${this.role}
        `;
    }
}

export class UserManagerClass{
    constructor(){
        this.users = [];
    }

    async fetchUsers(){
        try{
            const usersResponse = await fetch(api);
            if(!usersResponse.ok){
                throw new Error(`HTTP error! status: ${usersResponse.status}`);
            }

            const userData = await usersResponse.json();
            this.users = userData.map( ({id, name, email, role}) => {
                return new UserClass(id, name, email, role);
            });

            return this.users;
        }
        catch(error){
            console.error("Error fetching users:", error);
        }
    }    
}