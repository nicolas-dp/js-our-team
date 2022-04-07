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
    const datiUtenti = team[i];

    console.log(`Utente in posizione ${i}`);
    console.log(datiUtenti.name);
    console.log(datiUtenti.role);
    console.log(datiUtenti.image);
    console.log('_______________________');

}

/* MILESTONE 2 (se ce la fai falla entro le 18 
altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe */

/* const elementoDom = document.querySelector(".row")

for (let i = 0; i < team.length; i++) {
    const datiUtenti = team[i]; 
    let divElement = document.createElement("div");
    divElement.innerHTML = `Il dati degli utenti sono: ${datiUtenti.name} - ${datiUtenti.role} - ${datiUtenti.image};`
    elementoDom.appendChild(divElement);
    
  } */


/* BONUS 1 
(solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva

// BONUS 2 
(solo se non sei giá fuso):
organizzare i singoli membri in card/schede */

let arrayUtenti = []


for (let i = 0; i < team.length; i++) {
    const elementoDomTitle = document.querySelector(".card-title")
    const elementoDomParagrph = document.querySelector(".card-text")
    const datiUtenti = team[i];

    arrayUtenti.push(datiUtenti.name)
    arrayUtenti.push(datiUtenti.role)
    elementoDomTitle.innerHTML = arrayUtenti[0];
    elementoDomParagrph.innerHTML = arrayUtenti[7];
}  


//Come mai punta solo al primo elemento della DOM??



