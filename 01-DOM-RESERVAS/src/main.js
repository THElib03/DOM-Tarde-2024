/**
 * @author
 */

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const h1 = document.createElement('h1');
    h1.textContent = 'Hello, World!';
    app.appendChild(h1);

    const card = document.createElement('div');
    card.id = 'card';
    card.classList.add('principal card');

    const p = document.createElement('p');
    p.textContent = 'This is a simple card with a heading, paragraph and button.';

    const button = document.createElement('button');
    button.textContent = 'show message';
    card.appendChild(button);

    app.appendChild(card);
    /* button.addEventListener('click', () => {
        alert('Button clicked!');
    }); */
});