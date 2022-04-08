const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

/* MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, 
ruolo e la stringa della foto */

// Ciclo for in per stampare in console tutte le definizioni presenti
for (let i = 0; i < team.length; i++) {
    const member = team[i]; //singolo elemento del team

    console.log(`Utente in posizione ${i}`);
    console.log(member.name);
    console.log(member.role);
    console.log(member.image);
    console.log('_______________________');

}

//CORREZZIONE

 


/* MILESTONE 2 (se ce la fai falla entro le 18 
altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe */

/*  const teamElement = document.querySelector(".row")

for (let i = 0; i < team.length; i++) {
    const member = team[i]; 
    const memberMarkup = `
    <div class="member">
        <p>${member.name}<p>
        <p>${member.role}<p>
        <p>${member.image}<p>
    </div>
    `
    teamElement.insertAdjacentHTML("beforeend" , memberMarkup)
    
  } */


/* BONUS 1 
(solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva

// BONUS 2 
(solo se non sei giá fuso):
organizzare i singoli membri in card/schede */


/* BONUS 1 */

const teamElement = document.querySelector(".row")

for (let i = 0; i < team.length; i++) {
    const member = team[i]; 
    const memberMarkup = `
    <div class="member">
        <p>${member.name}<p>
        <p>${member.role}<p>
        <img src="./assets/img/${member.image}"><img>
    </div>
    `
    teamElement.insertAdjacentHTML("beforeend" , memberMarkup)
    
  }



//Come mai punta solo al primo elemento della DOM??



