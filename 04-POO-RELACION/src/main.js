/**
 * @author Martín Marín
 */

import { UserClass, UserManagerClass } from "./helpers/ejercicio7";

/**
 * Ejercicio
 * Render in the document a form that allows a search input that searches by name 
 * any user from the class UserManager. Render too a <div> userList,
 * the data from the resulting users in a <ul> and a delete button that deletes the user.
 */
function handleDelete(event){
    if(event.target.classList.contains('btn-delete')){
        const index = event.target.dataset.id;
        userManager.user.splice(index, 1);
    }
}

function handleSearch(event){
    event.preventDefault();
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput.value.trim();
}

(async function (){
    const userManager = new UserManagerClass();
    await userManager.fetchUsers();

    const app = document.getElementById('app');
    const h1 = document.createElement('h1');
    h1.textContent = 'User Manager';
    app.appendChild(h1);

    const divForm = document.createElement('div');
    divForm.id = 'userFormDiv';
    app.appendChild(divForm);
    divForm.innerHTML = `
    <form id="userForm">
        <input id="searchInput" type="text" placeholder="Search by name">
        <button type="submit">Search</button>
    </form>
    `;

    const divList = document.createElement('div');
    divList.id = 'userList';
    app.appendChild(divList);
    divList.innerHTML = userManager.users.map( (user, index) => {
        return `
            <li data-id="${index}">
                ${user.info()}
            </li>
            <button class="btn-delete" data-id="${index}">Delete</button>
        `;
    }).join();

    document.getElementById('userList').addEventListener('click', handleDelete);
    document.getElementById('userForm').addEventListener('submit', handleSearch);
})();