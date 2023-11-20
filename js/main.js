'use strict';

// Array immagini

const memberPhotos = ['wayne-barnett-founder-ceo.jpg', 'angela-caroll-chief-editor.jpg', 'walter-gordon-office-manager.jpg', 'angela-lopez-social-media-manager.jpg', 'scott-estrada-developer.jpg', 'barbara-ramos-graphic-designer.jpg'];

// Array membri del team

const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    },

];
console.log(team);

// Membri del team su dom

const teamContainer = document.querySelector('.team');

for (let i = 0; i < team.length; i++) {
    let card = document.createElement('div');
    const img = document.createElement('img');
    const nome = document.createElement('div');
    const ruolo = document.createElement('div');
    img.src = `img/${memberPhotos[i]}`;
    img.alt = `Member photo ${memberPhotos[i]}`;

    card.classList.add('card', 'text-center');
    card.append(img);
    nome.classList.add('mt-3', 'fw-bold');
    nome.append(`${team[i].nome}`);
    ruolo.classList.add('mb-3');
    ruolo.append(`${team[i].ruolo}`);

    teamContainer.append(card);
    card.append(nome);
    card.append(ruolo);

    console.log(team[i]);
};
